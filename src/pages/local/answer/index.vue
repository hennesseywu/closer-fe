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
    mapActions,
    mapMutations
  } from "vuex";
  import md5 from 'js-md5';
  import {
    parseQuery
  } from '../../../utils/utils'
  export default {
    data() {
      return {
        isApp: this.$store.state.IS_APP,
        checkNum: '',
        isCheck: false,
        options: {},
        checkArr: [],
        answers: [],
        isUpdate: false,
        questionNum: 0
      }
    },
    created() {
      // this.getStatistic()
      if (this.statistic) {
        this.startTest()
      }
      if (this.IS_WX) {
        console.log('answer wxshare--')
        this.initWxConfig()
      }
    },
    mounted() {
      this.isUpdate = true
      this.updateChance()
    },
    computed: {
      ...mapState(['IS_APP', 'IS_WX']),
      ...mapState("local", {
        statistic: state => state.statistic,
        startResult: state => state.startResult,
        startData: state => state.startData,
        currentQuesitionNum: state => state.questions.currentQuesitionNum,
        endData: state => state.endData,
        chance: state => state.statistic.chance,
        inviter: state => state.inviter,
        signSalt: state => state.statistic.signSalt
      })
    },
    methods: {
      ...mapActions("local", [
        "startTest",
        "nextQuestion",
        "commitTest",
        "getStatistic",
        "updateChance",
        "initWxConfig"
      ]),
      checkOptions(event) {
        let questionId = event.target.dataset.questionid
        let seq = event.target.dataset.seq
        this.checkNum = parseInt(event.target.dataset.index)
        this.answers[this.questionNum] = {
          "seq": seq,
          "questionId": questionId
        }
        setTimeout(() => {
          this.isCheck = true
        }, 100)
      },
      sign() {
        let todayTimeStamp = '056fef44ea0ca7ad63a0aae84024ef2d'
        let salt = this.signSalt ? this.signSalt : ''
        let inviter = this.inviter || ''
        let params = md5(md5(inviter + salt + todayTimeStamp))
        console.log('sign params', params)
        return params
      },
      next(userAnswerId) {
        if (!this.isCheck) {
          Toast('您还未答题哟~')
          return
        }
        let params = {
          userAnswerId: userAnswerId,
          answers: this.answers,
          salt: this.signSalt,
          sign: this.sign(),
          inviteUser: this.inviter
        }
        console.log(this.answers)
        if (this.currentQuesitionNum < 7) {
          this.checkNum = ''
          this.isCheck = false
          this.nextQuestion()
          this.questionNum++
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
