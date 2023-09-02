import React from 'react';
import { Alert } from 'react-native';

import { useAppNavigation, useAppDispatch } from '../hooks';

import { cardService } from '../services';

import { cardActions } from '../store/reducers';

import { Card } from '../types';

export const useCard = () => {
  const dispatch = useAppDispatch();
  const { reset, navigate } = useAppNavigation();

  const getCards = React.useCallback(async () => {
    try {
      const cards = await cardService.getCards();

      dispatch(cardActions.setCards(cards));

      setTimeout(() => {
        reset({
          index: 0,
          routes: [{ name: 'MyCards' }],
        });
      }, 1500);
    } catch (e: any) {
      Alert.alert('Something went wrong. Try again');
    }
  }, [reset, dispatch]);

  const handleAddCard = React.useCallback(
    async (card: Card) => {
      try {
        await cardService.addCard(card);

        dispatch(cardActions.addCard(card));

        navigate('CardRegistredSuccessfully');
      } catch (e: any) {
        Alert.alert('Something went wrong. Try again');
      }
    },
    [navigate, dispatch],
  );

  return {
    getCards,
    handleAddCard,
  };
};
