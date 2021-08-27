import React from 'react';
import {View} from 'react-native';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
