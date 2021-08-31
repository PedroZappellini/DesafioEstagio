import {useRoute} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {ButtonText} from './styles';
import Header from '../../components/Header';
import {IEvent} from '../HomeScreen';
import {Button, Container, Description, EventImage, Title} from './styles';

interface RouteParams {
  event: IEvent;
}

const EventDetails: React.FC = () => {
  const route = useRoute();
  const params = route.params as RouteParams;
  const {event} = params;

  return (
    <>
      <Header></Header>
      <Container>
        <EventImage
          source={{
            uri: event.image,
          }}
        />
        <Title>{event.name}</Title>
        <Description>{event.description}</Description>

        <Button>
          <Icon name="shopping-cart" size={20} />
          <ButtonText>Comprar ingresso</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default EventDetails;
