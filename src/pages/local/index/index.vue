<template>
  <div class="main index">
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
          <span class="bd-scale-amount">{{showAmount(0)}}</span>
        </div>
        <div class="bd-scale-default bd-scale-50" :class="{active: statistic.totalAwardAmt >= showAmount(.5)}">
          <span class="bd-arrow bd-arrow-center"></span>
          <span class="bd-scale-amount">{{showAmount(.5)}}</span>
        </div>
        <div class="bd-scale-default bd-scale-100" :class="{active: statistic.totalAwardAmt >= showAmount(1)}">
          <span class="bd-arrow bd-arrow-right"></span>
          <span class="bd-scale-amount">{{showAmount(1)}}</span>
        </div>
      </div>
      <div class="bd-total">
        累计获得：
        <span class="bd-count">{{statistic.totalAwardAmt}}</span> 元
      </div>
      <div class="bd-desc" v-html="currentDesc"></div>
      <div class="bd-btn animated pulse infinite delay-2" @click="handleStart()"></div>
      <div class="bd-remain">您还有{{statistic.chance}}次答题机会</div>
    </section>
    <section class="ft"></section>
    <local-dialog :show="dialog.show" :share="dialog.share" :content="dialog.content" @close="closeDialog"></local-dialog>
  </div>
</template>

<script>
  import Vue from 'vue';
  import localDialog from '../components/dialog';
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex';
  
  export default {
    name: 'localIndex',
    data() {
      return {
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
      localDialog
    },
    computed: {
      ...mapState('local', ['statistic']),
      ...mapState(['IS_APP', 'IS_WX']),
      currentWidth() {
        return this.statistic.totalAwardAmt*100/this.statistic.maxAwardAmt + '%'
      },
      remainTimesToMax() {
        return Math.ceil((this.statistic.maxAwardAmt - this.statistic.totalAwardAmt) / 5)
      },
      currentDesc() {
        if (this.remainTimesToMax == 0) {
          return `恭喜，您已获得全部${this.statistic.maxAwardAmt}元的现金奖励~`
        }
        return `您再获得${this.remainTimesToMax}次王者称号就可以拿到总计${this.statistic.maxAwardAmt}元的现金奖励了！`
      }
    },
    created() {
      const self = this;
      if (self.IS_APP) { 
        // 端内
        self.checkLoginInApp(self.getStatistic);
      } else if (self.IS_WX) {
        // 微信端
        // let user = Cookies.get("user");
        // if (typeof(Cookies.get("token")) != "undefined" && typeof(user) != "undefined") {
        //   self.SET_USER(JSON.parse(user))
        // } else {
          self.getUserInfoAndLoginWithWx(self.$route.query).then(function() {
            console.log('then::');
            self.getStatistic()
          })
        // }
      }
    },
    methods: {
      ...mapActions('local', [
        'checkLoginInApp',
        'getUserInfoAndLoginWithWx',
        'getStatistic'
      ]),
      ...mapMutations('local', [
        'SET_USER'
      ]),
      showAmount(rate) {
        return parseInt(this.statistic.maxAwardAmt*rate)
      },
      showRankingList() {
        if (this.checkOtherEnv()) {
          this.$router.push({
            name: 'localRank'
          })
        }
      },
      showRule() {
        this.$router.push({
          name: 'localRule'
        })
      },
      // 开始答题
      handleStart() {
        // if (this.checkOtherEnv()) {
          this.$router.push({
            name: 'localAnswer'
          })
        // }
      },
      closeDialog() {
        this.dialog.show = false;
      },
      // 其他环境下弹窗提示去微信答题
      checkOtherEnv() {
        if (!this.IS_APP && !this.IS_WX) {
          this.dialog.share = false;
          this.dialog.content = '亲，请去微信环境下答题吧';
          this.dialog.show = true;
          return false;
        } else {
          return true;
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.mounted = true;
      }, 800);
      // this.getStatistic();
    }
  }
</script>

<style lang="less" scoped>
  @import '../assets/style/animation.less';
  @import '../assets/style/main.less';
  @import '../assets/style/index.less';
</style>