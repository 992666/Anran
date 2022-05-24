<template>
    <div>
        <van-nav-bar
            title="我的订单"
            placeholder
            left-text="返回"
            fixed
            left-arrow
            @click-left="goBack"
        />
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item v-for="(item,list) in list" :key="'one'+list" :title="item.order" :name="item.name">
                <van-card
                    v-for="(item,items) in item.item"
                    :key="items"
                    :num="item.num"
                    :price="item.item.price"
                    desc="描述信息"
                    :title="item.item.title"
                    :thumb="item.item.img"
                />
            </van-collapse-item>
            <van-collapse-item v-for="(item,lists) in lists" :key="lists" :title="item.order" :name="item.name">
                <van-card
                    :num="item.item[4]"
                    :price="item.item[3]"
                    desc="描述信息"
                    :title="item.item[2]"
                    :thumb="item.item[1]"
                />
            </van-collapse-item>
        </van-collapse>
        <van-empty
               v-show="$store.state.order.length==0 && $store.state.orders.length==0"
               class="custom-image"
               image="https://img.yzcdn.cn/vant/custom-empty-image.png"
               description="订单是空的哟！"
         />
    </div>
</template>

<script>
export default {
    name: 'NewProjectOrder',

    data() {
        return {
            activeName: '0',
            list: this.$store.state.order,
            lists: this.$store.state.orders,
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
    },
};
</script>

<style lang="scss" scoped>

</style>