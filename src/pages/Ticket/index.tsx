import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function Next() {
  return <Container></Container>;
}

function Previus() {
  return <Container></Container>;
}

const Tab = createMaterialTopTabNavigator();

const Ticket: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Tab.Navigator>
        <Tab.Screen name="Proximos" component={Next} />
        <Tab.Screen name="Anteriores" component={Previus} />
      </Tab.Navigator>
    </Container>
  );
};

export default Ticket;
