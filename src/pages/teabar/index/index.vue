<template>
  <div class="login">
    <div class="index-wrapper">
      <!-- part login -->
      <div class="login-wrapper" v-if="isLoginShow">
        <div class="login-title">登录即可领取奖励</div>
        <div class="phone-box common-height common-bg">
          <input type="text" class="phone" placeholder="请输入手机号" maxlength="11" v-model="phone">
        </div>
        <div class="imgcode-box common-height">
          <!-- <div class=""></div> -->
          <input type="text" class="img-code common-bg" v-model="imgCode" placeholder="请输入图形验证码">
          <img class="img common-bg" @click="updateTimestamp()" :src="isDev ? 'http://file-sandbox.tiejin.cn/captcha/image?'+timestampNow:'http://file.tiejin.cn/captcha/image?'+timestampNow" />
        </div>
        <div class="smscode-box common-height common-bg">
          <input type="text" class="sms-code" v-model="code" placeholder="请输入手机验证码">
          <span class="send-code" @click="getCode({phone,grouk_captcha_value:imgCode,push:true})">{{sendCode}}</span>
        </div>
        <div class="login-btn" @click="tbLogin()">登录领取奖励</div>=======
        <div class="btn-common login-btn" @click="tbLogin()"  :class="true ? 'ischecked' : 'uncheck'">登录领取奖励</div>
      </div>
  
      <!-- part info -->
      <info-wrapper ref="info" v-if="isRecieveShow"></info-wrapper>
      <!-- <info-wrapper ref="info"></info-wrapper> -->

      <!-- part prize -->
      <!-- <Prize ref="prize"></Prize> -->
    </div>
  
    <!-- part rule -->
    <Rule ref="rule"></Rule>
  </div>
</template>

<script>
  import Rule from '../components/rule.vue'
  import InfoWrapper from '../components/info.vue'
  import Prize from '../components/prize.vue'

   import {
    Swipe,
    SwipeItem,
    Toast
  } from "mint-ui";
  import {
    mapState,
    mapActions
  } from "vuex";
  import Utils from "../../../utils/utils";
  import {
  
  } from "../../../utils/utils";
  
  export default {
    name: "login",
    components: {
      Rule,
      InfoWrapper,
      Prize
    },
    data() {
      return {
        isLoginShow: false,
        isRecieveShow: false,
        phone: "12000000000",
        imgCode: "1",
        code: "180706",
        isDev: this.$store.state.IS_DEV
      };
    },
  
    async created() {
      if (!Cookies.get("uid")) {
        this.getAdCookies({
          webUdid: true,
          adid: this.$route.params.channelCode
        });
      }
      await this.checkLogin();
      console.log("checklogin", typeof(Cookies.get("GroukAuth")))
      if (typeof(Cookies.get("GroukAuth")) != "undefined" && typeof(Cookies.get("user")) != "undefined") { //已登录 
        let user = JSON.parse(Cookies.get("user"))
        this.checkCurrentState(user);
      } else { //未登录 非app状态
        if (!this.$store.state.IS_APP && this.$route.query.code) {
          let wxUser = await this.loginWithWechat(this.$route.query.code);
          if (wxUser) {
            if (wxUser.user) {
              Cookies.set("GroukAuth", wxUser.token, {
                expires: 60
              });
              let user = wxUser.user;
              Cookies.set("user", JSON.stringify(user), {
                expires: 7
              });
              this.checkCurrentState(user);
            }
          }
        }
      }
  
  
    },
    beforeMount() {
      // this.getAuthPath();
    },
    mounted() {},
    computed: {
  
      ...mapState("index", {
        'timestampNow': state => state.timestampNow,
        'sendCode': state => state.sendCode
      })
    },
    methods: {
      ...mapActions("tbLogin", ["getAuthPath", "loginWithWechat", "checkLogin", "bindPhone", "waterChance"]),
      ...mapActions('index', ['getCode', 'login', 'updateTimestamp', 'getAdCookies']),
      async tbLogin() {
        console.log("tblogin")
        let bindRes = await this.bindPhone({
          phone: this.phone,
          code: this.code,
          imgCode: this.imgCode
        });
        if (bindRes) {
          let user = JSON.parse(Cookies.get("user"));
          user.phones = this.phone;
          user.phone = "+86" + this.phone;
          Cookies.set("user", JSON.stringify(user), {
            expires: 60
          });
        }
      },
      async checkCurrentState(user) { //判断前状态
      console.log("checkCurrentState",user)
        if (user.phones == "") {
          this.isLogin = false;
        } else {
          let state = await this.waterChance();
          console.log(state)
          switch (state){
          case 0 :
          this.isLoginShow=false;
          this.isRecieveShow=true;
          break;

          case 1:
          break;
          
          case 2 :
          break;  

          }
          }
        }
    }
  };
</script>

<style lang="less" scoped>
  .login {
    width: 100%;
    background: #020C25;
    // padding-bottom: 40pr;
    .index-wrapper {
      height: 1334pr;
      background: url('../assets/images/index_bg.png') no-repeat center;
      background-size: cover;
      padding: 1pr 40pr 0 40pr;
       ::-webkit-input-placeholder {
        color: rgba(16, 93, 179, 0.5);
        font-size: 32pr;
      }
      // part login
      .login-wrapper {
        font-size: 32pr;
        margin-top: 578pr;
        padding: 40pr 50pr;
        background: #F0FBFF;
        border-radius: 28pr;
        .login-title {
          color: #105DB3;
          font-size: 40pr;
          line-height: 66pr;
          text-align: center;
          font-weight: bold;
        }
        .phone-box {
          width: 100%;
          color: #105DB3;
        }
        .imgcode-box {
          position: relative;
          .img-code {
            width: 59%;
            height: 80pr;
          }
          .img {
            position: absolute;
            right: 0;
            margin-left: 20pr;
            width: 37.5%;
            border-radius: 6pr;
          }
        }
        .smscode-box {
          >input {
            width: 56%;
            height: 70pr;
            border-radius: 48pr 0 0 48pr;
            border-right: 1px solid #FFF49E;
          }
          .send-code {
            display: inline-block;
            font-size: 32pr;
            text-align: center;
            color: rgba(16, 93, 179, 0.7);
            width: 42%;
          }
        }
        .login-btn {
          margin-top: 60pr;
        }
        
      }
    }
  }
</style>

