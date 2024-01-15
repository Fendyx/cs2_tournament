import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import enLocale from './locales/en.json';
import uaLocale from './locales/ua.json';

const resources = {
  en: {
    translation: enLocale,
  },
  ua: {
    translation: uaLocale,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
