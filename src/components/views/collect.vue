<template>
    <div id="collect">
        <van-nav-bar
            title="我的收藏"
            placeholder
            left-text="返回"
            fixed
            left-arrow
            @click-left="goBack"
        />
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <!--     购物车box -->
            <div class="car-list">
               <div class="car-box" v-for="(item,index) in list" :key="index">
                  <div class="car-box-right">
                     <van-swipe-cell>
                        <van-card
                              :price="item.price"
                              :title="item.title"
                              :desc="item.id+''"
                              :thumb="item.img"
                              @click-thumb="toGoods(item)"
                        >
                        <template #footer>
                           <van-icon name="like-o" color="red" size="2.4rem" @click="like(item)"/>
                        </template>
                        </van-card>
                        <!--     右侧滑动删除-->
                        <template #right>
                           <van-button square text="取消收藏" type="danger" class="delete-button" @click="removeCollcet(item)"/>
                        </template> 
                     </van-swipe-cell>
                  </div>
               </div>
            </div>
         </van-pull-refresh>

        <!--   空状态  没数据显示 有数据隐藏-->
         <van-empty
               v-show="$store.state.collect.length==0"
               class="custom-image"
               image="https://img.yzcdn.cn/vant/custom-empty-image.png"
               description="暂无收藏"
         />
         <van-dialog v-model="show" title="标题" show-cancel-button>
            <img src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
         </van-dialog>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: 'ProjectCollect',

    data() {
        return {
            show: false,
            isLoading: false,
            list:this.$store.state.collect
        };
    },

    mounted() {
        
    },
    created(){
        
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        onRefresh() {
            setTimeout(() => {
               Toast('刷新成功');
               this.isLoading = false;
            }, 1000);
         },
         removeCollcet(item){
            this.$store.commit("removeCollect",item)
         },
         like(item){
            this.$dialog.alert({
               title: "是否取消收藏!", //加上标题
               showCancelButton: true //展示取水按钮
            })
            .then(() => { //点击确认按钮后的调用
               this.$store.commit("removeCollect",item)
            })
            .catch(() => { //点击取消按钮后的调用
               
            })
         },
         toGoods(item) {
            this.$router.push({
                path:'/goods'
            })
            localStorage.setItem('love',JSON.stringify(item))
         }
    },
};
</script>
<style lang="scss" scoped>
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
      .car-box-right {
         flex: 12;
      }
   }
</style>