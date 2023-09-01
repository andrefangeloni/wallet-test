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

export const BlackCard = styled.View`
  width: 100%;
  padding: 32px 16px;
  border-radius: 16px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.blackCard};
`;

export const InfosText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
`;

export const BlackCardTitle = styled(InfosText)`
  font-size: 20px;
  margin-bottom: 32px;
`;
