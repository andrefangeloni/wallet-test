import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0 -24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 22px;
  padding: 16px 0;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background};
`;

export const MyCardsHeader = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 -24px;
  border-bottom-left-radius: 64px;
  border-bottom-right-radius: 64px;
  background-color: ${({ theme }) => theme.colors.white};

  shadow-color: rgba(0, 0, 0, 0.5);
  shadow-offset: 0 8px;
  shadow-opacity: 0.5;
  shadow-radius: 12px;
`;

export const MyCardsText = styled.Text`
  font-size: 18px;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Touchable = styled.TouchableOpacity``;

export const BackButtonIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.primary,
}))``;

export const AddIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.primary,
}))``;
