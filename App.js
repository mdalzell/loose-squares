import React from 'react';

import { createAppContainer } from 'react-navigation';

import Drawer from './components/shared/Drawer';
import HomeScreen from './screens/HomeScreen';

const AppContainer = createAppContainer(Drawer);
const App = () => (__DEV__ ? <AppContainer /> : <HomeScreen />);

export default App;
