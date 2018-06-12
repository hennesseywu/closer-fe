<template>
  <div class="record-box" v-if="showRecord">
    <div class="record-list box box-lr" v-if="userGuessList.length > 0" v-for="(item, index) in userGuessList" :key="index">
      <div class="time">{{formataDate(new Date(item.startTime))}}</div>
      <div class="coountry" v-if="item.userGuess.guessResult && item.winTeamId == item.homeTeamId">{{item.homeTeam.teamName}}(W) VS {{item.gustTeam.teamName}}</div>
      <div class="coountry" v-else-if="item.userGuess.guessResult && item.winTeamId == item.gustTeamId">{{item.homeTeam.teamName}} VS {{item.gustTeam.teamName}}(W)</div>
      <div class="coountry" v-else>{{item.homeTeam.teamName}} VS {{item.gustTeam.teamName}} </div>
      <div class="money" v-if="item.userGuess.guessResult">获得{{change(item.userGuess.awardAmt)}}元</div>
      <div class="correct-times" v-if="item.userGuess.guessResult">{{item.userGuess.guessResult === 'bingo' ? '正确' : (item.userGuess.guessResult === 'fail' ? '失败' : '待开奖')}}X{{item.userGuess.guessTimes}}</div> 
      <div class="correct-times" v-else>待开奖</div> 
    </div>
    <div class="btn-goapp"  v-if="userGuessList.length > 0 && !isApp" @click="goApp">去提现</div>
    <div class="no-record" v-if="userGuessList.length == 0">
      您还没有投注过哦~快去参与拿大奖吧
    </div>
  </div>
</template>
<script>
import { downloadApp, toYuan } from '../utils/utils'
export default {
  name: 'records',
  props: {
    showRecord: {
      type: Boolean,
      default: false
    },
    userGuessList: {
      type: Array,
      default() {
        return []
      }
    },
    isApp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTips: false
    }
  },
  mounted() {
    console.log(this.userGuessList.length)
  },
  methods: {
    change(money) {
      return toYuan(money)
    },
    formataDate(date) {
      if (!date) return
      return (date.getMonth() + 1) + '月' + date.getDate() + '日'
    },
    goApp() {
      this.isApp = this.$store.state.IS_APP;
      if(!this.isApp) {
        downloadApp()
      } else {
        this.showTips = true
      }
    }
  }
};
</script>
<style lang="less" scoped>
.record-box {
  margin: 0 16pr 150pr 16pr;
  padding:30pr;
  font-size: 24pr;
  line-height: 34pr;
  color: rgba(146,179,248,0.5);
  background: #041c4d;
  border-radius: 0px 10pr 10pr 10pr;
  .record-list {
    margin-top: 20pr;
    position: relative;
    .coountry {
      margin-left: 23pr;
    }
    .money {
      margin-left: 28pr;
    }
    .correct-times {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .btn-goapp {
    margin: 60pr 370pr 40pr;
    width: 280pr;
    height: 80pr;
    line-height: 80pr;
    text-align: center;
    border-radius: 60pr;
    color: #4B4945;
    background: #FDDB00;
    
  }
  .tips {
    text-align: center;
    margin-top: 30pr;
    font-size: 24pr;
    color: #B1B3BB;
    padding-bottom: 20pr;
  }
  .no-record {
    margin: 30pr auto;
  }
}
</style>


