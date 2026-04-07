-- FabuRosa definitive profiles/auth reset
-- Run this whole file in Supabase SQL Editor.
-- It avoids frontend direct RLS reads for profile role by exposing safe RPC functions.

alter table public.profiles
  add column if not exists email text;

alter table public.profiles
  add column if not exists full_name text;

alter table public.profiles
  add column if not exists role text not null default 'user';

alter table public.profiles
  add column if not exists newsletter_email_opt_in boolean not null default false;

alter table public.profiles
  add column if not exists updated_at timestamptz not null default now();

alter table public.profiles drop constraint if exists profiles_role_check;
update public.profiles set role = lower(trim(role));
alter table public.profiles add constraint profiles_role_check check (role in ('user', 'admin'));

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

create or replace function public.get_my_profile()
returns table (
  id uuid,
  email text,
  full_name text,
  role text,
  newsletter_email_opt_in boolean,
  updated_at timestamptz
)
language sql
stable
security definer
set search_path = public
as $$
  select
    p.id,
    p.email,
    p.full_name,
    lower(trim(p.role)) as role,
    coalesce(p.newsletter_email_opt_in, false) as newsletter_email_opt_in,
    p.updated_at
  from public.profiles p
  where p.id = auth.uid();
$$;

create or replace function public.update_my_profile(
  new_full_name text,
  new_newsletter_email_opt_in boolean
)
returns table (
  id uuid,
  email text,
  full_name text,
  role text,
  newsletter_email_opt_in boolean,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.profiles
  set
    full_name = new_full_name,
    newsletter_email_opt_in = coalesce(new_newsletter_email_opt_in, false),
    updated_at = now()
  where profiles.id = auth.uid();

  return query
  select * from public.get_my_profile();
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, newsletter_email_opt_in, role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    coalesce((new.raw_user_meta_data->>'newsletter_email_opt_in')::boolean, false),
    'user'
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = coalesce(public.profiles.full_name, excluded.full_name),
    newsletter_email_opt_in = coalesce(public.profiles.newsletter_email_opt_in, excluded.newsletter_email_opt_in),
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;

drop policy if exists "Users can read their own profile" on public.profiles;
drop policy if exists "Users can insert their own user profile" on public.profiles;
drop policy if exists "Users can update their own user profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Admins can manage profiles" on public.profiles;
drop policy if exists "Admins can read profiles" on public.profiles;

create policy "Users can read their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can insert their own user profile"
on public.profiles
for insert
with check (auth.uid() = id and role = 'user');

-- Intentionally do not allow generic client updates to role.
-- The app updates profile data through update_my_profile(), which only updates safe fields.

update public.profiles
set role = 'admin'
where lower(email) = lower('claudia1997rm@gmail.com');

select * from public.get_my_profile();

select policyname, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename = 'profiles';