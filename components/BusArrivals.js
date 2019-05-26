import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { CTA_BUS_API_KEY, CTA_BUS_API_URL } from 'react-native-dotenv';
import stopIds from '../constants/stopIds';

class BusArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    const fetchUrl = `${CTA_BUS_API_URL}getpredictions?key=${CTA_BUS_API_KEY}&stpid=${
      stopIds.WentworthAnd26th
    }&format=json`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        const { error = null } = json['bustime-response'];

        // If there is an error, show the first message
        if (error) {
          const { msg } = error[0];
          this.setState({
            error: msg,
          });
        }
      });
  }

  render() {
    const { error } = this.state;

    return (
      <View>
        <Text h1>Bus Arrivals</Text>
        {error ? (
          <View>
            <Text>{error}</Text>
          </View>
        ) : (
          <View>
            <Text>Loose squares, loose squares</Text>
          </View>
        )}
      </View>
    );
  }
}

export default BusArrivals;
