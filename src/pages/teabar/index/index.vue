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
          <span class="send-code" @click="getCode({phone,grouk_captcha_value:imgCode,type:'bind'})">{{sendCode}}</span>
        </div>
        <div class="btn-common login-btn" @click="tbLogin()" :class="code!=''&&imgCode!=''&&phone!='' ? 'ischecked' : 'uncheck'">登录领取奖励</div>
      </div>
      <!-- part info -->
      <div class="info-wrapper" v-if="isRecieveShow">
        <div class="info-title">填写信息</div>
        <div class="name-info common-height box box-lr">
          <span class="name">姓名</span>
          <div class="name-input common-bg">
            <input type="text" placeholder="请输入您的真实姓名" v-model="name">
          </div>
        </div>
        <div class="addr-info common-height box box-lr">
          <span class="address">地址</span>
          <div class="addr-input common-bg">
            <textarea name="address" v-model="address" cols="30" rows="5" placeholder="请输入您的详细收货地址       例：xx省xx市xx区(县)xx街道"></textarea>
          </div>
        </div>
        <div class="info-btn btn-common" @click="submitInfo()" :class="true ? 'ischecked' : 'uncheck'">提交领取奖励</div>
      </div>
      <!-- part prize -->
      <Prize ref="prize" v-if="isOkShow"></Prize>
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
        isOkShow: false,
        phone: "",
        imgCode: "",
        code: "",
        isDev: this.$store.state.IS_DEV,
        name: "",
        address: ""
      };
    },
  
    async created() {
      if (!Cookies.get("uid")) {
        this.getAdCookies({
          webUdid: true,
          adid: this.$route.params.channelCode
        });
      }
      if (this.$route.params.channelCode) {
        Cookies.set("aid", this.$route.params.channelCode, {
          expires: 7
        });
      }
  
    },
    beforeMount() {
      // this.getAuthPath();
    },
    mounted() {
      if (this.$store.state.IS_APP) {
        setTimeout(() => {
          this.checkLogin(async(res) => {
            console.log("checkLogin res", res);
            console.log(this.$store.state.UA)
            if (res&&this.$store.state.UA.indexOf("closer-ios")>-1) {
              await this.doWaterAction();
            }else{
             await this.doWaterAction();
            }
          });
        }, 500)
      } else {
        this.doWaterAction()
      }
  
    },
    computed: {
      ...mapState("index", {
        'timestampNow': state => state.timestampNow,
        'sendCode': state => state.sendCode
      })
    },
    methods: {
      ...mapActions("tbLogin", ["getAuthPath", "loginWithWechat", "checkLogin", "bindPhone", "waterChance", "waterUpdate", "waterJoin"]),
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
          Cookies.set("user", JSON.stringify(user), {
            expires: 60
          });
          this.checkCurrentState(user);
        }
      },
      async doWaterAction() {
        console.log("doAction", Cookies.get("GroukAuth"))
        if (typeof(Cookies.get("GroukAuth")) != "undefined" && typeof(Cookies.get("user")) != "undefined") { //已登录 
          let user = JSON.parse(Cookies.get("user"));
          console.log("cookies exist")
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
  
      async checkCurrentState(user) { //判断前状态
        console.log("checkCurrentState", user)
        if (user.phones == "") {
          this.isRecieveShow = false;
          this.isOkShow = false;
          this.isLoginShow = true;
        } else {
          let params={adid: Cookies.get("aid")};
          if(this.$route.query.code){
              params["code"]=this.$route.query.code
          }else{
            params["phone"]= user.phones
          }
          let joinRes = await this.waterJoin(params);
          console.log("joinRes", joinRes)
          let state = await this.waterChance();
          console.log("state", state)
          // state=1;
          // this.$store.state.IS_APP=true;
          switch (state) {
            case 0: //未参与当前活动
              this.isLoginShow = false;
              this.isRecieveShow = false;
              this.isOkShow = true;
              break;
            case 1: //参与了活动未提交个人信息
              if (this.$store.state.IS_APP) {
                this.isLoginShow = false;
                this.isRecieveShow = true;
                this.isOkShow = false;
              } else {
                this.isLoginShow = false;
                this.isRecieveShow = false;
                this.isOkShow = true;
              }
              break;
            case 2: //已经参与活动并且已完成个人信息提交
              if (this.$store.state.IS_APP) {
                this.isLoginShow = false;
                this.isRecieveShow = false;
                this.isOkShow = true;
              } else {
                this.isLoginShow = false;
                this.isRecieveShow = false;
                this.isOkShow = true;
              }
              break;
            default:
              break;
  
          }
        }
      },
      async submitInfo() {
        let waterRes = await this.waterUpdate({
          name: this.name,
          address: this.address
        })
        if (waterRes) {
          console.log("waterRes", waterRes)
          this.checkCurrentState(Cookies.get("user"));
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
        font-size: 28pr;
      }
      // part login
      .login-wrapper {
        font-size: 32pr;
        margin-top: 570pr;
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
    .info-wrapper {
      margin-top: 570pr;
      background: #F0FBFF;
      border-radius: 28pr;
      padding: 40pr 50pr 38pr 50pr;
      .info-title {
        font-weight: bold;
        font-size: 40pr;
        color: #105DB3;
        text-align: center;
      }
      .name-input,
      .addr-input {
        width: 81.5%;
        margin-left: 36pr;
      }
      .addr-info {
        height: 256pr;
        .addr-input {
          height: 256pr;
          overflow: hidden;
          // border: 1px solid red;
          >textarea {
            // padding-left: 36pr;
            padding: 18pr 40pr;
            width: 100%;
            height: 256pr;
            background: #FFFDE4;
            // white-space: word-break;
            word-break: break-all;
            word-wrap: break-word;
            // border: 1px solid red;
          }
        }
      }
      .info-btn {
        margin: 60pr auto 40pr auto;
      }
    }
  }
</style>

