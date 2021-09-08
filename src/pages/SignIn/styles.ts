import styled from 'styled-components/native';

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Medium';
  margin: 64px 0 24px;
`;

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
  padding: 0 30px;
  margin-bottom: 40px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-left: 10px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
