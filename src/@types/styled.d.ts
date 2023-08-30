import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      primary: string;
      secondary: string;
      background: string;
    };
  }
}