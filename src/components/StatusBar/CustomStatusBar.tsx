import React from 'react';
import { StatusBar, Platform } from 'react-native';

import * as S from './styles';

export const CustomStatusBar = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
    {Platform.OS === 'ios' ? <S.Container /> : null}
  </>
);
