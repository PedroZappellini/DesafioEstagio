import React, {useMemo} from 'react';
import {
  ButtonContainer,
  Container,
  DataContent,
  Event,
  EventContainer,
  EventContent,
  EventImage,
  EventsList,
  EventTitle,
  TabContainer,
} from './styles';
import Header from '../../components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IEvent} from '../HomeScreen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ButtonView} from '../HomeScreen/styles';
import {ButtonText} from '../../components/Button/styles';

function Next() {
  const navigation = useNavigation();
  const events = useMemo(() => {
    const fakeEvents: IEvent[] = [
      {
        id: '6',
        name: 'Aerosmith',
        image:
          'https://agendadeshows.net/wp-content/uploads/2021/04/shows-do-Aerosmith-brasil-2021-datas.jpeg',
        date: 'SET 27',
        hour: '19:00',
        price: 'R$30',
        description:
          'Aerosmith é uma banda norte-americana de rock, por vezes referida como "The Bad Boys from Boston" e "A Maior Banda de Rock and Roll da América". Seu estilo, enraizado em um hard rock baseado no blues, também incorpora elementos do pop, heavy metal e rhythm and blues, e inspirou diversos artistas subsequentes como os Guns N Roses. A banda foi formada em Boston, Massachusetts, em 1970',
      },
      {
        id: '7',
        name: 'Marilia mendonça',
        image:
          'https://a-static.mlcdn.com.br/1500x1500/cd-marilia-mendonca-ao-vivo-som-livre/alojadediscos/22680/cea5cab99de63b5fc3e6f404845a21dd.jpg',
        date: 'OUT 14',
        hour: '18:00',
        price: 'R$ 40',
        description:
          'Marília Dias Mendonça (Cristianópolis, 22 de julho de 1995) é uma cantora, compositora e instrumentista brasileira, um dos nomes de maior repercussão e influência na música nacional.Em 2015 lançou seu EP de estreia homônimo, porém Marília só ganhou destaque após lançar seu primeiro DVD homônimo em 2016, que lhe concedeu certificado de disco de tripla platina pelas 240 000 cópias vendidas',
      },
    ];

    return fakeEvents;
  }, []);
  return (
    <Container>
      <EventsList
        data={events}
        keyExtractor={event => event.id}
        renderItem={({item: event}) => (
          <Event>
            <EventContainer>
              <EventImage source={{uri: event.image}} />
              <ButtonView>
                <EventTitle>{event.name}</EventTitle>
                <DataContent>
                  <EventContent>{event.date}</EventContent>
                  <EventContent>{event.hour}</EventContent>
                  <EventContent>{event.price}</EventContent>
                </DataContent>
                <ButtonContainer
                  onPress={() => {
                    navigation.navigate('SellTicket', {event});
                  }}>
                  <ButtonText>Negociar venda</ButtonText>
                </ButtonContainer>
              </ButtonView>
            </EventContainer>
          </Event>
        )}
      />
    </Container>
  );
}

function Previous() {
  const events = useMemo(() => {
    const fakeEvents: IEvent[] = [
      {
        id: '6',
        name: 'Henrique e Juliano',
        image:
          'https://shows2020.com.br/wp-content/uploads/2019/12/shows-henrique-e-juliano.jpg',
        date: 'MAR 8',
        hour: '19:00',
        price: 'R$100',
        description:
          'Henrique e Juliano é uma dupla sertaneja formada pelos irmãos Ricelly Henrique Tavares Reis (23 de maio de 1989) e Edson Alves dos Reis Junior (27 de novembro de 1990) ambos nascidos na cidade de Palmeirópolis, interior do estado de Tocantins.',
      },
    ];

    return fakeEvents;
  }, []);
  return (
    <Container>
      <EventsList
        data={events}
        keyExtractor={event => event.id}
        renderItem={({item: event}) => (
          <Event>
            <EventContainer>
              <EventImage source={{uri: event.image}} />
              <ButtonView>
                <EventTitle>{event.name}</EventTitle>
                <DataContent>
                  <EventContent>{event.date}</EventContent>
                  <EventContent>{event.hour}</EventContent>
                  <EventContent>{event.price}</EventContent>
                </DataContent>
              </ButtonView>
            </EventContainer>
          </Event>
        )}
      />
    </Container>
  );
}

const Tab = createMaterialTopTabNavigator();

const Ticket: React.FC = () => {
  return (
    <TabContainer>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: '#00ff7f'},
        }}>
        <Tab.Screen name="Proximos" component={Next} />
        <Tab.Screen name="Anteriores" component={Previous} />
      </Tab.Navigator>
    </TabContainer>
  );
};

export default Ticket;
