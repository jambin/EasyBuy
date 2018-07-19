'use strict';

import React, { Component } from 'react';

import {
    ToastAndroid,
} from 'react-native';

let loginName = null, loginPWD = null;

export default{
    
    isMobile(phone){
        if(this.isNull(phone)){
            return false;
        }

        var myreg = '^(((1[0-9]{2})|(15[0-9]{1})|(18[0-9]{1}))+\\d{8})$'; 
        if(phone.match(myreg)){
            return true;
        }

        return false;
    },

    isNull(text){
        if(null == text || text == ""){
            return true;
        }
        let regu = "^[ ]+$";
        let re = new RegExp(regu);
        return re.test(text);
    },

    myToast(msg){
        this.myToastEx(msg, ToastAndroid.SHORT);
    },
    
    myToastEx(msg, times){
        if(null == times){
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        }else{
            ToastAndroid.show(msg, times);
        }
    },

    setLoginInfos(name, pwd){
        loginName = name;
        loginPWD = pwd;
    },

    isLogin(){
        if(loginPWD && loginPWD){
            return true;
        }
        return false;
    },
}