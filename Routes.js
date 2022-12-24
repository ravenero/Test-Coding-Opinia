import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
const Stack = createStackNavigator();

// Screens
import MainApp from './src/screens/MainApp';

// Utils
import {BLUE} from './src/utils/color';

const Routes = () => {
  return (
    <>
      <StatusBar backgroundColor={BLUE} />
      <Stack.Navigator>
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
