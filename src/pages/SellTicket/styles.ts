import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Roboto-Medium';
  margin-top: 20px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Medium';
  padding-left: 5px;
  opacity: 0.6;
`;

export const EventContainer = styled.View`
  width: 100%;
  background: #e9ecef;
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-direction: row;
`;

export const EventImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

export const EventData = styled.View`
  padding-left: 20px;
`;

export const EventTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
`;

export const DataContent = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const EventText = styled.Text`
  font-size: 15px;
  padding-right: 20px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  background: #fff;
  padding: 0 20px;
  flex: 1;
`;
