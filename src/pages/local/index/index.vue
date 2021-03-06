<template>
  <div class="main local-index" :class="{'in-app': ENV.app}">
    <local-header v-if="ENV.app" close share></local-header>
    <section class="tab">
      <div class="tab-default tab-left" @click="showRankingList()">好友排行榜</div>
      <div class="tab-default tab-right" @click="showRule()">活动规则</div>
    </section>
    <section class="hd animated bounceInDown fast">
      <div class="hd-default hd-1" :class="{active: mounted}"></div>
      <div class="hd-default hd-2" :class="{active: mounted}"></div>
      <div class="hd-default hd-3" :class="{active: mounted}"></div>
      <div class="hd-default hd-4" :class="{active: mounted}"></div>
      <div class="hd-img"></div>
    </section>
    <section class="bd" :class="{active: mounted}">
      <div class="bd-progress">
        <div class="bd-complete" :style="{width: currentWidth}"></div>
      </div>
      <div class="bd-scale">
        <div class="bd-scale-default bd-scale-0" :class="{active: statistic.totalAwardAmt > showAmount(0)}">
          <span class="bd-arrow bd-arrow-left"></span>
          <span class="bd-scale-amount">{{showAmount(0, 2)}}</span>
        </div>
        <div class="bd-scale-default bd-scale-50" :class="{active: statistic.totalAwardAmt >= showAmount(.5)}">
          <span class="bd-arrow bd-arrow-center"></span>
          <span class="bd-scale-amount">{{showAmount(.5, 2)}}</span>
        </div>
        <div class="bd-scale-default bd-scale-100" :class="{active: statistic.totalAwardAmt >= showAmount(1)}">
          <span class="bd-arrow bd-arrow-right"></span>
          <span class="bd-scale-amount">{{showAmount(1, 2)}}</span>
        </div>
      </div>
      <div class="bd-total">
        累计获得：
        <span class="bd-count">{{currentTotalAmount}}</span> 元
        <span class="bd-tixian" @click="handleWithDraw()">去提现</span>
      </div>
      <div class="bd-desc" v-html="currentDesc"></div>
      <div class="bd-btn animated pulse infinite delay-2" @click="handleStart()"></div>
      <div class="bd-remain">您还有{{statistic.chance}}次答题机会</div>
    </section>
    <section class="ft"></section>
    <local-dialog :show="dialog.show" :share="dialog.share" :path="path" :content="dialog.content" @close="closeDialog"></local-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import QrcodeVue from 'qrcode.vue';
  import localDialog from '../components/dialog';
  import localHeader from '../components/header';
  import defaultImg from '../assets/images/default_share.png';
  
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex';
  import {
    makeFileUrl,
    html2Image,
    tjUploadFile,
    transAmount,
    parseQuery,
    downloadApp
  } from '../../../utils/utils'
  
  import {
    Indicator
  } from 'mint-ui'
  
  export default {
    name: 'localIndex',
    data() {
      return {
        currentWidth: 0,
        path: "",
        // mounted
        mounted: false,
        // 弹窗
        dialog: {
          // 是否显示弹窗
          show: false,
          // 是否为分享弹窗
          share: false,
          // 弹窗文字内容
          content: '呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！'
        }
  
      }
    },
    components: {
      QrcodeVue,
      localDialog,
      localHeader
    },
    computed() {
      this.userShare()
    },
    computed: {
      ...mapState('local', ['aid', 'isLogin', 'statistic']),
      ...mapState('local', {
        currentQuesitionNum: state => state.currentQuesitionNum,
        objectID: state => state.user.objectID || '',
        salt: state => state.statistic.signSalt,
        activityId: state => state.activityId,
  
      }),
      remainTimesToMax() {
        return Math.ceil(transAmount(this.statistic.maxAwardAmt - this.statistic.totalAwardAmt) / 5)
      },
      currentTotalAmount() {
        return (this.statistic.totalAwardAmt / 100).toFixed(0);
      },
      currentDesc() {
        if (this.remainTimesToMax == 0) {
          return `恭喜，您已获得全部${transAmount(this.statistic.maxAwardAmt)}元的现金奖励~`
        }
        return `您再获得<span style="color: #f20707;">${this.remainTimesToMax}次</span>王者称号就可以拿到总计${transAmount(this.statistic.maxAwardAmt)}元的现金奖励了！`
      }
    },
    created() {
      const self = this;
      console.log('isLogin:', self.isLogin)
      // 种cookie
      Cookies.set('aid', self.aid, {
        expires: 7
      });
      self.checkParams(self.$route.query);
      if (self.isLogin) {
        self.initAnimation();
        return;
      }
      if (self.ENV.app) {
        // 端内
        self.checkLoginInApp(self.initAnimation);
      } else if (self.ENV.wx) {
        // 微信端
        // let user = Cookies.get("user");
        // if (typeof(Cookies.get("token")) != "undefined" && typeof(user) != "undefined") {
        //   self.SET_USER(JSON.parse(user))
        // } else {
        self.getUserInfoAndLoginWithWx(self.$route.query).then(sign => {
          if (sign) {
            self.initAnimation();
          } else {
            this.dialog.share = false;
            this.dialog.content = '亲，请先登录再参与答题吧~';
            this.dialog.show = true;
          }
        })
        // }
      }
  
    },
  
    methods: {
      ...mapActions('local', [
        'checkParams',
        'checkLoginInApp',
        'getUserInfoAndLoginWithWx',
        'getStatistic',
        'initWxConfig',
        'updateCurrentQuestionNum',
        'userShare'
      ]),
      ...mapMutations('local', [
        'SET_USER',
        'updateCurrentQuestionNum'
      ]),
      // 展示金额，rate为百分比率，count为除以10的指数
      showAmount(rate, count = 0) {
        return parseInt(this.statistic.maxAwardAmt * rate / (10 ** count))
      },
      // 转到排行榜
      showRankingList() {
        if (!this.isLogin) {
          this.checkLoginInApp(this.initAnimation);
        } else if (this.checkOtherEnv()) {
          this.$router.push({
            name: 'localRank'
          })
        }
      },
      // 转到规则
      showRule() {
        this.$router.push({
          name: 'localRule',
          params: {
            from: 'localIndex'
          }
        })
      },
      // 开始答题
      handleStart() {
        // this.dialog.share = true;
        //   this.dialog.content = '亲，没有答题积会了，<br/>快去分享给好友获取答题机会吧！';
        //   this.dialog.show = true;
        //   return false;
        if (!this.ENV.app && !this.ENV.wx) {
          this.dialog = {
            share: false,
            content: '亲，请去微信环境下答题吧',
            show: true
          }
        } else if (!this.isLogin) {
          this.checkLoginInApp(this.initAnimation);
        } else if (this.checkOtherEnv(true)) {
          window.pageTo = 'answer'
          this.$router.push({
            name: 'localAnswer',
            params: {
              from: 'fromIndex'
            }
          })
        }
      },
      closeDialog() {
        this.dialog.show = false;
      },
      // 其他环境下弹窗提示去微信答题
      checkOtherEnv(needLogin) {
        console.log(this.statistic.chance)
        if (!this.ENV.app && !this.ENV.wx) {
          this.dialog = {
            share: false,
            content: '亲，请去微信环境下答题吧',
            show: true
          }
          return false;
        } else if (this.statistic.chance <= 0 && needLogin) {
          this.dialog = {
            share: true,
            content: '亲，没有答题机会了~<br/>快去分享给好友获取答题机会吧！',
            show: true
          }
          return false;
        } else if (this.remainTimesToMax <= 0 && needLogin) {
          this.dialog = {
            share: false,
            content: '亲，您已经获得全部奖励~<br/>',
            show: true
          }
          return false;
        } else {
          return true;
        }
      },
      setCurrentWidth() {
        return this.currentWidth = this.statistic.totalAwardAmt * 100 / this.statistic.maxAwardAmt + '%'
      },
      initAnimation() {
        this.getStatistic().then(() => {
          this.initWxConfig();
          this.setCurrentWidth();
          // if (typeof(Cookies.get("path")) == "undefined"&&this.ENV.wx) {
          //   setTimeout(() => {
          //     this.drawHtmlToCanvas();
          //   }, 100)
          // } else {
          //   this.path = Cookies.get("path")
          // }
        })
      },
      handleWithDraw() {
        if (this.ENV.app) {
          if (!this.isLogin) {
            this.checkLoginInApp(this.initAnimation);
          } else {
            if (this.ENV.ios) {
              setupWebViewJavascriptBridge(function(bridge) {
                if (bridge) {
                  //ios获取用户token 判断登录
                  bridge.callHandler("inviteNewGuyAction", 'inviteNewGuyActionWithdraw', function(data, responseCallback) {})
                }
              })
            } else if (this.ENV.android) {
              if (typeof window.bridge != "undefined") {
                try {
                  window.bridge.inviteNewGuyAction('inviteNewGuyActionWithdraw');
                } catch (e) {
                  Toast("请升级最新版本客户端")
                }
              }
            }
          }
        } else {
          // DOWNLOAD
          downloadApp();
        }
      },
      makeFileUrl(url) {
        let avatar = makeFileUrl(url)
        return avatar
      }
  
    },
    mounted() {
      Indicator.open();
      setTimeout(() => {
        this.mounted = true;
      }, 800);
      this.updateCurrentQuestionNum()
    }
  }
</script>

<style lang="less">
  @import '../assets/style/animation.less';
  @import '../assets/style/main.less';
  @import '../assets/style/index.less';
</style>