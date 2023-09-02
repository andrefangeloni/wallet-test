import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

type Props = {
  theme: DefaultTheme;
  variant: 'black' | 'green';
};

export const Card = styled.View<Props>`
  width: 100%;
  padding: 32px 16px;
  border-radius: 16px;
  background-color: ${({ theme, variant }) =>
    variant === 'black' ? theme.colors.blackCard : theme.colors.secondary};
`;

export const InfosText = styled.Text<Props>`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  color: ${({ theme, variant }) =>
    variant === 'black' ? theme.colors.white : theme.colors.greenCardText};
`;

export const CardTitle = styled(InfosText)`
  font-size: 20px;
  margin-bottom: 32px;
`;
