import React from 'react';
import {Container, Content, Label, TextInput} from './styles';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: Object;
  label?: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({
  containerStyle,
  label,
  icon,
  ...rest
}) => (
  <Container style={containerStyle}>
    <Label>{label}</Label>
    <Content>
      <TextInput {...rest} />
      {icon && <Icon name={icon} size={20} />}
    </Content>
  </Container>
);

export default Input;
