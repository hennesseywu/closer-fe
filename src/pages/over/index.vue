<template>
  <div class="activity-over">
    <img class="over-img"  src="./assets/activity_over.png">
    <p class="over-content">哦~网页已经过期啦</p>
    <p class="over-desc">"看看别的内容吧"</p>
    <div class="over-button">
      <span class="button-content" @click="activityOver()">{{buttonDesc}}</span>
    </div>
  </div>
</template>

<script>
 import {
    downloadApp
  } from '../../utils/utils'
import {
    mapActions
  } from "vuex";
  export default {
    name: "index",
    data() {
      return {
        buttonDesc: "下载贴近  更多精彩"
      }
  
    },
    beforeMount(){
      if(this.ENV.app){
        this.buttonDesc="去首页";
      }
      if (!Cookies.get("uid")) {
        this.getAdCookies({
          webUdid: true,
          adid: this.$route.params.channelCode
        });
      }
    },
    methods: {
      ...mapActions('index', ['getAdCookies']),
     async activityOver() {
        if (this.ENV.app) {
          location.href = 'closer://jump/to/home'
        } else {
          if (Cookies.get("aid") != "0") {
          let md = new MobileDetect(this.ENV.ua);
          let deviceType = md.os();
          let deviceVersion = "";
          if (deviceType == "iOS") {
            deviceType = "ios";
            deviceVersion = md.versionStr('iPhone');
          } else if (deviceType == "AndroidOS") {
            deviceType = "android";
            deviceVersion = md.versionStr('Android');
            deviceVersion = deviceVersion.replace(/\./g, "_");
          }
        let res= await this.getAdCookies({
            adid: Cookies.get("aid"),
            webUdid: false,
            deviceType: deviceType,
            deviceVersion: deviceVersion
          });
           downloadApp();
        }else{
        downloadApp();
        }
          // if (typeof(WeixinJSBridge) != "undefined") { //微信
          //   WeixinJSBridge.call('closeWindow');
          // } else {
          //   if (navigator.userAgent.indexOf("MSIE") > 0) {
          //     if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
          //       window.opener = null;
          //       window.close();
          //     } else {
          //       window.open('', '_top');
          //       window.top.close();
          //     }
          //   } else if (navigator.userAgent.indexOf("Firefox") > 0) {
          //     window.location.href = 'about:blank ';
          //     //window.history.go(-2);  
          //   } else {
          //     window.opener = null;
          //     window.open('', '_self', '');
          //     window.close();
          //   }
          // }
  
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .activity-over {
    width: 100%;
    height: 100%;
    text-align: center;
    .over-img {
      margin: 414pr 250pr 132pr 256pr;
      width: 244pr;
      height: 134pr;
    }
    .over-content {
      margin-bottom: 4pr;
      color: #4B4945;
      font-size: 36pr
    }
    .over-desc {
      color: #A4A3A1;
      font-size: 24pr
    }
    .over-button {
      background: #FDDB00;
      border-radius: 33pr;
      width: 320pr;
      height: 66pr;
      margin: 159pr 220pr 336pr 215pr;
      .button-content {
        color: #000000;
        font-size: 26pr;
        line-height: 66pr;
      }
    }
  }
</style>

