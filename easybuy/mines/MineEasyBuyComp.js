'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

let {height, width} = Dimensions.get('window');
let screenWidth = width, screenHeight = height;

import TestData from '../TestData.js';
import Utils from '../utils/Utils.js';
import WebViewComp from '../WebViewComp.js';

let BASEURL_IMAGE = 'http://image.suning.cn/';

class MineEasyBuyComp extends Component {
  render() {
    return (
        <View style={{backgroundColor:'#FFFFFF', flex:1}}>
            <Image resizeMode='stretch' style={{width:screenWidth, height:150, paddingTop:10, paddingLeft:10, paddingBottom:10}} source={require('../images/mine/act_myebuy_top_bg.png')}>
                <View>
                    <View style={{flexDirection:'row', margin:10}}>
                      <Text style={{fontSize:14, color:'#FFFFFF', flex:1, textAlign:'right'}}>设置</Text>
                      <Image style={{width:20, height:20, marginLeft:10}} source={require('../images/mine/ucwv_msg_center_icon.png')}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:60, height:60, borderRadius:60, marginTop:10}} source={require('../images/mine/cart1_rebate_snshop.png')} />
                        <View style={{marginLeft:10, justifyContent: 'flex-end', flex:1}}>
                            <View><Text style={{fontSize:14, color:'#FFFFFF'}}>{'18924124118'}</Text></View>
                            <View style={{marginTop:10, width:55, padding:2, borderRadius:5, backgroundColor:'#000000', flexDirection:'row', alignItems: 'center',}}>
                                <Image style={{width:28, height:10}} source={require('../images/level/level1.png')} />
                                <Text style={{color:'#FFFFFF', fontSize:10}}>会员</Text>
                            </View>
                        </View>
                        <View style={{flex:1, marginTop:10}}>
                            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection:'row'}}>
                                <View style={{flex:1}}></View>
                                <View style={{paddingLeft:10, paddingRight:10, backgroundColor:'#FFFFFF',borderBottomLeftRadius:15, borderTopLeftRadius:15}}>
                                    <Text style={{textAlign:'right', fontSize:14, color:'#FF8247'}}>领取好劵</Text>
                                </View>
                            </View>
                            <View style={{paddingRight:10, flex:1, alignItems: 'flex-end', justifyContent: 'flex-end',}}>
                                <Text style={{textAlign:'right', fontSize:12, color:'#FFFFFF'}}>{'地址账号管理 >'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Image>
            {this._renderOrederMenu()}
            {this._renderLine()}
            {this._renderGift()}
            {this._renderMoney()}
            {this._renderLine()}
            {this._renderMenu()}
            {this._renderLine()}
        </View>
    );
  }

  _renderLine(){
      return(<View style={{backgroundColor:'#EAEAEA', height:10}}></View>);
  }

  _renderOrederMenu(){
      let views = [];
      let menu = [
          {name:'待支付', pic:require('../images/mine/icon_act_myebuy_waitfor_pay.png')},
          {name:'待收货', pic:require('../images/mine/icon_act_myebuy_waitfor_accept.png')},
          {name:'待评价', pic:require('../images/mine/icon_act_myebuy_waitfor_evaluation.png')},
          {name:'退换/维修', pic:require('../images/mine/icon_act_myebuy_waitfor_return.png')},
          {name:'全部订单', pic:require('../images/mine/icon_my_order.png')},
      ];

      for(let index = 0, len = menu.length; index < len; index++){
          views.push(
                <View key={'orderMenu'+index} style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
                    <Image style={{width:25, height:25}} source={menu[index].pic} />
                    <Text style={{fontSize:14, color:'#666666'}}>{menu[index].name}</Text>
                </View>
            );
      }

      return(
        <View style={{flexDirection:'row', margin:10}}>
            {views}
        </View>
        );
  }

  _renderMoney(){
      //act_myebuy_fix_1_icon.png
      let data = TestData._getMineInfosTypeSequence(1110, 6).tag;
      return(
          <View style={{borderTopWidth:1, borderTopColor:'#EAEAEA', flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#EAEAEA'}}>
          <TouchableOpacity onPress={this._onClick.bind(this, data[0])} style={{flex:1}}><View style={{flex:1, borderRightWidth:1, borderRightColor:'#EAEAEA', padding:5, alignItems: 'center', justifyContent: 'center',}}>
              <Image style={{width:25, height:25}} source={require('../images/mine/act_myebuy_fix_1_icon.png')} />
              <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data[0].elementName}</Text>
              <Text style={{fontSize:14, marginTop:5}}>0张可用</Text>
          </View></TouchableOpacity>
          <View style={{flex:1, borderRightWidth:1, borderRightColor:'#EAEAEA'}}>
              <TouchableOpacity onPress={this._onClick.bind(this, data[1])}><View style={{flex:1, padding:5, borderBottomWidth:1, borderBottomColor:'#EAEAEA', alignItems: 'center', justifyContent: 'center',}}>
                  <Text style={{fontSize:13, color:'#FFAA02'}}>去开通</Text>
                  <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data[1].elementName}</Text> 
              </View></TouchableOpacity>
              <TouchableOpacity onPress={this._onClick.bind(this, data[3])}><View style={{flex:1, padding:5, alignItems: 'center', justifyContent: 'center',}}>
                  <Text style={{fontSize:13, color:'#FFAA02'}}>{data[3].elementDesc?data[3].elementDesc:'邀请好友'}</Text>
                  <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data[3].elementName}</Text>
              </View></TouchableOpacity>
          </View>
          <View style={{flex:1}}>
            <TouchableOpacity onPress={this._onClick.bind(this, data[2])}><View style={{flex:1, padding:5, borderBottomWidth:1, borderBottomColor:'#EAEAEA', alignItems: 'center', justifyContent: 'center',}}>
                  <Text style={{fontSize:13, color:'#FFAA02'}}>1000.00</Text>
                  <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data[2].elementName}</Text> 
              </View></TouchableOpacity>
              <TouchableOpacity onPress={this._onClick.bind(this, data[4])}><View style={{flex:1, padding:5, alignItems: 'center', justifyContent: 'center',}}>
                  <Text style={{fontSize:13, color:'#FFAA02'}}>{data[4].elementDesc?data[4].elementDesc:'精品一元筹'}</Text>
                  <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data[4].elementName}</Text> 
              </View></TouchableOpacity>
          </View>
          </View>
      );
  }

    _renderGift(){
        let datas = TestData._getMineInfosTypeSequence(1109, 3);
        if(!datas){
            return null;
        }
        let data = datas.tag;
        // Utils.myToast(JSON.stringify(data));
        let views = [];
        for(let index = 0, len = data.length; index < len; index++){
            let url = BASEURL_IMAGE + data[index].picUrl;
            views.push(
                <View key={'gift'+index} style={{flex:1}}>
                    <TouchableOpacity onPress={this._onClick.bind(this, data[index])}>
                        <Image resizeMode='stretch' style={{height:80, width:width/len}} source={{uri:url}}/>
                    </TouchableOpacity>
                </View>
            );
        }

        return(
            <View style={{flexDirection:'row'}}>{views}</View>
        );
    }
  _renderMenu(){
      let views1 = [], views2 = [];
      let datas = TestData._getMineInfosTypeSequence(1111, 7);

      let data1 = [
          datas[0].tag[0],
          datas[1].tag[0],
          datas[2].tag[0],
          datas[3].tag[0],
          // {name:'待支付', pic:require('../images/mine/icon_act_myebuy_waitfor_pay.png')},
          // {name:'待收货', pic:require('../images/mine/icon_act_myebuy_waitfor_accept.png')},
          // {name:'待评价', pic:require('../images/mine/icon_act_myebuy_waitfor_evaluation.png')},
          // {name:'退换/维修', pic:require('../images/mine/icon_act_myebuy_waitfor_return.png')},
          // {name:'全部订单', pic:require('../images/mine/icon_my_order.png')},
      ];

      let data2 = [
          datas[4].tag[0],
          datas[5].tag[0],
          datas[6].tag[0],
          datas[7].tag[0],
          // {name:'待支付', pic:require('../images/mine/icon_act_myebuy_waitfor_pay.png')},
          // {name:'待收货', pic:require('../images/mine/icon_act_myebuy_waitfor_accept.png')},
          // {name:'待评价', pic:require('../images/mine/icon_act_myebuy_waitfor_evaluation.png')},
          // {name:'退换/维修', pic:require('../images/mine/icon_act_myebuy_waitfor_return.png')},
          // {name:'全部订单', pic:require('../images/mine/icon_my_order.png')},
      ];

      for(let index = 0, len = data1.length; index < len; index++){
        let url = BASEURL_IMAGE + data1[index].picUrl;
          views1.push(
                <View key={'menu1'+index} style={{flex:1, borderBottomWidth:1, borderBottomColor:'#EAEAEA', borderRightWidth:1, 
                  borderRightColor:'#EAEAEA', justifyContent: 'center', alignItems: 'center', padding:10}}>
                   <TouchableOpacity onPress={this._onClick.bind(this, data1[index])}>
                      <Image style={{width:25, height:25}} source={{uri:url}} />
                      <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data1[index].elementName}</Text>
                  </TouchableOpacity>
                </View>
          );
      }

      for(let index = 0, len = data2.length; index < len; index++){
          let url = BASEURL_IMAGE + data2[index].picUrl;
          views2.push(
                <View key={'menu2'+index} style={{flex:1, borderBottomWidth:1, borderBottomColor:'#EAEAEA', borderRightWidth:1, 
                  borderRightColor:'#EAEAEA', justifyContent: 'center', alignItems: 'center', padding:10}}>
                    <TouchableOpacity onPress={this._onClick.bind(this, data2[index])}>
                      <Image style={{width:25, height:25}} source={{uri:url}} />
                      <Text style={{fontSize:14, color:'#666666', marginTop:5}}>{data2[index].elementName}</Text>
                    </TouchableOpacity>
                </View>
          );
      }

      return(
          <View>
            <View style={{flexDirection:'row'}}>
                {views1}
            </View>
            <View style={{flexDirection:'row'}}>
                {views2}
            </View>
        </View>
      );
  }

    _onClick(data){
        this.props.navigator.push({name:'WebViewComp', component:WebViewComp, params:{url:data.linkUrl, title:data.elementName}});
    }

}

const styles = StyleSheet.create({

});


export default MineEasyBuyComp;