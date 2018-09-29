<template>
  <div class="redict" @click="redict()">
    <div class="close" @click="handleClose">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      redict() {
        console.log(this.$route.query.url)
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
  .redict {
    background: url("./assets/bg.jpg");
    background-size: cover;
    width: 750pr;
    height: 1334pr;
  }
  
  .close {
    position: absolute;
    top: 40pr;
    left: 10pr;
    background: url("./assets/close.png");
    background-size: cover;
    width: 68pr;
    height: 76pr;
  }
</style>

