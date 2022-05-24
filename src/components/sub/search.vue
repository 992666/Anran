<template>
    <div id="search">
        <van-nav-bar
            title="搜索列表"
            placeholder
            fixed
            left-arrow
            @click-left="goBack"
        />
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
        <dl>
            <dt>HOT</dt>
            <dd v-for="(item,index) in hot" :key="item.id" @click="onHot(item.id,index,item)">{{item.txt}}</dd>
        </dl>
    </div>
</template>
<script>
import { Search, Toast } from 'vant';
export default {
    name: 'ProjectSearch',

    data() {
        return {
            value: '',
            hot:[
                {id:0,txt:'安然'},
                {id:1,txt:'众合'},
                {id:2,txt:'纳米'}
            ]
        };
    },
    mounted() {
        
    },
    created(){
        var value=localStorage.getItem('search')
        this.value=value
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        onSearch(val) {
            Toast(val);
        },
        onCancel() {
            Toast('取消');
        },
        onHot(index){
            this.value=this.hot[index].txt
        }
    },
};
</script>
<style lang="scss" scoped>
    #search{
        width: 100%;
        dt{
            padding: 1rem 1rem;
        }
        dd{
            float: left;
            margin-left: 1rem;
            border: 1px solid lightgrey;
            padding: 0.4rem 0.4rem;
        }
    }
</style>