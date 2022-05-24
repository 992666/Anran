<template>
    <div class="sort">
        <div class="search" @click="toSearch">
            <van-search
                v-model="value"
                shape="round"
                background="#4fc08d"
                placeholder="请输入搜索关键词"
            />
        </div>
        <van-tree-select class="select" height="150vw" :items="items" :main-active-index.sync="active">
            <template #content>
                <van-grid :border="false" :column-num="3" v-if="active === active">
                    <van-grid-item v-for="(item,index) in items[active].children" :key="index" @click="grid(index)">
                        <van-image :src="item.img" />
                        <p style="text-align:center">{{item.txt}}</p>
                    </van-grid-item>
                </van-grid>
                <van-grid :border="false" :column-num="1" v-if="active === 10">
                    <van-grid-item>
                        <van-image src="https://img01.yzcdn.cn/vant/custom-empty-image.png" />
                        <p style="color:grey;margin-top:3rem">找不到相关产品</p>
                    </van-grid-item>
                </van-grid>
        </template>
        </van-tree-select>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "../sub/footer.vue"
export default {
    name: 'ProjectSort',
    components:{
        Footer
    },
    data() {
        return {
            value:'',
            active: 0,
            items: [
                { text: '营养保健类',children: [{img:"https://s1.ax1x.com/2022/04/19/LB3Tot.jpg",txt:"保健食品类"},{img:"https://s1.ax1x.com/2022/04/19/LB3odI.jpg",txt:"健康食品类"}]},
                { text: '养颜护肤类',children: [{img:"https://s1.ax1x.com/2022/04/19/LB3zes.jpg",txt:"护肤系列"}]},
                { text: '家居生活类',children: [
                    {img:"https://s1.ax1x.com/2022/04/19/LB8GOH.jpg",txt:"水杯系列"},
                    {img:"https://s1.ax1x.com/2022/04/19/LB8Ymd.jpg",txt:"卫生护理系列"},
                    {img:"https://s1.ax1x.com/2022/04/19/LB81SO.jpg",txt:"个人护理系列"},
                    {img:"https://s1.ax1x.com/2022/04/19/LB8QfK.jpg",txt:"家居清洁系列"}
                ]},
                { text: '电子科技类',children: [{img:"https://s1.ax1x.com/2022/04/19/LB8KFx.jpg",txt:"电子系列"}]},
                { text: '功能纺织类',children: [
                    {img:"https://s1.ax1x.com/2022/04/19/LB8t0A.jpg",txt:"床品系列"},
                    {img:"https://s1.ax1x.com/2022/04/19/LB83lD.jpg",txt:"内衣系列"},
                    {img:"https://s1.ax1x.com/2022/04/19/LB8MY6.jpg",txt:"护身系列"}
                ]},
                { text: '酒水饮料',children: [{img:"https://s1.ax1x.com/2022/04/19/LB886e.jpg",txt:"酒水系列"}]},
                { text: '文创产品及配件',children: [{img:"https://s1.ax1x.com/2022/04/19/LBJIeJ.jpg",txt:"文创产品及配件"}]},
                { text: '套组专区',children: [{img:"https://s1.ax1x.com/2022/04/19/LBJ4L4.jpg",txt:"套组专区"}]},
                { text: '特产专区',children: [{img:"https://s1.ax1x.com/2022/04/19/LBJhyF.jpg",txt:"食品系列"}]},
                { text: '爆品专区',children: [
                    {img:"https://s1.ax1x.com/2022/04/19/LBYv90.jpg",txt:"厨房用具"},
                    {img:"https://s1.ax1x.com/2022/04/19/LBYzcT.jpg",txt:"家居清洁"},
                    {img:"https://s1.ax1x.com/2022/04/19/LBtSjU.jpg",txt:"酒水饮料"},
                    {img:"https://s1.ax1x.com/2022/04/19/LBYXhq.jpg",txt:"礼品首饰"},
                    {img:"https://s1.ax1x.com/2022/04/19/LBYx3V.jpg",txt:"美妆洗护"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD7AbT.jpg",txt:"米面粮油"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD7krV.jpg",txt:"日用家用"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD7C2n.jpg",txt:"生活家电"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD798s.jpg",txt:"休闲零食"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD7pCj.jpg",txt:"营养冲调"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD7FK0.jpg",txt:"纸巾湿巾"},
                    {img:"https://s1.ax1x.com/2022/04/20/LD7VVU.jpg",txt:"生活服务"}
                ]},
                { text: '扶贫专区',children: []},
                { text: '纳宜热疗专区',children: [{img:"https://s1.ax1x.com/2022/04/20/LD7VVU.jpg",txt:"店铺系列"}]}
            ],
            
        };
    },

    mounted() {
        
    },

    methods: {
        toSearch(){
            this.$router.push({
                path:'/search'
            })
        },
        grid(index){
            var search=this.items[this.active].children[index].txt
            localStorage.setItem('search',search)
            this.$router.push({
                path:'/search'
            })
        }
    },
};
</script>
<style lang="scss" scoped>
    #sort{
        width: 100%;
        .search{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        .select{
            margin-bottom: 7rem;
            .template{
                width: 100%;
                height: auto;
                .select_item{
                    height: auto;
                    padding: 1rem 3rem 0 ;
                }
            }
        }
    }
</style>