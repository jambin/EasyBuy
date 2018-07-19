'use strict';


/**
 * 物品分类检索
**/
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';

import SearchGoodsComp from './SearchGoodsComp.js';
import Utils from './utils/Utils.js';
import WebViewComp from './WebViewComp.js';

import TestData from './TestData.js';

let{height, width} = Dimensions.get('window');

let initCategory = [];
let initGoods = [];

let itemWidth = (width-85)/3-10;

class GoodsCategoryComp extends Component {
    constructor(props) {
      super(props);
      this.category = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});
      this.goods = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});

      // this._initTestCate();
      initCategory = TestData._initCategory();

      this.state = {
          selCategory : initCategory[0],
          dataSourceCate : this.category.cloneWithRows(initCategory),
          dataSourceGoods : this.goods.cloneWithRows(initGoods),
      };
    }

    componentDidMount(){
        setTimeout(()=>{this._initTestCate()}, 1000);
    }

    _initTestCate(){
       // initCategory = TestData._initCategory();
       let category = this.state.selCategory;
       initGoods = TestData._initTestGoods(category.name, category.code);
       this.setState({dataSourceGoods : this.goods.cloneWithRows(initGoods)});

    }

    _renderRowsCate(row, sectionID, rowID){
        let style = {};
        // Utils.myToast(this.state.selCategory + '');
        if(null != row && row.code == this.state.selCategory.code){
            style={borderLeftWidth:2, borderLeftColor:'#FF7F50', backgroundColor:'#E8E8E8'};
        }
        return(
            <TouchableOpacity activeOpacity={1.0} onPress={this._onSelectedCate.bind(this, row)} >
            <View style={{height:50, backgroundColor:'#FFFFFF', alignItems:'center', justifyContent: 'center', ...style}}>
                <Text style={{fontSize:16, color:'#666666'}}>{row.name}</Text>
            </View></TouchableOpacity>
          );
    }

    _renderRowsGoods(row, sectionID, rowID){
        let item = [];
        for(let index=0; index < row.child.length; index++){
            item.push(
                <TouchableOpacity key={rowID+':'+index}  activeOpacity={0.8} onPress={this._onSelGoods.bind(this, row.child[index])}>
                <View style={{justifyContent: 'center', alignItems:'center',width:itemWidth, height:itemWidth+15, margin:5, borderWidth:2, borderColor:'#EEE0E5'}}>
                    <Image style={{width:60, height:60}} source={row.child[index].pic}/>
                    <Text style={{marginTop:5}}>{row.child[index].name}</Text>
                </View>
                </TouchableOpacity>
            );
        }
        return(
            <View style={{flexDirection:'column'}}>
            <View style={{height:45, justifyContent:'center',}}>
                <Text style={{fontSize:14, color:'#666666'}}>{row.name}</Text></View>
            <View style={{alignItems:'flex-start', backgroundColor:'#FFFFFF', flexWrap:'wrap', flexDirection:'row'}}>
                {item}
            </View>
            </View>
        );
    }
    _onSelectedCate(row){
        this.state.selCategory = row;
        this.setState({dataSourceCate: this.category.cloneWithRows(initCategory)});
        this._initTestCate();
    }

    _onSelGoods(goods){
        this.props.navigator.push({name:'WebViewComp', component:WebViewComp});
    }
    _renderSeparatorCate(sectionID, rowID){
         return(<View key={rowID} style={{backgroundColor:'#E8E8E8', height:1}}></View>);
    }

  render() {
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF', flexDirection:'column'}}>
            <TouchableOpacity activeOpacity={0.8} onPress={this._onPressSearch.bind(this)}>
                <View style={{margin:5, flexDirection:'row', backgroundColor:'#E8E8E8', padding:5, alignItems:'center'}}>
                <Image style={{height:14, width:14}} source={require('./images/icon_search_home.png')}/>
                <Text textAlign='start' style={{marginLeft:5,backgroundColor:'#E8E8E8', flex:1, padding:0}} >圣诞的平安果1块抢</Text>
            </View></TouchableOpacity>
            <View style={{flex:1, flexDirection:'row', marginTop:5, backgroundColor:'#E8E8E8'}}>
                <View style={{width:80, marginRight:5}}>
                    <ListView 
                        dataSource={this.state.dataSourceCate}
                        renderRow={this._renderRowsCate.bind(this)}
                        renderSeparator={this._renderSeparatorCate.bind(this)}
                        enableEmptySections={true}
                    />
                </View>
                <View ref='dataview' style={{flex:1, flexDirection:'row'}}>
                    <ListView 
                        contentContainerStyle={{flexDirection:'column'}}
                        dataSource={this.state.dataSourceGoods}
                        renderRow={this._renderRowsGoods.bind(this)}
                        enableEmptySections={true}
                    />
                </View>
            </View>
        </View>
    );
  }

    _onPressSearch(){
        this.props.navigator.push({name:'SearchGoodsComp', component:SearchGoodsComp});
    }

}

const styles = StyleSheet.create({

});


export default GoodsCategoryComp;