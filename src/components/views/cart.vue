<template>
   <div>
         <!--      标签栏-->
         <van-nav-bar
               title="购物车"
               fixed
         />
         <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!--     购物车box -->
            <div class="car-list">
               <div class="car-box" v-for="(item,index) in list" :key="index">
                  <!--   左侧复选框布局-->
                  <div class="car-box-left">
                     <van-checkbox v-model="item.ckd"></van-checkbox>
                  </div>
                  <!--   右侧商品卡片布局-->
                  <div class="car-box-right">
                     <van-swipe-cell>
                        <van-card
                              :price="item.item.price"
                              :title="item.item.title"
                              :thumb="item.item.img"
                        >
                           <!--  步进器-->
                           <template #num>
                              <van-stepper v-model="item.num" theme="round" button-size="22" disable-input
                                          @change="changeNum(item.num)"/>
                           </template>
                        </van-card>
                        <!--     右侧滑动删除-->
                        <template #right>
                           <van-button square text="删除" type="danger" class="delete-button" @click="del(index)"/>
                        </template> 
                     </van-swipe-cell>
                  </div>
               </div>
            </div>
         </van-pull-refresh>
         <!--   空状态  没数据显示 有数据隐藏-->
         <van-empty
               v-show="$store.state.cartList.length==0"
               class="custom-image"
               image="https://img.yzcdn.cn/vant/custom-empty-image.png"
               description="购物车是空的哟！"
         />
         <!--      商品导航-->
         <van-submit-bar :price="$store.getters.total*100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checkAll">全选</van-checkbox>
         </van-submit-bar>
        <Footer></Footer>
   </div>
</template>

<script>
import { Toast } from 'vant';
import {mapMutations} from 'vuex'
import Footer from "../sub/footer.vue"
   export default {
      name: 'ProjectCart',
      components:{
          Footer
      },
      data() {
         return {
            isLoading: false,
            list: this.$store.state.cartList, //购物车数据
         }
      },
      computed: {
         // 计算属性checkAll 和全选按钮双向数据绑定，别人可以控制它 它也可以控制别人
         // 别人控制它 给他一个值的时候是 get , 它控制别人 给别人设置值的时候 是set
         // 在set中newVal参数是这个计算属性改变后的值
         checkAll: {  //可以看作一个事件
            get() {
               //  判断购物车里商品的长度为0  return false
               if (this.list.length == 0) {
                  return false
               }
               return this.$store.state.cartList.every(item => {
                  return item.ckd == true   // 返回结果复选框为true
               })
            },
            set(newVal) {
               this.$store.commit('ckd', newVal)
            },
         }
      },
      created(){
         
      },
      mounted(){
         
      },
      methods: {
         onRefresh() {
            setTimeout(() => {
               Toast('刷新成功');
               for (let i = 0; i < this.list.length; i++) {
                  if (this.list[i].ckd==true) {
                     this.list[i].ckd=false
                  }
                  
               }
               this.isLoading = false;
            }, 1000);
         },
           //方法集合
         ...mapMutations(['del', 'changeNum',]),
         onSubmit(){
            var arr=[]
            for (let i = 0; i < this.list.length; i++) {
               const element = this.list[i];
               if(element.ckd==true){
                  arr.push(element)
               }
            }
            if (arr.length==0) {
                  Toast("未选择商品")
               }else{
                  this.$router.push({
                     path:'/pay'
                  })
               }
         }
      },
   }
</script>

<style lang="scss" scoped>
   .car-list{
      margin-top: 5rem;
      margin-bottom: 10rem;
   }
   .goods-card {
      margin: 0;
      background-color: white;
   }
   .delete-button {
      height: 100%;
   }
   .car-box {
      width: 100%;
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      .car-box-left {
         flex: 1;
         padding-left: 1rem;
      }
      .car-box-right {
         flex: 12;
      }
   }
   .van-submit-bar{
       margin-bottom: 5rem;
       z-index: 999;
   }
</style>