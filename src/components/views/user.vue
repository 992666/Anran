<template>
    <div id="user">
        <van-nav-bar
            title="个人信息"
            placeholder
            fixed
        />
        <div class="user">
            <van-image
                width="10rem"
                height="10rem"
                round
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <p>Ohh</p>
        </div>
        <van-cell-group>
            <van-cell v-for="(item,index) in cell" :key="item.id" @click="user(item.id,index)" is-link :title="item.txt"/>
        </van-cell-group>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../sub/footer.vue"
export default {
    name: 'ProjectUser',
    components:{
        Footer
    },
    data() {
        return {
            cell:[{id:0,txt:'收货地址'},{id:1,txt:'我的收藏'},{id:2,txt:'我的订单'}]
        };
    },

    mounted() {
        
    },

    methods: {
        user(index){
            if (index==0) {
                this.$router.push('/addresslist')
            }
            if (index==1) {
                this.$router.push('/collect')
            }
            if (index==2) {
                this.$router.push('/order')
            }
        }
    },
};
</script>
<style lang="scss" scoped>
    .user{
        text-align: center;
    }
    .van-cell{
        margin-top: 1rem;
    }
</style>