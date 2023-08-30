import React from 'react';

import { CustomButton } from '../../components';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Wallet Test</S.Title>

      <S.ButtonWrapper>
        <CustomButton
          variant="primary"
          text="meus cartões"
          onPress={() => null}
        />
      </S.ButtonWrapper>

      <CustomButton
        variant="secondary"
        text="cadastrar cartão"
        onPress={() => null}
      />
    </S.Container>
  );
};
