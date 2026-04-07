-- Run this in Supabase SQL Editor if /profile still shows user after promotion.
-- Replace the email with your real account email.

-- 1) Ensure the columns expected by the frontend exist.
alter table public.profiles
  add column if not exists role text not null default 'user';

alter table public.profiles
  add column if not exists newsletter_email_opt_in boolean not null default false;

-- 2) If your old database used a legacy newsletter column, copy it into the canonical column.
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'profiles'
      and column_name = 'newsletter_opt_in'
  ) then
    execute 'update public.profiles set newsletter_email_opt_in = coalesce(newsletter_email_opt_in, newsletter_opt_in, false)';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public'
      and table_name = 'profiles'
      and column_name = 'newsletter_subscribed'
  ) then
    execute 'update public.profiles set newsletter_email_opt_in = coalesce(newsletter_email_opt_in, newsletter_subscribed, false)';
  end if;
end $$;

-- 3) Normalize any existing role values and promote your account to admin.
alter table public.profiles drop constraint if exists profiles_role_check;
update public.profiles set role = lower(trim(role));
alter table public.profiles add constraint profiles_role_check check (role in ('user', 'admin'));
update public.profiles
set role = 'admin'
where lower(email) = lower('YOUR_EMAIL_HERE@example.com');

-- 4) Verify the exact row the app should read.
select id, email, full_name, role, newsletter_email_opt_in, updated_at
from public.profiles
where lower(email) = lower('YOUR_EMAIL_HERE@example.com');