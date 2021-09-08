import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../pages/SignIn';

const Drawer = createDrawerNavigator();

const MyDrawer: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="log-out" component={SignIn} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
