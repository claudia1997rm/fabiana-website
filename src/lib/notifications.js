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
    'Email notifications are modeled through profiles.newsletter_email_opt_in, with compatibility for legacy newsletter columns.',
    'When new content is published, a Supabase Edge Function can query opted-in profiles and call an email provider.',
    'Push notifications can be added later with a push_subscriptions table and a push channel alongside email.',
  ];
}