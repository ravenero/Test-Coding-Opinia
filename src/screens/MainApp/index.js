import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';

// Utils
import {WHITE, PRIMARY, GRAY} from '../../utils/color';

// Components
import NavigatorTitle from '../../components/Navigator/NavigatorTitle';
import NavigatorFull from '../../components/Navigator/NavigatorFull';

// Screens
import Home from '../Home';
import Followers from '../Followers';
import Search from '../Search';
import Communities from '../Communities';
import Chats from '../Chats';
import DetailProfile from '../Profile/Detail';

const MainApp = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          //   header: ({navigation, route, options}) => {
          //     return <NavigatorTitle />;
          //   },
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: GRAY,
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: '#2A2A2A',
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="people" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: '#2A2A2A',
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbubbles" color={color} size={22} />
          ),
          tabBarStyle: {
            alignItems: 'center',
            backgroundColor: WHITE,
            justifyContent: 'center',
            borderTopColor: '#2A2A2A',
            paddingVertical: 10,
            height: 56,
          },
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor: PRIMARY,
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
