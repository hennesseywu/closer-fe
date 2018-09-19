<template>
  <div class="main home">
    <moon-index ref="moonIndex" v-if="showIndex" @openAnswer="openAnswerPop"></moon-index>
    <moon-answer ref="moonAnswer" v-if="showAnswer" @openResult="openResultPop" @goBack="handleBack"></moon-answer>
    <moon-result ref="moonResult" v-if="showResult" @openAnswer="openAnswerPop" @goBack="handleBack"></moon-result>
  </div>
</template>
<script>
import moonIndex from '../components/index' 
import moonAnswer from '../components/answer' 
import moonResult from '../components/result' 
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: [],
  components: {
    moonIndex,
    moonAnswer,
    moonResult
  },
  data() {
    return {
      showIndex: false,
      showAnswer: false,
      showResult: false
    }
  },
  created() {
    let toResult = sessionStorage.toResult;
    if (!!toResult) {
      this.showAnswer = false;
      this.showIndex = false;
      this.showResult = true;
      sessionStorage.removeItem("toResult");
    } else {
      this.showAnswer = false;
      this.showIndex = true;
      this.showResult = false;
    }
  },
  methods: {
   async openAnswerPop() {
     this.showAnswer = true;
      this.showIndex = false;
      this.showResult = false;
    },
    openResultPop() {
      this.showAnswer = false;
      this.showIndex = false;
      this.showResult = true;
    },
    handleBack() {
      this.showAnswer = false;
      this.showIndex = true;
      this.showResult = false;
    }
  }
}
</script>
<style lang="less">
  @import '../assets/style/main.less';
</style>

