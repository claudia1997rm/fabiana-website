create table if not exists public.site_settings (
  key text primary key default 'home',
  hero_primary_image_path text,
  hero_secondary_image_path text,
  home_images jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_settings
  add column if not exists hero_primary_image_path text,
  add column if not exists hero_secondary_image_path text,
  add column if not exists home_images jsonb not null default '{}'::jsonb,
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

insert into public.site_settings (key)
values ('home')
on conflict (key) do nothing;

drop trigger if exists set_site_settings_updated_at on public.site_settings;
create trigger set_site_settings_updated_at
before update on public.site_settings
for each row execute procedure public.set_updated_at();

alter table public.site_settings enable row level security;

drop policy if exists "Anyone can read site settings" on public.site_settings;
create policy "Anyone can read site settings"
on public.site_settings
for select
using (true);

drop policy if exists "Admins can manage site settings" on public.site_settings;
create policy "Admins can manage site settings"
on public.site_settings
for all
using (public.is_admin())
with check (public.is_admin());

create or replace function public.upsert_site_settings(
  new_hero_primary_image_path text,
  new_hero_secondary_image_path text,
  new_home_images jsonb
)
returns setof public.site_settings
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'Only admins can update site settings';
  end if;

  insert into public.site_settings (
    key,
    hero_primary_image_path,
    hero_secondary_image_path,
    home_images
  )
  values (
    'home',
    new_hero_primary_image_path,
    new_hero_secondary_image_path,
    coalesce(new_home_images, '{}'::jsonb)
  )
  on conflict (key)
  do update set
    hero_primary_image_path = excluded.hero_primary_image_path,
    hero_secondary_image_path = excluded.hero_secondary_image_path,
    home_images = coalesce(excluded.home_images, '{}'::jsonb),
    updated_at = now();

  return query
  select * from public.site_settings where key = 'home';
end;
$$;

grant execute on function public.upsert_site_settings(text, text, jsonb) to authenticated;
