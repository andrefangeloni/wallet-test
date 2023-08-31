import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InputLabel = styled.Text`
  text-transform: lowercase;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CustomInput = styled.TextInput`
  width: 100%;
  height: 45px;
  border-radius: 6px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;
