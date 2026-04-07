import { normalizeProfile } from './profileAdapter';
import { supabase } from './supabaseClient';

export async function getMyProfile(user) {
  if (!supabase || !user?.id) return normalizeProfile(null, user);

  const { data, error } = await supabase.rpc('get_my_profile');

  if (error) {
    throw new Error(
      `${error.message}. Run supabase/reset-profiles-auth.sql in Supabase SQL Editor to install the safe profile RPC.`,
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
      `${error.message}. Run supabase/reset-profiles-auth.sql in Supabase SQL Editor to install the safe profile RPC.`,
    );
  }

  const profile = Array.isArray(data) ? data[0] : data;
  return normalizeProfile(profile, user);
}