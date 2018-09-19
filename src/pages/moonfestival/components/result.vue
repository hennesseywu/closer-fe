<template>
  <div class="moon-result" :class="{'in-app': ENV.app}">
    <div class="yun-wrapper min">
      <div class="yun"></div>
      <div class="yun1"></div>
    </div>
    <moon-header v-if="ENV.app" back home @goBack="handleBack"></moon-header>
    <div class="result-wrapper">
      <div class="content1">
        <div class="avater">
          <span class="avater-commen" :class="level == 1 ? 'avater1-icon' : (level == 2 ? 'avater2-icon' : 'avater3-icon')"></span>
          <img :src="makeFileUrl(avatar)">
        </div>
        <div class="regards">
          <span>{{score}}</span>分
        </div>
        <div v-if="!ENV.app" class="toShare" @click="handleShare">去分享></div>
      </div>
      <div class="content2">
        <div class="commen-width animated bounceInDown">
          <div class="result-bd box box-lr">
            <div class="level-commen" :class="level == 1 ? 'wangmu' : (level == 2 ? 'change' : 'bajie')"></div>
            <div class="result-text box box-tb">
              <div class="level" :class="level == 1 ? 'wangmu-text' : (level == 2 ? 'change-text' : 'bajie-text')"></div>
              <div class="desc" v-html="level == 1 ? levelText1 : (level == 2) ? levelText2 : levelText3"></div>
            </div>
          </div>
        </div>
        <div class="btn-box box box-lr">
          <div class="btn-commen" :class="wxBtnClass" @click="goShare"></div>
          <div class="go-answer btn-commen" @click="goAnswer"></div>
        </div>
        <div class="chance-remain">剩余{{chance >= 0 ? chance : '0'}}次答题机会</div>
      </div>
      <moon-dialog :show="dialog.show" :share="dialog.share" :content="dialog.content" :path="path" @close="closeDialog"></moon-dialog>
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
    downloadApp,
    makeFileUrl,
    addParamsForUrl,
    html2Image,
    tjUploadFile
  } from '../../../utils/utils'
  import moonDialog from './dialog'
  import moonHeader from './header';
  import QrcodeVue from 'qrcode.vue';
  import defaultImg from '../assets/images/default_share.png';
  export default {
    props: {
      showResult: {
        type: Boolean,
        default: false
      }
    },
    components: {
      moonDialog,
      moonHeader,
      QrcodeVue
    },
    data() {
      return {
        isApp: this.ENV.app,
        levelText1: '额滴个神，皓月千万里，C位属于你。邀请各路神仙一起搞事情吧',
        levelText2: '上天了！你已喜提中秋盒饭，价值2元。想打怪升级？再试试吧',
        levelText3: '恭喜大帅，今年中秋你可以下凡赏月了。想见嫦娥姐姐？再试试吧',
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
          val: 'https://a.tiejin.cn/moon',
          size: 80
        },
        defaultImg: defaultImg,
        path: ""
      };
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter:', from)
      if (/^\/moon\/(share|answer)/.test(from.path) || sessionStorage.resultCache && sessionStorage.resultCache != '{}') {
        next();
      } else {
        next('/moon')
      }
    },
    created() {
      console.log('reault create=====')
      if (sessionStorage.resultCache && sessionStorage.resultCache != '{}') {
        let CACHE = JSON.parse(sessionStorage.resultCache);
        console.log('window.CACHE', CACHE)
        sessionStorage.resultCache = '{}';
        this.setCache(CACHE)
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
        //     name: 'moonIndex'
        //   })
        // location.href = addParamsForUrl(location.origin + '/moon', data)
      }
    },
    computed: {
      ...mapState('moon', {
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
      wxBtnClass() {
        let cls = 'share-btn';
        console.log('wxBtnClass',this.level)
        if (this.ENV.wx) {
          switch (this.level) {
            case 1:
              cls='share-btn-5';
              break;
            case 2:
              cls='share-btn-2';
              break;
            default:
              cls='share-btn-dl';
              break;
          }
        }
        return cls;
      }
    },
    methods: {
      ...mapMutations([
        "updateChance",
        "updateCurrentQuestionNum",
      ]),
      ...mapMutations('moon', [
        "setCache"
      ]),
      ...mapActions('moon', [
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
          this.$emit('openAnswer', {params: 'fromResult'})
          this.updateChance()
        } else {
          this.dialog.show = true
          this.dialog.share = true
        }
  
      },
      closeDialog() {
        this.dialog.show = false;
      },
      goShare() {
        if (this.isApp) {
          // 去分享
          this.$router.push({
            name: 'moonShare'
          })
        } else {
          this.setLocalStorage()
          downloadApp()
        }
      },
      handleShare() {
        this.setLocalStorage()
        location.href = `${location.origin}/moon/share`
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
        console.log(resultCache);
        sessionStorage.resultCache = JSON.stringify(resultCache);
        sessionStorage.fromResult = true;
      },
      avatarLoad(type, e) {
        !type && (e.target.style.display='none')
      },
      handleBack() {
        this.$emit('goBack');
      }
    }
  };
</script>

<style lang="less">
  @import '../assets/style/animation.less';
  @import '../assets/style/result.less';
</style>
