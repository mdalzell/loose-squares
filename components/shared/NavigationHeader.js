import React from 'react';
import { Header, Icon } from 'react-native-elements';

const NavigationHeader = ({ navigation }) => (
  <Header
    centerComponent={{
      text: 'Loose Squares'.toUpperCase(),
      style: { color: '#fff' },
    }}
    leftComponent={<Icon color="#fff" name="menu" onPress={navigation.openDrawer} />}
  />
);

export default NavigationHeader;
