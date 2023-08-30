import React from 'react';

import { CustomButton } from '../../components';

import { useAppTranslation } from '../../hooks';

import * as S from './styles';

export const Home = () => {
  const { translate } = useAppTranslation();

  return (
    <S.Container>
      <S.Title>{translate('appName')}</S.Title>

      <S.ButtonWrapper>
        <CustomButton
          variant="primary"
          text={translate('myCards')}
          onPress={() => null}
        />
      </S.ButtonWrapper>

      <CustomButton
        variant="secondary"
        text={translate('addCard')}
        onPress={() => null}
      />
    </S.Container>
  );
};
