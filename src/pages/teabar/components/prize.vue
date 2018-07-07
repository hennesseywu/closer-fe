<template>
  <div class="prize-wrapper box box-tb box-center-center">
    <div class="icon-img"></div>
    <div class="prize-text">恭喜您已领取奖励！</div>
    <div class="prize-tips">{{tips}}</div>
    <div class="prize-btn btn-common ischecked" @click="redirectTo()">{{buttonDesc}}</div>
  </div>
</template>

<script>
  import {
    downloadApp
  } from '../../../utils/utils'
  
  import {
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        tips: "",
        buttonDesc: ""
      }
    },
    mounted() {
      if (this.$store.state.IS_APP) {
        this.tips = "去首页看看吧，有更多惊喜~";
        this.buttonDesc = "去首页看看";
      } else {
        this.buttonDesc = "去下载app";
        this.tips = "下载app，填写收货地址，领取奖品";
      }
    },
    methods: {
      ...mapActions('index', ['getAdCookies']),
      async redirectTo() {
        console.log("redirect", this.$store.state.IS_APP)
        if (this.$store.state.IS_APP) {
          // 跳转APP首页
          if (this.$store.state.UA.indexOf("closer-ios") > -1) {
            console.log("close")
            window.close()
          } else {
            location.href = 'closer://jump/to/home'
          }
        } else {
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
              deviceVersion = deviceVersion.replace(/\./g, "_");
            }
            let res = await this.getAdCookies({
              adid: Cookies.get("aid"),
              webUdid: true,
              deviceType: deviceType,
              deviceVersion: deviceVersion
            });
            downloadApp();
          } else {
            downloadApp();
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .prize-wrapper {
    margin: 578pr 40pr auto 40pr;
    background: #F0FBFF;
    border-radius: 28pr;
    font-size: 36pr;
    padding: 0 50pr;
    .icon-img {
      margin-top: 60pr;
      width: 168pr;
      height: 164pr;
      background: url('../assets/images/icon.png') no-repeat center;
      background-size: cover;
    }
    .prize-text {
      margin-top: 60pr;
      color: #4B4945;
    }
    .prize-tips {
      margin-top: 20pr;
      color: #94928E;
      font-size: 28pr;
    }
    .prize-btn {
      margin: 60pr auto 40pr auto;
    }
  }
</style>
