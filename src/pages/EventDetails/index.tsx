import {useRoute} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {ButtonText, Data, DataContent, TextContainer} from './styles';
import Header from '../../components/Header';
import {IEvent} from '../HomeScreen';
import {Button, Container, Description, EventImage, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

interface RouteParams {
  event: IEvent;
}

const EventDetails: React.FC = () => {
  const navigation = useNavigation();
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
        <TextContainer>
          <Title>{event.name}</Title>
          <DataContent>
            <Data>{event.date}</Data>
            <Data>{event.hour}</Data>
            <Data>{event.price}</Data>
          </DataContent>
          <Description>{event.description}</Description>
        </TextContainer>

        <Button
          onPress={() => {
            navigation.navigate('Payment', {event});
          }}>
          <Icon name="shopping-cart" size={20} />
          <ButtonText>Comprar ingresso</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default EventDetails;
