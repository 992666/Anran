<template>
    <div id="footer">
        <van-tabbar class="tabbar" v-model="active" route active-color="#ee0a24" inactive-color="#000">
            <van-tabbar-item to="/home" icon="home-o">商城</van-tabbar-item>
            <van-tabbar-item to="/sort" icon="bar-chart-o">分类</van-tabbar-item>
            <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: 'ProjectFooter',

    data() {
        return {
            active:0,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>
<style lang="scss" scoped>
   #footer{
       .tabbar{
           border-top: 1px solid lightgray;
       }
   } 
</style>