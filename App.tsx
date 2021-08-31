import React from 'react';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
