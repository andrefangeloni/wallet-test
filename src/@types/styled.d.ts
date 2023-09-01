import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      primary: string;
      secondary: string;
      background: string;
      buttonDisabled: string;
      buttonTextDisabled: string;
      placeholder: string;
      blackCard: string;
      greenCardText: string;
    };
  }
}
