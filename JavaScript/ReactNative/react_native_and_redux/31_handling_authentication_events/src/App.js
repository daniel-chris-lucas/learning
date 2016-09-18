import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA13TR8zdSfwmdH-FUPkgyIDnP_IxqWvB8',
            authDomain: 'authentication-99ddc.firebaseapp.com',
            databaseURL: 'https://authentication-99ddc.firebaseio.com',
            storageBucket: 'authentication-99ddc.appspot.com',
            messagingSenderId: '929891825634'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header>Authentication</Header>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
