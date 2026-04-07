create table if not exists public.photo_entries (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_path text not null,
  published_at timestamptz,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and lower(trim(role)) = 'admin'
  );
$$;

insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public can read images" on storage.objects;
create policy "Public can read images"
on storage.objects
for select
using (bucket_id = 'images');

drop policy if exists "Admins can upload images" on storage.objects;
create policy "Admins can upload images"
on storage.objects
for insert
with check (bucket_id = 'images' and public.is_admin());

drop policy if exists "Admins can update content files" on storage.objects;
create policy "Admins can update content files"
on storage.objects
for update
using (bucket_id in ('images', 'pdfs') and public.is_admin())
with check (bucket_id in ('images', 'pdfs') and public.is_admin());

drop policy if exists "Admins can delete content files" on storage.objects;
create policy "Admins can delete content files"
on storage.objects
for delete
using (bucket_id in ('images', 'pdfs') and public.is_admin());

drop trigger if exists set_photo_entries_updated_at on public.photo_entries;
create trigger set_photo_entries_updated_at
before update on public.photo_entries
for each row execute procedure public.set_updated_at();

alter table public.photo_entries enable row level security;

drop policy if exists "Anyone can read published photos" on public.photo_entries;
create policy "Anyone can read published photos"
on public.photo_entries
for select
using (status = 'published' or public.is_admin());

drop policy if exists "Admins can manage photos" on public.photo_entries;
create policy "Admins can manage photos"
on public.photo_entries
for all
using (public.is_admin())
with check (public.is_admin());
