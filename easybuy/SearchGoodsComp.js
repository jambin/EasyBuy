'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import WebViewComp from './WebViewComp.js';
import TestData from './TestData.js';

var Dimensions = require('Dimensions');  
const screenW = Dimensions.get('window').width; 
let itemWidth = (screenW-20)/3-10;
let btn_back = require('./images/btn_back.png');

class SearchGoodsComp extends Component {
    constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});
      this.state = {
          dataSource : this.ds.cloneWithRows(TestData._initTestSearchWord()),
          selSearchWord:'',
      };

      this._goback = this._goback.bind(this);

    }

    _goback(){
        this.props.navigator.pop();
    }

    _renderRows(row, sectionID, rowID){
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={this._selWord.bind(this, row)}><View style={{flexDirection:'column', backgroundColor:'#E8E8E8',alignItems:'center', justifyContent: 'center',
                width:itemWidth, marginLeft:5, marginRight:5, marginBottom:5, padding:5}}>
                    <Text textAlign='center' numberOfLines={1} style={{color:'#666666', fontSize:14}} >{row}</Text>  
            </View></TouchableOpacity>
            );
    }

    _selWord(){
        // this.setState({selSearchWord:''});
        this.props.navigator.push({name:'WebViewComp', component:WebViewComp});
    }

  render() {
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF', flexDirection:'column'}}>
            <View style={{flexDirection:'row', alignItems:'center', paddingLeft:10, paddingRight:10, paddingTop:5, paddingBottom:5}}>
                <TouchableOpacity activeOpacity={0.8} onPress={this._goback}>
                    <Image style={{height:25, width:25}} source={btn_back}/>
                </TouchableOpacity>
                <View style={{flex:1, margin:5, flexDirection:'row', backgroundColor:'#E8E8E8', padding:5, alignItems:'center'}}>
                    <Image style={{height:14, width:14}} source={require('./images/icon_search_home.png')}/>
                    <TextInput textAlign='start' style={{marginLeft:5,backgroundColor:'#E8E8E8', flex:1, padding:0}} placeholder='圣诞的平安果1块抢' ></TextInput>
                    <Image style={{height:18, width:18}} source={require('./images/voice_icon_white.png')}/>
                </View>
                <Text style={{fontSize:16, color:'#666666'}}>搜索</Text>
            </View>
            <View style={{backgroundColor:'#E8E8E8', height:1}} />
            <View>
                <Text style={{fontSize:14,margin:10}}>热门搜索</Text>
            </View>
            <View style={{marginLeft:10, marginRight:10}}>
                <ListView 
                    contentContainerStyle={{flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}
                    renderRow={this._renderRows.bind(this)}
                    dataSource={this.state.dataSource}
                />
            </View>
        </View>
    );
  }
    
}

const styles = StyleSheet.create({

});


export default SearchGoodsComp;