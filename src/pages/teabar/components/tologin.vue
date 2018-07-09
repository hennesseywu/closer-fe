<template>
  <div class="info-wrapper">
    <div class="info-content">
      <p>您还没有登录~</p>
      <p>请登录后领取奖励</p>
    </div>
    <div class="info-btn btn-common" @click="jumpLogin()">去登录</div>
  </div>
</template>

<script>
  export default {
    name: "pop",
    components: {},
    props: {
      name: String,
      address: String
    },
    methods: {
      jumpLogin() {
        if (this.$store.state.UA.indexOf("closer-ios") > -1) {
          console.log("ios jumpLogin")
          setupWebViewJavascriptBridge(function(bridge) {
            console.log("ios jumpLogin success", bridge)
            bridge.callHandler("jumpLogin", null);
          });
        } else if (this.$store.state.UA.indexOf("closer-android") > -1) {
          console.log("android jumpLogin");
          window.bridge.jumpLogin(null);
        }
      }
  
    }
  }
</script>


<style lang="less" scoped>
  .info-wrapper {
    background: #F0FBFF;
    margin-top: 578pr;
    border-radius: 28pr;
    padding: 40pr 50pr 38pr 50pr;
    .info-content {
      font-weight: 500;
      font-size: 40pr;
      color: #105DB3;
      margin: 128pr 0 140pr 0;
      text-align: center;
    }
    .info-btn {
      margin: 60pr auto 40pr auto;
    }
  }
</style>
