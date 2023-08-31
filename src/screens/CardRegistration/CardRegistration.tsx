import React from 'react';

import { CustomButton, CustomInput, PrimaryContainer } from '../../components';

import { useAppTranslation } from '../../hooks';

import {
  onlyNumbers,
  cardNumberInputMask,
  expirationDateInputMask,
} from '../../utils';

import * as S from './styles';

export const CardRegistration = () => {
  const { translate } = useAppTranslation();

  const [cardNumber, setCardNumber] = React.useState('');
  const [cardHolder, setCardHolder] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [securityCode, setSecurityCode] = React.useState('');

  const validateFields = () =>
    !!(
      cardNumber.length < 19 ||
      cardHolder.length < 6 ||
      expirationDate.length < 5 ||
      securityCode.length < 3
    );

  return (
    <PrimaryContainer>
      <S.KAV>
        <S.Container>
          <S.Main>
            <S.Title>{translate('appName')}</S.Title>

            <S.InputWrapper size="long">
              <CustomInput
                maxLength={19}
                value={cardNumber}
                inputLabel={translate('cardNumber')}
                onChangeText={(text) =>
                  setCardNumber(cardNumberInputMask(text))
                }
              />
            </S.InputWrapper>

            <S.InputWrapper size="long">
              <CustomInput
                maxLength={32}
                value={cardHolder}
                autoCapitalize="characters"
                onChangeText={setCardHolder}
                inputLabel={translate('cardHolder')}
              />
            </S.InputWrapper>

            <S.Row>
              <S.InputWrapper size="short">
                <CustomInput
                  maxLength={5}
                  placeholder="00/00"
                  value={expirationDate}
                  inputLabel={translate('expirationDate')}
                  onChangeText={(text) =>
                    setExpirationDate(expirationDateInputMask(text))
                  }
                />
              </S.InputWrapper>

              <S.InputWrapper size="short">
                <CustomInput
                  maxLength={3}
                  placeholder="***"
                  value={securityCode}
                  inputLabel={translate('securityCode')}
                  onChangeText={(text) => setSecurityCode(onlyNumbers(text))}
                />
              </S.InputWrapper>
            </S.Row>

            <CustomButton
              variant="primary"
              text={translate('next')}
              disabled={validateFields()}
              onPress={() => null}
            />
          </S.Main>
        </S.Container>
      </S.KAV>
    </PrimaryContainer>
  );
};
