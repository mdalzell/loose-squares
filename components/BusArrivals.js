import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CTA_BUS_API_KEY, CTA_BUS_API_URL } from 'react-native-dotenv';
import { Icon } from 'react-native-elements';

import ArrivalCard from './shared/ArrivalCard';

import stopIds from '../constants/stopIds';
import ArrivalCardList from './shared/ArrivalCardList';

const fetchUrl = `${CTA_BUS_API_URL}getpredictions?key=${CTA_BUS_API_KEY}&stpid=${stopIds.WentworthAnd26th}&format=json`;

class BusArrivals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      arrivals: null,
    };
  }

  componentDidMount() {
    this.fetchBusTimes();
  }

  fetchBusTimes = () => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        const { error = null, prd: arrivals = [] } = json['bustime-response'];

        // If there is an error, show the first message
        if (error) {
          const { msg } = error[0];
          this.setState({
            error: msg,
          });
        } else {
          const mappedArrivals = arrivals.map(({ des, prdtm }) => {
            return { text: des, title: prdtm.substr(-5) };
          });
          this.setState({
            arrivals: mappedArrivals,
          });
        }
      });
  };

  onRefreshPress = () => {
    this.setState(
      {
        error: null,
        arrivals: null,
      },
      this.fetchBusTimes
    );
  };

  render() {
    const { error, arrivals } = this.state;

    return (
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 16, marginTop: 16 }}>Bus</Text>
        {error ? (
          <View>
            <ArrivalCard title={error} />
            <Icon containerStyle={{ padding: 16 }} name="refresh" onPress={this.onRefreshPress} />
          </View>
        ) : (
          <View>
            <ArrivalCardList arrivals={arrivals} onRefreshPress={this.onRefreshPress} />
          </View>
        )}
      </View>
    );
  }
}

export default BusArrivals;
