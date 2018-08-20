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
        <div class="bd-complete" :style="{width: user.score + '%'}"></div>
      </div>
      <div class="bd-scale">
        <div class="bd-scale-default bd-scale-0" :class="{active: user.score > 0}">0元</div>
        <div class="bd-scale-default bd-scale-50" :class="{active: user.score >= 50}">50元</div>
        <div class="bd-scale-default bd-scale-100" :class="{active: user.score >= 100}">100元</div>
      </div>
      <div class="bd-total">
        累计获得：
        <span class="bd-count">{{user.score}}</span> 元
      </div>
      <div class="bd-desc" v-html="currentDesc"></div>
      <div class="bd-btn animated pulse infinite delay-2" @click="handleStart()"></div>
      <div class="bd-remain">您还有{{user.remainTimes}}次答题机会</div>
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
    name: 'index',
    data() {
      return {
        user: {},
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
      ...mapState({
        IS_APP: state => state.IS_APP, 
        IS_WX: state => state.IS_WX, 
        user1: state => state.index.user
      }),
      currentDesc() {
        return '您再获得5次王者称号就可以拿到总计100元的现金奖励了！'
      }
    },
    beforeRouteEnter({
      name,
      query,
      fullPath
    }, from, next) {
      console.log(from)
      next();
      return;
      if (this.IS_APP) { 
        // 端内
        Cookies.remove('user'); //app端user完全依赖APP
        next();
      } else if (this.IS_WX) {
        // 微信端，若未授权则进入授权页
        if (query.code) {
          next();
          this.getUserInfoAndLoginByWx(query)
        } else {
          this.wxAuthorization(fullPath).then(({
            data
          }) => {
            if (typeof(data.code) != "undefined" && data.code == 0) {
              location.href = data.result;
            } else {
              next()
            }
          })
        }
      } else {
        next();
      }
    },
    methods: {
      ...mapActions('index', [
        'wxAuthorization'
      ]),
      showRankingList() {
        this.$router.push({
          name: 'localRank'
        })
      },
      showRule() {
        this.$router.push({
          name: 'localRule'
        })
      },
      handleStart() {
        this.dialog.show = true;
      },
      closeDialog() {
        this.dialog.show = false;
      }
    },
    mounted() {
      console.log(this.$store.state)
      setTimeout(() => {
        this.mounted = true;
        // setTimeout(() => this.user.score = 60, 100)
      }, 800);
    }
  }
</script>

<style lang="less">
  @import '../assets/style/animation.less';
  @import '../assets/style/main.less';
  @import '../assets/style/index.less';
</style>