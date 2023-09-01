import React from 'react';

import { PrimaryContainer } from '../../components';

import wallet from '../../assets/images/wallet.png';

import * as S from './styles';

export const WalletAnimated = () => {
  return (
    <PrimaryContainer noHeader>
      <S.Container>
        <S.ImageWrapper>
          <S.Wallet source={wallet} />
        </S.ImageWrapper>
      </S.Container>
    </PrimaryContainer>
  );
};
