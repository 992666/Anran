<template>
    <div>
        <van-nav-bar
            title="新增地址"
            placeholder
            left-text="返回"
            fixed
            left-arrow
            @click-left="goBack"
        />
        <van-address-edit
            :area-list="areaList"
            show-search-result
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
    name: 'NewProjectAddress',

    data() {
        return {
            areaList,
            searchResult: [],
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
        onDelete() {
            
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: '晨光酒店',
                        address: '迎宾路38号',
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