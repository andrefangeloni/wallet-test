import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-transform: lowercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export const BackButtonIcon = styled(AntDesign).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.primary,
}))``;
