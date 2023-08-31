import React from 'react';

import { CustomHeader } from '../../components';

import { useAppTranslation } from '../../hooks';

import * as S from './styles';

type Props = {
  noHeader?: boolean;
  children: React.ReactNode;
};

export const PrimaryContainer = ({ noHeader, children }: Props) => {
  const { translate } = useAppTranslation();

  return (
    <S.Container>
      {noHeader ? null : (
        <S.HeaderWrapper>
          <CustomHeader title={translate('registration')} />
        </S.HeaderWrapper>
      )}

      <S.Main>{children}</S.Main>
    </S.Container>
  );
};
