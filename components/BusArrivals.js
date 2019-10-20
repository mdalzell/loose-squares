import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { CTA_BUS_API_KEY, CTA_BUS_API_URL } from 'react-native-dotenv';
import { Icon } from 'react-native-elements';

import ArrivalCard from './shared/ArrivalCard';

import stopIds from '../constants/stopIds';
import ArrivalCardList from './shared/ArrivalCardList';

const fetchUrl = `${CTA_BUS_API_URL}getpredictions?key=${CTA_BUS_API_KEY}&stpid=${stopIds.WentworthAnd26th}&format=json`;

const BusArrivals = () => {
  const [error, setError] = useState(null);
  const [arrivals, setArrivals] = useState(null);

  useEffect(() => {
    fetchBusArrivals();
  });

  const fetchBusArrivals = () => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(json => {
        const { error = null, prd: arrivals = [] } = json['bustime-response'];

        // If there is an error, show the first message
        if (error) {
          const { msg } = error[0];
          setError(msg);
        } else {
          const mappedArrivals = arrivals.map(({ des, prdtm }) => {
            return { text: des, title: prdtm.substr(-5) };
          });
          setArrivals(mappedArrivals);
        }
      });
  };

  const onRefreshPress = () => {
    setError(null);
    setArrivals(null);
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 16, marginTop: 16 }}>Bus</Text>
      {error ? (
        <View>
          <ArrivalCard title={error} />
          <Icon containerStyle={{ padding: 16 }} name="refresh" onPress={onRefreshPress} />
        </View>
      ) : (
        <View>
          <ArrivalCardList arrivals={arrivals} onRefreshPress={onRefreshPress} />
        </View>
      )}
    </View>
  );
};

export default BusArrivals;
