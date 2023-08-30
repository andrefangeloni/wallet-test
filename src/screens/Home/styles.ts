import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;
