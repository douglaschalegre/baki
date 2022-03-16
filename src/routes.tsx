import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Trainings from './screens/Trainings';
import { SignIn } from './screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Trainings' component={Trainings} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
