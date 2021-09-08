import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Button, Container} from './styles';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SignIn from '../../pages/SignIn';

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="log-out" component={SignIn} />
//     </Drawer.Navigator>
//   );
// }

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left" size={30} />
      </Button>
      <Button>
        <Icon name="menu" size={30} />
      </Button>
    </Container>
  );
};

export default Header;
