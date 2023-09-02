import React from 'react';

import { useAppNavigation, useAppTranslation } from '../../../hooks';

import * as S from './styles';

export const SecondaryHeader = () => {
  const { reset, navigate } = useAppNavigation();
  const { translate } = useAppTranslation();

  return (
    <>
      <S.Container>
        <S.Touchable
          onPress={() =>
            reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }
        >
          <S.BackButtonIcon name="arrowleft" />
        </S.Touchable>

        <S.Title>{translate('appName')}</S.Title>

        <S.Touchable onPress={() => navigate('CardRegistration')}>
          <S.AddIcon name="add" />
        </S.Touchable>
      </S.Container>

      <S.MyCardsHeader>
        <S.MyCardsText>{translate('myCards')}</S.MyCardsText>
      </S.MyCardsHeader>
    </>
  );
};
