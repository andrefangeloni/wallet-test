import React from 'react';

import * as S from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  inputLabel: string;
};

export const CustomInput = ({ inputLabel, ...rest }: Props) => (
  <S.Container>
    <S.InputLabel>{inputLabel}</S.InputLabel>
    <S.CustomInput {...rest} placeholderTextColor="#aaa" />
  </S.Container>
);
