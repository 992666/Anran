<template>
    <div id="addresslist">
        <van-nav-bar
            title="收货地址列表"
            placeholder
            left-text="返回"
            fixed
            left-arrow
            @click-left="goBack"
        />
        <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
            @select="select"
        />
        <van-empty
                v-show="$store.state.address.length==0"
                class="custom-image"
                image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                description="去添加新的地址吧！"
            />
    </div>
</template>

<script>
export default {
    name: 'NewProjectAddresslist',

    data() {
        return {
            list:this.$store.state.address,
            chosenAddressId: ""
        };
    },

    mounted() {
        
    },
    created(){
        if (this.list.length==0) {
            this.chosenAddressId=null
        }else{
            this.chosenAddressId=this.list[0].id
        }
    },
    methods: {
        goBack() {
            this.$router.back(-1)
        },
        onAdd() {
            this.$router.push("/address");
        },
        onEdit(content) {
            this.$router.push("/addresss");
            localStorage.setItem('address',JSON.stringify(content.item))
        },
        select(content){
            console.log(content)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>