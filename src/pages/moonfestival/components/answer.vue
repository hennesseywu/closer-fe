<template>
  
  <div class="commen moon-answer" :class="{'in-app': ENV.app}" v-if="showAnswer">
    <div class="yun-wrapper min">
      <div class="yun"></div>
      <div class="yun1"></div>
    </div>
    <moon-header v-if="ENV.app" back close></moon-header>
    <div class="answer-wrapper" v-if="startData && startData.length > 0">
      <div class="hd-img"></div>
      <div class="answer-box box box-tb box-center-center" v-html="currentQuestion" @click="checkOptions($event)">
        <!--<div class="answer-acount">{{currentQuesitionNum + 1}}/8</div>
        <div class="subject" :class="isUpdate ? 'animated slideInUp' : ''" v-html="currentQuestion.title"></div>
        <div class="optoins" :class="isUpdate ? 'animated slideInUp' : ''" v-for="(item, index) in currentQuestion.answers" :key="index">
          <div class="list" :data-index="index" :data-seq="item.seq" :data-questionId="item.questionId" :class="index===checkNum ? 'bg-yellow' : ''" @click="checkOptions($event)">{{item.title}}</div>
        </div>-->
      </div>
      <div class="next-box box box-center-center" :class="isUpdate ? 'animated slideInUp faster' : ''">
        <div class="btn-width next-btn" v-if="currentQuesitionNum < 7" @click="next(startResult.userAnswerId)"></div>
        <div class="btn-width complate-btn" v-else @click="next(startResult.userAnswerId)"></div>
      </div>
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
  import moonHeader from './header';
  export default {
    props: {
      showAnswer: {
        type: Boolean,
        default: false
      },
      startData: {
        type: Array,
        default: []
      },
      startResult: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        isApp: this.ENV.app,
        checkNum: '',
        isCheck: false,
        options: {},
        checkArr: [],
        answers: [],
        isUpdate: false,
        questionNum: 0,
        isCommit: false
      }
    },
    components: {
      moonHeader
    },
    beforeRouteEnter(to, from, next) {
      if (window.pageTo == 'answer') {
        window.pageTo = null
        next()
      } else {
        next('/moon')
      }
    },
    created() {
      console.log('answer create======')
      this.updateChance()
      this.updateCurrentQuestionNum()
      // this.startTest()
      if (this.ENV.app) {
        console.log('answer wxshare--')
        this.initWxConfig()
      }
    },
    mounted() {
      console.log("true")
      this.isUpdate = true;
    },
    computed: {
      ...mapState("moon", {
        statistic: state => state.statistic,
        // startResult: state => state.startResult,
        // startData: state => state.startData,
        currentQuesitionNum: state => state.currentQuesitionNum,
        endData: state => state.endData,
        chance: state => state.statistic.chance,
        inviter: state => state.inviter,
        signSalt: state => state.signSalt
      }),
      currentQuestion() {
        let {title, answers} = this.startData[this.currentQuesitionNum];
        let questionNum = this.currentQuesitionNum + 1;

        return `
          <div class="answer-acount">${questionNum}/8</div>
          <div class="subject animated slideInUp faster">${title}</div>
          <div class="optoins animated slideInUp faster" style="animation-delay: 30ms">
            <div class="list" data-seq="${answers[0].seq}" data-questionId="${answers[0].questionId}">${answers[0].title}</div>
          </div>
          <div class="optoins animated slideInUp faster" style="animation-delay: 60ms">
            <div class="list" data-seq="${answers[1].seq}" data-questionId="${answers[1].questionId}">${answers[1].title}</div>
          </div>
          <div class="optoins animated slideInUp faster" style="animation-delay: 90ms">
            <div class="list" data-seq="${answers[2].seq}" data-questionId="${answers[2].questionId}">${answers[2].title}</div>
          </div>
          <div class="optoins animated slideInUp faster" style="animation-delay: 120ms">
            <div class="list" data-seq="${answers[3].seq}" data-questionId="${answers[3].questionId}">${answers[3].title}</div>
          </div>
        `
      }
    },
    methods: {
      ...mapActions("moon", [
        "startTest",
        "nextQuestion",
        "commitTest",
        "getStatistic",
        "updateChance",
        "initWxConfig",
        "updateCurrentQuestionNum"
      ]),
      checkOptions(event) {
        let target = event.target;
        if (target.classList.contains('list')) {
          let questionId = target.dataset.questionid
          let seq = target.dataset.seq
          let currentAnswer = document.querySelector('.bg-yellow');
          currentAnswer && currentAnswer.classList.remove('bg-yellow')
          target.classList.add('bg-yellow');
          // this.checkNum = parseInt(target.dataset.index)
          this.answers[this.questionNum] = {
            "seq": seq,
            "questionId": questionId
          }
          this.isCheck = true
        }
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
        this.isUpdate = false
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
          this.questionNum++
            this.nextQuestion()
            this.isUpdate = true
        } else {
          if (this.isCommit) return
          this.isCommit = true;
          console.log('commitTest:', this.isCommit)
          this.commitTest(params).then(() => {
            this.isCommit = false;
            sessionStorage.resultCache && (sessionStorage.resultCache = '{}')
            this.$emit('openResult')
          })
          this.answers = []
        }
      }
    }
  };
</script>

<style lang="less">
  @import '../assets/style/animation.less';
  @import '../assets/style/answer.less';
</style>
