import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { CTA_TRAIN_API_KEY, CTA_TRAIN_API_URL } from 'react-native-dotenv';
import moment from 'moment';

import stationIds from '../constants/stationIds';

class TrainArrivals extends Component {
  state = {
    arrivals: [],
  };

  componentDidMount() {
    const fetchUrl = `${CTA_TRAIN_API_URL}?key=${CTA_TRAIN_API_KEY}&mapid=${
      stationIds.cermakChinatown
    }&outputType=json`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        const {
          ctatt: { eta },
        } = json;
        this.setState({ arrivals: eta });
      });
  }

  render() {
    const { arrivals } = this.state;
    return (
      <View>
        <Text h1>Train Arrivals</Text>
        {arrivals.map(arrival => {
          const { arrT, destNm } = arrival;
          const arrivalTime = moment(arrT).format('hh:mm a');
          return (
            <View key={arrT + destNm}>
              <Text>{`${destNm} - ${arrivalTime}`}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default TrainArrivals;
