import React from 'react';

import { CustomButton, CustomInput, PrimaryContainer } from '../../components';

import { useAppTranslation } from '../../hooks';

import * as S from './styles';

export const CardRegistration = () => {
  const { translate } = useAppTranslation();

  return (
    <PrimaryContainer>
      <S.KAV>
        <S.Container>
          <S.Main>
            <S.Title>{translate('appName')}</S.Title>

            <S.InputWrapper size="long">
              <CustomInput inputLabel={translate('cardNumber')} />
            </S.InputWrapper>

            <S.InputWrapper size="long">
              <CustomInput inputLabel={translate('cardHolder')} />
            </S.InputWrapper>

            <S.Row>
              <S.InputWrapper size="short">
                <CustomInput
                  maxLength={5}
                  placeholder="00/00"
                  inputLabel={translate('expiresIn')}
                />
              </S.InputWrapper>

              <S.InputWrapper size="short">
                <CustomInput
                  maxLength={3}
                  placeholder="***"
                  inputLabel={translate('securityCode')}
                />
              </S.InputWrapper>
            </S.Row>

            <CustomButton
              variant="primary"
              text={translate('next')}
              onPress={() => null}
            />
          </S.Main>
        </S.Container>
      </S.KAV>
    </PrimaryContainer>
  );
};
