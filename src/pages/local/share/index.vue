<template>
  <div class="main local-share">
    <local-header v-if="this.$store.state.IS_APP" back home ></local-header>
      <div class="share" >
      <img :src="shareData" class="weixin" />
    </div>
      <div v-if="this.$store.state.IS_APP" class="share-items box box-lr box-center-center">
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
</template>

<script>
  import {
    Toast,
    Indicator
  } from 'mint-ui';
  import {
    mapState,
    mapActions
  } from "vuex";
  import localHeader from '../components/header';
  import {
    makeFileUrl,
    addParamsForUrl,
    html2Image,
    tjUploadFile
  } from '../../../utils/utils'
  import QrcodeVue from 'qrcode.vue';
  import defaultImg from '../assets/images/default_share.png';
  export default {
    data() {
      return {
        isApp: this.$store.state.IS_APP,
        isLogin: false
      }
    },
    components: {
      localHeader,
      QrcodeVue
    },
    created() {
     
    },
    computed: {
       ...mapState('local', {
        shareData: state => state.shareData
      })
    },
    mounted() {
     this.userShare();
    },
    methods: {
      ...mapActions("local", [
        "wechatConfig",
        "userShare",
        "checkLoginInApp",
        "initWxConfig"
      ]),
      toShare(type) {
        let ua = this.$store.state.UA
        let url = this.imgUrl;
        console.log('share--', type, url, ua)
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
              window.bridge.inviteNewerAction(JSON.stringify({
                "type": type,
                "img": url
              }));
            } catch (e) {
              Toast("请升级最新版本客户端")
            }
          }
        }
      },
      makeFileUrl(url) {
        let avatar = makeFileUrl(url)
        return avatar
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/share.less';
</style>

