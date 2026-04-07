export function SupabaseSetupNotice() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
      <div className="magazine-frame rounded-[2rem] p-8 md:p-10">
        <p className="editorial-kicker">Configuracion de Supabase pendiente</p>
        <h1 className="mt-5 font-display text-5xl leading-none tracking-[-0.03em] text-ink">
          Conecta Supabase para activar cuentas y funciones de administracion.
        </h1>
        <p className="mt-6 leading-8 text-ink/70">
          Anade VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY a tu archivo .env local y a las variables del proyecto en Vercel. Despues ejecuta el SQL de supabase/schema.sql.
        </p>
      </div>
    </section>
  );
}