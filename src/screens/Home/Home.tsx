import React from 'react';

import { CustomButton, PrimaryContainer } from '../../components';

import { useAppNavigation, useAppTranslation } from '../../hooks';

import * as S from './styles';

export const Home = () => {
  const { navigate } = useAppNavigation();
  const { translate } = useAppTranslation();

  return (
    <PrimaryContainer>
      <S.Container>
        <S.Title>{translate('appName')}</S.Title>

        <S.ButtonWrapper>
          <CustomButton
            variant="primary"
            text={translate('myCards')}
            onPress={() => navigate('WalletAnimated')}
          />
        </S.ButtonWrapper>

        <CustomButton
          variant="secondary"
          text={translate('addCard')}
          onPress={() => navigate('CardRegistration')}
        />
      </S.Container>
    </PrimaryContainer>
  );
};
