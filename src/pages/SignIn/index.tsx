import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logoImg.png';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  Logo,
  LogoContainer,
  ButtonLabel,
  ButtonContainer,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <LogoContainer>
        <Logo source={logoImg} />
        <Title>TicketSeller</Title>
      </LogoContainer>

      <Title>Faça seu login</Title>

      <Input label="Email" placeholder="Digite seu email" name="email" />
      <Input
        label="Senha"
        secureTextEntry
        placeholder="Digite sua senha"
        containerStyle={{marginTop: 20}}
        name="password"
      />

      <Button
        containerStyle={{marginTop: 20}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        Entrar
      </Button>

      <ButtonContainer
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Icon name="log-in" size={20} color="#000" />
        <ButtonLabel>Nao tem uma conta? Crie uma agora</ButtonLabel>
      </ButtonContainer>
    </Container>
  );
};

export default SignIn;
