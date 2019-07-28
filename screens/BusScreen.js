import React from 'react';
import { Text, View } from 'react-native';

import NavigationHeader from '../components/shared/NavigationHeader';

const BusScreen = ({ navigation }) => (
  <View>
    <NavigationHeader navigation={navigation} />
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 16 }}>Bus Times</Text>
  </View>
);

export default BusScreen;
