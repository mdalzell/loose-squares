import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import BusArrivals from './components/BusArrivals';
import TrainArrivals from './components/TrainArrivals';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: 'Loose Squares',
            style: { color: '#fff', textTransform: 'uppercase' },
          }}
        />
        <View style={styles.content}>
          <TrainArrivals />
          <BusArrivals />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 30,
  },
});
