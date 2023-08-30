import React from 'react';

// import { CustomButton } from '../../components';

import { useAppTranslation } from '../../hooks';

import * as S from './styles';
import { CustomHeader } from '../../components';

export const CardRegistration = () => {
  const { translate } = useAppTranslation();

  return (
    <S.Container>
      <S.HeaderWrapper>
        <CustomHeader title={translate('registration')} />
      </S.HeaderWrapper>

      <S.Main>
        <S.Title>{translate('appName')}</S.Title>

        <S.Title>Card Registration</S.Title>
      </S.Main>
    </S.Container>
  );
};
