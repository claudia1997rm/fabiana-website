export const NOTIFICATION_CHANNELS = {
  email: 'email',
  push: 'push',
};

export function isEmailOptedIn(profile) {
  return Boolean(profile?.newsletter_email_opt_in ?? profile?.newsletter_opt_in ?? profile?.newsletter_subscribed);
}

export function getNotificationPreferences(profile) {
  return {
    email: isEmailOptedIn(profile),
    push: false,
  };
}

export function describeNotificationArchitecture() {
  return [
    'Email: activo desde la preferencia del perfil.',
    'Push: preparado para una fase futura.',
    'Las notificaciones por correo se modelan con profiles.newsletter_email_opt_in, manteniendo compatibilidad con columnas antiguas de suscripcion.',
    'Cuando se publique nuevo contenido, una Edge Function de Supabase podra consultar los perfiles suscritos y llamar a un proveedor de correo.',
    'Las notificaciones push se podran anadir mas adelante con una tabla push_subscriptions y un canal push junto al correo.',
  ];
}