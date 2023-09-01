import React from 'react';
import { useAppNavigation, useAppDispatch } from '../hooks';

import { cardActions } from '../store/reducers';

import { Card } from '../types';

export const useCard = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useAppNavigation();

  const handleAddCard = React.useCallback(
    (card: Omit<Card, 'id'>) => {
      dispatch(cardActions.addCard(card));

      navigate('CardRegistredSuccessfully');
    },
    [navigate, dispatch],
  );

  return {
    handleAddCard,
  };
};
