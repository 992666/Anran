<template>
    <div id="goods">
        <van-nav-bar class="header" title="商品" left-text="返回" left-arrow @click-left="onClickLeft">
            <template #right>
                <van-icon name="like-o" size="2rem" @click="like"/>
                <van-icon name="share-o" size="2rem" @click="showShare = true" style="margin-left:2rem"/>
            </template>
        </van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="goods" v-for="(item,goods) in goods" :key="goods">
                <div class="img"><img v-lazy="item.img" alt=""></div>
                <p class="price">￥{{item.price}}</p>
                <p class="title">{{item.title}}</p>
            </div>
            <div class="active">
                <p class="act_top"><span>优惠</span><span><van-icon name="ellipsis" size="2rem" @click="active"/></span></p>
                <p class="act_bottom"><span>满赠</span>年复销活动</p>
            </div>
            <van-popup class="active" v-model="show" closeable round position="bottom" :style="{ height: '60%' }">
                <p class="act_top"><span>促销</span></p>
                <p class="act_bottom"><span>满赠</span>年复销活动</p>
            </van-popup>
            <van-share-sheet
                v-model="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelect"
            />
        </van-pull-refresh>
        <van-goods-action>
            <van-goods-action-icon @click="toCustomer" icon="chat-o" text="客服" />
            <van-goods-action-icon @click="toCart" icon="cart-o" text="购物车"  />
            <van-goods-action-button @click="addCart" type="warning" text="加入购物车" />
            <van-goods-action-button @click="buy" type="danger" text="立即购买" />
        </van-goods-action>
        <van-popup v-model="showPopup" round closeable position="bottom" :style="{ height: '50%' }">
            <div style="padding:1.6rem 2rem">
                <van-card
                    :price="goods[0].price"
                    :title="goods[0].title"
                    :thumb="goods[0].img"
                />
                <p style="margin-top:2rem"><span>购买数量</span><van-stepper style="float: right;" v-model="value" /></p>
                <van-button @click="goodsbuy" style="position:fixed;bottom:0;right:0" block color="linear-gradient(to right, #ff6034, #ee0a24)">立即购买</van-button>
            </div>
        </van-popup>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: 'ProjectGoods',

    data() {
        return {
            value:1,
            showPopup:false,
            isLoading: false,
            show:false,
            goods:[],
            showShare: false,
            options: [
                [
                    { name: '微信', icon: 'wechat' },
                    { name: '朋友圈', icon: 'wechat-moments' },
                    { name: '微博', icon: 'weibo' },
                    { name: 'QQ', icon: 'qq' },
                ],
                [
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                    { name: '小程序码', icon: 'weapp-qrcode' },
                ],
            ],
        };
    },

    mounted() {
        
    },

    created() {
        var love=JSON.parse(localStorage.getItem("love"))
        this.$data.goods.push(love)
    },

    methods: {
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功');
                this.isLoading = false;
            }, 1000);
        },
       onClickLeft() {
            this.$router.back(-1)
        },
        onClickRight() {
            this.$router.back(-1)
        },
        active(){
            this.show = true;
        },
        like(){
            this.$store.commit('addCollect',this.goods[0])
            Toast("已收藏")
        },
        onSelect(option) {
            Toast(option.name);
            this.showShare = false;
        },
        toCart(){
            this.$router.push({
                name:'cart',
            })
        },
        toCustomer(){
            this.$router.push({
                name:'customer',
            })
        },
        addCart(){
            this.$store.commit('add',this.goods[0])
            Toast("已添加到购物车")
        },
        buy(){
            this.value=1
            this.showPopup=true
        },
        goodsbuy(){
            var goods=this.goods[0]
            goods.value=this.value
            var list=Object.values(goods)
            this.$store.commit("orders",list)
            this.showPopup=false
            Toast("购买成功")
        }
    },
};
</script>
<style lang="scss" scoped>
    #goods{
        width: 100%;
        .header{
            width: 100%;
            position: fixed;
            top:0
        }
        .goods{
            margin-top: 5rem;
            width: 100%;
            border-bottom: 1px solid lightgrey;
            .img{
                width: 100%;
                height: 38rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .price{
                padding: 1rem 5%;
                color: lightsalmon;
                font-size: 1.6rem;
            }
            .title{
                padding: 1rem 5% 2rem;
                font-size: 1.8rem;
            }
        }
        .active{
            
            width: 90%;
            padding: 2rem 5%;
            .act_top{
                display: flex;
                justify-content: space-between;
                font-size: 1.6rem;
            }
            .act_bottom{
                margin-top: 1rem;
                font-size: 1.6rem;
                span{
                    display: inline-block;
                    border: 1px solid lightsalmon;
                    padding: 0.3rem 0.5rem;
                    margin-right: 1rem;
                    background: lightgoldenrodyellow;
                    font-size: 1rem;
                }
            }
        }
    }
</style>