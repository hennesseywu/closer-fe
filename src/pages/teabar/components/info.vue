<template>
  <div class="info-wrapper">
    <div class="info-title">填写信息</div>
    <div class="name-info common-height box box-lr">
      <span class="name">姓名</span>
      <div class="name-input common-bg">
        <input type="text" placeholder="请输入您的真实姓名">
      </div>
    </div>
    <div class="addr-info common-height box box-lr">
      <span class="address">地址</span>
      <div class="addr-input common-bg">
        <input type="text" placeholder="请输入您的收货地址">
      </div>
  
    </div>
    <div class="info-btn">提交领取奖励</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .info-wrapper {
    margin-top: 578pr;
    background: #F0FBFF;
    border-radius: 28pr;
    padding: 40pr 50pr 38pr 50pr;
    .info-title {
      font-size: 48pr;
      color: #105DB3;
      text-align: center;
    }
    .common-height {
      font-size: 32pr;
      height: 80pr;
      line-height: 80pr;
      margin-top: 40pr;
      >span {
        color: #105DB3;
        font-size: 32pr;
        line-height: 80pr;
      }
    }
    .common-bg {
      width: 81.5%;
      margin-left: 36pr;
      border-radius: 48pr;
      background: #FFFDE4;
      border: 1px solid #FFF49E;
      >input {
        padding-left: 40pr;
        background: #FFFDE4;
        border-radius: 48px;
      }
    }
    .addr-input {
      >input {
        width: 100%;
      }
    }
    .info-btn {
      text-align: center;
      font-size: 36pr;
      height: 96pr;
      line-height: 96pr;
      color: rgba(51, 51, 51, 0.5);
      margin: 60pr auto 40pr auto;
      background: linear-gradient(180deg, rgba(249, 236, 123, 1), rgba(255, 213, 24, 1));
      box-shadow: 0px -4pr 0px 0px rgba(230, 190, 14, 1), 0px 6pr 0px 0px rgba(255, 244, 158, 1), 0px 2p2 0px 0px rgba(255, 254, 244, 1);
      border-radius: 48pr;
      opacity: 0.7;
    }
  }
</style>
