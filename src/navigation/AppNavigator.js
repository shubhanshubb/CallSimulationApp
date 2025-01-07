import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Call from '../screens/Call';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Parent"
        component={Home}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Call"
        component={Call}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
