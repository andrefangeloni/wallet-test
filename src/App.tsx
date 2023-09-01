import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { CustomStatusBar } from './components';

import { Routes } from './routes';

import { store } from './store';

import { theme } from './styles/theme';

import './i18n';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CustomStatusBar />
      <Routes />
    </ThemeProvider>
  </Provider>
);
