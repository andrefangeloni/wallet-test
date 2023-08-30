import React from 'react';
import { ThemeProvider } from 'styled-components';

import { CustomStatusBar } from './components';

import { Home } from './screens';

import { theme } from './styles/theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <CustomStatusBar />
    <Home />
  </ThemeProvider>
);
