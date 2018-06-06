<template>
  <div class="index">
    <div class="wrapper">
      <div class="invite-img"></div>
      <div class="text-desc">
        <span class="desc">扫描寻找二维码，可获得更多竞猜机会</span>
        <span class="tips">查看攻略</span>
      </div>
      <!-- 领取机会框 -->
      <div class="chance-box box-commen box box-tb box-center-center" v-if="chanceBoxShow">
        <div class="img"></div>
        <div class="btn-img" v-on:click="chanceBoxShow=false,loginBoxShow=true"></div>
        <div class="text-img mt-20" v-if="true"></div>
        <div class="app-text mt-20" v-else></div>
      </div>
      <!-- 登录框 -->
      <div class="login-box box-commen box box-tb box-center-center" v-if="loginBoxShow">
        <div class="login-info">
          <div class="phone-box login-commen">
            <input class="ml-24" type="text" v-model="phone" maxlength="11" placeholder="请输入领奖手机号码">
          </div>
          <div class="code-box login-commen">
            <input type="text" v-model="code" placeholder="请输入手机验证码">
            <span class="code" v-on:click="getCode(phone)" >{{countDown}}</span>
          </div>
          <div class="get-btn" v-on:click="login({phone,code})"></div>
          <div class="text"></div>
        </div>
      </div>
  
      <div class="download box box-lr">
        <div class="logo"></div>
        <div class="d-text box box-tb">
          <span>下载「贴近」客户端</span>
          <span>机会翻倍，奖励翻倍</span>
        </div>
        <div class="download-btn">立即下载</div>
      </div>
    </div>
    <Rule ref='rule'></Rule>
  </div>
</template>

<script>
  import Rule from '../../../components/rule.vue'
  import {
    mapActions
  } from 'vuex';
  export default {
    name: 'index',
    components: {
      Rule
    },
    created:function(){
    }
    ,
    data() {
      return {
        chanceBoxShow:true,
        loginBoxShow:false,
        phone: "13551379879",
        code:"",
        countDown:"发送验证码"
      }
    },
    methods: {
      ...mapActions('index', ['getCode','login'])
    }
  
  };
</script>

<style lang="less" scoped>
  .index {
    background: #000d01;
    padding-bottom: 8pr;
    .wrapper {
      padding-top: 1pr;
      background: url("../../../assets/images/index_bg.jpg") no-repeat center center;
      background-size: cover;
      .invite-img {
        position: absolute;
        top: 48pr;
        right: 0;
        width: 128pr;
        height: 148pr;
        background: url("../../../assets/images/share.png") no-repeat center;
        background-size: cover;
      }
      .text-desc {
        position: relative;
        margin: 440pr 40pr 20pr;
        font-size: 24pr;
        height: 34pr;
        line-height: 34pr;
        color: #fff;
        .desc {}
        .tips {
          margin-left: 142pr;
          padding: 6pr 12pr;
          background: linear-gradient( -90deg, rgba(54, 176, 175, 1), rgba(54, 176, 143, 1));
          box-shadow: 0px 4pr 20pr 0px rgba(7, 72, 54, 1);
          border-radius: 50pr;
        }
      }
      .box-commen {
        margin: 0 40pr;
        background: rgba(4, 28, 77, 1);
      }
      .chance-box {
        .img {
          margin-top: 60pr;
          width: 452pr;
          height: 228pr;
          background: url("../../../assets/images/icon.png") no-repeat center;
          background-size: cover;
        }
        .btn-img {
          margin-top: 43pr;
          width: 296pr;
          height: 84pr;
          background: url("../../../assets/images/click.png") no-repeat center;
          background-size: cover;
        }
        .text-img {
          width: 296pr;
          height: 50pr;
          background: url("../../../assets/images/text.png") no-repeat center;
          background-size: cover;
        }
        .app-text {
          margin-top: 12pr;
          width: 288pr;
          height: 50pr;
          background: url("../../../assets/images/apptext.png") no-repeat center;
          background-size: cover;
        }
        .mt-20 {
          margin-bottom: 20pr;
        }
      }
      .login-box {
        .login-info {
          margin: 70pr 84pr 12pr 84pr;
          input {
            margin-left: 24pr;
            background: #0F4C92;
            color: #fff;
          }
           ::-webkit-input-placeholder {
            color: #fff;
            font-size: 28pr;
          }
          .login-commen {
            height: 80pr;
            line-height: 80pr;
            background: #0F4C92;
            border-radius: 10pr;
            border: 1px solid #25B1EC;
          }
          .phone-box {
            width: 100%;
            height: 80pr;
            line-height: 80pr;
            >input {
              width: 90%;
            }
          }
          .code-box {
            width: 100%;
            height: 80pr;
            line-height: 80pr;
            margin-top: 30pr;
            >input {
              width: 60;
            }
            .code {
              padding: 20pr 12pr 20pr 14pr;
              color: #fff;
              border-left: 1px solid #25B1EC;
            }
          }
          .get-btn {
            margin-top: 70pr;
            width: 296pr;
            height: 84pr;
            margin-left: 20%;
            background: url("../../../assets/images/login_get_btn.png") no-repeat center;
            background-size: cover;
          }
          .text {
            margin-left: 20%;
            width: 312pr;
            height: 50pr;
            background: url("../../../assets/images/login_text.png") no-repeat center;
            background-size: cover;
          }
        }
      }
      .download {
        position: fixed;
        top: 80%;
        width: 100%;
        height: 126pr;
        background: url('../../../assets/images/down_bg.png') no-repeat center;
        background-size: cover;
        .logo {
          width: 84pr;
          height: 84pr;
          background: url('../../../assets/images/logo.png') no-repeat center;
          background-size: cover;
          margin: 18pr 22pr 24pr 48pr;
        }
        .d-text {
          color: #fff;
          >span:first-child {
            font-size: 28pr;
            height: 40pr;
            line-height: 40pr;
            margin-top: 26pr;
          }
          >span:last-child {
            font-size: 20pr;
            height: 28pr;
            line-height: 28pr;
          }
        }
        .download-btn {
          margin: 26pr 40pr 31pr auto;
          padding: 15pr 32pr;
          font-size: 28pr;
          color: rgba(75, 73, 69, 1);
          background: rgba(253, 219, 0, 1);
          border-radius: 12pr;
        }
      }
    }
  }
</style>


