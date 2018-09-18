<template>
  <div class=" moon-share" :class="{'in-app': ENV.app}">

      <div v-if="ENV.app" class=" share-app">
        <div class="yun-wrapper min">
          <div class="yun"></div>
          <div class="yun1"></div>
        </div>
        <div class="share-wrapper">
          <moon-header back @goBack="handleBack"></moon-header>
          <div class="share-wrap">
            <div class="share-container">
              <div v-if="answerId" class="share-score">
                <div class="share-user-img">
                  <img :src="makeFileUrl(user.avatar)" @load="avatarLoad(true, $event)" @error="avatarLoad(false, $event)" class="share-user-avatar" crossOrigin="Anonymous">
                </div>
                <div class="share-user-name">{{user.fullname}}</div>
                <div class="share-desc">
                  在【广寒攻略】中获得
                  <span class="share-desc-score"> {{score}}</span> 分，
                  <span class="share-desc-tip">{{levelData.tip}}</span>
                  猜猜你是广寒宫里的谁？
                </div>
                <div class="share-tag">
                  <img :src="levelData.tagImg">
                </div>
                <div class="share-qrcode">
                  <qrcode-vue :value="qrcode.val" :size="qrcode.size"></qrcode-vue>
                </div>
                <div class="share-tip">长按识别二维码参与游戏，和他Pk吧！</div>
              </div>
              <div v-else class="share-default">
                <div class="share-default-hd"></div>
                <div class="share-qrcode share-default-qrcode">
                  <qrcode-vue :value="qrcode.val" :size="qrcode.size"></qrcode-vue>
                </div>
                <div class="share-tip share-default-tip">长按识别二维码答题</div>
                <div class="share-logo share-default-logo"></div>
              </div>
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
        </div>
      </div>
      <div ref="canvasContainer" class="main share-wx" :class="{'share-wx-app': ENV.app}">
        <div class="yun-wrapper min">
          <div class="yun"></div>
          <div class="yun1"></div>
        </div>
        <div class="share-wrapper">
          <div class="share-container">
            <div v-if="answerId" class="share-wx-score">
              <div class="share-user-img">
                <img :src="makeFileUrl(user.avatar)" @load="avatarLoad(true, $event)" @error="avatarLoad(false, $event)" class="share-user-avatar" crossOrigin="Anonymous">
              </div>
              <div class="share-user-name">{{user.fullname}}</div>
              <div class="share-desc">
                在【广寒攻略】中获得
                <span class="share-desc-score"> {{score}}</span> 分，
                <span class="share-desc-tip">{{levelData.tip}}</span>
                猜猜你是广寒宫里的谁？
              </div>
              <div class="share-tag">
                <img :src="levelData.tagImg">
              </div>
              <div class="share-qrcode">
                <qrcode-vue :value="qrcode.val" :size="qrcode.size"></qrcode-vue>
              </div>
              <div class="share-tip">长按识别二维码参与游戏，和他Pk吧！</div>
            </div>
            <div v-else class="share-wx-wrap">
              <img :src="headImg" class="share-wx-hd">
              <div class="share-qrcode share-wx-qrcode">
                <qrcode-vue :value="qrcode.val" :size="qrcode.size"></qrcode-vue>
              </div>
              <div class="share-tip share-wx-tip">长按识别二维码答题</div>
              <div class="share-logo share-wx-logo"></div>
            </div>
          </div>
        </div>
      </div>
      <img src="" id="share-img" class="share-img" :class="{'share-img-app': ENV.app}">
  </div>
</template>

<script>
  import {
    Toast,
    Indicator
  } from 'mint-ui';
  import {
    mapState,
    mapActions,
    mapMutations
  } from "vuex";
  import moonHeader from '../components/header';
  import {
    makeFileUrl,
    addParamsForUrl,
    html2Image,
    tjUploadFile
  } from '../../../utils/utils'
  import baseUrl from '../../../config/index'
  import QrcodeVue from 'qrcode.vue';
  import defaultImg from '../assets/images/default_share.png';
  export default {
    data() {
      return {
        isDrawed: false,
        qrcode: {
          val: 'https://a.tiejin.cn/moon',
          size: 80
        },
        showData: [{
          tip: '赢得5元红包！',
          tagImg: require('../assets/images/local1.png')
        }, {
          tip: '喜提盒饭价值2元。',
          tagImg: require('../assets/images/local2.png')
        }, {
          tip: '和5元红包失之交臂。',
          tagImg: require('../assets/images/local3.png')
        }],
        defaultImg: defaultImg,
        imgUrl: '',
        headImg: require('../assets/images/index_hd.png')
      }
    },
    components: {
      moonHeader,
      QrcodeVue
    },
    created() {
      Indicator.open();
      // this.userShare()
      if (sessionStorage.resultCache && sessionStorage.resultCache != '{}') {
        let CACHE = JSON.parse(sessionStorage.resultCache);
        console.log('window.CACHE', CACHE)
        // sessionStorage.resultCache = '{}';
        this.setCache(CACHE)
      }
      if (this.ENV.wx) {
        console.log('share wxshare--')
        this.initWxConfig()
      }
      this.qrcode.val = baseUrl.href[this.ENV.env] + '/moon?activityId=' + this.activityId + '&inviter=' + this.objectID + '&salt=' + this.salt
    },
    computed: {
      ...mapState('moon', {
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
      if (!this.answerId) {
        setTimeout(this.drawHtmlToCanvas, 100)
      } else {
        setTimeout(() => {
          if (!this.isDrawed) {
            this.drawHtmlToCanvas()
          }
        }, 10000)
      }
    },
    methods: {
      ...mapActions("moon", [
        "wechatConfig",
        "userShare",
        "checkLoginInApp",
        "initWxConfig"
      ]),
      ...mapMutations('moon', [
        "setCache"
      ]),
      toShare(type) {
        let url = this.imgUrl;
        if (window.ENV.app && window.ENV.ios) {
          setupWebViewJavascriptBridge(function(bridge) {
            console.log("toShare ios bridge", bridge)
            if (bridge) {
              bridge.callHandler("inviteNewerAction", {
                "type": type,
                "img": url
              }, function(data, responseCallback) {})
            }
          })
        } else if (window.ENV.app && window.ENV.android) {
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
        // return;
        let self = this;
        let container = self.$refs.canvasContainer;
        self.isDrawed = true;
        html2Image(container).then(img => {
          // img.setAttribute('class', 'qr-img');
          // img.setAttribute("crossOrigin", 'Anonymous')
          console.log('html2Image-finish')
          // container.appendChild(img);
          Indicator.close();
          if (self.ENV.app) {
            tjUploadFile(img).then(({
              data
            }) => {
              this.imgUrl = self.makeFileUrl(data.result.url);
              document.getElementById("share-img").src = self.imgUrl;
            })
          } else {
            document.getElementById("share-img").src=img.src;
          }
        })
      },
      avatarLoad(type, e) {
        !type && (e.target.style.display='none')
        console.log('avatar.load:', type);
        if (!this.isDrawed) {
          setTimeout(this.drawHtmlToCanvas, 100)
        }
      },
      handleBack() {
        this.answerId && (sessionStorage.goResult = true);
        this.$router.back();
      }
    }
  }
</script>

<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/share.less';
</style>

