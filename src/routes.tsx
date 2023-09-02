import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Home,
  MyCards,
  WalletAnimated,
  CardRegistration,
  CardRegistredSuccessfully,
} from './screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="MyCards" component={MyCards} />
      <Screen name="CardRegistration" component={CardRegistration} />
      <Screen
        name="CardRegistredSuccessfully"
        component={CardRegistredSuccessfully}
      />
      <Screen name="WalletAnimated" component={WalletAnimated} />
    </Navigator>
  </NavigationContainer>
);
