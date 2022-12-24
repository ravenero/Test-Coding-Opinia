import React, {Component} from 'react';
import {LogBox} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
const Stack = createStackNavigator();

// Screens
import MainApp from './src/screens/MainApp';
import Followers from './src/screens/Followers';
import Following from './src/screens/Following';
import DetailProfile from './src/screens/Profile/Detail';

// Utils
import {BLUE} from './src/utils/color';

LogBox.ignoreAllLogs();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.BottomSheetSlideInSpec,
    close: TransitionSpecs.BottomSheetSlideInSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
};

const Routes = () => {
  return (
    <>
      <StatusBar backgroundColor={BLUE} />
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{
          ...MyTransition,
          detachPreviousScreen: false,
        }}>
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Followers"
          component={Followers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Following"
          component={Following}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProfile"
          component={DetailProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
