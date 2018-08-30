<template>
  <header v-if="V_1_2_3" class="header">
    <div class="left">
      <div class="common back" :style="{display: back ? 'block' : 'none'}" @click="handleBack()"></div>
      <div class="common close" :style="{display: close ? 'block' : 'none'}" @click="handleClose()"></div>
    </div>
    <div class="right">
      <div class="common share" :style="{display: share ? 'block' : 'none'}" @click="handleShare()"></div>
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
      share: Boolean
    },
    computed: {
      ...mapState(['UA', 'V_1_2_3'])
    },
    methods: {
      handleBack() {
        if (this.home) {
          this.$router.push({
            name: 'localIndex'
          });
        } else {
          this.$router.back();
        }
      },
      handleClose() {
        if (this.UA.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            if (bridge) {
              bridge.callHandler("exitPage")
            }
          })
        } else if (this.UA.indexOf("closer-android") > -1) {
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
  margin-bottom: 20pr;
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
    width: 68pr;
    height: 76pr;
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
    float: right;
    background: url(../assets/images/index_share.png) center no-repeat;
    background-size: contain;
  }
}
</style>