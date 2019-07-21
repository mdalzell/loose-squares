import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CTA_TRAIN_API_KEY, CTA_TRAIN_API_URL } from 'react-native-dotenv';
import moment from 'moment';

import stationIds from '../constants/stationIds';
import ArrivalCardList from './shared/ArrivalCardList';

const fetchUrl = `${CTA_TRAIN_API_URL}?key=${CTA_TRAIN_API_KEY}&mapid=${stationIds.cermakChinatown}&max=2&outputType=json`;

class TrainArrivals extends Component {
  state = {
    arrivals: null,
  };

  componentDidMount() {
    this.fetchTrainArrivals();
  }

  fetchTrainArrivals = () => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        const {
          ctatt: { eta },
        } = json;

        const arrivals = eta.map(eta => {
          const { arrT, destNm } = eta;
          const arrivalTime = moment(arrT).format('HH:mm');

          return { text: destNm, title: arrivalTime };
        });

        this.setState({ arrivals });
      });
  };

  onRefreshPress = () => {
    this.setState(
      {
        arrivals: null,
      },
      this.fetchTrainArrivals
    );
  };

  render() {
    const { arrivals } = this.state;
    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 16 }}>Train</Text>
        <ArrivalCardList arrivals={arrivals} onRefreshPress={this.onRefreshPress} />
      </View>
    );
  }
}

export default TrainArrivals;
