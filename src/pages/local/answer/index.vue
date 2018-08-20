<template>
  <div class="answer-wrapper">
    <div class="answer-box">
      <div class="answer-acount">1/8</div>
      <div class="subject">天府五街地铁口：摩的，摩的！走不走？天府五街地铁口：摩的，摩的！走不走？</div>
      <div class="optoins">
        <div class="list bg-yellow">天府五街地铁口：摩的，摩的！走不走？</div>
        <div class="list">天府五街地铁口：摩的，摩的！走不走？</div>
        <div class="list">天府五街地铁口：摩的，摩的！走不走？</div>
        <div class="list">口：摩的，摩的</div>
      </div>
    </div>
    <div class="next-box">
      <div :class="!true ? 'next-btn' : 'checked'"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
.answer-wrapper {
  width: 100%;
  height: 100%;
  min-height: 1334pr;
  background: url(../assets/images/answer_bg.png) no-repeat center;
  background-size: cover;
  color: #333;
  padding-top: 404pr;
  .answer-box {
    margin: 0 40pr 0 40pr;
    padding: 40pr;
    background: #fff;
    box-shadow: 0px 6pr 20pr 0px rgba(6, 53, 118, 0.5);
    border-radius: 20pr;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .answer-acount {
      margin-top: -65pr;
      width: 156pr;
      height: 50pr;
      line-height: 50pr;
      text-align: center;
      background: #fddb00;
      border-radius: 50pr;
      border: 4pr solid #333;
    }
    .subject {
      width: 100%;
      min-height: 150pr;
      text-align: left;
      margin-top: 20pr;
      font-size: 36pr;
      line-height: 50pr;
      animation: subject linear .3s;
      -webkit-animation: subject linear .3s;
    }
    .optoins {
      width: 100%;
      margin-top: 20pr;
      .list {
        width: 100%;
        margin-top: 40pr;
        border: 4px solid #333;
        font-size: 30pr;
        line-height: 42pr;
        border-radius: 50pr;
        border: 4pr solid #333;
        padding: 20pr 0;
        animation: optoins linear .3s;
        -webkit-animation: optoins linear .3s;
      }
      .bg-yellow {
        background: #fddb00;
      }
    }
  }
  .next-box {
    display: flex;
    justify-content: center;
    align-items: center;
    .next-btn {
      margin-top: 38pr;
      width: 308pr;
      height: 90pr;
      background: url(../assets/images/next_btn.png) no-repeat center;
      background-size: cover;
    }
    .checked {
      margin-top: 26pr;
      width: 348pr;
      height: 130pr;
      background: url(../assets/images/next.png) no-repeat center;
      background-size: cover;
    }
  }
}
// 动画
@keyframes subject {
  from {
    margin-top: 80pr;
    line-height: 60pr;
  }
  to {
    margin-top: 20pr;
    line-height: 50pr;
  }
}
@keyframes optoins {
  from {
    margin-top: 60pr;
    line-height: 70pr;
  }
  to {
    margin-top: 40pr;
    line-height: 50pr;
  }
}
</style>
