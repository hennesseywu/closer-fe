<template>
  <!-- <div>{{startData}}</div> -->
  <div class="main local-answer" :class="{'in-app': ENV.app}">
    <local-header v-if="ENV.app" back close></local-header>
    <div class="answer-wrapper" v-if="startData && startData.length > 0">
      <div class="hd-img"></div>
      <div class="answer-box" v-html="currentQuestion" @click="checkOptions($event)">
        <!--<div class="answer-acount">{{currentQuesitionNum + 1}}/8</div>
        <div class="subject" :class="isUpdate ? 'animated slideInUp' : ''" v-html="currentQuestion.title"></div>
        <div class="optoins" :class="isUpdate ? 'animated slideInUp' : ''" v-for="(item, index) in currentQuestion.answers" :key="index">
          <div class="list" :data-index="index" :data-seq="item.seq" :data-questionId="item.questionId" :class="index===checkNum ? 'bg-yellow' : ''" @click="checkOptions($event)">{{item.title}}</div>
        </div>-->
      </div>
      <div class="next-box" :class="isUpdate ? 'animated slideInUp faster' : ''">
        <div class="finish" :class="isCheck ? 'isfinish' : 'unfinish'" v-if="currentQuesitionNum < 7" @click="next(startResult.userAnswerId)">下一题</div>
        <div class="finish" :class="isCheck ? 'isfinish' : 'unfinish'" v-else @click="next(startResult.userAnswerId)">完成答题</div>
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
  import localHeader from '../components/header';
  export default {
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
      localHeader
    },
    beforeRouteEnter(to, from, next) {
      if (window.pageTo == 'answer') {
        window.pageTo = null
        next()
      } else {
        next('/local')
      }
    },
    created() {
      this.updateChance()
      this.updateCurrentQuestionNum()
      this.startTest()
      if (this.ENV.wx) {
        console.log('answer wxshare--')
        this.initWxConfig()
      }
    },
    mounted() {
      console.log("true")
      this.isUpdate = true;
    },
    computed: {
      ...mapState("local", {
        statistic: state => state.statistic,
        startResult: state => state.startResult,
        startData: state => state.startData,
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
      ...mapActions("local", [
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
        // console.log("currentQuesitionNum---", this.questionNum)
        if (this.currentQuesitionNum < 7) {
          this.checkNum = ''
          this.isCheck = false
          this.questionNum++
            this.nextQuestion()
          // setTimeout(() => {
            this.isUpdate = true
          // }, 10)
        } else {
          if (this.isCommit) return
          this.isCommit = true;
          console.log('commitTest:', this.isCommit)
          this.commitTest(params).then(() => {
            this.isCommit = false;
            console.log('commitTest:end:', this.isCommit)
            sessionStorage.resultCache && (sessionStorage.resultCache = '{}')
            console.log(console.log('commitTest:end1:', this.isCommit));
            this.$router.push({
              name: "localResult",
              params: {
                from: 'answer'
              }
            })
          })
        }
      }
    }
  };
</script>

<style lang="less">
  @import '../assets/style/main.less';
  @import '../assets/style/animation.less';
  @import '../assets/style/answer.less';
</style>
