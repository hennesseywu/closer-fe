<template>
    <div class="index box box-tb">
        <div class="login">新用户登录</div>
        <div class="login-box box box-tb">
            <input type="text" placeholder="手机号" v-model="user.phone" ref="phone">
            <button class="login-btn" @click="submit">登录</button>
        </div>
    </div>
</template>

<script>
import {  mapActions } from "vuex";

export default {  
    components: {

    },
    data() {
    return {
      user:{
            phone:""
      }
      };
  },
  created() {
    //   document.addEventListener('keydown', this.enterSubmit, false)
  },
  destroyed() {
    //   document.removeEventListener('keydown', this.enterSubmit, false)
  },
  methods: {
      async submit() {
          let nameReg = /[\u4e00-\u9fa5]/gm
          let pwdReg = /^\w+$/;
              this.getCode(this.user.phone);
            // if(!nameReg.test(this.userLogin.userName)) {
            //     //console.log(this.userLogin.userName)
            //     alert('请输入正确的姓名')
            //     return
            // }
            // if(!pwdReg.test(this.$refs.password)) {
            //     alert('请输入正确的密码') 
            //     return
            // }

      
        // this.$router.push('/loginSuccess')
      },

     ...mapActions("home",["getCode"])
    //   enterSubmit(e) {
    //       if(e.kerCode === 13) this.submit()
    //   }
  }
};
</script>

<style lang="less" scoped>
.index {
    text-align: center;
    font-size: 24pr;
    .login-btn {
      background: gray;
    }
}
</style>