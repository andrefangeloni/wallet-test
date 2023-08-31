import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

type Props = {
  theme: DefaultTheme;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
};

const renderButtonColor = ({ theme, variant, disabled }: Props) => {
  if (disabled) {
    return theme.colors.buttonDisabled;
  }

  return variant === 'primary' ? theme.colors.primary : theme.colors.secondary;
};

const renderButtonTextColor = ({ theme, variant, disabled }: Props) => {
  if (disabled) {
    return theme.colors.buttonTextDisabled;
  }

  return variant === 'primary' ? theme.colors.white : theme.colors.background;
};

export const CustomButton = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 55px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 20px;
  background-color: ${(props) => renderButtonColor(props)};
`;

export const CustomButtonText = styled.Text<Props>`
  font-size: 18px;
  text-transform: lowercase;
  color: ${(props) => renderButtonTextColor(props)};
`;
