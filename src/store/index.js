import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      cartList: [], // 购物车数据
      collect: [], //收藏数据
      address: [], //地址数据
      order: [], //订单
      orders: [], //订单
      regis: [], //账号密码
      id:1,
      name:1,
   },
   mutations: {
      
      regis(state,item){
         state.regis.push(item)
      },
      orders(state,item){
         var _this = this;
         let yy = new Date().getFullYear();
         let mm = new Date().getMonth()+1;
         let dd = new Date().getDate();
         let hh = new Date().getHours();
         let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
         let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
         _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
         state.orders.push({
            item,
            name:state.name++ + '',
            order:_this.gettime
         })
      },
      order(state,item){
         var _this = this;
         let yy = new Date().getFullYear();
         let mm = new Date().getMonth()+1;
         let dd = new Date().getDate();
         let hh = new Date().getHours();
         let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
         let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
         _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
         state.order.push({
            item,
            name:state.name++ + '',
            order:_this.gettime
         })
      },
      address(state,item){
         state.address.push({
            item,
            id:state.id++ + "",
            name:item.name,
            tel:item.tel,
            isDefault:item.isDefault,
            address:item.province+item.city+item.county+item.addressDetail
         })
         state.address=Array.from(new Set(state.address))
      },
      removeAddress(state, index) {
         state.address.splice(index, 1)
      },
      addCollect(state,item){
         state.collect.unshift(item)
         state.collect=Array.from(new Set(state.collect))
      },
      removeCollect(state, index) {
         state.collect.splice(index, 1)
      },
      // 添加商品
      add(state, item) {
         // console.log(item)
         let flag = false;
         // 加购去重（通过id判断）
         state.cartList.forEach(i => {
            if (i.item.id == item.id) {
               i.num++;
               flag = true;
            }
         })
         if (flag == false) {
            state.cartList.unshift({
               num: 1,  // 添加数量默认为1
               item,  // 添加购物车商品数据
               ckd: false,  // 添加复选框初始化状态为false
            })
         }
         // console.log(state.cartList)
      },
      // 删除商品
      del(state, index) {
         state.cartList.splice(index, 1)
         // state.
      },
      // 改变数量------加减综合法   ！！！
      changeNum(state, index) {
         state.cartList.num = index
      },
      //  全选全不选
      ckd(state, newAll) {
        state.cartList.forEach(item => {
           item.ckd = newAll
        })
     }
  },
  //  计算 getters
  getters: {
     // 总价
     total(state) {
        let sum = 0;
        state.cartList.forEach(item => {
           //  如果复选框选中   计算总价
           if (item.ckd == true) {
              sum += item.item.price * item.num
           }
        })
        return sum
     }
  },
  actions: {
     HOT(context,key){
      context.commit("HOT",key)
     },
     HISTORY(context,key){
      context.commit("HISTORY",key)
     }
  },
  modules: {},
  // Vuex存储插件
  plugins: [
     new VuexPersist({
        storage: window.localStorage,
     }).plugin,
  ]
})