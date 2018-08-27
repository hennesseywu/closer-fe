<template>
  <div class="share-wrapper" >
    <div class="is-app" v-if="isApp">
      <div class="share-img">
        <img :src="shareData" />
      </div>
      <div class="share-items box box-lr box-center-center">
        <div class="item item1 box box-tb box-center-center" @click="toShare('inviteNewGuyActionWeChat', shareData)">
          <span class="weixin"></span>
          <span>好友</span>
        </div>
        <div class="item item2 box box-tb box-center-center" @click="toShare('inviteNewGuyActionWxTimeLine', shareData)">
          <span class="pyq"></span>
          <span>朋友圈</span>
        </div>
        <div class="item item3 box box-tb box-center-center" @click="toShare('inviteNewGuyActionSavePicture', shareData)">
          <span class="download"></span>
          <span>保存至相册</span>
        </div>
      </div>
    </div>
    <div class="is-weixin" v-else>
      <img :src="shareData" />
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui';
  import {
    mapState,
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        isApp: this.$store.state.IS_APP,
        isLogin: false
      }
    },
    created() {
      console.log('isAPP', this.isApp)
      this.userShare()
    },
    computed: {
      ...mapState('local', {
        shareData: state => state.shareData
      })
    },
    async mounted() {
    },
    methods: {
      ...mapActions("local", [
        "wechatConfig",
        "userShare",
        "checkLoginInApp"
      ]),
      toShare(type, url) {
        let ua = this.$store.state.UA
        console.log('share--', ua)
        if (ua.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            console.log("toShare ios bridge", bridge)
            if (bridge) {
              bridge.callHandler("inviteNewerAction", {
                "type": type,
                "img": url
              }, function(data, responseCallback) {})
            }
          })
        } else if (ua.indexOf("closer-android") > -1) {
          console.log("toShare android bridge", bridge)
          if (typeof window.bridge != "undefined") {
            try {
              window.bridge.inviteNewerAction({
                "type": type,
                "img": url
              });
            } catch (e) {
              Toast("请升级最新版本客户端")
            }
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/style/share.less';
</style>

