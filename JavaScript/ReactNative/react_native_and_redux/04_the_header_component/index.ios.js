import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
    <Header>Albums</Header>
);

AppRegistry.registerComponent('albums', () => App);
