import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './styles/colors';
import Trainings from './screens/Trainings';
import { SignIn } from './screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='SignIn'
        component={SignIn}
        // options={{
        //   tabBarIcon: ({ size, focused }) => {
        //     return (
        //       <Ionicons
        //         name='md-heart'
        //         size={size}
        //         color={focused ? colors.purple : colors.black}
        //       />
        //     );
        //   },
        // }}
      />
      <Screen
        name='Trainings'
        component={Trainings}
        // options={{
        //   tabBarIcon: ({ size, focused }) => {
        //     return (
        //       <Ionicons
        //         name='md-heart'
        //         size={size}
        //         color={focused ? colors.purple : colors.black}
        //       />
        //     );
        //   },
        // }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
