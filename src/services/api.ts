import axios from 'axios';
import i18n from 'i18next';

import { env } from '../../env';

export const api = axios.create({
  baseURL: env.BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.message === 'Network Error') {
      throw Error(i18n.t('networkError') || '');
    }

    if (error.response?.data) {
      throw Error(error.response.data);
    }
  },
);
