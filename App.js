/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import Routeration from './src/Route/router';

export default class App extends Component<{}> {
  render() {
    return (
     <View style={styles.container}>
        <StatusBar
          backgroundColor="#4b636e"
          barStyle="light-content"
        />
        <Routeration/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: '#78909c',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
