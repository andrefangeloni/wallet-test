import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ptBR } from './ptBR';

i18n.use(initReactI18next).init({
  resources: {
    ptBR: {
      translation: ptBR,
    },
  },
  lng: 'ptBR',
  fallbackLng: 'ptBR',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
