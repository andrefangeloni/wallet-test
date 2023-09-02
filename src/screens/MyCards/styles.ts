import styled from 'styled-components/native';

type Props = {
  isSelected: boolean;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  text-transform: lowercase;
  margin-top: 96px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CardsContainer = styled.View`
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const CardWrapper = styled.TouchableOpacity`
  width: 100%;
`;

export const AbsoluteCard = styled.TouchableOpacity<Props>`
  width: 100%;
  position: absolute;
  top: ${({ isSelected }) => (isSelected ? 390 : 64)}px;
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
`;
