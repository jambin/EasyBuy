'use strict';

import React, { Component } from 'react';

/**
 * 首页titlebar
**/
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

import GoodsCategoryComp from '../GoodsCategoryComp.js';
import SearchGoodsComp from '../SearchGoodsComp.js';

class MainHomeTitlebar extends Component {
  render() {
    return (
        <View style={{height:40, flexDirection:'row', backgroundColor:'#FFD700', alignItems:'center', paddingLeft:10, paddingRight:10}}>
            <TouchableOpacity activeOpacity={0.8} onPress={this._onPress.bind(this, 1)}>
                <Image style={{height:32, width:20}} source={require('../images/category_icon.png')}/>
            </TouchableOpacity>
            <View style={{padding:5, margin:5, flex:1, flexDirection:'row', backgroundColor:'#FFFFFF',
                 borderRadius:5, marginLeft:10, marginRight:10, alignItems:'center'}}>
                <TouchableOpacity activeOpacity={0.8}  onPress={this._onPress.bind(this, 2)}>
                    <Image style={{height:14, width:14}} source={require('../images/icon_search_home.png')}/>
                </TouchableOpacity>
                <View style={{flex:1, flexDirection:'row',alignItems:'center', justifyContent: 'center', marginLeft:5, marginRight:5}} >
                    <TouchableOpacity style={{flex:1}}  onPress={this._onPress.bind(this, 2)}>
                      <Text textAlign='start' style={{backgroundColor:'#FFFFFF', flex:1, padding:0}} >圣诞的平安果1块抢</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8}  onPress={this._onPress.bind(this, 3)}>
                  <Image style={{height:14, width:14}} source={require('../images/icon_scan_code_top.png')}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8}  onPress={this._onPress.bind(this, 4)}>
              <Image style={{height:32, width:20}} source={require('../images/icon_mes_top.png')}/>
            </TouchableOpacity>
        </View>
    );
  }

    _onPress(opt){
        switch(opt){   
        case 1:               //分类
            InteractionManager.runAfterInteractions(() => {//执行耗时的同步任务
                this.props.navigator.push({name:'GoodsCategoryComp', component:GoodsCategoryComp});
            });
            
            break;
        case 2:              //检索
            this.props.navigator.push({name:'SearchGoodsComp', component:SearchGoodsComp});
            break;
        case 3:              //扫描
            break;
        case 4:              //消息
            break;
        }
    }
}

const styles = StyleSheet.create({

});


export default MainHomeTitlebar;