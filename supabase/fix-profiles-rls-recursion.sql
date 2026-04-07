-- Fix: infinite recursion detected in policy for relation "profiles"
-- Run this in Supabase SQL Editor.

-- The recursion was caused by policies on public.profiles calling public.is_admin().
-- public.is_admin() itself reads public.profiles, so those policies call themselves forever.

alter table public.profiles enable row level security;

-- Keep public.is_admin() for other tables, but do not call it inside SELECT policies on profiles.
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

-- Prevent users from escalating their own role via the browser/client.
create or replace function public.prevent_profile_role_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role and not public.is_admin() then
    raise exception 'Only admins can change profile roles';
  end if;

  return new;
end;
$$;

drop trigger if exists prevent_profile_role_escalation on public.profiles;
create trigger prevent_profile_role_escalation
before update on public.profiles
for each row execute procedure public.prevent_profile_role_escalation();

drop policy if exists "Users can read their own profile" on public.profiles;
drop policy if exists "Users can insert their own user profile" on public.profiles;
drop policy if exists "Users can update their own user profile" on public.profiles;
drop policy if exists "Users can update their own profile" on public.profiles;
drop policy if exists "Admins can manage profiles" on public.profiles;

create policy "Users can read their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can insert their own user profile"
on public.profiles
for insert
with check (auth.uid() = id and role = 'user');

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

-- Verify the account row the app reads.
select id, email, role, newsletter_email_opt_in, updated_at
from public.profiles
where lower(email) = lower('claudia1997rm@gmail.com');