<template>
  <div class="share-wrapper">
    <div class="is-weixin" v-if="!isWeixin"></div>
    <div class="is-app" v-else>
      <div class="share-img"></div>
    <div class="share-items box box-lr box-center-center">
      <div class="item item1 box box-tb box-center-center">
        <span class="weixin"></span>
        <span>好友</span>
      </div>
      <div class="item item2 box box-tb box-center-center">
        <span class="pyq"></span>
        <span>朋友圈</span>
      </div>
      <div class="item box box-tb box-center-center">
        <span class="qq"></span>
        <span>QQ</span>
      </div>
      <div class="item item4 box box-tb box-center-center">
        <span class="download"></span>
        <span>保存至相册</span>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isWeixin: true
    }
  }
}
</script>

<style lang="less" scoped>
.is-weixin {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #144a9d;
}
.is-app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 1334pr;
  padding-top: 128pr;
  background: #144a9d;
  .share-img {
    border: 1px solid black;
    height: 916pr;
    margin: 0 40pr 40pr;
  }
  .share-items {
    margin: 0 40pr;
    background: #fff;
    box-shadow: 0 4pr 20pr 0 rgba(0, 0, 0, 0.2);
    border-radius: 12pr;
    padding: 22pr 6pr 22pr 36pr;
    .item {
      > span:first-child {
        display: inline-block;
        width: 92pr;
        height: 92pr;
      }
      >span:last-child {
        font-size: 28pr;
        color: #4B4945;
        margin-top: 8pr;
      }
      .weixin {
        background: url(../assets/images/wx.png) no-repeat center;
        background-size: cover;
      }
      .pyq {
        background: url(../assets/images/pyq.png) no-repeat center;
        background-size: cover;
      }
      .qq {
        background: url(../assets/images/qq.png) no-repeat center;
        background-size: cover;
      }
      .download {
        background: url(../assets/images/download.png) no-repeat center;
        background-size: cover;
      }
    }
    .item2 {
      margin: 0 74pr;
    }
    .item4 {
      margin-left: 58pr;
    }
  }
}
</style>

