import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
  font-family: 'RobotoSlab-Medium';
`;

export const EventContainer = styled.View`
  width: 100%;
  background: #e9ecef;
  border-radius: 8px;
  margin-top: 30px;
  flex-direction: row;
`;

export const EventImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

export const EventTitle = styled.Text`
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
`;

export const EventText = styled.Text`
  font-size: 15px;
  padding-right: 20px;
`;

export const EventData = styled.View`
  padding-left: 20px;
`;

export const DataContent = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  margin-top: 50px;
`;

export const DoubleLineInput = styled.View`
  width: 40%;
  flex-direction: row;
  margin-bottom: 20px;
`;
