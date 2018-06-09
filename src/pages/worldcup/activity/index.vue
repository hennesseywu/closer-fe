<template>
  <div class="activity">
    <div class="wrapper">
      <div class="invite-img" @click="redirectTo()"></div>
      <div class="text-box box box-lr box-center-center">
        <div class="left box box-tb">
          <div class="chance-box">您还有<span>{{userGuessStatistic.totalChance}}</span>次机会喔</div>
          <div class="whole-num"><span>{{userGuessStatistic.totalGuessPerson}}</span>人参与</div>
        </div>
        <div class="right">增加机会</div>
      </div>
      <div class="swipe">
        <mt-swipe :continuous="true" :auto="0" :showIndicators="true" v-if="matchList">
          <mt-swipe-item v-for="(item, index) in matchList" :key="index">
            <div class="choose-box">
              <div class="time-wrapper box box-lr">
                <div class="left-ball"></div>
                <div class="time">
                  <span>{{getMonth(new Date(item.startTime))}}</span>月<span>{{getDate(new Date(item.startTime))}}</span>号
                  <span>{{getHours(new Date(item.startTime))}}</span>
                </div>
                <div class="right-ball"></div>
              </div>
              <div class="swiper-wrapper">
  
                <div class="info-box box box-lr">
                  <div class="left-arrow box box-center-center">
                    <span class="img"></span>
                  </div>
                  <div class="country country1 box box-tb">
                    <span>{{item.homeTeam.teamName}}</span>
                    <span class="flag">
                            <img :src="item.homeTeam.logo" alt="主队logo">
                          </span>
                  </div>
                  <div class="vs-img"></div>
                  <div class="country box box-tb">
                    <span>{{item.gustTeam.teamName}}</span>
                    <span class="flag">
                            <img :src="item.gustTeam.logo" alt="客队logo">
                          </span>
                  </div>
                  <div class="right-arrow box box-center-center">
                    <span class="img rotate"></span>
                  </div>
                </div>
              </div>
              <div class="result box box-lr">
                <div class="commonsize yellowbg winner1"  @click="openVotepop(item.homeTeam.logo,item.matchId,item.homeTeam.teamId,'win',item.userGuess)">
                  <div class="winbtn">胜利</div>
                  <div class="times" v-if="item.userGuess&&item.userGuess.matchResult=='win'&&item.homeTeam.teamId==item.userGuess.winTeamId">X {{item.userGuess.guessTimes}}</div>
                </div>
                <div class="commonsize tie"  :class="grayBtn ? 'gray' : 'yellowbg'" @click="openVotepop(item.homeTeam.logo,item.matchId,item.homeTeam.teamId,'equal',item.userGuess)">
                 <div class="winbtn">平局</div>
                  <span class="times" v-if="item.userGuess&&item.userGuess.matchResult=='equal'">X {{item.userGuess.guessTimes}}</span>
                  </div>
                <div class="commonsize yellowbg winner2"   @click="openVotepop(item.gustTeam.logo,item.matchId,item.gustTeam.teamId,'win',item.userGuess)">
                  <div class="winbtn">胜利</div>
                  <span class="times" v-if="item.userGuess&&item.userGuess.matchResult=='win'&&item.gustTeam.teamId==item.userGuess.winTeamId">X {{item.userGuess.guessTimes}}</span>
                </div>
              </div>
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <Getapp ref="getapp" v-if="!isApp"></Getapp>
    <div class="rule_record box box-lr">
      <div class="rule" :class="showRule ? 'checkbg' : 'uncheckbg'" @click="showRules">规则说明</div>
      <div class="record" :class="showRecord ? 'checkbg' : 'uncheckbg'" @click="showRecords">投注记录</div>
    </div>
    <Rule ref="rule" :showRule="showRule"></Rule>
    <Votepop ref="votepop" :voteInfo="voteInfo" @guessMatch="guessMatch" :totalChance="userGuessStatistic.totalChance"></Votepop>
    <Record ref="record" :showRecord="showRecord" :userGuessList="userGuessList"></Record>
    <Newuserpop ref="newuserpop" v-if="recieveChanceInfo.presentAvailable" :newUser="recieveChanceInfo.status" :isApp="isApp" :count="recieveChanceInfo.count"></Newuserpop>
    <Winpop ref="winpop" v-if="userGuessResult.guessResult" @jumpTo="redirectTo" :awardAmt="userGuessResult.totalAwardAmt" :totalGuessPerson="userGuessResult.totalGuessPerson" :matchList="userGuessResult.guessMatchList" :totalBingoPerson="userGuessResult.totalBingoPerson"></Winpop>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem,
    Toast
  } from 'mint-ui';
  import {
    mapState,
    mapActions
  } from 'vuex'
  import Rule from '../../../components/rule.vue'
  import Record from '../../../components/record.vue'
  import Votepop from '../../../components/votepop.vue'
  import Newuserpop from '../../../components/newuserpop.vue'
  import Winpop from '../../../components/winpop.vue'
  import Getapp from '../../../components/getapp.vue'

  
  
  export default {
    name: 'index',
    components: {
      Swipe,
      SwipeItem,
      Rule,
      Record,
      Votepop,
      Newuserpop,
      Winpop,
      Getapp
    },
    data() {
      return {
        showRule: true,
        showRecord: false,
        isApp: false
      }
    },
    computed: {
      ...mapState('activity', {
        grayBtn: state => state.grayBtn,
        matchList: state => state.matchList,
        userGuessStatistic: state => state.userGuessStatistic,
        voteInfo: state => state.voteInfo,
        recieveChanceInfo: state => state.recieveChanceInfo,
        userGuessList: state => state.userGuessList,
        userGuessResult: state => state.userGuessResult
      })
    },
    created() {
      this.getMatchList()
      // this.getUserGuessList()
      this.checkUser();
      this.getUserGuessStatistic();
      this.checkGuessResult();
      this.checkRecieveChance( {channelCode:this.$store.state.CHANNEL_CODE});
    },
    methods: {
      ...mapActions('activity', [
        'getMatchList',
        'setVoteInfo',
        'getUserGuessList',
        'guessMatch',
        'getUserGuessStatistic',
        'checkGuessResult',
        'checkRecieveChance',
        'getUserGuessList'
        // 'guessMatch'
        // 'getUserGuessStatistic'
      ]),
      openVotepop(logo, matchId, winTeamId, matchResult,userGuess) {
        console.log(winTeamId,"--",matchResult,"---",userGuess)
        // console.log("-----",(userGuess&&userGuess.matchResult=="equal"&&matchResult!="equal"))
        if((userGuess&&userGuess.matchResult=="win"&&(matchResult!="win"||userGuess.winTeamId!=winTeamId))||(userGuess&&userGuess.matchResult=="equal"&&matchResult!="equal")){
            console.log("can not guess")
            return;
        }
        this.setVoteInfo({
          logo,
          matchId,
          winTeamId,
          matchResult
        })
        this.$refs.votepop.open()
      },
      getMonth(date) {
        if (!date) return
        return date.getMonth() + 1
      },
      getDate(date) {
        if (!date) return
        return date.getDate()
      },
      getHours(date) {
        if (!date) return
        let minutes=date.getMinutes();
        if(minutes==0){
            minutes+="0"
        }
        return date.getHours() + ':' + minutes
      },
      showRules() {
        this.showRule = true
        this.showRecord = false
      },
      showRecords() {
        this.showRule = false
        this.getUserGuessList()
        this.showRecord = true
      },
      checkUser() {
        this.isApp = this.$store.state.IS_APP;
      },
      redirectTo() {
        let userId = ""
        let amount = 0;
        console.log(Cookies.get("totalAwardAmt"))
        if(Cookies.get("totalAwardAmt")){
          amount=Cookies.get("totalAwardAmt");
        }
        if (Cookies.get("user")) {
          let user = JSON.parse(Cookies.get("user"))
          if (user.objectID) {
            userId = user.objectID //.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
          }
        }
        this.$router.push({ name: "worldcupShare" ,params:{userId:userId,amount:amount}});
      }
    }
  }
</script>

<style lang="less" scoped>
  .activity {
    background: #000d01;
    padding-bottom: 20pr;
    .wrapper {
      border: 1px solid black;
      height: 1206pr;
      padding-top: 1pr;
      padding-bottom: 60pr;
      background: url("../../../assets/images/activity_bg.jpg") no-repeat center center;
      background-size: cover;
    }
    .invite-img {
      position: absolute;
      top: 48pr;
      right: 0;
      width: 128pr;
      height: 148pr;
      background: url("../../../assets/images/share.png") no-repeat center;
      background-size: cover;
    }
    .text-box {
      position: relative;
      margin-top: 458pr;
      text-align: center;
      color: #fff;
      height: 44pr;
      line-height: 44pr;
      .left {
        font-size: 32pr;
        .chance-box {
          >span {
            color: #F9DB02;
          }
        }
        .whole-num {
          margin-top: 2pr;
          font-size: 28pr;
          line-height: 32pr;
        }
      }
      .right {
        position: absolute;
        top: 0;
        right: 0;
        padding: 14pr 44pr;
        font-size: 24pr;
        line-height: 34pr;
        color: #fff;
        background: linear-gradient(-90deg, rgba(224, 30, 30, 1), rgba(252, 193, 34, 1));
        border-radius: 50pr 0px 0px 50pr;
      }
    }
    .swipe {
      height: 548pr;
      .choose-box {
        margin: 40pr 14pr 20pr 14pr;
        font-size: 24pr;
        line-height: 34pr;
        color: #fff;
        background: #041C4D;
        border-radius: 12pr;
        .time-wrapper {
          padding: 40pr 78pr 52pr 78pr;
          .left-ball {
            width: 90pr;
            height: 40pr;
            background: url("../../../assets/images/left_ball.png") no-repeat center;
            background-size: cover;
          }
          .time {
            margin: 0 99pr;
            >span {
              font-size: 32pr;
              color: #F9DB02;
            }
          }
          .right-ball {
            width: 90pr;
            height: 40pr;
            background: url("../../../assets/images/right_ball.png") no-repeat center;
            background-size: cover;
          }
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 196pr;
          .info-box {
            width: 100%;
            .left-arrow,
            .right-arrow {
              width: 70pr;
              height: 196pr;
              background: #14306B;
              .img {
                display: block;
                width: 25pr;
                height: 52pr;
                background: url('../../../assets/images/arrow.png') no-repeat center;
                background-size: cover;
              }
              .rotate {
                transform: rotate(180deg);
              }
            }
            .right-arrow {
              position: absolute;
              top: 0;
              right: 0;
            }
            .country {
              margin-top: 28pr;
              font-size: 24pr;
              > span:first-child {
                text-align: center;
              }
              .flag {
                margin-top: 20pr;
                width: 88pr;
                height: 88pr;
                border-radius: 88pr;
                >img {
                  width: 88pr;
                  height: 88pr;
                  border-radius: 88pr;
                }
              }
            }
            .country1 {
              margin-left: 60pr;
            }
            .vs-img {
              margin: 80pr 46pr 20pr 66pr;
              width: 172pr;
              height: 94pr;
              background: url('../../../assets/images/vs_img.png') no-repeat center;
              background-size: cover;
            }
          }
        }
        .result {
          margin: 34pr;
          padding-bottom: 40pr;
          .commonsize {
            position: relative;
            font-size: 28pr;
            line-height: 44pr;
            padding: 18pr 38pr;
            border-radius: 30pr;
            .times {
              position: absolute;
              top: -30pr;
              right: -25pr;
              color: #fff;
              font-size: 20pr;
              background: #D7373F;
              border-radius: 100%;
              padding: 5pr 8pr;
            }
          }
          .yellowbg {
            color: #4B4945;
            background: rgba(249, 219, 2, 1);
          }
          .winner1 {
            margin-left: 70pr;
          }
          .tie {
            margin: 0 58pr;
          }
          .gray {
            background: #BFBFBF;
          }
        }
      }
      .result {
        margin: 34pr;
        padding-bottom: 40pr;
        .commonsize {
          font-size: 28pr;
          line-height: 44pr;
          padding: 18pr 38pr;
          border-radius: 30pr;
        }
        .yellowbg {
          color: #4B4945;
          background: rgba(249, 219, 2, 1);
        }
        .winner1 {
          margin-left: 90pr;
        }
        .tie {
          margin: 0 48pr;
        }
        .gray {
          background: #BFBFBF;
        }
      }
    }
    .rule_record {
      margin: -150pr 16pr 0 16pr;
      font-size: 28pr;
      line-height: 40pr;
      color: #92B3F8;
      .rule {
        padding: 20pr 24pr;
        border-radius: 10pr 0px 0px 0px;
      }
      .record {
        padding: 20pr 24pr;
        border-radius: 0px 10pr 0px 0px;
      }
      .checkbg {
        background: #041C4D;
      }
      .uncheckbg {
        background: #14306B;
      }
    }
  }
</style>


