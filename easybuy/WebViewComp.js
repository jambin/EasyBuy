'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

let btn_back = require('./images/btn_back.png');
let url = 'http://www.baidu.com';

class WebViewComp extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};

      this._goback = this._goback.bind(this);
    }

    _goback(){
        this.props.navigator.pop();
    }

  render() {
    // if(!this.props.url){
    //     this._goback();
    // }
    let loadURL = this.props.params.url?this.props.params.url:url;
    let title = this.props.params.title?this.props.params.title:'圣诞的平安果1块抢';
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF', flexDirection:'column'}}>
            <View style={{flexDirection:'row', alignItems:'center', paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5}}>
                <TouchableOpacity activeOpacity={0.8} onPress={this._goback}>
                    <Image style={{height:25, width:25}} source={btn_back}/>
                </TouchableOpacity>
                <View style={{flex:1, margin:5, flexDirection:'row', padding:5, alignItems:'center', justifyContent: 'center',}}>
                    <Text textAlign='center' style={{fontSize:16, color:'#666666'}}>{title}</Text>
                </View>
                <Text style={{width:25}}></Text>
            </View>
            <View style={{flex:1}}>
            <WebView
                ref="webview"
                source={{uri:loadURL}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={true}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default WebViewComp;