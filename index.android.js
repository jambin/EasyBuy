/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import MainRouteComp from './easybuy/MainRouteComp.js';

export default class EasyBuy extends Component {
  render() {
	  
    return (
      <MainRouteComp />
    );
  }

  _onclick(){
    this.refs['input'].setFocus(true);
    let text = this.refs['input'].getText();
    ToastAndroid.show(text, ToastAndroid.SHORT);
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EasyBuy', () => EasyBuy);
