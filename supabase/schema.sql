-- FabuRosa Supabase schema
-- Run this in the Supabase SQL editor after creating your project.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  newsletter_email_opt_in boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  cover_image_path text,
  pdf_file_path text,
  category_id uuid references public.categories(id) on delete set null,
  published_at timestamptz,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  cover_image_path text,
  category_id uuid references public.categories(id) on delete set null,
  published_at timestamptz,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  enabled boolean not null default true,
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

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, newsletter_email_opt_in)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    coalesce((new.raw_user_meta_data->>'newsletter_email_opt_in')::boolean, false)
  )
  on conflict (id) do nothing;
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
    select 1 from public.profiles
    where id = auth.uid()
    and role = 'admin'
  );
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at before update on public.profiles for each row execute procedure public.set_updated_at();
drop trigger if exists set_categories_updated_at on public.categories;
create trigger set_categories_updated_at before update on public.categories for each row execute procedure public.set_updated_at();
drop trigger if exists set_resources_updated_at on public.resources;
create trigger set_resources_updated_at before update on public.resources for each row execute procedure public.set_updated_at();
drop trigger if exists set_posts_updated_at on public.posts;
create trigger set_posts_updated_at before update on public.posts for each row execute procedure public.set_updated_at();
drop trigger if exists set_push_subscriptions_updated_at on public.push_subscriptions;
create trigger set_push_subscriptions_updated_at before update on public.push_subscriptions for each row execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.resources enable row level security;
alter table public.posts enable row level security;
alter table public.push_subscriptions enable row level security;

-- Profiles
create policy "Users can read their own profile" on public.profiles for select using (auth.uid() = id or public.is_admin());
create policy "Users can insert their own user profile" on public.profiles for insert with check (auth.uid() = id and role = 'user');
create policy "Users can update their own user profile" on public.profiles for update using (auth.uid() = id and role = 'user') with check (auth.uid() = id and role = 'user');
create policy "Admins can manage profiles" on public.profiles for all using (public.is_admin()) with check (public.is_admin());

-- Public content reads
create policy "Anyone can read categories" on public.categories for select using (true);
create policy "Anyone can read published resources" on public.resources for select using (status = 'published' or public.is_admin());
create policy "Anyone can read published posts" on public.posts for select using (status = 'published' or public.is_admin());

-- Admin writes
create policy "Admins can manage categories" on public.categories for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage resources" on public.resources for all using (public.is_admin()) with check (public.is_admin());
create policy "Admins can manage posts" on public.posts for all using (public.is_admin()) with check (public.is_admin());

-- Push subscription preparation
create policy "Users can read their own push subscriptions" on public.push_subscriptions for select using (auth.uid() = user_id or public.is_admin());
create policy "Users can manage their own push subscriptions" on public.push_subscriptions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

insert into storage.buckets (id, name, public)
values ('content-covers', 'content-covers', true), ('resource-pdfs', 'resource-pdfs', true)
on conflict (id) do nothing;

create policy "Public can read content covers" on storage.objects for select using (bucket_id = 'content-covers');
create policy "Public can read published PDFs" on storage.objects for select using (bucket_id = 'resource-pdfs');
create policy "Admins can upload content covers" on storage.objects for insert with check (bucket_id = 'content-covers' and public.is_admin());
create policy "Admins can upload resource PDFs" on storage.objects for insert with check (bucket_id = 'resource-pdfs' and public.is_admin());
create policy "Admins can update content files" on storage.objects for update using (bucket_id in ('content-covers', 'resource-pdfs') and public.is_admin()) with check (bucket_id in ('content-covers', 'resource-pdfs') and public.is_admin());
create policy "Admins can delete content files" on storage.objects for delete using (bucket_id in ('content-covers', 'resource-pdfs') and public.is_admin());

-- After signing up Fabiana's account, promote it to admin by email:
-- update public.profiles set role = 'admin' where email = 'fabiana@example.com';