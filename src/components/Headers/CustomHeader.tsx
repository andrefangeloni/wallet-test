import React from 'react';

import { useAppNavigation } from '../../hooks';

import * as S from './styles';

type Props = {
  title: string;
};

export const CustomHeader = ({ title }: Props) => {
  const { goBack } = useAppNavigation();

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.BackButton onPress={goBack}>
        <S.BackButtonIcon name="arrowleft" />
      </S.BackButton>
    </S.Container>
  );
};
