import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Card } from '../../types';

type CardState = {
  addedCard: Card;
  cards: Card[];
};

const initialState: CardState = {
  cards: [],
  addedCard: {} as Card,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.addedCard = action.payload;
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    resetStore: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const cardReducer = cardSlice.reducer;
export const cardActions = cardSlice.actions;
