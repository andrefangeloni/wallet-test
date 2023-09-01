import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useAppTheme } from '../../hooks';

import * as S from './styles';

type Props = TextInputProps & {
  inputLabel: string;
};

export const CustomInput = React.forwardRef(
  ({ inputLabel, ...rest }: Props, ref: React.Ref<TextInput>) => {
    const { colors } = useAppTheme();

    return (
      <S.Container>
        <S.InputLabel>{inputLabel}</S.InputLabel>
        <S.CustomInput
          ref={ref}
          blurOnSubmit={false}
          placeholderTextColor={colors.placeholder}
          {...rest}
        />
      </S.Container>
    );
  },
);
