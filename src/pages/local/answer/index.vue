<template>
<!-- <div>{{startData}}</div> -->
  <div class="answer-wrapper" v-if="startData && startData.length > 0">
    <div class="answer-box">
      <div class="answer-acount">{{currentQuesitionNum + 1}}/8</div>
      <div class="subject" :class="isUpdate ? 'animated slideInUp' : ''">{{startData[currentQuesitionNum].title}}</div>
      <div class="optoins" :class="isUpdate ? 'animated slideInUp' : ''" v-for="(item, index) in startData[currentQuesitionNum].answers" :key="index">
        <div class="list" :class="index===checkNum ? 'bg-yellow' : ''" @click="checkOptions(index)">{{item.title}}</div>
      </div>
    </div>
    <div class="next-box" :class="isUpdate ? 'animated slideInUp' : ''">
      <div :class="isCheck ? 'checked' : 'next-btn'" v-if="currentQuesitionNum < 7" @click="next(startResult.userAnswerId, startData[currentQuesitionNum].questionId, checkNum+1)"></div>
      <div class="finish" :class="isCheck ? 'isfinish' : 'unfinish'" v-if="currentQuesitionNum == 7" @click="next(startResult.userAnswerId, startData[currentQuesitionNum].questionId, checkNum+1)">完成答题</div>
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
        isUpdate: false
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
    },
    computed: {
      ...mapState("local", {
        statistic: state => state.statistic,
        startResult: state => state.startResult,
        startData: state => state.startData,
        currentQuesitionNum: state => state.currentQuesitionNum,
        endData: state => state.endData
      })
    },
    methods: {
      ...mapActions("local", [
        "startTest",
        "nextQuestion",
        "commitTest",
        "getStatistic"
      ]),
      checkOptions(num) {
        this.checkNum = num
        setTimeout(() => {
          this.isCheck = true
        }, 100)
      },
      next(userAnswerId, id, result) {
        if (!this.isCheck) {
          Toast('您还未答题哟~')
          return
        }
        this.checkArr.push({
          questionId: id,
          seq: result
        })
        let params = {
          userAnswerId: userAnswerId,
          answers: this.checkArr,
          inviteUser: '',
          salt: '',
          sign: ''
        }
        
        console.log(2, this.checkArr)
        if (this.currentQuesitionNum < 7) {
          this.checkNum = ''
          this.isCheck = false
          this.nextQuestion()
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
