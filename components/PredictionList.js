import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CTA_API_KEY, CTA_API_URL } from 'react-native-dotenv';
import stopIds from '../constants/stopIds';

class PredictionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    const fetchUrl = `${CTA_API_URL}getpredictions?key=${CTA_API_KEY}&stpid=${
      stopIds.WentworthAnd26th
    }&format=json`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(response => {
        const responseJson = response;
        const { error = null } = responseJson['bustime-response'];

        // If there is an error, show the first message
        if (error) {
          const { msg } = error[0];
          this.setState({
            error: msg,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <View>
          <Text>{error}</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Loose squares, loose squares</Text>
      </View>
    );
  }
}

export default PredictionList;
