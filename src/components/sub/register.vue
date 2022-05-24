<template>
    <div>
       <van-nav-bar
            title="注册"
            left-text="返回"
            left-arrow
            @click-left="tologin"
        />
       <van-form>
           <van-field name="uploader" label="上传头像">
               <template #input>
                   <van-uploader v-model="uploader" />
               </template>
           </van-field>
           <van-cell-group>
               <van-field
                       v-model="phone"
                       required
                       label="手机号"
                       placeholder="请输入手机号"
                       :rules="[
                         { required: true },
                         { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
               />
               <van-field
                       v-model="sms"
                       center
                       clearable
                       label="短信验证码"
                       placeholder="请输入短信验证码"
               >
                   <template #button>
                       <van-button size="small" type="primary">发送验证码</van-button>
                   </template>
               </van-field>
               <van-field
                       v-model="password"
                       required
                       type="password"
                       label="密码"
                       placeholder="请输入密码"
               />
               <van-field
                       v-model="password1"
                       required
                       type="password"
                       label="确认密码"
                       placeholder="请再次输入密码"
               />
           </van-cell-group>
       </van-form>
       <div style="margin: 16px">
           <van-button round block type="info" native-type="submit" @click="onsubmit">注册</van-button>
       </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: 'NewProjectRegister',

    data() {
        return {
            phone:'',
            sms:'',
            password:'',
            password1:'',
            uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
            value: '',
        };
    },

    mounted() {
        
    },
    created(){
        
    },
    methods: {
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
        },
        tologin(){
            this.$router.go(-1);
        },
        onsubmit(){
            if(this.phone==""||this.sms==""||this.password==""||this.password1==""){
                Toast('注册失败！信息未完善');
            }
            else if(this.password!=this.password1){
                Toast('密码输入两次不一致！');
            }
            else{
                Toast.success('注册成功');
                var regis={phone:this.phone,password:this.password}
                this.$store.commit("regis",regis)
                this.$notify({
                    type: "success",
                    message: "注册成功,3s后返回登录",
                    duration: 3000,
                });
                setTimeout(() => {
                    this.$router.go(-1);
                }, 3000);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
    .icon-back{
        position: absolute;
        left: 2px;
        top:15px
    }
</style>