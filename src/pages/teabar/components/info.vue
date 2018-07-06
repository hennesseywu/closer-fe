<template>
  <div class="info-wrapper">
    <div class="info-title">填写信息</div>
    <div class="name-info common-height box box-lr">
      <span class="name" >姓名</span>
      <div class="name-input common-bg">
        <input type="text" placeholder="请输入您的真实姓名" v-model="name">
      </div>
    </div>
    <div class="addr-info common-height box box-lr">
      <span class="address">地址</span>
      <div class="addr-input common-bg">
        <textarea name="address"  v-model="address" cols="30" rows="5" placeholder="请输入您的收货地址"></textarea>
      </div>
    </div>
    <div class="info-btn btn-common" :class="true ? 'ischecked' : 'uncheck'">提交领取奖励</div>
  </div>
</template>

<script>
  export default {
 name: "pop",
    components: {},
    props: {
      name:String,
      address:String
    }
  }
</script>

<style lang="less" scoped>
  .info-wrapper {
    margin-top: 578pr;
    background: #F0FBFF;
    border-radius: 28pr;
    padding: 40pr 50pr 38pr 50pr;
    .info-title {
      font-weight: bold;
      font-size: 40pr;
      color: #105DB3;
      text-align: center;
    }
    .name-input, .addr-input {
      width: 81.5%;
      margin-left: 36pr;
    }
    .addr-info {
      height: 256pr;
      .addr-input {
      height: 256pr;
      overflow: hidden;
      // border: 1px solid red;
      >textarea {
        // padding-left: 36pr;
        padding: 18pr 40pr;
        width: 100%;
        height: 256pr;
        background: #FFFDE4;
        // white-space: word-break;
        word-break: break-all;
        word-wrap:break-word;
        // border: 1px solid red;
      }
    }
    }
    .info-btn {
      margin: 60pr auto 40pr auto;
    }
  }
</style>
