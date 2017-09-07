import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './src/components/Login';
import Register from './src/components/Register';

const AppNavigation = StackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}