<template>
    <div>
        <van-nav-bar
            title="修改地址"
            placeholder
            left-text="返回"
            fixed
            left-arrow
            @click-left="goBack"
        />
        <van-address-edit
            :area-list="areaList"
            show-delete
            show-search-result
            :address-info="{
                name:item.name,
                tel:item.tel,
                addressDetail:item.addressDetail,
                areaCode:item.areaCode
            }"
            :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
    name: 'NewProjectAddresss',

    data() {
        return {
            areaList,
            searchResult: [],
            item:JSON.parse(localStorage.getItem("address"))
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
        onSave(content) {
            this.$store.commit('address', content)
            this.$router.push({
                path:"/addresslist"
            })
        },
        onDelete(content) {
            this.$store.commit("removeAddress",content)
            this.$router.push({
                path:"/addresslist"
            })
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: '农职院',
                        address: '青年路38号',
                    },
                    {
                        name:'花园小区',
                        address: '幸福路52号'
                    }
                ];
            } else {
                this.searchResult = [];
            }
        },
    },
};
</script>

<style lang="scss" scoped>

</style>