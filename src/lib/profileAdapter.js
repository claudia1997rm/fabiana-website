export const NEWSLETTER_COLUMNS = ['newsletter_email_opt_in', 'newsletter_opt_in', 'newsletter_subscribed'];

export function getNewsletterOptIn(profile) {
  return NEWSLETTER_COLUMNS.some((column) => Boolean(profile?.[column]));
}

export function normalizeProfile(profile, user) {
  if (!profile) {
    return {
      id: user?.id || null,
      email: user?.email || '',
      full_name: '',
      role: null,
      newsletter_email_opt_in: false,
    };
  }

  return {
    ...profile,
    id: profile.id || user?.id || null,
    email: profile.email || user?.email || '',
    role: typeof profile.role === 'string' ? profile.role.trim().toLowerCase() : 'user',
    newsletter_email_opt_in: getNewsletterOptIn(profile),
  };
}

export function buildProfileUpdatePayload({ fullName, newsletter }) {
  return {
    full_name: fullName,
    newsletter_email_opt_in: newsletter,
  };
}