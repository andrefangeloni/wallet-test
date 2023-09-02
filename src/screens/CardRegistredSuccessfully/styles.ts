import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Subtitle = styled(Title)`
  font-size: 22px;
  margin-bottom: 32px;
`;

export const CardWrapper = styled.View`
  margin-bottom: 32px;
`;
