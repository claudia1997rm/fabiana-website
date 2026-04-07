import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { describeNotificationArchitecture, getNotificationPreferences } from '../lib/notifications';

export function ProfilePage() {
  const { user, profile, refreshProfile, signOut, isAdmin } = useAuth();
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [newsletter, setNewsletter] = useState(Boolean(profile?.newsletter_email_opt_in));
  const [status, setStatus] = useState('');

  useEffect(() => {
    setFullName(profile?.full_name || '');
    setNewsletter(Boolean(profile?.newsletter_email_opt_in));
  }, [profile]);

  async function handleSave(event) {
    event.preventDefault();
    const { error } = await supabase
      .from('profiles')
      .update({ full_name: fullName, newsletter_email_opt_in: newsletter })
      .eq('id', user.id);

    if (error) {
      setStatus(error.message);
      return;
    }

    await refreshProfile();
    setStatus('Profile updated.');
  }

  const preferences = getNotificationPreferences(profile);

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="magazine-frame rounded-[2rem] p-8">
          <p className="editorial-kicker">Profile</p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.03em] text-ink">Your space</h1>
          <p className="mt-5 leading-7 text-ink/65">Signed in as {user.email}. Role: {isAdmin ? 'admin' : 'user'}.</p>
          <button onClick={signOut} className="mt-8 rounded-full border border-ink/15 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-ink transition hover:border-ink/40">
            Log out
          </button>
        </div>

        <form onSubmit={handleSave} className="magazine-frame rounded-[2rem] p-8">
          <p className="editorial-kicker">Preferences</p>
          <label className="mt-6 block text-sm uppercase tracking-[0.24em] text-taupe">Full name</label>
          <input className="mt-3 w-full rounded-full border border-ink/10 bg-white px-5 py-4 outline-none focus:border-ink/40" value={fullName} onChange={(event) => setFullName(event.target.value)} />
          <label className="mt-6 flex items-start gap-3 rounded-[1.25rem] bg-white/60 p-4 text-sm leading-6 text-ink/68">
            <input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} className="mt-1" />
            Email me when Fabiana publishes new resources or journal posts.
          </label>
          <button className="mt-6 rounded-full border border-ink bg-ink px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cloud transition hover:bg-white hover:text-ink">
            Save preferences
          </button>
          {status ? <p className="mt-4 text-sm text-ink/65">{status}</p> : null}
          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-sm font-semibold text-ink">Notification architecture</p>
            <p className="mt-2 text-sm text-ink/60">Email: {preferences.email ? 'enabled' : 'disabled'} · Push: prepared for later</p>
            {describeNotificationArchitecture().map((item) => (
              <p key={item} className="mt-2 text-sm leading-6 text-ink/55">{item}</p>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}