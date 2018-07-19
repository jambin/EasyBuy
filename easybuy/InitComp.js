'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import MainScreenComp from './MainScreenComp.js';

let {width, height} = Dimensions.get('window');
let delay = 500;

class InitComp extends Component {

    constructor(props) {
      super(props);
    
      this.state = {};
    }

    componentDidMount(){
        setTimeout(()=>{this.props.navigator.push({name:'MainScreenComp', component:MainScreenComp});}, delay);
    }

  render() {
    return (
      <View ><Image style={{resizeMode:'stretch', width:width, height:height}} source={require('./images/init_bg.png')} /></View>
    );
  }
}

const styles = StyleSheet.create({

});


export default InitComp;