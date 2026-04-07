# Supabase Production Setup for FabuRosa

Supabase CLI is available through `npx supabase`, but this machine is not logged in. Project creation and linking require your Supabase access token, organization id, region and database password.

Do not paste service role keys into the frontend. The frontend only needs the project URL and publishable key.

## Option A: CLI setup

1. Create a Supabase access token:

Supabase Dashboard -> Account -> Access Tokens -> Generate new token.

2. Log in from this project folder:

```bash
npx supabase login --token YOUR_ACCESS_TOKEN
```

3. Find your organization id:

```bash
npx supabase orgs list
```

4. Create the project:

```bash
npx supabase projects create faburosa --org-id YOUR_ORG_ID --region eu-west-3 --db-password "A_STRONG_DATABASE_PASSWORD"
```

Recommended region for Spain/Europe: `eu-west-3` or another EU region close to your users.

5. Copy the project ref from the CLI output or from the Supabase project URL:

```text
https://supabase.com/dashboard/project/YOUR_PROJECT_REF
```

6. Link this local repo:

```bash
npx supabase link --project-ref YOUR_PROJECT_REF --password "A_STRONG_DATABASE_PASSWORD"
```

7. Apply the migration:

```bash
npx supabase db push --password "A_STRONG_DATABASE_PASSWORD"
```

The migration file is:

```text
supabase/migrations/20260407000000_faburosa_platform.sql
```

## Option B: Manual dashboard setup

If CLI project creation is not convenient:

1. Go to Supabase Dashboard -> New project.
2. Project name: `faburosa`.
3. Database password: create a strong password and save it securely.
4. Region: choose an EU region, ideally close to Spain.
5. After creation, open SQL Editor.
6. Paste and run the full contents of `supabase/schema.sql`.

## Auth settings

In Supabase Dashboard:

1. Go to Authentication -> Providers.
2. Ensure Email provider is enabled.
3. Enable email/password signups if disabled.
4. Go to Authentication -> URL Configuration.
5. Set Site URL:

```text
https://YOUR-VERCEL-DOMAIN.vercel.app
```

6. Add Redirect URLs:

```text
http://localhost:5173/**
https://YOUR-VERCEL-DOMAIN.vercel.app/**
```

## Environment variables

In Supabase Dashboard -> Project Settings -> API, copy:

- Project URL -> `VITE_SUPABASE_URL`
- Publishable key -> `VITE_SUPABASE_PUBLISHABLE_KEY`

Create `.env.local` locally:

```bash
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

Add the same values in Vercel:

Vercel -> Project -> Settings -> Environment Variables.

Use the environments: Production, Preview and Development.

## Admin promotion

After Fabiana signs up in the app, run:

```sql
update public.profiles
set role = 'admin'
where email = 'fabiana@example.com';
```

A copy of this command is in `supabase/promote-admin.sql`.

## Buckets

The migration creates these buckets:

- `images`: public, for resource and post cover images.
- `pdfs`: public, for downloadable PDF resources.

Only admin users can upload/update/delete files through Storage policies. Public users can read published assets.

## Testing checklist

1. Run `npm install`.
2. Run `npm run build`.
3. Add `.env.local` with Supabase URL and publishable key.
4. Run `npm run dev`.
5. Visit `/signup` and create a test user.
6. Confirm a row appears in `profiles`.
7. Visit `/login` and log in.
8. Visit `/profile` and update the newsletter checkbox.
9. Promote Fabiana/test admin with `supabase/promote-admin.sql`.
10. Log in as admin and visit `/admin`.
11. Create a category.
12. Create a PDF resource with cover image and PDF file.
13. Create a journal post with a cover image.
14. Confirm uploaded files appear in Storage -> `images` and `pdfs`.
15. Confirm published resources/posts are readable from public detail pages.