import React from 'react';

import { CustomHeader, SecondaryHeader } from '../../components';

import { useAppTranslation } from '../../hooks';

import * as S from './styles';

type Props = {
  noOverlay?: boolean;
  primaryHeader?: boolean;
  secondaryHeader?: boolean;
  children: React.ReactNode;
};

export const PrimaryContainer = ({
  children,
  noOverlay,
  primaryHeader,
  secondaryHeader,
}: Props) => {
  const { translate } = useAppTranslation();

  return (
    <S.Container>
      {noOverlay ? null : (
        <>
          <S.BackgroundAnimated top />
          <S.BackgroundAnimated />
        </>
      )}

      {primaryHeader ? (
        <S.HeaderWrapper>
          <CustomHeader title={translate('registration')} />
        </S.HeaderWrapper>
      ) : null}

      {secondaryHeader ? <SecondaryHeader /> : null}

      <S.Main>{children}</S.Main>
    </S.Container>
  );
};
