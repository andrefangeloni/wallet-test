import React from 'react';

import * as S from './styles';

type Props = {
  text: string;
  disabled?: boolean;
  onPress: () => void;
  variant: 'primary' | 'secondary';
};

export const CustomButton = ({ text, variant, disabled, onPress }: Props) => (
  <S.CustomButton variant={variant} disabled={disabled} onPress={onPress}>
    <S.CustomButtonText variant={variant} disabled={disabled}>
      {text}
    </S.CustomButtonText>
  </S.CustomButton>
);
