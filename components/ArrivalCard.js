import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

const ArrivalCard = ({ text, title }) => (
  <Card>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    <Text>{text}</Text>
  </Card>
);

export default ArrivalCard;
