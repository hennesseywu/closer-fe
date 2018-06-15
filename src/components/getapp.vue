<template>
  <div class="download box box-lr" @click="download()">
    <div class="logo"></div>
    <div class="d-text box box-tb">
      <span>下载「贴近」客户端</span>
      <span>机会翻倍，奖励翻倍</span>
    </div>
    <div class="download-btn">立即下载</div>
  </div>
</template>

<script>
  import {
    downloadApp,
    getPlatform
  } from '../utils/utils'
  import {
    mapActions
  } from "vuex";
  export default {
    name: "getapp",
    methods: {
      ...mapActions('index', ['getAdCookies']),
      download() {
        //console.log('channel_cdoe',this.$store.state.CHANNEL_CODE)
        if (this.$store.state.CHANNEL_CODE != "0") {
          let md = new MobileDetect(this.$store.state.UA);
          let deviceType = md.os();
          let deviceVersion = "";
          if (deviceType == "iOS") {
            deviceType = "ios";
            deviceVersion = md.versionStr('iPhone');
          } else if (deviceType == "AndroidOS") {
            deviceType = "android";
            deviceVersion = md.versionStr('Android');
            //console.log("deviceVersion", deviceVersion)
            deviceVersion = deviceVersion.replace(/\./g, "_");
          }
          //console.log(deviceType, "----", deviceVersion)
          this.getAdCookies({
            adid: this.$store.state.CHANNEL_CODE,
            webUdid: true,
            deviceType: deviceType,
            deviceVersion: deviceVersion
          });
          setTimeout(()=>{
              downloadApp();
          },500)
        }else{
        downloadApp();
        }
        
      }
    }
  };
</script>


<style lang="less" scoped>
  .download {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 126pr;
    background: url('../assets/images/down_bg.png') no-repeat center;
    background-size: cover;
    .logo {
      width: 84pr;
      height: 84pr;
      background: url('../assets/images/logo.png') no-repeat center;
      background-size: cover;
      margin: 18pr 22pr 24pr 48pr;
    }
    .d-text {
      color: #fff;
      >span:first-child {
        font-size: 20pr;
        height: 40pr;
        line-height: 40pr;
        margin-top: 26pr;
      }
      >span:last-child {
        font-size: 28pr;
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
</style>
