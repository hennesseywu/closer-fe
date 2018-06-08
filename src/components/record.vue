<template>
  <div class="record-box" v-if="showRecord">
    <div class="record-list box box-lr" v-if="userGuessList.length > 0" v-for="(item, index) in userGuessList" :key="index">
      <div class="time">{{formataDate(new Date(item.startTime * 1000))}}</div>
      <div class="coountry" v-if="item.winTeamId == item.homeTeamId">{{item.homeTeam.teamName}}(W) VS {{item.gustTeam.teamName}}</div>
      <div class="coountry" v-else-if="item.winTeamId == item.gustTeamId">{{item.homeTeam.teamName}} VS {{item.gustTeam.teamName}}(W)</div>
      <div class="coountry" v-else>{{item.homeTeam.teamName}} VS {{item.gustTeam.teamName}} </div>
      <div class="money">获得{{item.userGuess.awardAmt}}元</div>
      <div class="correct-times" v-if="item.userGuess.guessResult">{{item.userGuess.guessResult === 'bingo' ? '正确' : (item.userGuess.guessResult === 'fail' ? '失败' : '无结果')}}X{{item.userGuess.guessTimes}}</div> 
      <div class="correct-times" v-else>无结果</div> 
    </div>
    <div class="no-record" v-else>
      您还没有投注过哦~快去参与拿大奖吧
    </div>
  </div>
</template>
<script>
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
    }
  },
  methods: {
    formataDate(date) {
      if (!date) return
      return (date.getMonth() + 1) + '月' + date.getDate() + '日'
    }
  }
};
</script>
<style lang="less" scoped>
.record-box {
  margin: 0 16pr 60pr 16pr;
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
  .no-record {
    margin: 30pr auto;
  }
}
</style>


