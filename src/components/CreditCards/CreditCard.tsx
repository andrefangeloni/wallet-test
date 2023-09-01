import React from 'react';

import { useAppTranslation } from '../../hooks';

import { maskedCardNumber } from '../../utils';

import * as S from './styles';

type Props = {
  variant: 'black' | 'green';
  name: string;
  number: string;
  expirationDate: string;
};

export const CreditCard = ({
  variant,
  name,
  number,
  expirationDate,
}: Props) => {
  const { translate } = useAppTranslation();

  return (
    <S.Card variant={variant}>
      <S.CardTitle variant={variant}>
        {translate(variant === 'black' ? 'blackCard' : 'greenCard')}
      </S.CardTitle>

      <S.InfosText variant={variant}>{name}</S.InfosText>
      <S.InfosText variant={variant}>{maskedCardNumber(number)}</S.InfosText>
      <S.InfosText variant={variant}>{`${translate(
        'validity',
      )} ${expirationDate}`}</S.InfosText>
    </S.Card>
  );
};
