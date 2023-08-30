import styled from 'styled-components/native';
import { hasNotch } from 'react-native-device-info';

export const Container = styled.View`
  height: ${hasNotch() ? 48 : 22}px;
  background-color: ${({ theme }) => theme.colors.black};
`;
