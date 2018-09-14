<template>
  <div class="main rule">
    <local-header v-if="IS_APP" back></local-header>
    <section class="bd">
      <div class="bd-name">游戏规则</div>
      <div class="bd-wrap">
        <div class="bd-chance">
          <div class="bd-title">
            机会获得
          </div>
          <div class="bd-content">
            <p>1、用户每天将自动获得2次游戏机会。</p>
            <p>2、游戏机会用完之后，可通过分享游戏并邀请好友参与的方式获取游戏机会，每邀请一位好友参与游戏，即可获得一次游戏机会。例如，小王将游戏分享到微信群中，有10位好友参与了游戏，那么小王即可获得10次游戏机会。</p>
            <p>3、每次答题（包括中途退出）均会消耗一次游戏机会，请尽量完成答题，冲击奖金。</p>
            <p>4、当用户奖金池达到100元之后，用户将无法进行游戏。</p>
          </div>
        </div>
        <div class="bd-reward">
          <div class="bd-title">奖金获得</div>
          <div class="bd-content">
            <p>1、每位用户最多可冲击100元现金奖励，在此之前，用户可无限次答题，每次得分在60-100之间的，奖励2元，得分100分的，奖励5元。不足60分的没有奖金。</p>
            <p>2、您的奖金将被发放至您的贴近账户【我的-钱包】中，可进入该板块进行查看。如果您还未注册APP，烦请用微信注册登录再查看。</p>
            <p>3、奖励金为冻结金额，您可以通过邀请好友注册贴近、每天登录APP进行解冻。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {mapState} from 'vuex';
  import localHeader from '../components/header';
  export default {
    name: 'rule',
    components: {
      localHeader
    },
    computed: {
      ...mapState(['IS_APP']),
    },
    created() {
      
    }
  }
</script>
<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/rule.less';
</style>