<template>
  <div class="index">
    <div class="wrapper">
      <div class="invite-img"></div>
      <div class="text-desc">
        <span class="desc">扫描寻找二维码，可获得更多竞猜机会</span>
        <span class="show">查看攻略</span>
      </div>
      <div class="chance-box">
        <div class="img"></div>
        <div class="btn-img"></div>
        <div class="text-img"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  .wrapper {
    width: 100%;
    height: 100%;
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    background: url('../../../assets/images/index_bg.jpg') no-repeat center center;
    background-size: cover;
    .invite-img {
      position: absolute;
      top: 48pr;
      right: 0;
      width: 128pr;
      height: 148pr;
      background: url('../../../assets/images/share.png') no-repeat center;
      background-size: cover;
    }
    .text-desc {
      padding: 440pr 40pr 20pr 40pr;
      font-size: 24pr;
      height: 34pr;
      line-height: 34pr;
      .desc {
        color: #fff;
      }
    }
  }
}
</style>


