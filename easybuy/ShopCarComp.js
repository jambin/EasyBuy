'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

let data = [
    1,2,3,4,5,6,7,8,9
];

let selPic = require('./images/car/cart1_checkbox_check.png');
let noSelPic = require('./images/car/cart1_checkbox_normal.png');

/**
 * 购物车
**/
class ShopCarComp extends Component {
    constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});
      this.state = {
        dataSource: this.ds.cloneWithRows(data),
        selAll : false,
      };
    }

    _renderTitleBar(){
        return(
            <View style={{backgroundColor:'#EDEDED', paddingTop:10, paddingBottom:10, justifyContent: 'center', alignItems: 'center',}}>
                 <Text style={{fontSize:18, color:'#333333'}}>购物车</Text>
            </View>
            );
    }
    _renderSelAllView(){
        let selpic = this.state.selAll? selPic : noSelPic;
        return(
            <View style={{height:40, backgroundColor:'#FFFFFF', marginTop:10, alignItems: 'center', padding:10, flexDirection:'row'}}>
                <TouchableOpacity activeOpactiy={0.8} onPress={this._onClickSelAll.bind(this)} >
                    <Image style={{width:18, height:18}} source={selpic}/>
                </TouchableOpacity>
                <Image style={{width:24, height:24, marginLeft:5}} source={require('./images/car/cart1_rebate_snshop.png')} />
                <Text style={{fontSize:14, color:'#333333', flex:1}}>苏宁自营</Text>
                <View style={{borderWidth:1, borderColor:'#FFA500', borderRadius:5, alignItems: 'center', justifyContent: 'center',}}>
                    <Text style={{fontSize:12, color:'#FFA500', textAlign:'center', paddingLeft:5, paddingRight:5}}>领券</Text>
                </View>
            </View>
            );
    }

    _renderRows(row, sectionID, rowID){
        return(
            <View style={{height:120, padding:10, flexDirection:'row', alignItems: 'center',}}>
                <Image style={{width:18, height:18}} source={this.state.selAll?selPic:noSelPic}/>
                <Image style={{width:80, height:90, marginLeft:10}} source={{uri:'http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000135500955_1_400x400.jpg?from=mobile'}}/>
                <View style={{flex:1, flexDirection:'column', marginLeft:10}}>
                    <View style={{flex:1}}><Text>111111</Text></View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:1, fontSize:16, color:'#FF0000'}}>189</Text>
                        <View style={{ flexDirection:'row'}}>
                            <Image style={{width:25, height:25}} source={require('./images/car/shoppingcart_sub_btn_enabled.png')}/>
                            <Image style={{width:25, height:25, justifyContent: 'center', alignItems: 'center',}} source={require('./images/car/shoppingcart_numtext_bg.png')}>
                                <Text style={{fontSize:14, color:'#333333'}}>12</Text>
                            </Image>
                            <Image style={{width:25, height:25}} source={require('./images/car/shoppingcart_add_btn_enabled.png')}/>
                        </View>
                    </View>
                </View>
            </View>
            );
    }

    _renderSeparator(sectionID, rowID){
        return(<View key={rowID} style={{backgroundColor:'#E8E8E8', height:1}}></View>);
    }

    render() {
        return (
            <View style={{flexDirection:'column', flex:1}}>
                {this._renderTitleBar()}
                {this._renderSelAllView()}
                <View style={{flexDirection:'column', flex:1}}>
                    <ListView 
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRows.bind(this)}
                        renderSeparator={this._renderSeparator.bind(this)}
                    />
                </View>
                <View style={{height:50, backgroundColor:'#FFFFFF', flexDirection:'row', alignItems: 'center'}}> 
                    <TouchableOpacity activeOpactiy={0.8} onPress={this._onClickSelAll.bind(this)} >
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:18, height:18, marginLeft:10}} source={this.state.selAll? selPic : noSelPic}/>
                        <Text style={{color:'#333333', marginLeft:5}}>全选</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignItems: 'flex-end',}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:14, color:'#333333'}}>合计:</Text>
                            <Text style={{fontSize:14, color:'#FF0000'}}>111111</Text>
                        </View>
                        <Text style={{fontSize:12, color:'#333333'}}>免运费</Text>
                    </View>
                    <View style={{backgroundColor:'#FF0000', height:50, padding:10, marginLeft:5}}>
                        <Text style={{ textAlign:'center',  fontSize:22, color:'#FFFFFF'}}>去结算(9)</Text>
                    </View>
                </View>
            </View>
    );
  }

    _onClickSelAll(){
        let flag = !this.state.selAll;
        this.setState({selAll:flag, dataSource:this.ds.cloneWithRows(data)});
    }
}

const styles = StyleSheet.create({

});


export default ShopCarComp;