<template>
  <div class="prize-wrapper box box-tb box-center-center">
    <div class="icon-img"></div>
    <div class="prize-text">恭喜您已领取奖励！</div>
    <div class="prize-tips">去首页看看吧，有更多惊喜～</div>
    <div class="prize-btn btn-common ischecked" @click="gohome">去首页看看</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      gohome() {
        // 跳转APP首页
        location.href = 'https://www.baidu.com'
      }
    }
  }
</script>

<style lang="less" scoped>
  .prize-wrapper {
    margin: 578pr 40pr auto 40pr;
    background: #F0FBFF;
    border-radius: 28pr;
    font-size: 36pr;
    padding: 0 50pr;
    .icon-img {
      margin-top: 60pr;
      width: 168pr;
      height: 164pr;
      background: url('../assets/images/icon.png') no-repeat center;
      background-size: cover;
    }
    .prize-text {
      margin-top: 60pr;
      color: #4B4945;
    }
    .prize-tips {
      margin-top: 20pr;
      color: #94928E;
      font-size: 28pr;
    }
    .prize-btn {
      margin: 60pr auto 40pr auto;
    }
  }
</style>
