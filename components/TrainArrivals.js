import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CTA_TRAIN_API_KEY, CTA_TRAIN_API_URL } from 'react-native-dotenv';
import moment from 'moment';

import ArrivalCard from './ArrivalCard';

import stationIds from '../constants/stationIds';

class TrainArrivals extends Component {
  state = {
    arrivals: [],
  };

  componentDidMount() {
    const fetchUrl = `${CTA_TRAIN_API_URL}?key=${CTA_TRAIN_API_KEY}&mapid=${
      stationIds.cermakChinatown
    }&max=2&outputType=json`;

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
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 16 }}>Train</Text>
        {arrivals.map((arrival, index) => {
          const { arrT, destNm } = arrival;
          const arrivalTime = moment(arrT).format('hh:mm a');

          // Gonna use index as the key for now, not sure if CTA provides unique IDs
          return <ArrivalCard key={index} text={destNm} title={arrivalTime} />;
        })}
      </View>
    );
  }
}

export default TrainArrivals;
