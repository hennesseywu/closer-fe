<template>
  <div class="home">
    <local-index ref="localIndex" :showIndex="propData.showIndex" @openAnswer="openAnswerPop"></local-index>
    <local-answer ref="localAnswer" :startData="startData" :startResult="startResult" :showAnswer="propData.showAnswer" @openResult="openResultPop"></local-answer>
    <local-result ref="localResult" :showResult="propData.showResult" @openAnswer="openAnswerPop"></local-result>
  </div>
</template>
<script>
import localIndex from '../components/index' 
import localAnswer from '../components/answer' 
import localResult from '../components/result' 
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: [],
  components: {
    localIndex,
    localAnswer,
    localResult
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
    this.propData.showIndex = true
  },
  computed: {
    ...mapState('moonFestival', {
      startData: state => state.startData,
      startResult: state => state.startResult
    })
  },
  methods: {
    ...mapActions('moonFestival', [
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
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>

