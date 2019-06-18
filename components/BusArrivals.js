import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CTA_BUS_API_KEY, CTA_BUS_API_URL } from 'react-native-dotenv';
import moment from 'moment';

import ArrivalCard from './ArrivalCard';

import stopIds from '../constants/stopIds';

class BusArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      prd: [],
    };
  }

  componentDidMount() {
    const fetchUrl = `${CTA_BUS_API_URL}getpredictions?key=${CTA_BUS_API_KEY}&stpid=${stopIds.WentworthAnd26th}&format=json`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        const { error = null, prd } = json['bustime-response'];

        // If there is an error, show the first message
        if (error) {
          const { msg } = error[0];
          this.setState({
            error: msg,
          });
        } else {
          this.setState({
            prd,
          });
        }
      });
  }

  render() {
    const { error, prd } = this.state;

    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 16, marginTop: 16 }}>Bus</Text>
        {error ? (
          <ArrivalCard title={error} />
        ) : (
          <View>
            {prd.map((arrival, index) => {
              const { des, prdtm } = arrival;
              return <ArrivalCard key={index} text={des} title={prdtm.substr(-5)} />;
            })}
          </View>
        )}
      </View>
    );
  }
}

export default BusArrivals;
