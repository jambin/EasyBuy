'use strict';

import Utils from './utils/Utils.js';

let GOODSPIC = [
    {name:'电饭锅', pic:require('./images/goods/fan.png')},
    {name:'华为手机', pic:require('./images/goods/huawei.png')},
    {name:'iPhone', pic:require('./images/goods/phone.png')},
    {name:'扫地机器人', pic:require('./images/goods/saodijiqiren.png')},
    {name:'微波炉', pic:require('./images/goods/wei.png')},
    {name:'小米', pic:require('./images/goods/xiaomi.png')},
];

let dataNetwork = null;
let dataMineInfos = null;

export default {
    _setDataNetwork(data){
        dataNetwork = data;
    },
    _getDataNetwork(){
        return dataNetwork;
    },

    setMineInfos(infos){
        dataMineInfos = infos;
    },

    //获取模块数据
    _getDataNetworkType(type){
        let data = dataNetwork['data'];
        for(let index = 0, len = data.length; index < len; index++){
            
            if(data[index].modelId == type){
                // Utils.myToast(data[index].modelId +'-'+type);
                return data[index];
            }
        }
        return null;
    },

    //获取标题
    _getDataNetworkTypeSequence(type, sequence){
        let data = dataNetwork['data'];
        for(let index = 0, len = data.length; index < len; index++){
            
            if(data[index].modelId == type && data[index].sequence == sequence){
                // Utils.myToast(data[index].modelId +'-'+type);
                return data[index];
            }
        }
        return null;
    },

    _getDataNetworkTypeIndex(type){
        let data = dataNetwork['data'];
        for(let index = 0, len = data.length; index < len; index++){
            if(data[index].modelId == type){
                return index;
            }
        }
        return -1;
    },

    //获取我的信息
    _getMineInfosTypeSequence(type, sequence){
        if(!dataMineInfos){
            return null;
        }

        //Utils.myToast(JSON.stringify(dataMineInfos));
        let data = dataMineInfos['data'];
        let infos = [];
        for(let index = 0, len = data.length; index < len; index++){
            
            if(data[index].modelId == type && data[index].sequence == sequence){
                // Utils.myToast(data[index].modelId +'-'+type);
                infos.push(data[index]);
                // return data[index];
            }
        }
        if(0 == infos.length){
            return null;
        }else if(1 == infos.length){
            return infos[0];
        }
        return infos;
    },

    _initCategory(){
        let cate = [];

        cate.push({code:1, name:'热门推荐'});
        cate.push({code:2, name:'手机数码'});
        cate.push({code:3, name:'母婴用品'});
        cate.push({code:4, name:'家庭电器'});
        cate.push({code:5, name:'电脑办公'});
        cate.push({code:6, name:'厨卫电器'});
        cate.push({code:7, name:'生活电器'});
        cate.push({code:8, name:'食品酒水'});
        cate.push({code:9, name:'居家生活'});
        cate.push({code:10, name:'美妆洗护'});
        cate.push({code:11, name:'家装建材'});
        cate.push({code:12, name:'女装女鞋'});
        cate.push({code:13, name:'男装男鞋'});
        cate.push({code:14, name:'内衣配饰'});
        cate.push({code:15, name:'运动户外'});
        cate.push({code:16, name:'童装玩具'});
        cate.push({code:17, name:'汽车生活'});
        cate.push({code:18, name:'皮具箱包'});
        cate.push({code:19, name:'钟表眼镜'});
        cate.push({code:20, name:'珠宝首饰'});
        cate.push({code:21, name:'图书音像'});
        cate.push({code:22, name:'苏宁金融'});
        cate.push({code:23, name:'特色馆 '});
        cate.push({code:24, name:'医药馆 '});
        return cate;
    },

    _initTestGoods(title='热门推荐', code=1){
       let initGoods = [];
       for(let index = 0, cate=(code%3)+2; index < cate; index++){
           let child = [];
           let size = cate;
           if(size <=3 ){
              size = size+this._getRandomPIC(3);
           }
           for(let k = 0; k < size; k++){
               child.push({name:GOODSPIC[k].name, url:'./images/goods/huawei.png', pic:GOODSPIC[k].pic});
           }

           if(0 < child.length){
              initGoods.push({name:title, code:index, child:child});
           }
           
       }
       return initGoods;
    },

    _getRandomPIC(max){
        return Math.floor(Math.random() * (max - 1 + 1) + 1);
        // while(true){
        //     let r = Math.random()*10;
        //     if(r >= 1 && r <= max){
        //         return Math.trunc(r);
        //     }else if(r > max){
        //         return Math.trunc(r-max);
        //     }
        // }
    },

    _initTestSearchWord(){
        let word = [];
        word.push('空净买一赠一');
        word.push('超级年货节');
        word.push('家装5折抢');
        word.push('彩电12期免息');
        word.push('500元手机劵');
        word.push('圣诞9.9秒');
        word.push('分期再降200');
        word.push('65寸4K仅3999元');

        return word;
    },

    _initHomreSwiper(){
        let data = [];
        data.push({name:'圣诞', url:'http://image5.suning.cn/uimg/cms/img/148214728677112071.jpg?from=mobile'});
        data.push({name:'三星冰洗', url:'http://image1.suning.cn/uimg/cms/img/148223556294567693.jpg'});
        data.push({name:'超级年货', url:'http://image4.suning.cn/uimg/cms/img/148215168718956343.jpg'});
        data.push({name:'好奇', url:'http://image2.suning.cn/uimg/cms/img/148247912196426737.jpg?from=mobile'});
        data.push({name:'iPhone', url:'http://image3.suning.cn/uimg/cms/img/148239968092163571.jpg?from=mobile'});
        return data;
    },
  
    _initHomeMenu(){
       let data = [];
          data[0] = [];
          data[1] = [];
          data[0].push({name:'大聚惠', pic:require('./images/home/dajuhui.png')});
          data[0].push({name:'苏鲜生', pic:require('./images/home/suxiansheng.png')});
          data[0].push({name:'苏宁超市', pic:require('./images/home/mark.jpg')});
          data[0].push({name:'母婴玩具', pic:require('./images/home/toys.png')});
          data[0].push({name:'服装城', pic:require('./images/home/clothes.png')});

          data[1].push({name:'充值缴费', pic:require('./images/home/paymoney.png')});
          data[1].push({name:'苏宁金融', pic:require('./images/home/finance.png')});
          data[1].push({name:'领云钻', pic:require('./images/home/yunzhuan.png')});
          data[1].push({name:'身边苏宁', pic:require('./images/home/shenbian.png')});
          data[1].push({name:'分类', pic:require('./images/home/fenlei.png')});

       return data;
    },

    _initGift(){
        let data = [];
        data.push({url:'http://image1.suning.cn/uimg/cms/img/148119786708166485.png?from=mobile'});
        data.push({url:'http://image1.suning.cn/uimg/cms/img/147364124661824569.png?from=mobile'});
        data.push({url:'http://image5.suning.cn/uimg/cms/img/148119610632284898.png?from=mobile'});
        data.push({url:'http://image5.suning.cn/uimg/cms/img/148241436721068365.png?from=mobile'});
        data.push({url:'http://image3.suning.cn/uimg/cms/img/147364190222652846.png?from=mobile'});

        return data;
    },

    _initDiscount(){
        let data = [
    {
        cmmdtyCode: "000000000174999118", 
        cmmdtyType: "1", 
        bizCode: "0000000000", 
        refPrice: "169.00", 
        maPrice: "", 
        snPrice: "59.00", 
        mpsPrice: "", 
        proPrice: "", 
        price: "59.00", 
        priceType: "1", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "", 
        nmpsEndTime: "", 
        mpsId: "", 
        bizType: "0", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017484174999118picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000161606376", 
        cmmdtyType: "1", 
        bizCode: "0070118750", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "59.00", 
        mpsPrice: "23.80", 
        proPrice: "29.90", 
        price: "23.80", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4380119", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017447161606376picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000124194806", 
        cmmdtyType: "1", 
        bizCode: "0000000000", 
        refPrice: "139.00", 
        maPrice: "", 
        snPrice: "49.00", 
        mpsPrice: "49.00", 
        proPrice: "", 
        price: "49.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-24 18:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4385423", 
        bizType: "0", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017521124194806picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000174748697", 
        cmmdtyType: "1", 
        bizCode: "0000000000", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "37.00", 
        mpsPrice: "29.90", 
        proPrice: "29.90", 
        price: "29.90", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-24 18:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4391222", 
        bizType: "0", 
        status: "2", 
        invStatus: "2", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017521174748697picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000164483097", 
        cmmdtyType: "1", 
        bizCode: "0070084763", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "128.00", 
        mpsPrice: "99.00", 
        proPrice: "", 
        price: "99.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4369487", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017456164483097picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000191478884", 
        cmmdtyType: "1", 
        bizCode: "0070147129", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "999.00", 
        mpsPrice: "399.00", 
        proPrice: "409.00", 
        price: "399.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4371647", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017438191478884picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000128974479", 
        cmmdtyType: "1", 
        bizCode: "0000000000", 
        refPrice: "219.00", 
        maPrice: "", 
        snPrice: "199.00", 
        mpsPrice: "129.00", 
        proPrice: "", 
        price: "129.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-24 18:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4378249", 
        bizType: "0", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017521128974479picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000141003536", 
        cmmdtyType: "1", 
        bizCode: "0070129996", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "59.00", 
        mpsPrice: "23.80", 
        proPrice: "32.00", 
        price: "23.80", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4376970", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017429141003536picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000134566886", 
        cmmdtyType: "1", 
        bizCode: "0000000000", 
        refPrice: "399.00", 
        maPrice: "", 
        snPrice: "219.00", 
        mpsPrice: "199.00", 
        proPrice: "", 
        price: "199.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4372450", 
        bizType: "0", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017438134566886picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000188334644", 
        cmmdtyType: "1", 
        bizCode: "0070126692", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "118.00", 
        mpsPrice: "97.00", 
        proPrice: "", 
        price: "97.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4380005", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017465188334644picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000165922526", 
        cmmdtyType: "1", 
        bizCode: "0070142968", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "18.00", 
        mpsPrice: "16.80", 
        proPrice: "16.80", 
        price: "16.80", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4380007", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017465165922526picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000142791659", 
        cmmdtyType: "1", 
        bizCode: "0070089430", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "19.80", 
        mpsPrice: "16.80", 
        proPrice: "", 
        price: "16.80", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4380046", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017465142791659picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000155521258", 
        cmmdtyType: "1", 
        bizCode: "0000000000", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "16.60", 
        mpsPrice: "9.90", 
        proPrice: "", 
        price: "9.90", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-24 18:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4380048", 
        bizType: "0", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017521155521258picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000166435524", 
        cmmdtyType: "1", 
        bizCode: "0070091633", 
        refPrice: "90.00", 
        maPrice: "90.00", 
        snPrice: "90.00", 
        mpsPrice: "21.80", 
        proPrice: "34.80", 
        price: "21.80", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4373033", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100017429166435524picA_1_280x210.jpg?from=mobile',
    }, 
    {
        cmmdtyCode: "000000000187341140", 
        cmmdtyType: "2", 
        bizCode: "0070097622", 
        refPrice: "", 
        maPrice: "", 
        snPrice: "398.00", 
        mpsPrice: "108.00", 
        proPrice: "138.00", 
        price: "108.00", 
        priceType: "4-12", 
        bizCount: "1", 
        govPrice: "", 
        nmpsStartTime: "2016-12-23 00:00:00", 
        nmpsEndTime: "2016-12-25 18:00:00", 
        mpsId: "4373095", 
        bizType: "2", 
        status: "1", 
        invStatus: "1", 
        bookPrice: "", 
        bookPriceSwell: "", 
        finalPayment: "",
        url:'http://image2.suning.cn/uimg/nmps/ZJYDP/100016684187341140picA_1_280x210.jpg?from=mobile',
    }];

    return data;
    },

    _initCateGoods(){
         let data = [];
         data[0] = {name:'超实惠', url:'http://image1.suning.cn/uimg/cms/img/147589364798474547.png?from=mobile', list:[]};
         // data[0].list.push({});

    }
}

