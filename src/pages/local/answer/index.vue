<template>
  <div class="answer-wrapper" v-if="startData.length > 0">
    <div class="answer-box">
      <div class="answer-acount">{{currentQuesitionNum + 1}}/8</div>
      <div class="subject animated slideInUp">{{startData[currentQuesitionNum].title}}</div>
      <div class="optoins animated slideInUp" v-for="(item, index) in startData[currentQuesitionNum].answers" :key="index">
        <div class="list" :class="index===checkNum ? 'bg-yellow' : ''" @click="checkOptions(index)">{{item.title}}</div>
      </div>
    </div>
    <div class="next-box animated slideInUp">
      <div :class="isCheck ? 'checked' : 'next-btn'" v-if="currentQuesitionNum < 7" @click="next(startData[currentQuesitionNum].questionId, checkNum+1)"></div>
      <div class="finish" :class="isCheck ? 'isfinish' : 'unfinish'" v-if="currentQuesitionNum == 7" @click="next">完成答题</div>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui';
  import {
    mapState,
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        checkNum: '',
        isCheck: false,
        options: {},
        checkArr: []
      }
    },
    created() {
      this.startTest()
    },
    computed: {
      ...mapState("local", {
        startData: state => state.startData,
        currentQuesitionNum: state => state.currentQuesitionNum,
        endData: state => state.endData
      })
    },
    methods: {
      ...mapActions("local", [
        "startTest",
        "nextQuestion",
        "commitTest"
      ]),
      checkOptions(num) {
        this.checkNum = num
        setTimeout(() => {
          this.isCheck = true
        }, 100)
      },
      next(id, result) {
        if (!this.isCheck) {
          Toast('您还未答题哟~')
          return
        }
        this.checkArr.push({
          questionId: id,
          seq: result
        })
        if (this.currentQuesitionNum < 7) {
          this.checkNum = ''
          this.isCheck = false
          this.nextQuestion()
        } else {
          this.commitTest()
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../assets/style/animation.less';
  @import '../assets/style/answer.less';
</style>
