/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createI18n } from 'vue-i18n';
import { MessageSchema } from '../locales/schema';

// @ts-ignore
import enGB from '../locales/en-GB.yml';

export const locales = createI18n<[MessageSchema], 'en-GB'>({
  legacy: false,
  locale: 'en-GB',
  messages: {
    'en-GB': enGB,
  },
});
