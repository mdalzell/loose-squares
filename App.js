import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';

import PredictionList from './components/PredictionList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Loose Squares'.toUpperCase(), style: { color: '#fff' } }}
        />
        <View style={styles.content}>
          <PredictionList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});
