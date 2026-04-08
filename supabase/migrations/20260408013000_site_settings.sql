create table if not exists public.site_settings (
  key text primary key default 'home',
  hero_primary_image_path text,
  hero_secondary_image_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

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
