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

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <LogoContainer>
        <Logo source={logoImg} />
        <Title>TicketSeller</Title>
      </LogoContainer>

      <Title>Crie sua conta</Title>

      <Input
        label="Nome completo"
        placeholder="Digite seu nome completo"
        name="name"
      />
      <Input
        containerStyle={{marginTop: 20}}
        label="Email"
        placeholder="Digite seu email"
        name="email"
      />
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
          navigation.navigate('HomeScreen');
        }}>
        Cadastrar
      </Button>

      <ButtonContainer
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left" size={20} color="#000" />
        <ButtonLabel>Voltar para o login</ButtonLabel>
      </ButtonContainer>
    </Container>
  );
};

export default SignUp;
