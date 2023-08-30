import styled from 'styled-components/native';

type Props = {
  variant: 'primary' | 'secondary';
};

export const CustomButton = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 20px;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
`;

export const CustomButtonText = styled.Text<Props>`
  font-size: 18px;
  text-transform: lowercase;
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.background};
`;
