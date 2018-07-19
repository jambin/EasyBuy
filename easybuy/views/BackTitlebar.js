
'use strict';

import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};

const BackTitlebar = ({ title, onClick}) => (
    <View style={{backgroundColor:'#EDEDED', flexDirection:'row', alignItems:'center', paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5}}>
        <TouchableOpacity activeOpacity={0.8} onPress={onClick}>
            <Image style={{height:25, width:25}} source={require('../images/btn_back.png')}/>
        </TouchableOpacity>
        <View style={{flex:1, flexDirection:'row', padding:5, alignItems:'center', justifyContent: 'center',}}>
            <Text textAlign='center' style={{fontSize:18, color:'#666666'}}>{title}</Text>
        </View>
        <Text style={{width:25}}></Text>
    </View>
);

BackTitlebar.propTypes = propTypes;

BackTitlebar.defaultProps = {
  onClick() {},
};

export default BackTitlebar;