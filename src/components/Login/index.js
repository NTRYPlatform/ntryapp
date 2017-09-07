import React, { Component } from 'react';
import {  View, Text, TextInput,TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import Common from '../../styles/Common';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
    title : 'Login'
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
              />
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry
              returnKeyType="go"
              style={Common.input}
              ref={(input) => this.passwordInput = input }
              />
              <TouchableOpacity style={Common.buttonContainer}>
                <Text style={Common.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Common.linkContainer} onPress={()=> navigate('Register')}>
                <Text style={Common.buttonText}>Create an account</Text>
              </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }
}
