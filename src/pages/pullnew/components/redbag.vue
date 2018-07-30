<template>
  <mt-popup v-model="popupVisible"  class="red-bag">
    <div class="money"><span class="num">{{(Math.round(amount*100)/100).toFixed(2)}}</span><span class="txt">元</span></div>
    <div class="own-money-yesterday">昨日现金收入</div>
    <div class="get-money"></div>
    <div class="close-bag"></div>
  </mt-popup>
</template>

<script>
  import {
    Popup
  } from "mint-ui";
  export default {
    name: 'redbag',
    props:{
        amount:String
    },
    data() {
      return {
        popupVisible: true
      }
    }
  };
</script>


<style lang="less" scoped>
  .red-bag {
    background: url("../assets/images/red-bag.png") no-repeat center;
    background-size: cover;
    width: 614pr;
    height: 726pr;
    color: #DC214C;
    text-align: center;
    .money {
      margin-top: 120pr;
      .num {
        font-size: 80pr;
      }
      .txt {
        font-size: 36pr;
      }
    }
    .own-money-yesterday {
      width: 210pr;
      height: 42pr;
      margin: 12pr 200pr 0 204pr;
      background: #DC214C;
      font-size: 24pr;
      line-height: 34pr;
      border-radius: 21pr;
      padding-top: 4pr;
      color: #ffffff;
    }
    .get-money {
      background: url("../assets/images/get-money.png") no-repeat center;
      background-size: cover;
      width: 254pr;
      height: 266pr;
      margin: 118pr 182pr;
    }
    .close-bag {
      background: url("../assets/images/close-bag.png") no-repeat center;
      background-size: cover;
      width: 88pr;
      height: 88pr;
      margin: 100pr 260pr;
    }
  }
</style>
