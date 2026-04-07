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