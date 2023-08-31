import { Platform } from 'react-native';
import styled from 'styled-components/native';

type InputWrapperProps = {
  size: 'long' | 'short';
};

export const KAV = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: { flexGrow: 1 },
})`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const InputWrapper = styled.View<InputWrapperProps>`
  width: ${({ size }) => (size === 'short' ? 47 : 100)}%;
  margin-bottom: 32px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;
