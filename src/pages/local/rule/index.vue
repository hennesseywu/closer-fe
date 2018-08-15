<template>
  <div class="main rule">
    <div class="hd" @click="handleBack()"></div>
    <section class="bd">
      <div class="bd-name">游戏规则</div>
      <div class="bd-chance">
        <div class="bd-title">
          机会获得
        </div>
        <div class="bd-content">
          <p>1、所有用户自动获得一次游戏机会（每天），可通过分享游戏邀请朋友参与的方式获得额外机会，每邀请一位好友参与答题，即可获得一次机会。</p>
          <p>2、每次答题消耗一次游戏机会，用完之后将无法答题。</p>
          <p>3、答题得分不及格不消耗游戏机会。</p>
          <p>4、每位用户只能获得一次2元现金红包和一次10元现金红包。</p>
          <p>5、获得10元现金红包后，将无法继续答题。</p>
        </div>
      </div>
      <div class="bd-reward">
        <div class="bd-title">奖金获得</div>
        <div class="bd-content">
          <p>1、答对全部8题，可获得10元现金红包。</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    name: 'rule',
    methods: {
      handleBack() {
        this.$router.back();
      }
    }
  }
</script>
<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/rule.less';
</style>