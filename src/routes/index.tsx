import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import HomeScreen from '../pages/HomeScreen';
import Ticket from '../pages/Ticket';
import Profile from '../pages/Profile';
import Icon from 'react-native-vector-icons/Feather';
import EventDetails from '../pages/EventDetails';
import PaymentDetails from '../pages/PaymentDetails';

const Tab = createBottomTabNavigator();

const possibleIcons = {
  Events: 'grid',
  Tickets: 'tag',
  Profile: 'user',
};

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarIcon: ({color}) => {
          const iconName = possibleIcons[route.name as 'Events'];

          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: '#00ff7f',
        tabBarInactiveTintColor: '#000',

        tabBarStyle: {
          height: 80,
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderColor: '#E9ECEF',
        },
      })}>
      <Tab.Screen component={HomeScreen} name="Events" />
      <Tab.Screen component={Ticket} name="Tickets" />
      <Tab.Screen component={Profile} name="Profile" />
    </Tab.Navigator>
  );
};

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="SignIn" component={SignIn} />
    <App.Screen name="SignUp" component={SignUp} />
    <App.Screen name="EventDetails" component={EventDetails} />
    <App.Screen name="Home" component={TabRoutes} />
    <App.Screen name="Payment" component={PaymentDetails} />
    <App.Screen name="Ticket" component={Ticket} />
  </App.Navigator>
);

export default AppRoutes;
