import React from 'react';
import {Container, Content, Label, TextInput} from './styles';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: Object;
  label: string;
}

const Input: React.FC<InputProps> = ({containerStyle, label, ...rest}) => (
  <Container style={containerStyle}>
    <Label>{label}</Label>
    <Content>
      <TextInput {...rest} />
    </Content>
  </Container>
);

export default Input;
