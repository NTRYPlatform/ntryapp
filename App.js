import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/components/Login';
import Register from './src/components/Register';

import * as openpgp from 'react-native-openpgp';


const AppNavigation = StackNavigator({
  
  Login: { screen: Login },
  Register: { screen: Register }
}, {
  initialRouteName: 'Register'
});


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'public': '',
      'private': ''
    };

    this.onPressGenKeyPair = this.onPressGenKeyPair.bind(this);

  }


  onPressGenKeyPair() {

    const options = {
      userIds: [{ name: 'Basit Raza', email: 'basit.raza11@gmail.com' }],
      numBits: 2048,
      passphrase: 'testnet'
    };

    openpgp.generateKey(options)
      .then((key) => {
        this.setState({ 'public': key.publicKeyArmored });
      })
      .catch((err) => {
        Alert.alert('Something went wrong');
      })



  }


  render() {
    return (
      <AppNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
