import React from 'react';

import { CustomButton, PrimaryContainer } from '../../components';

import { useAppSelector, useAppTranslation } from '../../hooks';

import * as S from './styles';

export const CardRegistredSuccessfully = () => {
  const { translate } = useAppTranslation();

  const { addedCard } = useAppSelector(({ card }) => card);

  return (
    <PrimaryContainer>
      <S.Container>
        <S.Title>{translate('appName')}</S.Title>

        <S.Subtitle>{translate('cardAddedSuccessfully')}</S.Subtitle>

        <S.BlackCard>
          <S.BlackCardTitle>{translate('blackCard')}</S.BlackCardTitle>

          <S.InfosText>{addedCard.name}</S.InfosText>
          <S.InfosText>{addedCard.number}</S.InfosText>
          <S.InfosText>{`${translate('validity')} ${
            addedCard.expirationDate
          }`}</S.InfosText>
        </S.BlackCard>

        <CustomButton
          variant="primary"
          text={translate('next')}
          onPress={() => null}
        />
      </S.Container>
    </PrimaryContainer>
  );
};
