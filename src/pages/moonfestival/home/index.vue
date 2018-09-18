<template>
  <div class="main home">
    <moon-index ref="moonIndex" :showIndex="propData.showIndex" @openAnswer="openAnswerPop"></moon-index>
    <moon-answer ref="moonAnswer" :startData="startData" :startResult="startResult" :showAnswer="propData.showAnswer" @openResult="openResultPop" @goBack="handleBack"></moon-answer>
    <moon-result ref="moonResult" :showResult="propData.showResult" @openAnswer="openAnswerPop" @goBack="handleBack"></moon-result>
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
      propData: {
        showIndex: false,
        showAnswer: false,
        showResult: false
      }
    }
  },
  created() {
    // this.startTest()
    if (sessionStorage.goResult) {
      this.propData.showResult = true
      sessionStorage.goResult = null;
    } else {
      this.propData.showIndex = true
    }
  },
  computed: {
    ...mapState('moon', {
      startData: state => state.startData,
      startResult: state => state.startResult
    })
  },
  methods: {
    ...mapActions('moon', [
      'startTest'
    ]),
   async openAnswerPop() {
     await this.startTest()
     this.propData.showAnswer = true;
      this.propData.showIndex = false;
      this.propData.showResult = false;
    },
    openResultPop() {
      this.propData.showAnswer = false;
      this.propData.showIndex = false;
      this.propData.showResult = true;
    },
    handleBack() {
      this.propData.showAnswer = false;
      this.propData.showIndex = true;
      this.propData.showResult = false;
    }
  }
}
</script>
<style lang="less">
  @import '../assets/style/main.less';
</style>

