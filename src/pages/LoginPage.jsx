import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';
import { SupabaseSetupNotice } from './SupabaseSetupNotice';

export function LoginPage() {
  const { isConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isConfigured) return <SupabaseSetupNotice />;

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSubmitting(false);

    if (error) {
      setStatus(error.message);
      return;
    }

    navigate(location.state?.from?.pathname || '/profile', { replace: true });
  }

  return (
    <section className="mx-auto max-w-lg px-6 py-24 md:px-10">
      <div className="magazine-frame rounded-[2rem] p-8">
        <p className="editorial-kicker">Cuenta</p>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.03em] text-ink">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input className="w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" type="email" placeholder="Correo electrónico" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input className="w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" type="password" placeholder="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <button className="w-full rounded-full border border-ink bg-ink px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-cloud transition hover:bg-white hover:text-ink" disabled={submitting}>
            {submitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        {status ? <p className="mt-4 text-sm text-ink/70">{status}</p> : null}
        <p className="mt-6 text-sm text-ink/60">¿Aún no tienes cuenta? <Link className="text-ink underline" to="/signup">Crear cuenta</Link></p>
      </div>
    </section>
  );
}
