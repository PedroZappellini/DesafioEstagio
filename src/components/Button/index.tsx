import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  containerStyle?: Object;
}

const Button: React.FC<ButtonProps> = ({children, containerStyle, ...rest}) => (
  <Container style={containerStyle} {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
