import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { SupabaseSetupNotice } from './SupabaseSetupNotice';

export function SignupPage() {
  const { isConfigured } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(true);
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isConfigured) return <SupabaseSetupNotice />;

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, newsletter_email_opt_in: newsletter } },
    });

    setSubmitting(false);
    setStatus(error ? error.message : 'Cuenta creada. Revisa tu correo si la confirmación por correo está activada.');
  }

  return (
    <section className="mx-auto max-w-lg px-6 py-24 md:px-10">
      <div className="magazine-frame rounded-[2rem] p-8">
        <p className="editorial-kicker">Únete a FabuRose</p>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.03em] text-ink">Crear cuenta</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input className="w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" placeholder="Nombre completo" value={fullName} onChange={(event) => setFullName(event.target.value)} required />
          <input className="w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" type="email" placeholder="Correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input className="w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} required minLength="6" />
          <label className="flex items-start gap-3 rounded-[1.25rem] bg-white/60 p-4 text-sm leading-6 text-ink/70">
            <input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} className="mt-1" />
            Recibir avisos por correo cuando Fabiana publique nuevos recursos o artículos.
          </label>
          <button className="w-full rounded-full border border-ink bg-ink px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition hover:bg-white hover:text-ink" disabled={submitting}>{submitting ? 'Creando...' : 'Crear cuenta'}</button>
        </form>
        {status ? <p className="mt-4 text-sm text-ink/70">{status}</p> : null}
        <p className="mt-6 text-sm text-ink/60">¿Ya tienes cuenta? <Link className="text-ink underline" to="/login">Inicia sesión</Link></p>
      </div>
    </section>
  );
}