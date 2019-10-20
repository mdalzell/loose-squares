import React from 'react';
import { createAppContainer } from 'react-navigation';

import Drawer from './components/shared/Drawer';

const AppContainer = createAppContainer(Drawer);
const App = () => <AppContainer />;

export default App;
