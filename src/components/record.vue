<template>
  <div class="record-box">
    <div class="record-list box box-lr">
      <div class="time">6月14日</div>
      <div class="coountry">意大利（W）VS 俄罗斯</div>
      <div class="money">获得3.33元</div>
      <div class="correct-times">正确X2</div> 
    </div>
    <div class="record-list box box-lr">
      <div class="time">6月14日</div>
      <div class="coountry">意大利（W）VS 俄罗斯</div>
      <div class="money">获得3.33元</div>
      <div class="correct-times">正确X2</div> 
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.record-box {
  margin: 0 16pr;
  padding:20pr 41pr 40pr 41pr;
  font-size: 24pr;
  line-height: 34pr;
  color: #92b3f8;
  // color: #fff;
  background: #041c4d;
  border-radius: 0px 10pr 10pr 10pr;
  .record-list {
    margin-top: 20pr;
    position: relative;
    .coountry {
      margin-left: 23pr;
    }
    .money {
      margin-left: 48pr;
    }
    .correct-times {
      position: absolute;
      top: 0;
      right: 0;
      margin-left: 21pr;
    }
  }
}
</style>


