import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Container, ProfileImage, Scroll, Title} from './styles';
import Header from '../../components/Header';

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <Scroll>
        <Container>
          <ProfileImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/62000959?s=400&u=7df881612cbbc80c46bb82c9872391caa40cae4c&v=4',
            }}
          />

          <Title>Atualize seu perfil</Title>

          <Input
            containerStyle={{marginTop: 20}}
            label="Nome"
            name="name"
            placeholder="Digite seu nome"
          />
          <Input
            containerStyle={{marginTop: 20}}
            label="Senha"
            name="password"
            placeholder="Digite a senha"
          />
          <Input
            containerStyle={{marginTop: 20}}
            label="Confirme sua senha"
            name="confirmPassword"
            placeholder="Digite a senha novamente"
          />

          <Button containerStyle={{marginTop: 20}}>Atualizar</Button>
        </Container>
      </Scroll>
    </>
  );
};

export default Profile;
