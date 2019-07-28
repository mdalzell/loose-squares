import React from 'react';
import { createAppContainer } from 'react-navigation';

import Drawer from './components/shared/Drawer';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppContainer = createAppContainer(Drawer);
