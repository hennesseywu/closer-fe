<template>
  <div class="main local-share" :class="{'in-app': IS_APP}">
    <local-header v-if="IS_APP" back home></local-header>
    <div class="share-wrappe;
    let shareImg = document.querySelector('#share-img')r">
      <div class="share-container">
        <div ref="canvasContainer" class="share-box">
          <div v-if="answerId" class="share-score">
            <div class="share-user-img">
              <img :src="makeFileUrl(user.avatar)" class="share-user-avatar" crossOrigin="Anonymous">
              <div class="share-user-filter">
                <img :src="levelData.logoImg" alt="">
              </div>
            </div>
             <div class="share-user-name">{{user.fullname}}</div>
            <div class="share-desc">
              在【谁是成都最土著】中获得
              <span class="share-desc-score"> {{score}}</span> 分，
              <br/>
              <span class="share-desc-tip">{{levelData.tip}}</span>
            </div> 
            <div class="share-title box box-lr box-center-center">
              <div class="line left"></div>
              <div class="name">获得称号</div>
              <div class="line right"></div>
            </div>
            <div class="share-tag">
              <img :src="levelData.tagImg" alt="">
            </div>
             <div class="share-qrcode"> 
              <qrcode-vue :value="qrcode.val" :size="qrcode.size"></qrcode-vue>
            </div>
            <div class="share-tip">长按识别二维码参与游戏，和他Pk吧</div>
          </div>
          <div v-else class="share-default">
            <img :src="defaultImg" alt="" class="share-default-bg">
            <div class="share-qrcode">
              <qrcode-vue :value="qrcode.val" :size="qrcode.size"></qrcode-vue>
            </div>
          </div>
          <img class="share-img" id="share-img" :src="imgUrl">
        </div>
      </div>
      <div v-if="IS_APP" class="share-items box box-lr box-center-center">
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
  import * as PIXI from 'pixi.js';
  import QrcodeVue from 'qrcode.vue';
  import defaultImg from '../assets/images/default_share.png';
  export default {
    data() {
      return {
        isApp: this.$store.state.IS_APP,
        isLogin: false,
        qrcode: {
          val: 'https://a.tiejin.cn/local',
          size: 80
        },
        showData: [{
          logoImg: require('../assets/images/avatar1.png'),
          tip: '赢得5元红包！',
          tagImg: require('../assets/images/local1.png')
        }, {
          logoImg: require('../assets/images/avatar2.png'),
          tip: '赢得2元现金红包，全答对可得5元哦！',
          tagImg: require('../assets/images/local2.png')
        }, {
          logoImg: require('../assets/images/avatar3.png'),
          tip: '和5元现金红包失之交臂，你要来试试吗？',
          tagImg: require('../assets/images/local3.png')
        }],
        defaultImg: defaultImg,
        imgUrl: ''
      }
    },
    components: {
      localHeader,
      QrcodeVue
    },
    created() {
      Indicator.open();
      console.log('isAPP', this.isApp)
      // this.userShare()
      if (this.IS_WX) {
        console.log('share wxshare--')
        this.initWxConfig()
      }
      if (this.IS_DEV) {
        this.qrcode.val = 'https://a-sandbox.tiejin.cn/local?activityId=' + this.activityId + '&inviter=' + this.objectID + '&salt=' + this.salt
      } else {
        this.qrcode.val = 'https://a.tiejin.cn/local?activityId=' + this.activityId + '&inviter=' + this.objectID + '&salt=' + this.salt
      }
    },
    computed: {
      ...mapState(['IS_DEV', 'IS_APP', 'IS_WX']),
      ...mapState('local', {
        objectID: state => state.user.objectID || '',
        salt: state => state.statistic.signSalt,
        activityId: state => state.activityId,
        user: state => state.user,
        answerId: state => state.endData.userAnswerId,
        shareData: state => state.shareData,
        level: state => state.endData.level,
        score: state => state.endData.score
      }),
      levelData() {
        return this.showData[parseInt(this.level) - 1]
      }
    },
    mounted() {
      console.log('answerId:', this.answerId)
      // setTimeout(this.drawHtmlToCanvas, 100)
      // this.pixiImg()
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
        let url = this.appShareImg;
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
      },
      drawHtmlToCanvas() {
        let self = this;
        let container = self.$refs.canvasContainer;
        let width = container.clientWidth;
        let height = container.clientHeight;
        let shareWrap = document.querySelector('#share-wrap1');
        let shareImg = document.querySelector('#share-img1');


        shareWrap.setAttribute('style', `position:fixed;top:0;left:0;width:${width};height:${height};z-index:9999;`)
        html2Image(container).then(img => {
          // img.setAttribute('class', 'qr-img');
          // img.setAttribute("crossOrigin", 'Anonymous')
          // document.getElementById("share-img").src=img.src;
          console.log('html2Image-finish')
          // container.appendChild(img);
          console.log(shareWrap,shareImg)
          // shareImg.src = img.src;
          shareWrap.style.display = 'block'
            Indicator.close();
          if (self.IS_APP) {
            tjUploadFile(img).then(({
              data
            }) => {
              self.imgUrl = self.makeFileUrl(data.result.url);
               document.getElementById("share-img").src=self.imgUrl;

            })
          }
        })
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/share.less';
</style>

