import { getNewsletterOptIn } from './profileAdapter';

export const NOTIFICATION_CHANNELS = {
  email: 'email',
  push: 'push',
};

export function getNotificationPreferences(profile) {
  return {
    email: getNewsletterOptIn(profile),
    push: false,
  };
}

export function describeNotificationArchitecture() {
  return [
    'Las notificaciones por correo se modelan con profiles.newsletter_email_opt_in, manteniendo compatibilidad con columnas antiguas de suscripción.',
    'Cuando se publique nuevo contenido, una Edge Function de Supabase podrá consultar los perfiles suscritos y llamar a un proveedor de correo.',
    'Las notificaciones push se podrán añadir más adelante con una tabla push_subscriptions y un canal push junto al correo.',
  ];
}