import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IEvent} from '../HomeScreen';

export const TabContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  background: #fff;
  flex: 1;
  padding: 0 20px;
`;

export const EventsList = styled(FlatList as new () => FlatList<IEvent>)`
  padding-top: 24px;
`;

export const EventContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const EventImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 8px;
`;

export const EventContent = styled.Text`
  padding-right: 20px;
  font-size: 15px;
`;

export const EventTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  padding-bottom: 10px;
`;

export const ButtonView = styled.View`
  flex-direction: column;
`;

export const DataContent = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Event = styled.View`
  background: #e9ecef;
  height: 120px;
  border-radius: 20px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 200px;
  height: 30px;
  background: #00ff7f;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text``;
