import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import Common from '../../styles/Common';
import API from '../../utils/api';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this._login = this._login.bind(this);
  }

  static navigationOptions = {
    header: null,
    title: 'Login'
  }

  _login() {

    const data = {
      email: this.state.email,
      password: this.state.password
    }

    API.post('/login/', data)
      .then((res) => {
        Alert.alert("Success", "")
      }).catch((err) => {
        Alert.alert("Error", err.message)
      })

  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <KeyboardAvoidingView behavior="padding" style={Common.container}>

        <View style={Common.formContainer}>
          <Text style={Common.logoText}>NTRY</Text>
          <TextInput
            placeholder="Email address"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={Common.input}
            onChangeText={(text) => this.setState({ email: text })}

          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            returnKeyType="go"
            style={Common.input}
            ref={(input) => this.passwordInput = input}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <TouchableOpacity onPress={this._login} style={Common.buttonContainer}>
            <Text style={Common.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Common.linkContainer} onPress={() => navigate('Register')}>
            <Text style={Common.buttonText}>Create an account</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }
}
