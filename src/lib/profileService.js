import { normalizeProfile } from './profileAdapter';
import { supabase } from './supabaseClient';

export async function getMyProfile(user) {
  if (!supabase || !user?.id) return normalizeProfile(null, user);

  const { data, error } = await supabase.rpc('get_my_profile');

  if (error) {
    throw new Error(
      `${error.message}. Ejecuta supabase/reset-profiles-auth.sql en el SQL Editor de Supabase para instalar el RPC seguro de perfil.`,
    );
  }

  const profile = Array.isArray(data) ? data[0] : data;
  return normalizeProfile(profile, user);
}

export async function updateMyProfile({ fullName, newsletter }, user) {
  const { data, error } = await supabase.rpc('update_my_profile', {
    new_full_name: fullName,
    new_newsletter_email_opt_in: newsletter,
  });

  if (error) {
    throw new Error(
      `${error.message}. Ejecuta supabase/reset-profiles-auth.sql en el SQL Editor de Supabase para instalar el RPC seguro de perfil.`,
    );
  }

  const profile = Array.isArray(data) ? data[0] : data;
  return normalizeProfile(profile, user);
}