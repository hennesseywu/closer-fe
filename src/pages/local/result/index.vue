<template>
  <div class="main local-result" :class="{'in-app': ENV.app}">
    <local-header v-if="ENV.app" back home></local-header>
    <div class="result-wrapper">
      <div class="content1">
        <div class="avater" :class="level == 1 ? 'avater1' : (level == 2 ? 'avater2' : 'avater3')">
          <span class="avater-commen" :class="level == 1 ? 'avater1-icon' : (level == 2 ? 'avater2-icon' : 'avater3-icon')"></span>
          <img :src="makeFileUrl(avatar)">
        </div>
        <div class="regards">
          <span>{{score}}</span>分
        </div>
        <div class="local-name box box-lr box-center-center">
          <div class="line left"></div>
          <div class="name">获得称号</div>
          <div class="line right"></div>
        </div>
      </div>
      <div class="content2">
        <div class="commen-width animated bounceInDown" :class="level == 1 ? 'local1-img' : (level == 2 ? 'local2-img' : 'local3-img')">
          <div class="logo animated shake"></div>
          <div class="go-share animated bounceInDown1" v-if="ENV.wx" @click="goShare">去分享</div>
        </div>
        <div class="local-desc localText" v-html="level == 1 ? localText1 : (level == 2) ? localText2 : localText3">
        </div>
      </div>
      <div class="content3">
        <div class="btn-commen go-answer" @click="goAnswer">再次答题</div>
        <div class="chance-remain">剩余{{chance >= 0 ? chance : '0'}}次答题机会</div>
        <div class="btn-commen get-cash animated zoomIn" @click="downloadApp" v-if="isApp">去分享</div>
        <div class="btn-commen get-cash animated zoomIn" @click="downloadApp" v-else-if="level == 1">领5元奖励</div>
        <div class="btn-commen get-cash animated zoomIn" @click="downloadApp" v-else-if="level == 2">领2元奖励</div>
        <div class="btn-commen get-cash animated zoomIn" @click="downloadApp" v-else-if="level == 3">下载APP</div>
        <div class="text-commen go-wallet" v-if="isApp">去“我的-钱包”查看</div>
        <div class="text-commen go-wallet" v-if="!isApp && level == 3">下载贴近app，领10元新手红包</div>
        <div class="text-commen go-wallet" v-if="!isApp && level != 3">下载贴近APP，去“我的-钱包”查看</div>
        <div class="text-commen tips" @click="goTips">查看正确答案，点这里<span class="arrow"></span> </div>
      </div>
      <local-dialog :show="dialog.show" :share="dialog.share" :content="dialog.content" :path="path" @close="closeDialog"></local-dialog>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from "vuex"
  import {
    Toast,
    Indicator
  } from 'mint-ui'
  import {
    downloadApp
  } from '../../../utils/utils'
  import localDialog from '../components/dialog'
  import localHeader from '../components/header';
  import QrcodeVue from 'qrcode.vue';
  import defaultImg from '../assets/images/default_share.png';
  import {
    makeFileUrl,
    addParamsForUrl,
    html2Image,
    tjUploadFile
  } from '../../../utils/utils'
  export default {
    components: {
      localDialog,
      localHeader,
      QrcodeVue
    },
    data() {
      return {
        isApp: this.ENV.app,
        // btnText: "下载APP",
        // regards: 0,
        // chance: 0,
        localText1: '同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO',
        localText2: '恭喜你获得2元奖励，但你对成都了解还不够多哦！冲击满分赢5元！',
        localText3: '盆友，你是路过成都吗？得满分可以领5元现<br/>金，再试试吧',
        // 弹窗
        dialog: {
          // 是否显示弹窗
          show: false,
          // 是否为分享弹窗
          share: false,
          // 弹窗文字内容
          content: '呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！'
        },
  
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
        path: ""
      };
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter:', from)
      if (/^\/local\/(share|answer)/.test(from.path) || sessionStorage.resultCache && sessionStorage.resultCache != '{}') {
        next();
      } else {
        next('/local')
      }
    },
    created() {
      if (sessionStorage.resultCache && sessionStorage.resultCache != '{}') {
        let CACHE = JSON.parse(sessionStorage.resultCache);
        console.log('window.CACHE', CACHE)
        sessionStorage.resultCache = '{}';
        this.setCache(CACHE)
      }
      if (this.ENV.dev) {
        this.qrcode.val = 'https://a-sandbox.tiejin.cn/local?activityId=' + this.activityId + '&inviter=' + this.objectID + '&salt=' + this.salt
      } else {
        this.qrcode.val = 'https://a.tiejin.cn/local?activityId=' + this.activityId + '&inviter=' + this.objectID + '&salt=' + this.salt
      }
      console.log("parkk", this.$route.params.from)
      if (this.ENV.wx) {
        this.initWxConfig()
      }
    },
    mounted() {
      this.userShare();
      if (this.score != '') {
        // this.regardsAdd();
      } else {
        let data = {
          activityId: this.activityId
        }
        if (this.objectID) {
          data['inviter'] = this.objectID;
        }
        // this.$router.push({
        //     name: 'localIndex'
        //   })
        // location.href = addParamsForUrl(location.origin + '/local', data)
      }
    },
    computed: {
      ...mapState('local', {
        chance: state => state.statistic.chance,
        currentQuesitionNum: state => state.currentQuesitionNum,
        statistic: state => state.statistic,
        endData: state => state.endData,
        activityId: state => state.activityId,
        objectID: state => state.user.objectID || '',
        salt: state => state.statistic.signSalt,
        user: state => state.user,
        avatar: state => state.user.avatar,
        fullname: state => state.user.fullname,
        answerId: state => state.endData.userAnswerId,
        shareData: state => state.shareData,
        level: state => state.endData.level,
        score: state => state.endData.score,
        awardAmt: state => state.endData.awardAmt
      }),
      levelData() {
        return this.showData[parseInt(this.level) - 1]
      }
    },
    methods: {
      ...mapMutations([
        "updateChance",
        "updateCurrentQuestionNum",
      ]),
      ...mapMutations('local', [
        "setCache"
      ]),
      ...mapActions('local', [
        "updateChance",
        "initWxConfig",
        "userShare",
        "updateCurrentQuestionNum"
      ]),
      makeFileUrl(url) {
        let avatar = makeFileUrl(url)
        console.log('result:avatar:', avatar)
        return avatar
      },
      regardsAdd() {
        if (this.regards > this.score) {
          return
        }
        var time = setInterval(() => {
          this.regards++
            if (this.regards >= this.score) {
              this.regards = this.score
              window.clearInterval(time)
              return
            }
        }, 10)
      },
      goAnswer() {
        if (this.statistic.totalAwardAmt >= this.statistic.maxAwardAmt) {
          Toast('您已经获得奖励100元，不能再答题了~')
          return
        }
        if (this.chance > 0) {
          this.updateCurrentQuestionNum()
          window.pageTo = 'answer'
          this.$router.push({
            name: 'localAnswer',
            params: {
              from: 'playAgain'
            }
          })
        } else {
          this.dialog.show = true
          this.dialog.share = true
        }
  
      },
      closeDialog() {
        this.dialog.show = false;
      },
      downloadApp() {
        if (this.isApp) {
          // 去分享
          this.$router.push({
            name: 'localShare'
          })
        } else {
          this.setLocalStorage()
          downloadApp()
        }
      },
      goShare() {
        if (this.ENV.wx) {
          this.setLocalStorage()
          location.href = `${location.origin}/local/share`
        }
      },
      goTips() {
        if (this.isApp) {
          // 跳转app内部详情页
          location.href = 'closer://community/9Mj8OC0TUL'
        } else {
          // 跳转对应栏目页
          this.setLocalStorage()
          location.href = 'https://h5.tiejin.cn/community/9Mj8OC0TUL'
        }
      },
      setLocalStorage() {
        let resultCache = {
          chance: this.chance,
          currentQuesitionNum: this.currentQuesitionNum,
          statistic: this.statistic,
          endData: this.endData,
          activityId: this.activityId,
          salt: this.signSalt,
          user: this.user,
          answerId: this.userAnswerId,
          shareData: this.shareData,
          level: this.level,
          score: this.score
        };
        sessionStorage.resultCache = JSON.stringify(resultCache);
      },
      avatarLoad(type, e) {
        !type && (e.target.style.display='none')
      }
    }
  };
</script>

<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/animation.less';
  @import '../assets/style/result.less';
</style>
