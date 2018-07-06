<template>
  <div class="login">
    <div class="index-wrapper">
      <!-- part login -->
      <div class="login-wrapper" v-if="true">
        <div class="login-title">登录即可领取奖励</div>
        <div class="phone-box common-height common-bg">
          <input type="text" class="phone" placeholder="请输入手机号">
        </div>
        <div class="imgcode-box common-height">
          <input type="text" class="img-code common-bg" placeholder="请输入图形验证码">
          <span class="img common-bg">MKNK</span>
        </div>
        <div class="smscode-box common-height common-bg">
          <input type="text" class="sms-code" placeholder="请输入手机验证码">
          <span class="send-code">重新发送 59s</span>
        </div>
        <div class="btn-common login-btn" :class="true ? 'ischecked' : 'uncheck'">登录领取奖励</div>
      </div>

      <!-- part info -->
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
        phone: "",
        imgCode:"",
        code: ""
      };
    },
    computed: {
      ...mapState("teabarLogin", {
       
      })
    },
    created() {
      if (!this.$route.query.code) {
        this.getAuthPath();
      }else{
        this.loginWithWechat(this.$route.query.code);
      }
    },
    mounted() {
    },
    methods: {
      ...mapActions("teabarLogin", [ "getAuthPath","loginWithWechat"]),
      ...mapActions('index', ['getCode', 'login'])
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

