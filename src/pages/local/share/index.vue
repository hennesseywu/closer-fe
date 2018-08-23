<template>
  <div class="share-wrapper">
    <div class="is-app" v-if="isApp">
      <div class="share-img"></div>
      <div class="share-items box box-lr box-center-center">
        <div class="item item1 box box-tb box-center-center" @click="toShare('inviteNewGuyActionWeChat')">
          <span class="weixin"></span>
          <span>好友</span>
        </div>
        <div class="item item2 box box-tb box-center-center" @click="toShare('inviteNewGuyActionWxTimeLine')">
          <span class="pyq"></span>
          <span>朋友圈</span>
        </div>
        <div class="item item3 box box-tb box-center-center" @click="toShare('inviteNewGuyActionSavePicture')">
          <span class="download"></span>
          <span>保存至相册</span>
        </div>
      </div>
    </div>
    <div class="is-weixin" v-else></div>
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
    },
    computed: {
      ...mapState('local', {
        shareData: state => state.shareData
      })
    },
    async mounted() {
      let wxConfig = await this.wechatConfig();
      console.log('wxConfig', wxConfig)
      if (wxConfig && wxConfig.signature && wxConfig.appId && wxConfig.nonceStr && wxConfig.timestamp) {
        wx.config({
          "debug": this.$store.state.IS_DEV, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          "signature": wxConfig.signature,
          "appId": wxConfig.appId,
          "nonceStr": wxConfig.nonceStr,
          "timestamp": wxConfig.timestamp,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
        });
        wx.ready(function() {
          console.log("ready")
          // 分享朋友
          wx.onMenuShareAppMessage({
            title: '是成都人就来瓜分百万大奖', // 分享标题
            desc: '参与成都人纯度测试，纯度越高，奖金越多！', // 分享描述
            link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'https://tiejin.cn/public/img/index/tiejin_white.png', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              // 用户点击了分享后执行的回调函数
            }
          })
  
          // 分享朋友圈
          wx.onMenuShareTimeline({
            title: '是成都人就来瓜分百万大奖', // 分享标题
            link: 'location.href', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            success: function() {
              // 用户点击了分享后执行的回调函数
            }
          })
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        })
        wx.error(function(res) {
          console.log("error", res)
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      }
    },
    methods: {
      ...mapActions("local", [
        "wechatConfig",
        "userShare"
        ]),
      toShare(type) {
        // if(!this.isLogin) {
        //   // 调登录
        //   return
        // }
        let ua = this.$store.state.UA
        console.log('share--', ua)
        if (ua.indexOf("closer-ios") > -1) {
          setupWebViewJavascriptBridge(function(bridge) {
            if (bridge) {
              bridge.callHandler("inviteNewerAction", {
                "type": "inviteNewGuyActionWithdraw",
                "img": "http://a.hiphotos.baidu.com/image/pic/item/0824ab18972bd4077557733177899e510eb3096d.jpg"
              }, function(data, responseCallback) {})
            }
          })
        } else if (ua.indexOf("closer-android") > -1) {
          if (typeof window.bridge != "undefined") {
            try {
              window.bridge.inviteNewerAction({
                "type": "inviteNewGuyActionWithdraw",
                "img": "http://a.hiphotos.baidu.com/image/pic/item/0824ab18972bd4077557733177899e510eb3096d.jpg"
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

