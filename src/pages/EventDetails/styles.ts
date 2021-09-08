import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
`;

export const EventImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Medium';
  text-align: left;

  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  margin-top: 10px;
  opacity: 0.6;
`;

export const Button = styled.TouchableOpacity`
  background: #00ff7f;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 40px;
  width: 80%;
  height: 50px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  padding-left: 20px;
`;

export const TextContainer = styled.View`
  padding: 0 20px;
`;

export const DataContent = styled.View`
  flex-direction: row;
  margin-top: 10px;
  opacity: 0.8;
`;

export const Data = styled.Text`
  font-size: 20px;
  padding-right: 20px;
  font-family: 'Roboto-Medium';
`;
