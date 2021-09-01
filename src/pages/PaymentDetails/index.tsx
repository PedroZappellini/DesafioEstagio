import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {IEvent} from '../HomeScreen';
import {
  Container,
  DataContent,
  DoubleLineInput,
  EventContainer,
  EventData,
  EventImage,
  EventText,
  EventTitle,
  InputContainer,
  Title,
} from './styles';

interface RouteParams {
  event: IEvent;
}

const PaymentDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;
  const {event} = params;

  return (
    <>
      <Header />
      <Container>
        <Title>Para finalizar sua compra</Title>
        <EventContainer>
          <EventImage source={{uri: event.image}} />
          <EventData>
            <EventTitle>{event.name}</EventTitle>
            <DataContent>
              <EventText>{event.date}</EventText>
              <EventText>{event.hour}</EventText>
            </DataContent>
          </EventData>
        </EventContainer>

        <InputContainer>
          <Input
            containerStyle={{marginBottom: 20}}
            name="name"
            label="Nome do titular"
            placeholder="Digite o nome"
          />
          <Input
            containerStyle={{marginBottom: 20}}
            name="credit-card"
            label="Numero do cartão"
            placeholder="Digite o numero"
          />
          <DoubleLineInput>
            <Input
              containerStyle={{marginRight: 70}}
              name="valid-date"
              label="Data de validade"
              placeholder="Digite a data"
            />
            <Input name="cvv" label="CVV" placeholder="Digite o cvv" />
          </DoubleLineInput>
        </InputContainer>

        <Button
          onPress={() => {
            navigation.navigate('Ticket', {event});
          }}
          containerStyle={{marginTop: 20}}>
          Finalizar
        </Button>
      </Container>
    </>
  );
};

export default PaymentDetails;
