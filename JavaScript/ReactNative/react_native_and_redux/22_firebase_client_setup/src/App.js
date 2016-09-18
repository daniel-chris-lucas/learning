import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA13TR8zdSfwmdH-FUPkgyIDnP_IxqWvB8',
            authDomain: 'authentication-99ddc.firebaseapp.com',
            databaseURL: 'https://authentication-99ddc.firebaseio.com',
            storageBucket: 'authentication-99ddc.appspot.com',
            messagingSenderId: '929891825634'
        });
    }

    render() {
        return (
            <View>
                <Header>Authentication</Header>
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
