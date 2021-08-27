import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// import { Container } from './styles';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="SignIn" component={SignIn} />
    <App.Screen name="SignUp" component={SignUp} />
  </App.Navigator>
);

export default AppRoutes;
