<template>
  <div class="index">
    <div class="wrapper">
      <div class="code-img"></div>
      <div class="code-tips">扫码瓜分600万</div>
      <div class="invite-img" @click="openShare"></div>
      <div class="text-desc">
        <span class="desc">扫描寻找二维码，可获得更多竞猜机会</span>
        <span class="tips" @click="redirect2Chance()">查看攻略</span>
      </div>
      <!-- 领取机会框 -->
      <div class="chance-box box-commen box box-tb box-center-center" v-if="chanceBoxShow">
        <div class="img"></div>
        <div class="btn-img" v-on:click="openLoginBox()"></div>
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
            <span class="code" v-on:click="getCode(phone)">{{sendCode}}</span>
          </div>
          <div class="get-btn" v-on:click="login({phone,code})"></div>
          <div class="text"></div>
        </div>
      </div>
    </div>
    <Rule ref="rule" :showIndexRule="showIndexRule"></Rule>
    <Getapp ref='getapp' v-if="!isApp"></Getapp>
    <Sharepop ref="sharepop" :isApp="isApp"></Sharepop>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import Rule from '../../../components/rule.vue';
  import Loginpop from '../../../components/loginpop.vue';
  import Newuserpop from '../../../components/newuserpop.vue';
  import Getapp from '../../../components/getapp.vue';
  import Sharepop from '../../../components/sharepop.vue';
   import {
    redirectAddChance
  } from '../../../utils/utils';

  import {
    mapActions,
    mapState
  } from 'vuex';
  export default {
    name: 'index',
    components: {
      Toast,
      Rule,
      Loginpop,
      Newuserpop,
      Getapp,
      Sharepop
    },
    created() {
      this.checkIsApp();

    },
    mounted(){
      this.checkLogin();
    }
    ,
    data() {
      return {
        phone: "",
        code: "",
        isApp: "",
        showIndexRule: true,
        channelCode: ""
      }
    },
    computed: {
      ...mapState("index", {
        'loginSuccess': state => state.loginSuccess,
        'chanceBoxShow': state => state.chanceBoxShow,
        'loginBoxShow': state => state.loginBoxShow,
        'sendCode': state => state.sendCode
      })
    },
    methods: {
      ...mapActions('index', ['getCode', 'login','openLoginBox','checkLogin']),
      checkIsApp() {
        console.log("isApp", this.$store.state.IS_APP)
        console.log("params",this.$route.params)
        if (this.$route.params.channelCode) {
          this.$store.state.CHANNEL_CODE = this.$route.params.channelCode;
        }
        this.isApp = this.$store.state.IS_APP;
      },redirect2Chance(){
        redirectAddChance(this.$store.state.IS_APP);
      },
      openShare() {
        if(!this.isApp) {
          this.$refs.sharepop.open()
        } else {
          Toast('点击右上角浏览器打开')
        }
      }
      // redirectTo() {
      //   let userId = ""
      //   let amount = 0;
      //   console.log(Cookies.get("totalAwardAmt"))
      //   if(Cookies.get("totalAwardAmt")){
      //     amount=Cookies.get("totalAwardAmt");
      //   }
      //   if (Cookies.get("user")) {
      //     let user = JSON.parse(Cookies.get("user"))
      //     if (user.objectID) {
      //       userId = user.objectID //.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
      //     }
      //   }
      //   this.$router.push({ name: "worldcupShare" ,params:{userId:userId,amount:amount}});
      // }
    }
  
  };
</script>

<style lang="less" scoped>
  .index {
    background: #000d01;
    padding-bottom: 8pr;
    .wrapper {
      height: 1406pr;
      padding-top: 1pr;
      background: url("../../../assets/images/index_bg.jpg") no-repeat center center;
      background-size: cover;
      .code-img {
      margin-top: 48pr;
      margin-left: 20pr;
        width: 120pr;
        height: 120pr;
        background: url('../../../assets/images/test_code.png') no-repeat center;
        background-size: cover;
      }
      .code-tips {
        margin-top: 5pr;
        margin-left: 20pr;
        font-size: 18pr;
        color: #fff;
      }
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
        margin: 230pr 40pr 20pr;
        font-size: 24pr;
        height: 34pr;
        line-height: 34pr;
        color: #fff;
        .desc {
          margin-left: 0;
        }
        .tips {
          float: right;
          margin-right: 0;
          margin-top: -10pr;
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
          width: 70%;
          margin: 70pr auto 12pr;
          input {
            margin-left: 24pr;
            background: #0F4C92;
            color: rgba(255, 255, 255, 0.5);
          }
           ::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.5);
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
            line-height: 80pr;
            >input {
              width: 90%;
            }
          }
          .code-box {
            width: 100%;
            line-height: 80pr;
            margin-top: 30pr;
            
            >input {
              width: 60%;
            }
            .code {
              height: 78pr;
              display: inline-block;
              width: 160pr;
              text-align: center;
              font-size: 28pr;
              color: rgba(255, 255, 255, 0.5);
              border-left: 1px solid #25B1EC;
              justify-content: center;

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
    }
  }
</style>


