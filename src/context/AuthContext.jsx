import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { normalizeProfile } from '../lib/profileAdapter';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const AuthContext = createContext(null);

const defaultProfile = normalizeProfile(null, null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(defaultProfile);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState(null);

  async function fetchProfile(user = session?.user) {
    if (!supabase || !user?.id) {
      setProfile(defaultProfile);
      setProfileError(null);
      return null;
    }

    setProfileLoading(true);
    setProfileError(null);

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    setProfileLoading(false);

    if (error) {
      console.error('Could not load profile from public.profiles', error);
      setProfile(normalizeProfile(null, user));
      setProfileError(error);
      return null;
    }

    const normalizedProfile = normalizeProfile(data, user);
    setProfile(normalizedProfile);
    return normalizedProfile;
  }

  async function refreshProfile() {
    const { data } = await supabase.auth.getUser();
    return fetchProfile(data.user || session?.user);
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
      if (data.session?.user) {
        await fetchProfile(data.session.user);
      }
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession?.user) {
        fetchProfile(nextSession.user);
      } else {
        setProfile(defaultProfile);
        setProfileError(null);
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
    setProfileError(null);
  }

  const isAdmin = profile?.role === 'admin' && !profileError;

  const value = useMemo(
    () => ({
      isConfigured: isSupabaseConfigured,
      loading,
      profileLoading,
      profileError,
      session,
      user: session?.user || null,
      profile,
      isAdmin,
      refreshProfile,
      signOut,
    }),
    [loading, profileLoading, profileError, session, profile, isAdmin],
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