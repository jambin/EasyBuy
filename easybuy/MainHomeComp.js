'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Utils from './utils/Utils.js';
import MainHomeTitlebar from './views/MainHomeTitlebar.js';
let Swiper = require('react-native-swiper'); 
import WebViewComp from './WebViewComp.js';
import TestData from './TestData.js';

let {width, height} = Dimensions.get('window');
let adHeight = 120;
let BASEPICURL = 'http://image3.suning.cn';
let screenWidth = width;

class MainHomeComp extends Component {
  render() {
    return (
      <ScrollView><View style={styles.backgroundColor}>
          <MainHomeTitlebar navigator={this.props.navigator} />
          {this._renderAdTop()}         
          <View>{this._renderSpecialView()}</View>

          <View style={{backgroundColor:'#FFFFFF'}}>
              <View style={{flexDirection:'row'}}>
                  {this._renderMenu(TestData._initHomeMenu(), 0)}
              </View>
              <View style={{flexDirection:'row'}}>
                  {this._renderMenu(TestData._initHomeMenu(), 1)}
              </View>
              <View>{this._initNews()}</View>
              <View>{this._renderGift()}</View>
              <View>{this._renderDiscount()}</View>
              <Image style={{width:width, height:75}} source={{uri:'http://image4.suning.cn/uimg/cms/img/148249482038765673.jpg?from=mobile'}} />
              <Image style={{marginTop:5,width:width, height:75}} source={{uri:'http://image2.suning.cn/uimg/cms/img/148247326473519482.jpg?from=mobile'}} />
              <View>
                  {this._renderCateGoogs()}
                  {this._renderLiveFamilly()}
                  {this._renderLinveQuality()}
                  {this._renderAd()}
                  {this._renderNativeGood()}
                  {this._renderAd2()}
                  {this._renderHotGood()}
                  {this._renderFinance()}
                  {this._renderLiveTV()}
              </View>
          </View>

      </View></ScrollView>
    );
  }

  _renderAdTop(){
      let data = TestData._getDataNetworkType(1635).tag;
      return(
          <Swiper showsButtons={false} autoplay={true} height={adHeight} showsPagination={true}>
               {this._renderSwiper(data)}
          </Swiper>
      );
  }
  _renderSwiper(data=[], height=adHeight){
     // Utils.myToast(JSON.stringify(data));
     let views = [];
     for(let index = 0, size = data.length; index < size; index++){
         let url = BASEPICURL + data[index].picUrl;
         views.push(
             <TouchableOpacity key={'swiper:'+index} activeOpacity={0.8} onPress={this._onClickGoods.bind(this, data[index])}>
                 <Image style={styles.slide, {height:height}} source={{uri:url}}></Image>
             </TouchableOpacity>);
     }
     return views;
  }

  _renderSpecialView(){
      let dataP = TestData._getDataNetworkType(1147);
      if(!dataP){
          return null;
      }
      let data = TestData._getDataNetworkType(1147).tag[0];
      // Utils.myToast(data.modelId +'');
      if(data){
        let picUrl = BASEPICURL + data.picUrl;
        // Utils.myToast(picUrl +'');
        return(
            <TouchableOpacity onPress={this._onClickGoods.bind(this, data)}>
                <Image style={{width:width, height:100}} source={{uri:picUrl}}/>
            </TouchableOpacity>
        );
      }
      return null;
      
  }

  _renderMenu(data, line){//
      // let datas = data[line];
      let datas = TestData._getDataNetworkType(1161).tag;
      let views = [];
      for(let index = line*5, size=5*(line+1); index < size; index++){
          let title = datas[index].elementName;
          let picUrl = BASEPICURL+datas[index].picUrl;
           
          // let title = datas[index].name;
          views.push(
              <View key={`${line}:${index}`} style={{flex:1, margin:5, justifyContent: 'center', alignItems: 'center',}}>
                  <TouchableOpacity activeOpacity={0.8} onPress={this._onClickGoods.bind(this, datas[index])} style={{justifyContent: 'center', alignItems: 'center',}}>
                       <Image style={{width:40, height:40}} source={{uri:picUrl}}/>
                       <Text>{title}</Text>
                  </TouchableOpacity>
              </View>
          );
      }
      return views;
  }

  _initNews(){
      let data = TestData._getDataNetworkType(1140).tag;
      return(
          <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image style={{width:90, height:55}} source={require('./images/suning_top_tips_new.png')}/>
              <View style={{flex:1,flexDirection:'column', marginLeft:10, justifyContent: 'center'}}>
                  <TouchableOpacity onPress={this._onClickGoods.bind(this, data[0])}>
                    <View style={{height:31, justifyContent:'center'}}>
                      <Text style={{color:'#666666', fontSize:14}}>{data[0].elementName}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this._onClickGoods.bind(this, data[1])}>
                    <View style={{height:31, justifyContent:'center'}}>
                      <Text style={{color:'#666666', fontSize:14}}>{data[1].elementName}</Text>
                    </View>
                  </TouchableOpacity>
              </View>
          </View>
      );
  }

  //新人3重奖
  _renderGift(){
      // let data = TestData._initGift();
      let data = TestData._getDataNetworkType(1574).tag;
      let newPeploURL = BASEPICURL + data[0].picUrl;
      let newPeploGifURL = BASEPICURL + data[1].picUrl;
      let baoyouURL = BASEPICURL + data[2].picUrl;
      let fineURL = BASEPICURL + data[3].picUrl;
      let fullURL = BASEPICURL + data[4].picUrl;

      return(
          <View style={{padding:10,backgroundColor:"#FF0000", justifyContent: 'center', alignItems: 'center',}}>
              <TouchableOpacity onPress={this._onClickGoods.bind(this, data[0])}>
                  <Image style={{height:30, width:width*3/4}} resizeMode='stretch' source={{uri:newPeploURL}}/>
              </TouchableOpacity>
              <View style={{flexDirection:'row',marginTop:10}}>
                  <TouchableOpacity onPress={this._onClickGoods.bind(this, data[1])}>
                      <Image style={{width:width/2, height:100}} source={{uri:newPeploGifURL}} />
                  </TouchableOpacity>
                  <View style={{flexDirection:'column', flex:1}} >
                      <TouchableOpacity onPress={this._onClickGoods.bind(this, data[2])}>
                          <Image style={{height:45, marginBottom:5}} source={{uri:baoyouURL}}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={this._onClickGoods.bind(this, data[3])}>
                          <Image style={{height:45, marginTop:5}} source={{uri:fineURL}}/>
                      </TouchableOpacity>
                  </View>
              </View>
              <TouchableOpacity onPress={this._onClickGoods.bind(this, data[4])}>
                  <Image style={{height:50, width:width-20, marginTop:10}} resizeMode='stretch' source={{uri:fullURL}}/>
              </TouchableOpacity>
          </View>
      );
  }

  //掌上抢
  _renderDiscount(){
      let zhangshangqiang = TestData._getDataNetworkType(1144);
      let views = [];
      let data = TestData._initDiscount();
      let size = data.length;
      for(let index = 0; index < size; index++){
          let infos = data[index];
          views.push(
              <View key={'discount:'+index} style={{marginRight:2, backgroundColor:'#FFFFFF'}}>
                  <Image resizeMode='stretch' style={{width:100, height:75}} source={{uri:infos.url}}/>
                  <View style={{flexDirection:'row', marginRight:5, marginLeft:5}}>
                      <View>
                          <Text style={{color:'#CD0000', fontSize:12}}>{'¥'+infos.snPrice}</Text>
                          <Text style={{textDecorationLine:'line-through', fontSize:12}}>{'¥'+infos.refPrice}</Text>
                      </View>
                  </View>
              </View>
          );
      }
      return(
          <View>
              <View style={{height:30, flexDirection:'row', alignItems: 'center', marginLeft:10, marginRight:10}}>
                  <Image style={{width:63, height:22}} source={require('./images/commodity_zhang_icon.png')}/>
                  <Text style={{marginLeft:10, marginRight:10, color:'#333333', fontSize:14}}>15点场</Text>
                  <Text>倒计时00:00:23</Text>
                  <Text style={{fontSize:14, color:'#FF7F00', flex:1, textAlign:'right'}}>
                  {zhangshangqiang.tag[0].elementName + ' >'}</Text>
              </View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{padding:10}}>{views}</ScrollView>
          </View>
      );
  }

  _renderCateTitle2(data){
        let imgWidth = 100, imgHeight = 30;
        if(data.tag[0].linkUrl){
             imgWidth = width;
             imgHeight = 75;
        }
        return(<Image style={{width:imgWidth, height:imgHeight}} source={{uri:BASEPICURL+data.tag[0].picUrl}}/>);
   }

   _renderCateTitle(url){
        return(<Image style={{width:100, height:30}} source={{uri:url}}/>);
   }

   _renderGood2(data){
       return(
           <View style={{height:120, flexDirection:'row', backgroundColor:'#FFFFFF'}}>
               <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', borderRightWidth:1, paddingTop:10}}>
                       <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[0])}>
                           <Image resizeMode='stretch' style={{position:'absolute',height:100, width:100, left:60, top:10}}
                            source={{uri:BASEPICURL+data[0].picUrl}} />
                           <Text style={{marginLeft:10, fontSize:16, color:'#333333'}}>{data[0].elementName}</Text>
                           <Text style={{marginLeft:10, fontSize:14, color:'#EE4000'}}>{data[0].elementDesc}</Text>
                        </TouchableOpacity>  
                   </View>
                <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', paddingTop:10}}>
                       <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[1])}>
                         <Image resizeMode='stretch' style={{position:'absolute',height:100, width:100, left:60, top:10}}
                            source={{uri:BASEPICURL+data[1].picUrl}} />
                         <Text style={{marginLeft:10, fontSize:16, color:'#333333'}}>{data[1].elementName}</Text>
                         <Text style={{marginLeft:10, fontSize:14, color:'#EE4000'}}>{data[1].elementDesc}</Text>
                       </TouchableOpacity>  
                   </View>
           </View>
       );
   }

   _renderGoodV2(data){
        return(
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', borderTopColor:'#EAEAEA', borderTopWidth:1}}>
                <TouchableOpacity style={{flex:1}}  onPress={this._onClickGoods.bind(this, data[0])}>
                  <View style={{paddingLeft:10, paddingRight:10, paddingTop:10, flex:1, flexDirection:'row', justifyContent: 'center', borderRightWidth:1, borderRightColor:'#EAEAEA'}}>
                    
                      <View style={{flex:1}}>
                       <Text style={{fontSize:16, color:'#333333'}}>{data[0].elementName}</Text>
                       <Text style={{fontSize:14}}>{data[0].elementDesc}</Text>
                      </View>
                      <Image style={{width:50, height:70}} source={{uri:BASEPICURL+data[0].picUrl}}/>
                    
                </View></TouchableOpacity>
                <TouchableOpacity style={{flex:1, flexDirection:'column'}} onPress={this._onClickGoods.bind(this, data[1])}>
                    <View style={{paddingLeft:10, paddingRight:10, paddingTop:10, flex:1, flexDirection:'row', justifyContent: 'center',}}>
                      <View style={{flex:1}}>
                       <Text style={{fontSize:16, color:'#333333'}}>{data[1].elementName}</Text>
                       <Text style={{fontSize:14}}>{data[1].elementDesc}</Text>
                      </View>
                      <Image style={{width:50, height:70}} source={{uri:BASEPICURL+data[1].picUrl}}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
   }

   //一行3个商品，左边1，右边上下2个
   _renderGood3(data){
       return(
           <View style={{height:100, flexDirection:'row'}}>
                   <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[0])}>
                      <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', borderRightWidth:1, paddingTop:10}}>
                       
                         <Image resizeMode='stretch' style={{position:'absolute',height:100, width:100, left:60, top:10}}
                            source={{uri:BASEPICURL+data[0].picUrl}} />
                         <Text style={{marginLeft:10, fontSize:16, color:'#333333'}}>{data[0].elementName}</Text>
                         <Text style={{marginLeft:10, fontSize:14, color:'#EE4000'}}>{data[0].elementDesc}</Text>
                      </View>
                   </TouchableOpacity>

                   <View style={{flex:1, marginLeft:1, flexDirection:'column', justifyContent: 'center', alignItems: 'center',}}>
                      
                        <View style={{flex:1, marginLeft:1, flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
                          <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[1])}><View style={{margin:5}}>
                           <Text style={{fontSize:16, color:'#333333'}}>{data[1].elementName}</Text>
                           <Text style={{fontSize:12, color:'#EE4000'}}>{data[1].elementDesc}</Text>
                          </View>
                          <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight:10}}>
                            <Image style={{height:50, width:50}} source={{uri:BASEPICURL+data[1].picUrl}} />
                          </View></TouchableOpacity>
                        </View>
                        <View style={{borderTopColor:'#EAEAEA', borderTopWidth:1, flex:1, marginLeft:1, flexDirection:'row', justifyContent: 'center', alignItems: 'center',}}>
                          <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[2])}><View style={{margin:5}}>
                           <Text style={{fontSize:16, color:'#333333'}}>{data[2].elementName}</Text>
                           <Text style={{fontSize:12, color:'#EE4000'}}>{data[2].elementDesc}</Text>
                          </View>
                          <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight:10}}>
                           <Image style={{height:50, width:50}} source={{uri:BASEPICURL+data[2].picUrl}} />
                          </View></TouchableOpacity>
                        </View>
                   </View>
               </View>
       );
   }

    _renderGood4(data){
        return(
            <View style={{height:120, flexDirection:'row', marginTop:1, borderTopColor:'#EAEAEA', borderTopWidth:1}}>
                   <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[0])}>
                   <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', borderRightWidth:1, alignItems: 'center',}}>
                       <Text style={{fontSize:16, color:'#333333'}}>{data[0].elementName}</Text>
                       <Text style={{fontSize:12, color:'#EE4000'}}>{data[0].elementDesc}</Text>
                       <Image resizeMode='stretch' style={{width:50, height:90}} 
                           source={{uri:BASEPICURL+data[0].picUrl}} />
                    </View>
                    </TouchableOpacity>
                   <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[1])}>
                   <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', borderRightWidth:1, alignItems: 'center',}}>
                       <Text style={{fontSize:16, color:'#333333'}}>{data[1].elementName}</Text>
                       <Text style={{fontSize:12, color:'#EE4000'}}>{data[1].elementDesc}</Text>
                       <Image resizeMode='stretch' style={{width:50, height:90}}
                          source={{uri:BASEPICURL+data[1].picUrl}} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[2])}>
                    <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', borderRightWidth:1, alignItems: 'center',}}>
                       <Text style={{fontSize:16, color:'#333333'}}>{data[2].elementName}</Text>
                       <Text style={{fontSize:12, color:'#EE4000'}}>{data[2].elementDesc}</Text>
                       <Image resizeMode='stretch' style={{width:50, height:90}} 
                           source={{uri:BASEPICURL+data[2].picUrl}} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[3])}>
                    <View style={{flex:1, marginRight:1, borderRightColor:'#EAEAEA', borderRightWidth:1, alignItems: 'center',}}>
                       <Text style={{fontSize:16, color:'#333333'}}>{data[3].elementName}</Text>
                       <Text style={{fontSize:12, color:'#EE4000'}}>{data[3].elementDesc}</Text>
                       <Image resizeMode='stretch' style={{width:50, height:90}} 
                           source={{uri:BASEPICURL+data[3].picUrl}} />
                    </View>
                    </TouchableOpacity>
               </View>
        );
    }

  //超实惠
  _renderCateGoogs(){
       let data1838 = TestData._getDataNetworkType(1838).tag;
       let data1841 = TestData._getDataNetworkType(1841).tag;
       
       // let views = [];
       // views.push(
       //     <View key='aaa' style={{backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
       //         {this._renderGood3(data1838)}
       //         {this._renderGood4(data1841)}
       //     </View>
       // );

       let titleURL = BASEPICURL + TestData._getDataNetworkTypeSequence(1148, 28).tag[0].picUrl;
       return(
           <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA', marginTop:5}}>
               {this._renderCateTitle(titleURL)}
               <View style={{backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
                   {this._renderGood3(data1838)}
                   {this._renderGood4(data1841)}
               </View>
            </View>
       );
  }

  //生活家
  _renderLiveFamilly(){
      let titleURL = BASEPICURL + TestData._getDataNetworkTypeSequence(1148, 36).tag[0].picUrl;
      return(
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA', marginTop:5}}>
              {this._renderCateTitle(titleURL)}
              <View style={{backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
                  {this._renderGood2(TestData._getDataNetworkType(1840).tag)}
                  {this._renderGood4(TestData._getDataNetworkType(1841).tag)}
              </View>
          </View>
      );
  }

  //好品质
  _renderLinveQuality(){
      let titleURL = BASEPICURL + TestData._getDataNetworkTypeSequence(1148, 44).tag[0].picUrl;
      return(
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA', marginTop:5}}>
              {this._renderCateTitle(titleURL)}
              <View style={{backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
                  {this._renderGood2(TestData._getDataNetworkType(1838).tag)}
                  {this._renderGoodV2(TestData._getDataNetworkType(1839).tag)}
              </View>
          </View>
      );
  }

  //横幅广告
  _renderAd(){
      let data = TestData._getDataNetworkTypeSequence(1250, 51).tag;
      return(
          <Swiper showsButtons={false} autoplay={true} height={adHeight} showsPagination={true}>
               {this._renderSwiper(data, adHeight-15)}
          </Swiper>
      );
  }

  //特色好货
  _renderNativeGood(){
      let data = TestData._getDataNetworkTypeSequence(1148, 53).tag;
      let titleURL = BASEPICURL + data[0].picUrl; 

      let data1838 = TestData._getDataNetworkTypeSequence(1838, 54).tag;
      let data1839 = TestData._getDataNetworkTypeSequence(1839, 56).tag;
      let data1839_2 = TestData._getDataNetworkTypeSequence(1839, 58).tag;
   
      let moreDataURL = TestData._getDataNetworkTypeSequence(1148, 60).tag[0].picUrl;

      return(
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA'}}>
              {this._renderCateTitle(titleURL)}
              <View style={{borderTopColor:'#EAEAEA', borderTopWidth:1, backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
                  {this._renderGood3(data1838)}
                  {this._renderGoodV2(data1839)}
                  {this._renderGoodV2(data1839_2)}
                  <View style={{borderTopWidth:1, borderTopColor:'#EAEAEA'}}>
                      <Image style={{width:width, height:30}} source={{uri:moreDataURL}}/>
                  </View>
              </View>
          </View>
      );
  }

    //横幅广告2
  _renderAd2(){
      let data = TestData._getDataNetworkTypeSequence(1250, 63).tag;
      return(
          <Swiper showsButtons={false} autoplay={true} height={adHeight} showsPagination={true}>
               {this._renderSwiper(data, adHeight-15)}
          </Swiper>
      );
  }

  //热门市场
  _renderHotGood(){
     let data = TestData._getDataNetworkTypeSequence(2060, 66).tag;

     let titleURL = BASEPICURL + data[0].imgUrl; 
     let bottomTitleURL = BASEPICURL + data[0].picUrl;

     let arr1 = data.slice(1,3);
     let arr2 = data.slice(3,7);
     let arr3 = data.slice(7,data.length);

      return(
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA'}}>
              {this._renderCateTitle(titleURL)}
              <View style={{borderTopColor:'#EAEAEA', borderTopWidth:1, backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
                  {this._renderGoodV2(arr1)}
                  {this._renderGood4(arr2)}
                  {this._renderGood4(arr3)}
              </View>
              <View style={{borderTopWidth:1, borderTopColor:'#EAEAEA'}}>
                  <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[0])}>
                      <Image style={{width:width, height:30}} source={{uri:bottomTitleURL}}/>
                  </TouchableOpacity>
              </View>
          </View>
      );
  }

  //金融
  _renderFinance(){
      let titleURL = BASEPICURL + TestData._getDataNetworkTypeSequence(1148, 68).tag[0].picUrl; 

      let data = TestData._getDataNetworkTypeSequence(1838, 70).tag;

      return(
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA'}}>
              {this._renderCateTitle(titleURL)}
              <View style={{borderTopColor:'#EAEAEA', borderTopWidth:1, backgroundColor:'#FFFFFF', flexDirection:'column', width:width}}>
                  {this._renderGood3(data)}
              </View>
          </View>
      );
  }

  //直播
  _renderLiveTV(){
    let titleURL = BASEPICURL + TestData._getDataNetworkTypeSequence(1148, 75).tag[0].picUrl; 
    let data = TestData._getDataNetworkTypeSequence(1146, 77).tag;
    return(
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor:'#EAEAEA'}}>
              {this._renderCateTitle(titleURL)}
              <View style={{flexDirection:'row',borderTopColor:'#EAEAEA', borderTopWidth:1, backgroundColor:'#FFFFFF', width:width}}>
                  <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[0])}>
                  <View style={{flex:1, borderRightColor:'#EAEAEA', borderRightWidth:1, justifyContent: 'center',}}>
                     <Image resizeMode='stretch' style={{width:width/2-1, height:150}} source={{uri:BASEPICURL+data[0].picUrl}}/>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flex:1}} onPress={this._onClickGoods.bind(this, data[1])}>
                  <View style={{flex:1, alignItems: 'center',}}>
                      <Image resizeMode='stretch' style={{width:width/2, height:150}} source={{uri:BASEPICURL+data[1].picUrl}}/>
                  </View>
                  </TouchableOpacity>
              </View>
          </View>
      );
  }

  _onClickGoods(data){
      this.props.navigator.push({name:'WebViewComp', component:WebViewComp, params:{url:data.linkUrl, title:data.elementName}});
  }
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#FFFFFF',
    },
    slide: {
        width: width,
        resizeMode: "stretch",
  },
});


export default MainHomeComp;