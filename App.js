import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from './scr/screens/SignUp';
import Login from './scr/screens/Login';

const navigator = createStackNavigator({
  Login: Login,
  SignUp: SignUp,
},
{
  headerMode: 'none',
  defaultNavigationOptions: {
    headerVisible: false,
  }
});

const App = createAppContainer(navigator)

export default () => {
  return <App />
};