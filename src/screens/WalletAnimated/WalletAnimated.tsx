import React from 'react';

import wallet from '../../assets/images/wallet.png';

import { PrimaryContainer } from '../../components';

import { useCard } from '../../hooks';

import * as S from './styles';

export const WalletAnimated = () => {
  const { getCards } = useCard();

  React.useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <PrimaryContainer>
      <S.Container>
        <S.ImageWrapper>
          <S.Wallet source={wallet} />
        </S.ImageWrapper>
      </S.Container>
    </PrimaryContainer>
  );
};
