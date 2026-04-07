import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const AuthContext = createContext(null);

const defaultProfile = {
  id: null,
  full_name: '',
  role: 'user',
  newsletter_email_opt_in: false,
};

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(defaultProfile);
  const [loading, setLoading] = useState(true);

  async function fetchProfile(userId) {
    if (!supabase || !userId) {
      setProfile(defaultProfile);
      return null;
    }

    const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();

    if (error) {
      console.warn('Could not load profile', error.message);
      setProfile({ ...defaultProfile, id: userId });
      return null;
    }

    setProfile(data || { ...defaultProfile, id: userId });
    return data;
  }

  async function refreshProfile() {
    return fetchProfile(session?.user?.id);
  }

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return undefined;
    }

    let mounted = true;

    supabase.auth.getSession().then(async ({ data }) => {
      if (!mounted) return;
      setSession(data.session);
      if (data.session?.user?.id) {
        await fetchProfile(data.session.user.id);
      }
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession?.user?.id) {
        fetchProfile(nextSession.user.id);
      } else {
        setProfile(defaultProfile);
      }
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
    setProfile(defaultProfile);
  }

  const value = useMemo(
    () => ({
      isConfigured: isSupabaseConfigured,
      loading,
      session,
      user: session?.user || null,
      profile,
      isAdmin: profile?.role === 'admin',
      refreshProfile,
      signOut,
    }),
    [loading, session, profile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}