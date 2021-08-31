import React, {useState} from 'react';
import Input from '../../components/Input';
import {
  ButtonText,
  ButtonView,
  Container,
  DataContent,
  Event,
  EventContainer,
  EventContent,
  EventImage,
  EventsList,
  Search,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import {ButtonContainer} from './styles';
import Icon from 'react-native-vector-icons/Feather';

export interface IEvent {
  id: string;
  name: string;
  image: string;
  date: string;
  hour: string;
  description: string;
}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [events, setEvents] = useState<IEvent[]>([
    {
      id: '1',
      name: 'Fantasma da opera',
      image:
        'https://lh3.googleusercontent.com/proxy/gJemlLD8biLWC_837HixATvxQl1RCHJmSMuRhGQjFkiO4uHDvESqOvUz79NTPaKp8b7WmIAe8nqIykuHXBsz219TS9VHjVI6i53ax52AM3bEdSHkxRw3_2FedwmkEP3c',
      date: 'SET 27',
      hour: '19:00',
      description:
        'O Fantasma da Ópera conta a história trágica de um triângulo amoroso passado nos bastidores de uma ópera parisiense. O protagonista, uma entidade mascarada que assombra a local, desenvolve uma paixão obsessiva por Christine, a jovem soprano que ficou órfã e foi acolhida pela trupe',
    },
    {
      id: '2',
      name: 'Gustavo Mioto',
      image: 'https://cdn.abcdoabc.com.br/gustavo-mioto_06c33597.jpg',
      date: 'OUT 14',
      hour: '18:00',
      description:
        'Gustavo Mioto, sertanejo de 18 anos, começou a carreira ainda criança, em uma banda de baile. Ele cantava de Bee Gees a Mister Catra, para públicos diversos. Isso explica o gosto do jovem por melodias fáceis e o sertanejo de misturas ecléticas do DVD "Ciclos", primeiro da carreira',
    },
    {
      id: '3',
      name: 'Baile do Denis',
      image:
        'https://www.ingressocerto.com/storage/medias/product/2021-07/3973/610309956e035.png',
      date: 'AGO 21',
      hour: '14:00',
      description:
        'Aguce seus sentidos com a vibe que mistura o funk carioca com elementos da música eletrônica e do sertanejo. Esteja preparado(a) para uma estrutura ex-tra-or-di-ná-ria jamais vista, muitas surpresas e efeitos ALUCINANTES. Viva a experiência do BAILE DO DENNIS, o baile que você mais respeita',
    },
    {
      id: '4',
      name: 'Balao PUCAMP',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQPB21e10IqA5tbcwe5vaRMd7cc-eVpi2xGEMWV1oZkCqZKYGDjxWWSl4x7qMXwQXcpY&usqp=CAU',
      date: 'NOV 25',
      hour: '21:00',
      description: 'Seja bem vindo ao Balao',
    },
  ]);

  return (
    <>
      <Header />
      <Search>
        <Input name="header" placeholder="buscar..." icon="search" />
      </Search>
      <Container>
        <EventsList
          data={events}
          keyExtractor={event => event.id}
          contentContainerStyle={{marginBottom: 24, height: '100%'}}
          renderItem={({item: event}) => (
            <Event>
              <EventContainer>
                <EventImage source={{uri: event.image}} />

                <ButtonView>
                  <EventContent>{event.name}</EventContent>
                  <DataContent>
                    <EventContent>{event.date}</EventContent>
                    <EventContent>{event.hour}</EventContent>
                  </DataContent>
                  <ButtonContainer
                    onPress={() => {
                      navigation.navigate('EventDetails', {
                        event,
                      });
                    }}>
                    <ButtonText>Detalhes</ButtonText>
                  </ButtonContainer>
                </ButtonView>
              </EventContainer>
            </Event>
          )}
        />
      </Container>
    </>
  );
};

export default HomeScreen;
