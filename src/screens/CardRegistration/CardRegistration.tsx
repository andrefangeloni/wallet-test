import React from 'react';
import { TextInput } from 'react-native';
import uuid from 'react-native-uuid';

import { CustomButton, CustomInput, PrimaryContainer } from '../../components';

import { useAppTranslation, useCard } from '../../hooks';

import {
  onlyNumbers,
  cardNumberInputMask,
  expirationDateInputMask,
} from '../../utils';

import * as S from './styles';

export const CardRegistration = () => {
  const { handleAddCard } = useCard();
  const { translate } = useAppTranslation();

  const [cardNumber, setCardNumber] = React.useState('');
  const [cardHolder, setCardHolder] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [securityCode, setSecurityCode] = React.useState('');

  const cardHolderRef = React.useRef<TextInput>(null);
  const expirationRef = React.useRef<TextInput>(null);
  const cvvRef = React.useRef<TextInput>(null);

  const checkIncompletedFields = () =>
    !!(
      cardNumber.length < 19 ||
      cardHolder.length < 6 ||
      expirationDate.length < 5 ||
      securityCode.length < 3
    );

  const handleSubmit = () => {
    if (!checkIncompletedFields()) {
      const data = {
        id: String(uuid.v4()),
        number: cardNumber,
        name: cardHolder,
        expirationDate,
        cvv: securityCode,
        type: 'black' as const,
      };

      handleAddCard(data);
    }
  };

  return (
    <PrimaryContainer primaryHeader>
      <S.KAV>
        <S.Container>
          <S.Main>
            <S.Title>{translate('appName')}</S.Title>

            <S.InputWrapper size="long">
              <CustomInput
                maxLength={19}
                value={cardNumber}
                inputLabel={translate('cardNumber')}
                returnKeyType="next"
                onSubmitEditing={() => cardHolderRef?.current?.focus()}
                onChangeText={(text) =>
                  setCardNumber(cardNumberInputMask(text))
                }
              />
            </S.InputWrapper>

            <S.InputWrapper size="long">
              <CustomInput
                maxLength={32}
                value={cardHolder}
                ref={cardHolderRef}
                returnKeyType="next"
                autoCapitalize="characters"
                onChangeText={setCardHolder}
                inputLabel={translate('cardHolder')}
                onSubmitEditing={() => expirationRef?.current?.focus()}
              />
            </S.InputWrapper>

            <S.Row>
              <S.InputWrapper size="short">
                <CustomInput
                  maxLength={5}
                  placeholder="00/00"
                  ref={expirationRef}
                  value={expirationDate}
                  returnKeyType="next"
                  inputLabel={translate('expirationDate')}
                  onSubmitEditing={() => cvvRef?.current?.focus()}
                  onChangeText={(text) =>
                    setExpirationDate(expirationDateInputMask(text))
                  }
                />
              </S.InputWrapper>

              <S.InputWrapper size="short">
                <CustomInput
                  ref={cvvRef}
                  maxLength={3}
                  placeholder="***"
                  value={securityCode}
                  returnKeyType="done"
                  inputLabel={translate('securityCode')}
                  onSubmitEditing={handleSubmit}
                  onChangeText={(text) => setSecurityCode(onlyNumbers(text))}
                />
              </S.InputWrapper>
            </S.Row>

            <CustomButton
              variant="primary"
              text={translate('next')}
              disabled={checkIncompletedFields()}
              onPress={handleSubmit}
            />
          </S.Main>
        </S.Container>
      </S.KAV>
    </PrimaryContainer>
  );
};
