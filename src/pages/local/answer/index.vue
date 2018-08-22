<template>
  <div class="answer-wrapper">
    <div class="answer-box">
      <div class="answer-acount">1/8</div>
      <div class="subject animated slideInUp">天府五街地铁口：摩的，摩的！走不走？天府五街地铁口：摩的，摩的！走不走？</div>
      <div class="optoins animated slideInUp">
        <div class="list bg-yellow">天府五街地铁口：摩的，摩的！走不走？</div>
        <div class="list">天府五街地铁口：摩的，摩的！走不走？</div>
        <div class="list">天府五街地铁口：摩的，摩的！走不走？</div>
        <div class="list">口：摩的，摩的</div>
      </div>
    </div>
    <div class="next-box animated slideInUp">
      <div :class="!true ? 'next-btn' : 'checked'"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      subjectNum: 1,
      options: {}
    }
  },
  created() {

  },
  methods: {
    checkOptions() {

    },
    
  }
};
</script>
<style lang="less" scoped>
@import '../assets/style/animation.less';
@import '../assets/style/answer.less';
</style>
