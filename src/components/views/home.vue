<template>
    <div id="home">
        <div class="header">
            <div class="left">
                <img v-lazy="logo" alt="">
            </div>
            <div class="right">
                <van-icon @click="no" name="scan" size="2.5rem"/>
                <van-icon @click="toSearch" name="search" size="2.5rem" />
                <van-icon @click="no" name="chat-o" size="2.5rem" />
                <van-icon @click="showPopup" name="label-o" size="2.5rem" />
            </div>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-swipe :autoplay="2000" class="swiper">
            <van-swipe-item class="swiper_item" v-for="(item, img) in images" :key="img" >
                <img v-lazy="item" height="100rem" width="100%"/>
            </van-swipe-item>
        </van-swipe>
        <ul class="list">
            <li class="list_item" v-for="(item,index) in list" :key="item.id" @click="toAddress(item.id,index)">
                <img v-lazy="item.icon" alt="">
                <span>{{item.txt}}</span>
            </li>
        </ul>
        <van-notice-bar class="notice" left-icon="volume-o" :scrollable="false">
            <van-swipe
                    vertical
                    class="notice-swipe"
                    :autoplay="2000"
                    :show-indicators="false"
                    :touchable="false"
                >
                    <van-swipe-item class="notice_swiper_item" v-for="(item,notice) in notice" :key="notice">{{item}}</van-swipe-item>
                </van-swipe>
            </van-notice-bar>
            <div class="love">
                <p class="like">猜你喜欢</p>
                <van-swipe class="love_swiper" :autoplay="3000" :show-indicators="false">
                    <van-swipe-item class="love_swiper_item" v-for="(item,index) in love" :key="item.id" @click="toGoods(item.id,index,item)">
                        <img v-lazy="item.img"/>
                        <p>{{item.title}}</p>
                        <p>￥{{item.price}}</p>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="newss">
                <div v-for="(item,index) in newss" :key="item.id" @click="toNew(index)">
                    <img v-lazy="item.img" alt="">
                    <p>{{item.text}}</p>
                </div>
            </div>
        </van-pull-refresh>
        <Footer></Footer>
        <van-popup class="logo" v-model="show" closeable position="bottom" :style="{ height: '90%',width:'90%',padding:'10% 5%'}">
            <img v-lazy="logo">
            <van-cell-group>
                <van-cell @click="cell_one" title="首页" is-link/>
                <van-cell @click="cell_two" title="新品上市" is-link/>
                <van-cell @click="cell_three" title="礼包专区" is-link/>
            </van-cell-group>
            <Footer></Footer>
        </van-popup>
    </div>
</template>
<script>
import { Toast } from 'vant'
import Footer from "../sub/footer.vue"
export default {
    name: 'ProjectHome',
    components:{
        Footer
    },
    data() {
        return {
            isLoading: false,
            indexs:0,
            show:false,
            isshow:false,
            logo:'https://s1.ax1x.com/2022/03/31/qWHiyq.png',
            images:[
                "https://s1.ax1x.com/2022/03/31/qWxGJf.jpg",
                "https://s1.ax1x.com/2022/03/31/qWxUyQ.jpg",
                "https://s1.ax1x.com/2022/03/31/qWxrF0.jpg"
            ],
            list:[
                {id:0,icon:"https://s1.ax1x.com/2022/04/01/q4EQG4.png",txt:"收货地址"},
                {id:1,icon:"https://s1.ax1x.com/2022/04/01/q4EGs1.png",txt:"我的收藏"},
                {id:2,icon:"https://s1.ax1x.com/2022/04/01/q4ErQA.png",txt:"我的订单"}
            ],
            notice:[
                "暖春行动 重磅加码！珍惜参品，荣耀尊享！",
                "纳般宠爱，3.8女神节活动来袭！",
                "安然集团副董事长、总裁代表出席威海市第十八届人民代表大会第一次会议"
            ],
            love:[
                {id:0,img:"https://s1.ax1x.com/2022/04/01/q4K1kq.jpg",title:"空气净化消毒机",price:"12000"},
                {id:1,img:"https://s1.ax1x.com/2022/04/01/q4KLuQ.jpg",title:"葡萄籽丹参胶囊",price:"280"},
                {id:2,img:"https://s1.ax1x.com/2022/04/01/q4MCgU.jpg",title:"(预售)安然众合清畅套装",price:"2880"},
                {id:3,img:"https://s1.ax1x.com/2022/04/01/q4MMvD.jpg",title:"BC30益生菌豌豆肽软糖",price:"99"}
            ],
            newss:[
                {id:0,img:"https://s1.ax1x.com/2022/04/01/q4UMB6.jpg",text:"新品上市"},
                {id:1,img:"https://s1.ax1x.com/2022/04/01/q4aZa8.jpg",text:"促销活动(礼包)"}
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        onRefresh() {
            setTimeout(() => {
            Toast('刷新成功');
            this.isLoading = false;
            }, 1000);
        },
        toGoods(index,item){
            let love=this.$data.love[index]
            this.$router.push({
                path:'/goods'
            })
            localStorage.setItem('love',JSON.stringify(love))
        },
        toSearch(){
            this.$router.push({
                path:'/search'
            })
        },
        no(){
            Toast("暂未开发此功能")
        },
        toAddress(index){
            if (index==0) {
                this.$router.push({
                    path:'/addresslist'
                })
            }
            if (index==1) {
                this.$router.push({
                    path:'/collect'
                })
            }
            if (index==2) {
                this.$router.push({
                    path:'/order'
                })
            }
        },
        toNew(index){
            if (index==0) {
                this.$router.push({
                    path:'/new'
                })
            }
            if (index==1) {
                this.$router.push({
                    path:'/promote'
                })
            }
        },
        showPopup() {
            this.show = true;
        },

        cell_one(){
            this.show = false;
        },
        cell_two(){
            this.$router.push({
                path:'/new'
            })
        },
        cell_three(){
            this.$router.push({
                path:'/promote'
            })
        }
    },
};
</script>
<style lang="scss" scoped>
    #home{
        width: 100%;
        .header{
            width: 90%;
            padding: 0.3rem 5%;
            height: 5rem;
            display: flex;
            align-items: center;
            position: fixed;
            top: 0px;
            left: 0px;
            background: white;
            z-index: 999;
            .left{
                width: 40%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .right{
                width: 45%;
                padding: 0 5% 0 10%;
                display: flex;
                justify-content: space-between;
            }
        }
        .swiper{
            margin-top: 5.6rem;
            width: 100%;
            height: 15rem;
            background: #f5f5f5;
            .swiper_item{
                width: 100%;
                height: 12rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .list{
            width: 100%;
            padding: 1rem 0;
            display: flex;
            justify-content: space-around;
            .list_item{
                display: flex;
                flex-direction: column;
                align-items: center;
                span{
                    font-size: 1.4rem;
                    margin-top: 0.7rem;
                }
            }
        }
        .notice{
            .notice-swipe {
                width: 100%;
                height: 4rem;
                line-height: 4rem;
                .notice_swiper_item{
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .love{
            width: 100%;
            .like{
                width: 100%;
                height: 6rem;
                text-align: center;
                line-height: 6rem;
                font-size: 2.4rem;
            }
            .love_swiper{
                width: 90%;
                margin-left: 5%;
                border: 1px solid grey;
                height: 42rem;
                .love_swiper_item{
                    width: 100%;
                    height: 35rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    p{
                        font-size: 2rem;
                        margin-top: 1rem;
                    }
                }
            }
        }
        .newss{
            width: 90%;
            padding: 2rem 5%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 5rem;
            div{
                width: 47%;
                height: 17rem;
                border: 1px solid lightgray;
                box-shadow: 1px lightgray;
                border-radius: 0.7rem 0.7rem 0 0;
                img{
                    width: 100%;
                    height: 12rem;
                    border-radius: 0.7rem 0.7rem 0 0;
                }
                p{
                    width: 100%;
                    height: 5rem;
                    text-align: center;
                    line-height: 4rem;
                    font-size: 1.6rem;
                    font-weight: bold;
                }
            }
        }
        .logo{
            img{
                width: 40%;
            }
        }
    }
</style>