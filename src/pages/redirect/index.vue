<template>
  <div class="redirect">
    <div class="close" @click="handleClose">
    </div>
    <div class="bd" @click="redict()">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      redict() {
        if (this.$route.query.url && this.$route.query.url != "") {
          window.location.href = "//" + this.$route.query.url;
        }
      },
      handleClose() {
        // if (this.ENV.app && this.ENV.ios) {
        //   setupWebViewJavascriptBridge(function(bridge) {
        //     if (bridge) {
        //       bridge.callHandler("exitPage")
        //     }
        //   })
        // } else if (this.ENV.app && this.ENV.android) {
        //   if (typeof window.bridge != "undefined") {
        //     try {
        //       window.bridge.exitPage();
        //     } catch (e) {
        //       Toast("请升级最新版本客户端")
        //     }
        //   }
        // }
        window.location.href = "closer://jump/to/home"
  
      }
  
    }
  }
</script>

<style lang="less" scoped>
  .redirect {
    height: 100%;
    padding-top: 20%;
    background: url("./assets/bg.jpg") center;
    background-size: 750pr 100%;
    width: 750pr;
  }
  .bd {
    width: 100%;
    height: 865pr;
    background: url("./assets/bd.png") center;
    background-size: cover;
  }
  
  .close {
    position: fixed;
    z-index: 1000;
    top: 80pr;
    left: 40pr;
    background: url("./assets/close.png");
    background-size: cover;
    width: 68pr;
    height: 76pr;
  }
</style>

