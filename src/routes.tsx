import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, CardRegistration } from './screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CardRegistration" component={CardRegistration} />
    </Navigator>
  </NavigationContainer>
);
