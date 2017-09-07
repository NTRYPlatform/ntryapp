import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Common from '../../styles/Common';
import { GenerateKeyPair, SaveVal, Sign, Verify } from '../../utils/helpers';
import API from '../../utils/api';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            eth_address: ''            
        };

        this._register = this._register.bind(this);
    }

    static navigationOptions = {
        header: null,
        title: 'Register'
    }
    _register() {

        var data = {
            email: this.state.email,
            password: this.state.password,
            eth_address: this.state.eth_address
        }

        API.post("register/", data)
            .then((result) => {
                Alert.alert("Success", "User registered successfully!")
            }).catch((err) => {
                Alert.alert("Error", err.message)
            })

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={Common.container}>
                <View style={Common.formContainer}>
                    <Text style={Common.registerTitleText}>Create an account</Text>
                    <TextInput
                        placeholder="Email address"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={Common.input}
                        ref={(input) => this.emailInput = input}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="New password"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={(input) => this.passwordInput = input}
                        style={Common.input}
                        onChangeText={(text) => this.setState({ password: text })}
                        secureTextEntry

                    />

                    <TextInput
                        placeholder="Eth Address"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={(input) => this.eth_address = input}
                        style={Common.input}
                        onChangeText={(text) => this.setState({ eth_address: text })}

                    />

                    <TouchableOpacity onPress={this._register} style={Common.buttonContainer}>
                        <Text style={Common.buttonText}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=> navigate('Login')} style={Common.linkContainer}>
                        <Text style={Common.buttonText}>Already Registered? Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

