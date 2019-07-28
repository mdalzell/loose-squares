import React from 'react';
import { StyleSheet, View } from 'react-native';

import BusArrivals from '../components/BusArrivals';
import TrainArrivals from '../components/TrainArrivals';
import NavigationHeader from '../components/shared/NavigationHeader';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <NavigationHeader navigation={navigation} />
    <View style={styles.content}>
      <TrainArrivals />
      <BusArrivals />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
  },
});

export default HomeScreen;
