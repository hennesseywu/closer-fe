<template>
  <header v-if="ENV.v123" class="header">
    <div class="left">
      <div class="common back" :style="{display: back ? 'block' : 'none'}" @click="handleBack()"></div>
      <div class="common close" :style="{display: close ? 'block' : 'none'}" @click="handleClose()"></div>
    </div>
    <div class="right">
      <div class="share" :style="{display: share ? 'block' : 'none'}" @click="handleShare()"></div>
    </div>
  </header>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name: 'tjHeader',
    data() {
      return {}
    },
    props: {
      back: Boolean,
      close: Boolean,
      share: Boolean,
      home: Boolean
    },
    mounted() {
      console.log('evn.v123---', this.ENV.v123)
    },
    methods: {
      handleBack() {
        if (this.home) {
          this.$router.push({
            name: 'moonIndex'
          });
        } else {
          this.$router.back();
        }
      },
      handleClose() {
        if (this.ENV.app && this.ENV.ios) {
          setupWebViewJavascriptBridge(function(bridge) {
            if (bridge) {
              bridge.callHandler("exitPage")
            }
          })
        } else if (this.ENV.app && this.ENV.android) {
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
        this.$router.push({name:"moonShare"})
      }
    }
  }
</script>
<style lang="less" scoped>
.header {
  position: relative;
  height: 76pr;
  margin-bottom: 20pr;
  z-index: 999;
  // border: 1px solid red;
  .left, .right {
    position: absolute;
    top: 0;
    height: 100%;
  }
  .left {
    left: 20pr;
  }
  .right {
    right: 20pr;
  }
  .common {
    width: 50pr;
    height: 50pr;
  }
  .back {
    float: left;
    margin-right: 20pr;
    background: url(../assets/images/back.png) center no-repeat;
    background-size: contain;
  }
  .close {
    float: left;
    background: url(../assets/images/close.png) center no-repeat;
    background-size: contain;
  }
  .share {
    width: 54pr;
    height: 50pr;
    float: right;
    background: url(../assets/images/index_share.png) center no-repeat;
    background-size: contain;
  }
}
</style>