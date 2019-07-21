import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Icon } from 'react-native-elements';

import ArrivalCard from './ArrivalCard';

const ArrivalCardList = ({ arrivals, onRefreshPress }) => {
  if (!arrivals) return <ActivityIndicator />;
  return (
    <View>
      {arrivals.map((arrival, index) => (
        <ArrivalCard key={index} {...arrival} />
      ))}
      <Icon name="refresh" onPress={onRefreshPress} containerStyle={{ padding: 16 }} />
    </View>
  );
};

export default ArrivalCardList;
