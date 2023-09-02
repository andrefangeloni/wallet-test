import React from 'react';

import { CreditCard, CustomButton, PrimaryContainer } from '../../components';

import { useAppSelector, useAppTranslation } from '../../hooks';

import * as S from './styles';

export const MyCards = () => {
  const { translate } = useAppTranslation();

  const { cards } = useAppSelector(({ card }) => card);

  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <PrimaryContainer noOverlay secondaryHeader>
      <S.Container>
        <S.CardsContainer>
          {cards.map((card, index) => {
            if (index === 1) {
              return (
                <S.AbsoluteCard
                  key={card.id}
                  isSelected={isSelected}
                  onPress={() => setIsSelected(!isSelected)}
                >
                  <CreditCard
                    name={card.name}
                    number={card.number}
                    expirationDate={card.expirationDate}
                    variant={card.type}
                  />
                </S.AbsoluteCard>
              );
            }

            return (
              <S.CardWrapper key={card.id}>
                <CreditCard
                  name={card.name}
                  number={card.number}
                  expirationDate={card.expirationDate}
                  variant={card.type}
                />
              </S.CardWrapper>
            );
          })}
        </S.CardsContainer>

        {isSelected ? (
          <S.ButtonWrapper>
            <CustomButton
              variant="primary"
              text={translate('payWithThisCard')}
              onPress={() => null}
            />
          </S.ButtonWrapper>
        ) : (
          <S.Label>{translate('useThisCard')}</S.Label>
        )}
      </S.Container>
    </PrimaryContainer>
  );
};
