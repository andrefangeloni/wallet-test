import React from 'react';
import { ThemeProvider } from 'styled-components';

import { CustomStatusBar } from './components';

import { theme } from './styles/theme';

import './i18n';
import { Routes } from './routes';

export const App = () => (
  <ThemeProvider theme={theme}>
    <CustomStatusBar />
    <Routes />
  </ThemeProvider>
);
