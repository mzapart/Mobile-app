import {createStackNavigator, createAppContainer} from 'react-navigation';
import RandomMem from '../RandomMem';

const MainNavigator = createStackNavigator({
  Screen1: {screen: RandomMem},
  
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;