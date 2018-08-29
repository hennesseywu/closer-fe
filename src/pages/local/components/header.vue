<template>
  <header class="header">
    <div class="common back" :style="{display: back ? 'block' : 'none'}" @click="handleBack()"></div>
    <div class="common close" :style="{display: close ? 'block' : 'none'}" @click="handleClose()"></div>
    <div class="common share" :style="{display: share ? 'block' : 'none'}" @click="handleShare()"></div>
  </header>
</template>
<script>
  export default {
    name: 'tjHeader',
    data() {
      return {}
    },
    props: {
      back: Boolean,
      close: Boolean,
      share: Boolean
    },
    methods: {
      handleBack() {
        this.$router.back();
      },
      handleClose() {
        if (ua.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            if (bridge) {
              bridge.callHandler("exitPage")
            }
          })
        } else if (ua.indexOf("closer-android") > -1) {
          if (typeof window.bridge != "undefined") {
            try {
              window.bridge.exitPage();
            } catch (e) {
              Toast("请升级最新版本客户端")
            }
          }
        }
      },
      // 点击分享跳转到分享页
      handleShare() {
        this.$router.push({
          name: 'localShare'
        })
      }
    }
  }
</script>
<style lang="less">
.header {
  position: relative;
  height: 76pr;
  margin-bottom: 40pr;
  .common {
    position: absolute;
    top: 0;
    width: 68pr;
    height: 76pr;
  }
  .back {
    left: 20pr;
    background: url(../assets/images/back.png) center no-repeat;
    background-size: contain;
  }
  .close {
    left: 108pr;
    background: url(../assets/images/close.png) center no-repeat;
    background-size: contain;
  }
  .share {
    right: 20pr;
    background: url(../assets/images/index_share.png) center no-repeat;
    background-size: contain;
  }
}
</style>