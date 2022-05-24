<template>
    <div id="header">
        <van-search
            v-model="value"
            shape="round"
            background="#4fc08d"
            placeholder="请输入搜索关键词"
        />
    </div>
</template>
<script>
export default {
    name: 'NewProjectHeader',
    props:['message'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>
<style lang="scss" scoped>
    
</style>