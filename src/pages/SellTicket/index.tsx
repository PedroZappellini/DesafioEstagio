import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {IEvent} from '../HomeScreen';
import {
  ButtonContainer,
  Container,
  DataContent,
  Description,
  DescriptionContainer,
  EventContainer,
  EventData,
  EventImage,
  EventText,
  EventTitle,
  Title,
} from './styles';

interface RouteParams {
  event: IEvent;
}

const SellTicket: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as RouteParams;
  const {event} = params;
  const [isSelected, setSelection] = useState();
  return (
    <>
      <Header />
      <ButtonContainer>
        <Container>
          <Title>Deseja mesmo vender seu ingresso?</Title>
          <EventContainer>
            <EventImage source={{uri: event.image}} />
            <EventData>
              <EventTitle>{event.name}</EventTitle>
              <DataContent>
                <EventText>{event.date}</EventText>
                <EventText>{event.hour}</EventText>
                <EventText>{event.price}</EventText>
              </DataContent>
            </EventData>
          </EventContainer>
          <DescriptionContainer>
            <Icon name="check" />
            <Description>Você recebera 80% do valor pago</Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <Icon name="check" />
            <Description>
              Seu ingresso será colocado a venda novamente
            </Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <Icon name="check" />
            <Description>
              Esta ação não poderá ser desfeita se concluída
            </Description>
          </DescriptionContainer>
        </Container>
        <Button
          onPress={() => {
            navigation.navigate('Home', {event});
          }}
          containerStyle={{marginBottom: 30}}>
          Confirmar
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SellTicket;
