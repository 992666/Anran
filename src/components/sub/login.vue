<template>
    <div id="user">
        <p class="title">安然商城</p>
        <van-form>
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button  round color="#4fc08d" block type="info" native-type="submit" @click="onSubmit">登录</van-button>
            </div>
            <div class="reg">
                <div @click="toRegister">没有账号？立即注册</div>
            </div>
        </van-form>
    </div>
</template>
<script>
import { Toast } from 'vant';
import Footer from "../sub/footer.vue"
export default {
    name: 'ProjectUser',
    components:{
        Footer
    },
    data() {
        return {
            username: '',
            password: '',
            regis:this.$store.state.regis,
        };
    },

    mounted() {

    },

    created() {
        
    },
    methods: {
        onSubmit() {
            /*console.log('submit', values);*/
            var regis=this.regis
            if (this.username==''&&this.password=='') {
                this.show=true
            }else{
                this.show=false
            }
            for (let i = 0; i < regis.length; i++) {
                const element = regis[i];
                if (element.phone.indexOf(this.username)!=-1 && element.password.indexOf(this.password)!=-1) {
                    Toast.success('登录成功');
                    this.$router.push('/home')
                }
                else if(this.username==""&&this.password==""){
                    Toast('请输入账号或密码');
                }
                else{
                    Toast.fail('账号或密码错误');
                }
            }
        },
        toRegister(){
            this.$router.push('/register')
        }
    },
};
</script>
<style lang="scss" scoped>
    .title {
        size:1px;
        height: 5rem;
        line-height: 5rem;
        background-color: #07c160;
        color: #fff;
        text-align: center;
        font-size: 1.8rem;
        font-weight: bold;
    }
    .reg{
        text-align: center;
    }
</style>