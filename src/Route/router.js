import {
  StackNavigator,
} from 'react-navigation';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routeration = StackNavigator({
  	Home: { screen: Login, },
 	Profile: { screen: Signup, },
});

export default Routeration;