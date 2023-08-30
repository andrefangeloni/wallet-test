import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
  onPress: () => void;
  variant: 'primary' | 'secondary';
};

export const CustomButton = ({ text, variant, onPress }: Props) => (
  <S.CustomButton variant={variant} onPress={onPress}>
    <S.CustomButtonText variant={variant}>{text}</S.CustomButtonText>
  </S.CustomButton>
);
