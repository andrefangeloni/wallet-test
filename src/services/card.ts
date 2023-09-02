import { AxiosResponse } from 'axios';

import { api } from './api';

import { Card } from '../types';

export const addCard = async (card: Card) => {
  const response: AxiosResponse = await api.post('/cards', card);

  return response?.data || {};
};

export const getCards = async () => {
  const response: AxiosResponse<Card[]> = await api.get('/cards');

  return response?.data || {};
};
