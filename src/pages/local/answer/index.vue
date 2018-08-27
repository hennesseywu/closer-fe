<template>
<!-- <div>{{startData}}</div> -->
  <div class="answer-wrapper" v-if="startData && startData.length > 0">
    <div class="answer-box">
      <div class="answer-acount">{{currentQuesitionNum + 1}}/8</div>
      <div class="subject" :class="isUpdate ? 'animated slideInUp' : ''">{{startData[currentQuesitionNum].title}}</div>
      <div class="optoins" :class="isUpdate ? 'animated slideInUp' : ''" v-for="(item, index) in startData[currentQuesitionNum].answers" :key="index">
        <div class="list" :data-index="index" :data-seq="item.seq" :data-questionId="item.questionId" :class="index===checkNum ? 'bg-yellow' : ''" @click="checkOptions($event)">{{item.title}}</div>
      </div>
    </div>
    <div class="next-box" :class="isUpdate ? 'animated slideInUp' : ''">
      <div :class="isCheck ? 'checked' : 'next-btn'" v-if="currentQuesitionNum < 7" @click="next(startResult.userAnswerId)"></div>
      <div class="finish" :class="isCheck ? 'isfinish' : 'unfinish'" v-if="currentQuesitionNum == 7" @click="next(startResult.userAnswerId)">完成答题</div>
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
        isApp: this.$store.state.IS_APP,
        checkNum: '',
        isCheck: false,
        options: {},
        checkArr: [],
        answers:[],
        isUpdate: false,
        questionNum:0
      }
    },
    created() {
      this.getStatistic()
      if(this.statistic) {
        this.startTest()
      }
    },
    mounted() {
      this.isUpdate = true
      this.updateChance()
    },
    computed: {
      ...mapState("local", {
        statistic: state => state.statistic,
        startResult: state => state.startResult,
        startData: state => state.startData,
        currentQuesitionNum: state => state.currentQuesitionNum,
        endData: state => state.endData,
        chance: state => state.statistic.chance
      })
    },
    methods: {
      ...mapActions("local", [
        "startTest",
        "nextQuestion",
        "commitTest",
        "getStatistic",
        "updateChance"
      ]),
      checkOptions(event) {
        let questionId = event.target.dataset.questionid
        let seq = event.target.dataset.seq
        this.checkNum = parseInt(event.target.dataset.index)
        this.answers[this.questionNum]={"seq":seq,"questionId":questionId}
        setTimeout(() => {
          this.isCheck = true
        }, 100)
      },
      next(userAnswerId) {
        if (!this.isCheck) {
          Toast('您还未答题哟~')
          return
        }
        let params = {
          userAnswerId: userAnswerId,
          answers: this.answers,
          inviteUser: '',
          salt: '',
          sign: ''
        }
        console.log(this.answers)
        if (this.currentQuesitionNum < 7) {
          this.checkNum = ''
          this.isCheck = false
          this.nextQuestion()
          this.questionNum++;
        } else {
          this.commitTest(params)
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  @import '../assets/style/animation.less';
  @import '../assets/style/answer.less';
</style>
