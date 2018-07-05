<template>
  <div class="prize-wrapper box box-tb box-center-center">
    <div class="icon-img"></div>
    <div class="prize-text">恭喜您已领取奖励！</div>
    <div class="prize-tips">去首页看看吧，有更多惊喜～</div>
    <div class="prize-btn">去首页看看</div>
  </div>
</template>

<script>
  export default {}
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
      width: 100%;
      height: 96pr;
      font-size: 36pr;
      line-height: 96pr;
      color: #333;
      text-align: center;
      background: linear-gradient(180deg, rgba(249, 236, 123, 1), rgba(255, 213, 24, 1));
      box-shadow: 0px -4pr 0px 0px rgba(230, 190, 14, 1), 0px 6pr 0px 0px rgba(255, 244, 158, 1), 0px 2p2 0px 0px rgba(255, 254, 244, 1);
      border-radius: 48pr;
    }
  }
</style>
