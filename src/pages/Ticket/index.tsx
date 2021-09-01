import React from 'react';
import {Container, EventContainer, EventImage, TabContainer} from './styles';
import Header from '../../components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IEvent} from '../HomeScreen';
import {useRoute} from '@react-navigation/native';

interface RouteParams {
  event: IEvent;
}

function Next() {
  const route = useRoute();
  const params = route.params as RouteParams;
  const {event} = params;
  return (
    <Container>
      <EventContainer>
        <EventImage source={{uri: event.image}} />
      </EventContainer>
    </Container>
  );
}

function Previous() {
  return <Container></Container>;
}

const Tab = createMaterialTopTabNavigator();

const Ticket: React.FC = () => {
  const route = useRoute();
  const params = route.params as RouteParams;
  const {event} = params;
  return (
    <TabContainer>
      <Header></Header>
      <Tab.Navigator>
        <Tab.Screen initialParams={{event}} name="Proximos" component={Next} />
        <Tab.Screen
          initialParams={{event}}
          name="Anteriores"
          component={Previous}
        />
      </Tab.Navigator>
    </TabContainer>
  );
};

export default Ticket;
