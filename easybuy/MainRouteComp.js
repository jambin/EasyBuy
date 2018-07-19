'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Navigator,
  BackAndroid,
  AsyncStorage,
} from 'react-native';

import Utils from './utils/Utils.js';
import InitComp from './InitComp.js';
import TestData from './TestData.js';

let _navigator = null;
let nowTime = 0;

class MainRouteComp extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};
      
      this._initAppData();
    }

    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress',()=>{
            if(!_navigator){
                return false;
            }
            let arrRoutes = _navigator.getCurrentRoutes();
            let len = arrRoutes.length;

            if(1 == len  && arrRoutes[0].name === 'InitComp'){
               return true;
            }

            if(arrRoutes[len - 1].name === 'MainScreenComp'){
                let nt = (new Date()).valueOf();
                if(nt - nowTime > 1500){
                    nowTime = nt;
                    Utils.myToast('再点击一次退出应用');
                    return true;
                }
                return false;
            }

            if(!arrRoutes || 1 >= arrRoutes.length){
                return false;
            }
            _navigator.pop();
            return true;
        });
    }

    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    _renderConfigureScene(){
        return Navigator.SceneConfigs.FloatFromRight;
    }

    _renderScene(route, navigator){
        _navigator = navigator;
        return <route.component {...route} route={route} navigator={navigator} />
    }

  render() {
    return (
      <Navigator 
          initialRoute={{name:'InitComp', component:InitComp}}
          renderScene={this._renderScene}
          configureScene={this._renderConfigureScene.bind(this)}
      />
    );
  }

  _initAppData(){
      // this._loadData();
      AsyncStorage.getItem('AppInitData', (error, result)=>{
          // Utils.myToast(result);

          if(!result){
              this._loadData();
          }else{
              TestData._setDataNetwork(JSON.parse(result));
          }
      });

      AsyncStorage.getItem('MineInfos', (error, result)=>{
          // Utils.myToast(result);

          if(!result){
              this._loadMineInfos();
          }else{
              TestData.setMineInfos(JSON.parse(result));
          }
      });
  }
   _loadData(){
     let url = 'http://lib.suning.com/app/cusHome/20000_4.7.2-925.json';
   //   // url = 'http://www.baidu.com/';
     fetch(url, {method:'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}}
      ).then((response)=>response.text()).then((json)=>{
            Utils.myToast('loading sucess');
            AsyncStorage.setItem('AppInitData', json);
            TestData._setDataNetwork(JSON.parse(json));
        
      })
     .catch((error)=>{Utils.myToast('loading error');});
     }

    _loadMineInfos(){
        let url = 'http://lib.suning.com/app/home/AppMyyigouv4.7.0-106.json';
        fetch(url, {method:'GET', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}}
        ).then((response)=>response.text()).then((json)=>{
            Utils.myToast('loading sucess');
            AsyncStorage.setItem('MineInfos', json);
            TestData.setMineInfos(JSON.parse(json));
        
        }).catch((error)=>{Utils.myToast('loading error');});
    }

}

const styles = StyleSheet.create({

});


export default MainRouteComp;