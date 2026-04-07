# FabuRosa Content Platform

FabuRosa is now a React + Vite + Tailwind content platform prepared for Supabase authentication, user profiles, newsletter preferences, admin publishing and Vercel deployment.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Vercel output directory: `dist`.

## Environment variables

Create `.env.local` from `.env.example`:

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Legacy Supabase projects can use `VITE_SUPABASE_ANON_KEY` instead of `VITE_SUPABASE_PUBLISHABLE_KEY`; the app supports both.

Add the same variables in Vercel: Project Settings -> Environment Variables.

## Supabase setup

1. Create a Supabase project.
2. Copy your project URL and publishable key into `.env.local` and Vercel.
3. Open Supabase SQL Editor.
4. Run the full SQL file at `supabase/schema.sql`.
5. In Supabase Auth settings, configure Site URL for local and production:
   - Local: `http://localhost:5173`
   - Production: your Vercel URL
6. Sign up with Fabiana's admin email in the app.
7. Promote that profile to admin in the SQL editor:

```sql
update public.profiles
set role = 'admin'
where email = 'fabiana@example.com';
```

8. Visit `/admin` after logging in as that admin user.

## Database models

The Supabase schema creates:

- `profiles`: basic user profile data, role and newsletter preference.
- `categories`: editable content categories.
- `resources`: PDF resources with title, description, cover image path, PDF path, category, publish date and featured flag.
- `posts`: journal/blog posts with title, excerpt, content, cover image, category, publish date and featured flag.
- `push_subscriptions`: prepared for future browser push notifications.

## Storage organization

The SQL creates two public buckets:

- `images`: public cover images for posts and resources.
- `pdfs`: public downloadable PDF files.

Admin uploads are organized by folder and user id, for example:

```text
resources/<admin-user-id>/<timestamp>-file.pdf
posts/<admin-user-id>/<timestamp>-cover.jpg
```

## Security model

Security is enforced in Supabase with Row Level Security policies:

- Public users can read published posts/resources and categories.
- Authenticated users can read and update their own profile.
- Only users whose `profiles.role` is `admin` can create/update/delete categories, resources, posts and uploaded content files.
- Push subscriptions are user-owned and prepared for future push notification support.

The frontend also protects `/profile` and `/admin`, but Supabase RLS is the source of truth.

## Notification architecture

The current version supports email opt-in with `profiles.newsletter_email_opt_in`.

Recommended next backend step:

1. Create a Supabase Edge Function such as `notify-new-content`.
2. Trigger it manually from the admin flow or with a database webhook when a resource/post becomes `published`.
3. Query profiles where `newsletter_email_opt_in = true`.
4. Send email through Resend, MailerLite, ConvertKit or another provider.
5. Add browser push later with the existing `push_subscriptions` table.

## Routes

- `/`: public home.
- `/login`: log in with Supabase Auth.
- `/signup`: create account with Supabase Auth.
- `/profile`: protected user profile and notification preferences.
- `/admin`: protected admin content studio.
- `/resources/:slug`: public resource detail.
- `/journal/:slug`: public blog post detail.

## Vercel deployment

This repo includes `vercel.json`:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The rewrite supports direct visits to SPA routes such as `/profile`, `/admin`, `/resources/:slug` and `/journal/:slug`.
## Full Supabase automation guide

See SUPABASE_SETUP.md for CLI commands, manual fallback steps, Vercel environment variables and the production testing checklist.
