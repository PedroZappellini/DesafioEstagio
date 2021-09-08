import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IEvent} from './index';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background: #fff;
`;

export const Search = styled.View`
  padding: 0 20px;
  background: #fff;
  border-bottom-color: #d3d3d3;
  border-bottom-width: 1px;
  flex-direction: row;
`;

export const Event = styled.View`
  background: #e9ecef;
  height: 120px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const EventContent = styled.Text`
  padding-right: 20px;
  font-size: 15px;
`;

export const EventTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  padding-bottom: 10px;
  color: #1c1c1c;
`;

export const DataContent = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const EventsList = styled(FlatList as new () => FlatList<IEvent>)`
  padding-top: 24px;
`;

export const EventImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 8px;
`;

export const EventContainer = styled.View`
  flex-direction: row;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background: #00ff7f;
  border-radius: 8px;
  width: 200px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
`;

export const ButtonView = styled.View`
  margin-left: 20px;
`;

export const Scroll = styled.ScrollView``;
