import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getNewsletterOptIn } from '../lib/profileAdapter';
import { updateMyProfile } from '../lib/profileService';
import { describeNotificationArchitecture, getNotificationPreferences } from '../lib/notifications';

export function ProfilePage() {
  const { user, profile, profileError, profileLoading, refreshProfile, signOut } = useAuth();
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [newsletter, setNewsletter] = useState(getNewsletterOptIn(profile));
  const [status, setStatus] = useState('');

  useEffect(() => {
    refreshProfile();
  }, []);

  useEffect(() => {
    setFullName(profile?.full_name || '');
    setNewsletter(getNewsletterOptIn(profile));
  }, [profile]);

  async function handleSave(event) {
    event.preventDefault();
    try {
      await updateMyProfile({ fullName, newsletter }, user);
      await refreshProfile();
    } catch (error) {
      setStatus(error.message);
      return;
    }
    setStatus('Perfil actualizado.');
  }

  const preferences = getNotificationPreferences(profile);
  const roleLabel = profile?.role || 'perfil no cargado';

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="magazine-frame rounded-[2rem] p-8">
          <p className="editorial-kicker">Perfil</p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.03em] text-ink">Tu espacio</h1>
          <p className="mt-5 leading-7 text-ink/70">Sesión iniciada como {user.email}.</p>
          <p className="mt-2 leading-7 text-ink/70">Rol desde public.profiles: {profileLoading ? 'cargando...' : roleLabel}.</p>
          {profileError ? <p className="mt-4 rounded-[1rem] bg-white/70 p-4 text-sm leading-6 text-ink/70">Error al cargar el perfil: {profileError.message}</p> : null}
          <button onClick={refreshProfile} className="mt-8 rounded-full border border-ink/20 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink transition hover:border-ink/40">Actualizar perfil</button>
          <button onClick={signOut} className="ml-3 mt-8 rounded-full border border-ink/20 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink transition hover:border-ink/40">Cerrar sesión</button>
        </div>

        <form onSubmit={handleSave} className="magazine-frame rounded-[2rem] p-8">
          <p className="editorial-kicker">Preferencias</p>
          <label className="mt-6 block text-sm uppercase tracking-[0.24em] text-taupe">Nombre completo</label>
          <input className="mt-3 w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" value={fullName} onChange={(event) => setFullName(event.target.value)} />
          <label className="mt-6 flex items-start gap-3 rounded-[1.25rem] bg-white/60 p-4 text-sm leading-6 text-ink/70">
            <input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} className="mt-1" />
            Quiero recibir correos cuando Fabiana publique nuevos recursos o artículos del diario.
          </label>
          <button className="mt-6 rounded-full border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition hover:bg-white hover:text-ink">Guardar preferencias</button>
          {status ? <p className="mt-4 text-sm text-ink/70">{status}</p> : null}
          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-sm font-semibold text-ink">Arquitectura de notificaciones</p>
            <p className="mt-2 text-sm text-ink/60">Correo: {preferences.email ? 'activado' : 'desactivado'} - Notificaciones push: preparadas para más adelante</p>
            {describeNotificationArchitecture().map((item) => <p key={item} className="mt-2 text-sm leading-6 text-ink/60">{item}</p>)}
          </div>
        </form>
      </div>
    </section>
  );
}