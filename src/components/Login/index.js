import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput,TouchableOpacity, KeyboardAvoidingView, StatusBar  } from 'react-native';


export default class Login extends Component {

  render() {
    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar
          barStyle="light-content"
         />
        <View style={styles.logoContainer}>
          <Text style={styles.titleText}>NTRY</Text>
        </View>
        <View style={styles.formContainer}>
            <TextInput
              placeholder="email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              />
            <TextInput
              placeholder="password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry
              returnKeyType="go"
              style={styles.input}
              ref={(input) => this.passwordInput = input }
              />
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.registerBtnContainer}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498ab',

  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    marginBottom: 10
  },
  formContainer: {
    padding: 20
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,.2)',
    marginBottom: 10,
    color: '#fff',
    paddingHorizontal: 10
  },
  registerBtnContainer: {
      marginTop: 50,
      marginBottom: 50
  },
  registerButtonText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  }
})
