<template>
    <div>
        <div class="nav-top">
         <van-nav-bar
               title="新品上市"
               fixed
               left-arrow
               @click-left="goback"
         />
      </div>
      <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        
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
      </van-pull-refresh>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: 'NewProjectNew',

    data() {
        return {
            count: 0,
            isLoading: false,
            list:[
                {
                    id:4,
                    img:"https://s1.ax1x.com/2022/04/01/q4D84f.jpg",
                    title:"慕色恒颜精华乳",
                    price:"780",
                },
                {
                    id:5,
                    img:"https://s1.ax1x.com/2022/04/01/q4Dauj.jpg",
                    title:"慕色芦荟胶",
                    price:"60",
                },
                {
                    id:6,
                    img:"https://s1.ax1x.com/2022/04/07/qx4GFg.jpg",
                    title:"慕瑟恒颜洁面乳",
                    price:"300"
                },
                {
                    id:7,
                    img:"https://s1.ax1x.com/2022/04/07/qx43TS.jpg",
                    title:"慕瑟玑因焕肤面膜",
                    price:"350"
                },
                {
                    id:8,
                    img:"https://s1.ax1x.com/2022/04/01/q4rNi6.jpg",
                    title:"纳米发热被(双人)",
                    price:"4200",
                },
                {
                    id:9,
                    img:"https://s1.ax1x.com/2022/04/01/q4rBsH.jpg",
                    title:"纳米能量空调被",
                    price:"3000",
                },
                {
                    id:10,
                    img:"https://s1.ax1x.com/2022/04/07/qxheK0.jpg",
                    title:"能量口罩(黑色)",
                    price:"80"
                },
                {
                    id:11,
                    img:"https://s1.ax1x.com/2022/04/01/q4slff.jpg",
                    title:"果蔬餐具清洁精",
                    price:"60",
                },
                {
                    id:12,
                    img:"https://s1.ax1x.com/2022/04/01/q4sG6g.jpg",
                    title:"纳米小精灵成人杯",
                    price:"700",
                },
                {
                    id:13,
                    img:"https://s1.ax1x.com/2022/04/01/q4sscF.jpg",
                    title:"家用制水机",
                    price:"7600",
                },
                {
                    id:14,
                    img:"https://s1.ax1x.com/2022/04/01/q4sOAI.jpg",
                    title:"纳神多功能净水机",
                    price:"5000",
                },
                {
                    id:15,
                    img:"https://s1.ax1x.com/2022/04/01/q4yr5t.jpg",
                    title:"安然众合MAX活能复合果汁饮料",
                    price:"360",
                },
                {
                    id:16,
                    img:"https://s1.ax1x.com/2022/04/01/q4yxaR.jpg",
                    title:"安然众合双重修护牙膏组合",
                    price:"58",
                },
                {
                    id:17,
                    img:"https://s1.ax1x.com/2022/04/07/qx4Csx.jpg",
                    title:"安然众合轻零植物酵素饮品",
                    price:"330"
                }
            ],
            newlist:[
                {
                    id:18,
                    img:"https://s1.ax1x.com/2022/04/19/LBAOHg.jpg",
                    title:"纳米能量双人被",
                    price:"3900"
                },
                {
                    id:19,
                    img:"https://s1.ax1x.com/2022/04/19/LBAjEQ.jpg",
                    title:"复合蛋白质粉固体饮料(灌装2020升级)",
                    price:"900"
                },
                {
                    id:20,
                    img:"https://s1.ax1x.com/2022/04/19/LBALDS.jpg",
                    title:"L-阿拉伯糖核桃肽固体饮料",
                    price:"3200"
                },
                {
                    id:21,
                    img:"https://s1.ax1x.com/2022/04/19/LBEgGn.jpg",
                    title:"慕瑟恒颜眼膜",
                    price:"298"
                },
                {
                    id:22,
                    img:"https://s1.ax1x.com/2022/04/19/LBERx0.jpg",
                    title:"纳米发热垫",
                    price:"4200"
                },
                {
                    id:23,
                    img:"https://s1.ax1x.com/2022/04/19/LBEsaQ.jpg",
                    title:"滋养柔顺洗发露",
                    price:"55"
                },
                {
                    id:24,
                    img:"https://s1.ax1x.com/2022/04/19/LBEcPs.jpg",
                    title:"负离子卫生巾日用(6包)",
                    price:"150"
                },
                {
                    id:25,
                    img:"https://s1.ax1x.com/2022/04/19/LBEy5j.jpg",
                    title:"新款水圣杯(办公型)",
                    price:"660"
                },
                {
                    id:26,
                    img:"https://s1.ax1x.com/2022/04/19/LBEfMV.jpg",
                    title:"蛋白修复护发素",
                    price:"55"
                },
                {
                    id:27,
                    img:"https://s1.ax1x.com/2022/04/19/LBEhrT.jpg",
                    title:"纳神多功能水机套装",
                    price:"11600"
                },
                {
                    id:28,
                    img:"https://s1.ax1x.com/2022/04/19/LBE4qU.jpg",
                    title:"蓝莓叶黄素酯压片糖果",
                    price:"198"
                },
                {
                    id:29,
                    img:"https://s1.ax1x.com/2022/04/19/LBZ3hd.jpg",
                    title:"纳米健康女内裤(黑色)",
                    price:"198"
                },
                {
                    id:30,
                    img:"https://s1.ax1x.com/2022/04/19/LBZ1tH.jpg",
                    title:"能量口罩(黑色)",
                    price:"80"
                },
                {
                    id:31,
                    img:"https://s1.ax1x.com/2022/04/19/LBZlAe.jpg",
                    title:"多种维生素矿物质片",
                    price:"210"
                }
            ]
        };
    },

    mounted() {
        
    },
    created(){
        
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
         onRefresh() {
            setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                    if (this.count%2==1) {
                        this.list=this.newlist
                    }else if (this.count%2==0) {
                        
                    }
                }, 1000,);
        },
    },
};
</script>

<style lang="scss" scoped>
      .nav-bottom {
         margin-top: 5rem;
      }
      .van-card__num{
          .van-icon{
              padding: 0 1rem;
          }
      }
</style>