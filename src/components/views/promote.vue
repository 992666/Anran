<template>
    <div>
        <div class="nav-top">
         <van-nav-bar
               title="礼包专区"
               fixed
               left-arrow
               @click-left="goback"
         />
      </div>
    <div class="nav-bottom">
        <van-card
            v-for="(item,list) in list"
            :key="list"
            :price="item.price"
            :title="item.title"
            :thumb="item.img"
            @click-thumb="toGoods(item)"
            >
            <template #num>
                <van-icon name="like-o" color="red" size="24px" @click="collect(item)"/>
                <van-icon name="shopping-cart-o" color="red" size="24px" @click="add(item)"/>
            </template>
        </van-card>
    </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: 'NewProjectPromote',
    data() {
        return {
            list:[
                {
                    id:32,
                    img:"https://s1.ax1x.com/2022/05/03/OkjGVS.jpg",
                    title:"品质生活套餐",
                    price:"4610",
                },
                {
                    id:33,
                    img:"https://s1.ax1x.com/2022/05/03/OkjY5Q.jpg",
                    title:"健康护身套餐",
                    price:"9230",
                },
                {
                    id:34,
                    img:"https://s1.ax1x.com/2022/05/03/OkjNCj.jpg",
                    title:"全家福",
                    price:"18460"
                },
                {
                    id:35,
                    img:"https://s1.ax1x.com/2022/05/03/OkjJUg.jpg",
                    title:"美好生活套餐",
                    price:"83000"
                },
                {
                    id:36,
                    img:"https://s1.ax1x.com/2022/05/03/Okj3b8.jpg",
                    title:"养颜调理套餐",
                    price:"13840"
                },
                {
                    id:37,
                    img:"https://s1.ax1x.com/2022/05/03/OkjU8s.jpg",
                    title:"睡眠美颜套餐",
                    price:"3690"
                },
                {
                    id:38,
                    img:"https://s1.ax1x.com/2022/05/03/Okja2n.jpg",
                    title:"净爱生活套餐",
                    price:"4610"
                }
            ],
        };
    },

    mounted() {
        
    },

    methods: {
        goback(){
            this.$router.back(-1)
        },
        add(item) {
            this.$store.commit('add',item)
            Toast("已添加到购物车")
         },
         toGoods(item) {
            this.$router.push({
                path:'/goods'
            })
            localStorage.setItem('love',JSON.stringify(item))
         },
         collect(item) {
             this.$store.commit('addCollect',item)
            Toast("已收藏")
         },
    },
};
</script>

<style lang="scss" scoped>
    .nav-bottom {
         margin-top: 5rem;
      }
</style>