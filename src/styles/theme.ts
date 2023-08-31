import { DefaultTheme } from 'styled-components';

const colors = {
  BLACK: '#000',
  WHITE: '#fff',
  PRIMARY: '#12c2e9',
  SECONDARY: '#a5ff32',
  BACKGROUND: '#142995',
  BUTTON_DISABLED: '#eee',
  BUTTON_TEXT_DISABLED: '#bbb',
};

export const theme: DefaultTheme = {
  colors: {
    black: colors.BLACK,
    white: colors.WHITE,
    primary: colors.PRIMARY,
    secondary: colors.SECONDARY,
    background: colors.BACKGROUND,
    buttonDisabled: colors.BUTTON_DISABLED,
    buttonTextDisabled: colors.BUTTON_TEXT_DISABLED,
  },
};
