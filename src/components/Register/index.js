import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Common from '../../styles/Common';
import { GenerateKeyPair, SaveVal, Sign, Verify } from '../../utils/helpers';
import conf from '../../conf/conf';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            private: '',
            public: '',
            eth_address: '',
            singed: ''
        };

        this._register = this._register.bind(this);
        this._sign = this._sign.bind(this);
        this._verify = this._verify.bind(this);
    }

    static navigationOptions = {
        header: null,
        title: 'Register'
    }

    _sign() {
        Sign("this is test", this.state.private, this.state.public)
            .then((r) => {
                Alert.alert("Success", r.data)
                this.setState({ singed: r.data });

                fetch("http://192.168.10.21:9000/ntry/signed", {
                    method: 'POST',
                    body:  this.state.singed
                })
                .then((r) => {
                  Alert.alert("Singed", r.statusText)
                })
                .catch((error) => {
                  console.log(error)
                  Alert.alert("Submit Error", error.message)
                });
            })
            .catch((err) => {
                Alert.alert("Error")
            });
    }

    _verify() {
        const result = Verify(this.state.singed, this.state.public);
        if (result.hasOwnProperty("data")) {
            Alert.alert("Result", result.data);
            Alert.alert("Signatures", result.signatures);
        } else {
            Alert.alert("Result", result);
        }

    }

    _register() {

        const options = {
            userIds: [{ email: this.state.email }],
            numBits: 512,
            passphrase: this.state.password
        }
        GenerateKeyPair(options, (key) => {
            this.setState({ public: key.publicKeyArmored, private: key.privateKeyArmored })
            
            fetch("/ntry/pk", {
                method: 'POST',
                body:JSON.stringify({
                    publickey :this.state.public,
                    email: this.state.email,
                    password: this.state.password,
                    eth_address: this.state.eth_address
                })
            }).then((r) => {
                Alert.alert("PK",r.statusText)
              })
              .catch((error) => {
                Alert.alert("Submit Error", error.message)
              });

            Alert.alert("Keypair generated sucessfully!")
        }, (err) => {
            console.log(err)
            Alert.alert("Something went wrong!")
        });

    }

    render() {
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
                    
                </View>
            </KeyboardAvoidingView>
        );
    }
}

