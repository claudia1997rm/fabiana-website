export function SupabaseSetupNotice() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
      <div className="magazine-frame rounded-[2rem] p-8 md:p-10">
        <p className="editorial-kicker">Supabase setup required</p>
        <h1 className="mt-5 font-display text-5xl leading-none tracking-[-0.03em] text-ink">
          Connect Supabase to unlock accounts and admin features.
        </h1>
        <p className="mt-6 leading-8 text-ink/68">
          Add VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY to your local .env file and Vercel project settings, then run the SQL in supabase/schema.sql.
        </p>
      </div>
    </section>
  );
}