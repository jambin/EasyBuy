'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import BackTitlebar from './views/BackTitlebar.js';
import Utils from './utils/Utils.js';

let {width, height} = Dimensions.get('window');

class LoginComp extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        loginName:'',
        loginPWD:'',
      };

      this._goback = this._goback.bind(this);
    }

    _goback(){
        this.props.navigator.pop();
    }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#FFFFFF', alignItems: 'center',}}>
          <BackTitlebar onClick={this._goback} title='登录'/>

          <View style={{height:40, marginLeft:10, marginRight:10, flexDirection:'row', 
              justifyContent: 'center', alignItems: 'center', marginTop:50}}>
              <Text style={{color:'#666666', fontSize:16}}>账  号：</Text>
              <TextInput ref='name' style={{flex:1, fontSize:16, backgroundColor:'transparent'}} 
                  placeholderTextColor='#CCCCCC'
                  autoFocus={true}
                  onChangeText={(text) => {this.setState({loginName:text});}}
                  value = {this.state.loginName}
                  placeholder='手机号码、邮箱、用户名、门店会员卡'/>
          </View>
          <Text style={{width:width-20, height:1, backgroundColor:'#EEE9E9', marginLeft:10, marginRight:10}}/>
          <View style={{height:40, marginLeft:10, marginRight:10, flexDirection:'row', 
              justifyContent: 'center', alignItems: 'center', marginTop:5}}>
              <Text style={{color:'#666666', fontSize:16}}>密  码：</Text>
              <TextInput ref='pwd' style={{flex:1, fontSize:16, backgroundColor:'transparent'}} 
                  secureTextEntry={true}
                  placeholderTextColor='#CCCCCC'
                  onChangeText={(text) => {this.setState({loginPWD:text});}}
                  value = {this.state.loginPWD}
                  placeholder='请输入6-20位易购密码'/>
          </View>
          <Text style={{width:width-20, height:1, backgroundColor:'#EEE9E9', marginLeft:10, marginRight:10}}/>

          <TouchableOpacity activeOpacity={0.8} onPress={this._login.bind(this)}>
          <View style={{backgroundColor:'#EEB422', borderRadius:5, width:width-20, height:40, justifyContent: 'center', alignItems: 'center',marginTop:30}}>
              <Text style={{fontSize:16, color:'#FFFFFF'}}>登录</Text>
          </View>
          </TouchableOpacity>

          <View style={{height:40, marginLeft:10, marginRight:10, marginTop:20, flexDirection:'row'}}>
              <TouchableOpacity activeOpacity={0.8} onPress={this._register.bind(this)}><Text style={{fontSize:14, color:'#EEB422'}}>手机号快速注册</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={this._forgetPWD.bind(this)}  style={{flex:1}}><Text style={{flex:1, fontSize:14, color:'#999999', textAlign:'right'}}>忘记密码</Text></TouchableOpacity>
          </View>

            <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end'}}>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
                    <View style={{flex:1, height:1, backgroundColor:'#EEE9E9', marginLeft:10, marginRight:10}}/>
                    <Text style={{fontSize:14}}>其他登录方式</Text>
                    <View style={{flex:1, height:1, backgroundColor:'#EEE9E9', marginLeft:10, marginRight:10}}/>
                </View>
                <View style={{flexDirection:'row', alignItems: 'center', marginTop:20, marginBottom:20}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._otherLoginType.bind(this, 1)} style={{flex:1}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>
                        <Image style={{width:25, height:25}} source={require('./images/icon_store_membership_card.png')} />
                        <Text style={{fontSize:14, marginTop:10}}>门店会员卡</Text>
                    </View></TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._otherLoginType.bind(this, 2)}  style={{flex:1}}>
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width:25, height:25}} source={require('./images/icon_yfb.png')} />
                        <Text style={{fontSize:14, marginTop:10}}>易付宝</Text>
                    </View></TouchableOpacity>
                </View>
            </View>
      </View>
    );
  }

  _login(){
      if(!this.state.loginName && !this.state.loginPWD){
          Utils.myToast('请输入账号和密码');
          return;
      }
      Utils.setLoginInfos(this.state.loginName, this.state.loginPWD);
  }

  _register(){
      Utils.myToast('注册失败');
  }

  _forgetPWD(){
      Utils.myToast('忘记密码失败');
  }

  _otherLoginType(types){
     Utils.myToast('其他登录失败');
  }

}

const styles = StyleSheet.create({

});


export default LoginComp;