'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
const TabNavigatorItem =TabNavigator.Item;  
import Utils from './utils/Utils.js';
import MainHomeComp from './MainHomeComp.js';
import LoginComp from './LoginComp.js';
import MineEasyBuyComp from './mines/MineEasyBuyComp.js';
import ShopCarComp from './ShopCarComp.js';

const TAB_ITEM = [
    {
        code : 'main',
        name : '首页',
        icon_n : require('./images/tab_home_normal.png'),
        icon_p : require('./images/tab_home_pressed.png'),
        contentView : MainHomeComp,
    },
    {
        code : 'foreign',
        name : '嗨购',
        icon_n : require('./images/haigou_normal_icon.png'),
        icon_p : require('./images/haigou_press_icon.png'),
        contentView : MainHomeComp,
        badgeNum:10,
    },
    {
        code : 'community',
        name : '青春社区',
        icon_n : require('./images/tab_discovey_normal.png'),
        icon_p : require('./images/tab_discovey_pressed.png'),
        contentView : MainHomeComp,
        badgeNum:10,
    },
    {
        code : 'shopcart',
        name : '购物车',
        icon_n : require('./images/tab_shopping_normal.png'),
        icon_p : require('./images/tab_shopping_pressed.png'),
        contentView : ShopCarComp,
        badgeNum:10,
    },
    {
        code : 'Mine',
        name : '我的',
        icon_n : require('./images/tab_myebuy_normal.png'),
        icon_p : require('./images/tab_myebuy_pressed.png'),
        contentView : MineEasyBuyComp,
        badgeNum:10,
    },
];

class MainScreenComp extends Component {

      constructor(props) {
        super(props);
        this.state = {  
            items : TAB_ITEM,
            selectedTab : TAB_ITEM[3].code
        }
      }

      onPress(tabCode){  
        // if('Mine' == tabCode && !Utils.isLogin()){
        //     this.props.navigator.push({name:'LoginComp', component:LoginComp});
        //     return;
        // }
        if(tabCode){  
            this.setState({  
                selectedTab : tabCode
            });  
        }  
    }

    renderTabView(options){
        var tabNomal = options.icon_n;  
        var tabPress = options.icon_p;
        return(
            <TabNavigatorItem
                key={options.code} 
                // title={options.name}
                // titleStyle={{fontSize:16}}  
                renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}  
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}  
                selected={this.state.selectedTab === options.code}  
                // selectedTitleStyle={{color:'#5480ED'}}
                onPress={()=>this.onPress(options.code)}>
                <options.contentView route={this.props.route} navigator={this.props.navigator}/>
            </TabNavigatorItem>
            );
    }

    _renderIcon(tabNomal){
        return(
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image style={styles.tabIcon} source={tabNomal}/>
            </View>
            );
    }

  render() {
      var items = [];
        for (var i=0; i< this.state.items.length; i++) {
            items.push(this.renderTabView(this.state.items[i]));
        }
        return (  
            <View style={styles.container}>  
                <TabNavigator tabBarStyle={styles.tab}>  
                    {items}
                </TabNavigator>  
            </View>  
        );
  }
}

const styles = StyleSheet.create({
container: {  
    flex: 1,  
    backgroundColor: '#F5FCFF',  
  },    
  tab:{  
    height: 50,  
    alignItems:'center',  
    justifyContent:'center',
    backgroundColor:'#f4f5f6', 
    paddingTop:5,
  },
  tabIcon:{  
    width:72,  
    height:40,  
    resizeMode:'stretch',
  },  
  badgeView:{  
    width:22,  
    height:14 ,  
    backgroundColor:'#f85959',  
    borderWidth:1,  
    marginLeft:10,  
    marginTop:3,  
    borderColor:'#FFF',  
    alignItems:'center',  
    justifyContent:'center',  
    borderRadius:8,
  },  
  badgeText:{  
    color:'#fff',  
    fontSize:8,  
  },
});


export default MainScreenComp;