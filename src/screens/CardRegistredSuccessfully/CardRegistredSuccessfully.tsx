import React from 'react';

import { CreditCard, CustomButton, PrimaryContainer } from '../../components';

import {
  useAppSelector,
  useAppNavigation,
  useAppTranslation,
} from '../../hooks';

import * as S from './styles';

export const CardRegistredSuccessfully = () => {
  const { navigate } = useAppNavigation();
  const { translate } = useAppTranslation();

  const { addedCard } = useAppSelector(({ card }) => card);

  return (
    <PrimaryContainer>
      <S.Container>
        <S.Title>{translate('appName')}</S.Title>

        <S.Subtitle>{translate('cardAddedSuccessfully')}</S.Subtitle>

        <CreditCard
          variant="black"
          name={addedCard.name}
          number={addedCard.number}
          expirationDate={addedCard.expirationDate}
        />

        <CustomButton
          variant="primary"
          text={translate('next')}
          onPress={() => navigate('WalletAnimated')}
        />
      </S.Container>
    </PrimaryContainer>
  );
};
