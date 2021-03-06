import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../../screens/HomeScreen';
import BusScreen from '../../screens/BusScreen';

const Drawer = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  BusTimes: {
    screen: BusScreen,
    navigationOptions: () => ({
      title: 'Bus Times',
    }),
  },
});

export default Drawer;
