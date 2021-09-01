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
  font-family: 'RobotoSlab-Medium';
  text-align: center;

  margin-top: 20px;
`;

export const Description = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  text-align: center;
  margin-top: 30px;
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
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  padding-left: 20px;
`;
