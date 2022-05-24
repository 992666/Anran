<template>
    <div id="pay">
        <van-nav-bar
            title="提交订单"
            placeholder
            left-text="返回"
            fixed
            left-arrow
            @click-left="goBack"
        />
        <div class="address">
            <p class="title" @click="choose">选择收货地址</p>
            <p><span style="font-size: 1.8rem;font-weight: 700;">{{newaddress.name}}</span><span style="margin-left:1rem">{{newaddress.tel}}</span></p>
            <p>{{newaddress.address}}</p>
            <van-action-sheet cancel-text="取消" v-model="isshow" title="选择收货地址">
                <ul class="content">
                    <li v-for="(item,index) in address" :key="index" @click="onSelect(index)">
                        <tr>
                            <td><span>{{item.name}}</span><span>{{item.tel}}</span></td>
                            <tt>{{item.address}}</tt>
                        </tr>
                    </li>
                </ul>
            </van-action-sheet>
        </div>
        <div class="address">
            <p class="title">订单信息</p>
            <ul>
                <li v-for="(item,cartList) in cartList" :key="cartList">
                    <span class="item">{{item.item.title}}</span>
                    <span class="item">
                        <span>￥{{item.item.price}}</span>
                        <span class="min">x{{item.num}}</span>
                    </span>
                </li>
            </ul>
        </div>
        <van-submit-bar
            class="sub"
            label="总计"
            :price="$store.getters.total*100"
            button-text="确认订单"
            button-color="#7232dd"
            @submit="onSubmit"
        />
        <van-popup v-model="show" position="top" :style="{ height: '100%' }" >
            <van-nav-bar
                title="完成订单"
                placeholder
                left-text="返回"
                fixed
                left-arrow
                @click-left="gohome"
            />
            <van-cell-group>
                <van-cell title="商品评价"><van-rate v-model="value" allow-half/></van-cell>
                <van-cell title="服务态度"><van-rate v-model="value1" allow-half color="#ffd21e" void-icon="star" void-color="#eee"/></van-cell>
                <van-cell title="物流服务"><van-rate v-model="value2" allow-half color="#18b5fd"/></van-cell>
            </van-cell-group>
        </van-popup>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: 'NewProjectPay',

    data() {
        return {
            value:0.5,
            value1:0.5,
            value2:0.5,
            isshow: false,
            actions: [],
            show: false,
            address:this.$store.state.address,
            newaddress:"",
            cartList:[],
        };
    },

    mounted() {
        var list=JSON.parse(localStorage.getItem('order'))
        var cartList=list.reverse()
        this.cartList=cartList
    },
    created(){
        var cartList=this.$store.state.cartList
        var list=[]
        for (let i = 0; i < cartList.length; i++) {
            if (cartList[i].ckd==true) {
                list.unshift(cartList[i])
            }
        }
        // this.cartList=list
        localStorage.setItem("order",JSON.stringify(list))
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        gohome() {
            this.$router.push({
                path:'/home'
            })
        },
        onSubmit(){
            if (this.newaddress=="") {
                Toast("请选择地址")
            }
            else{
                this.$dialog.alert({
                    title: "是否确认订单!", //加上标题
                    showCancelButton: true //展示取水按钮
                })
                .then(() => { //点击确认按钮后的调用
                    this.$store.commit("order",this.cartList)
                    this.show = true;
                })
                .catch(() => { //点击取消按钮后的调用
                
                })
            }
        },
        choose(){
            if (this.address.length==0) {
                Toast("暂无地址")
            }else{
                this.isshow = true;
            }
        },
        onSelect(index){
            this.isshow = false;
            this.newaddress=this.address[index]
        },
    },
};
</script>

<style lang="scss" scoped>
    #pay{
        width: 100%;
        background-color: #fafafa;
        .address{
            width: 80%;
            margin: 1rem 5%;
            padding: 5%;
            border-radius: 1rem;
            background: white;
            p{
                margin-top: 1rem;
                font-size: 1.4rem;
            }
            .content {
                padding: 1.6rem 1.6rem 12rem;
            }
            .title{
                font-size: 1.8rem;
                font-weight: 700;
            }
            .addresss{
                font-size: 1.6rem;
            }
            ul{
                margin-bottom: 3rem;
                li{
                    margin-top: 1rem;
                    font-size: 1.6rem;
                    display: flex;
                    justify-content: space-between;
                    .item{
                        display: inline-block;
                        width: 50%;
                        .min{
                            font-size: 1.2rem;
                        }
                    }
                    td{
                        span:nth-child(1){
                            font-size: 2rem;
                            font-weight: 700;
                        }
                        span:nth-child(2){
                            margin-left: 2rem;
                        }
                    }
                }
            }
        }
        .sub{
            position: fixed;
            bottom: 0px;
            left: 0px;
            z-index: 999;
            background-color: white;
        }
        .van-cell__value{
            margin-right: 10rem;
        }
    }
    
</style>