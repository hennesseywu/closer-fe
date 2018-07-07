<template>
  <div class="activity">
    <div class="wrapper">
      <div class="invite-img" @click="openShare"></div>
  
      <div class="text-box box box-lr box-center-center">
        <div class="left box box-tb">
          <div class="money" v-if="userGuessStatistic.totalAwardAmt > 0">你累积获得了<span>{{change(userGuessStatistic.totalAwardAmt)}}</span>元 </div>
          <div class="chance-box">您还有<span>{{userGuessStatistic.totalChance}}</span>次机会喔</div>
          <div class="whole-num"><span>{{userGuessStatistic.totalGuessPerson}}</span>次参与</div>
        </div>
        <div class="right" @click="addChance">增加机会</div>
      </div>
      <!-- 比赛结束 -->
      <div class="end-wrapper nomatch-wrapper" v-if="userGuessStatistic.isWorldCupEnd">
        <div class="text1">竞猜结束</div>
        <div class="text">快去领取您的奖金吧~</div>
      </div>
      <!-- 比赛未结束 -->
      <div v-else>
        <!-- 无比赛 -->
        <div class="nomatch-wrapper" v-if="typeof(matchList)!='string' && matchList.length == 0">
          <div class="text1">比赛竞猜马上呈现</div>
          <div class="text">稍后更精彩...</div>
          <div class="nomatch-btn" @click="addChance"></div>
        </div>
        <div class="swipe" v-else>
          <mt-swipe ref="swipe" :continuous="true" :auto="0" :showIndicators="false">
            <mt-swipe-item v-for="(item, index) in matchList" :key="index">
              <div class="choose-box">
                <div class="time-wrapper box box-lr box-center-center">
                  <div class="left-ball"></div>
                  <div class="time">
                    <span>{{getMonth(new Date(item.startTime))}}</span>月<span>{{getDate(new Date(item.startTime))}}</span>号
                    <span>{{getHours(new Date(item.startTime))}}</span>
                  </div>
                  <div class="right-ball"></div>
                </div>
                <div class="swiper-wrapper">
                  <div class="info-box box box-lr">
                    <div class="left-arrow box box-center-center" @click="arrowLeft()">
                      <span class="img"></span>
                    </div>
                    <div class="country left country1 box box-tb box-center-center">
                      <span>{{item.homeTeam.teamName}}</span>
                      <span class="flag">
                                <img :src="item.homeTeam.logo" alt="主队logo">
                              </span>
                    </div>
                    <div class="vs-img"></div>
                    <div class="country right box box-tb box-center-center">
                      <span>{{item.gustTeam.teamName}}</span>
                      <span class="flag">
                                <img :src="item.gustTeam.logo" alt="客队logo">
                              </span>
                    </div>
                    <div class="right-arrow box box-center-center" @click="arrowRight()">
                      <span class="img rotate"></span>
                    </div>
                  </div>
                </div>
                <div class="result box box-lr">
                  <div class="commonsize winner1" :class="(item.userGuess&&item.userGuess.matchResult=='equal') || (item.userGuess&&item.userGuess.matchResult=='win'&&item.homeTeam.teamId!=item.userGuess.winTeamId)? 'gray' : 'yellowbg'" @click="openVotepop(item.homeTeam.teamName,item.homeTeam.logo,item.matchId,item.homeTeam.teamId,'win',item.userGuess,false,item.matchType)">
                    <div class="winbtn">胜利</div>
                    <span class="times" v-if="item.userGuess&&item.userGuess.matchResult=='win'&&item.homeTeam.teamId==item.userGuess.winTeamId">x{{item.userGuess.guessTimes}}</span>
                  </div>
                  <div class="commonsize tie" v-if="item.matchType=='group'" :class="(item.userGuess&&item.userGuess.matchResult!='equal') ? 'gray' : 'yellowbg'" @click="openVotepop(item.homeTeam.teamName,item.homeTeam.logo,item.matchId,item.homeTeam.teamId,'equal',item.userGuess,item.gustTeam.logo,item.matchType)">
                    <div class="winbtn">平局</div>
                    <span class="times" v-if="item.userGuess&&item.userGuess.matchResult=='equal'">x{{item.userGuess.guessTimes}}</span>
                  </div>
                  <div class="commonsize ml yellowbg winner2" :class="(item.userGuess&&item.userGuess.matchResult=='equal') || (item.userGuess&&item.userGuess.matchResult=='win'&&item.gustTeam.teamId!=item.userGuess.winTeamId) ? 'gray' : 'yellowbg'" @click="openVotepop(item.gustTeam.teamName,item.gustTeam.logo,item.matchId,item.gustTeam.teamId,'win',item.userGuess,false,item.matchType)">
                    <div class="winbtn">胜利</div>
                    <span class="times" v-if="item.userGuess&&item.userGuess.matchResult=='win'&&item.gustTeam.teamId==item.userGuess.winTeamId">x{{item.userGuess.guessTimes}}</span>
                  </div>
                </div>
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
  
  
    </div>
    <Getapp ref="getapp" v-if="!isApp"></Getapp>
    <div class="rule_record box box-lr">
      <div class="rule" :class="showRule ? 'checkbg' : 'uncheckbg'" @click="showRules">规则说明</div>
      <div class="record" :class="showRecord ? 'checkbg' : 'uncheckbg'" @click="showRecords">竞猜记录</div>
    </div>
    <Rule ref="rule" :showRule="showRule"></Rule>
    <Votepop ref="votepop" :voteInfo="voteInfo" @guessMatch="guessMatch" :totalChance="userGuessStatistic.totalChance"></Votepop>
    <Record ref="record" :showRecord="showRecord" :userGuessList="userGuessList" :isApp="isApp"></Record>
    <Newuserpop ref="newuserpop" v-if="recieveChanceInfo.isPopUp" :status="recieveChanceInfo.status" :presentAvailable="recieveChanceInfo.presentAvailable" :isApp="isApp" :count="recieveChanceInfo.count"></Newuserpop>
    <Winpop ref="winpop" v-if="typeof(userGuessResult.guessResult)!='undefined'" :isDev="isDev" :guessResult="userGuessResult.guessResult" :awardAmt="userGuessResult.totalAwardAmt" :totalGuessPerson="userGuessResult.totalGuessPerson" :matchList="userGuessResult.guessMatchList"
      :totalBingoPerson="userGuessResult.totalBingoPerson"></Winpop>
    <Nochancepop ref="nochancepop" :isApp="isApp"></Nochancepop>
    <Sharepop ref="sharepop" :isApp="isApp" :isDev="isDev"></Sharepop>
    <Appusepop ref="appusepop"></Appusepop>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem,
    Toast
  } from "mint-ui";
  import {
    mapState,
    mapActions
  } from "vuex";
  import Utils from "../../../utils/utils";
  import Rule from "../../../components/rule.vue";
  import Record from "../../../components/record.vue";
  import Votepop from "../../../components/votepop.vue";
  import Newuserpop from "../../../components/newuserpop.vue";
  import Winpop from "../../../components/winpop.vue";
  import Getapp from "../../../components/getapp.vue";
  import Nochancepop from "../../../components/nochancepop.vue";
  import Sharepop from "../../../components/sharepop.vue";
  import Appusepop from "../../../components/appusepop.vue";
  import {
    redirectAddChance,
    toYuan
  } from "../../../utils/utils";
  
  export default {
    name: "index",
    components: {
      Swipe,
      SwipeItem,
      Rule,
      Record,
      Votepop,
      Newuserpop,
      Winpop,
      Getapp,
      Nochancepop,
      Sharepop,
      Appusepop
    },
    data() {
      return {
        showRule: true,
        showRecord: false,
        isApp: false,
        isDev: false
      };
    },
    computed: {
      ...mapState("activity", {
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
      this.getMatchList();
      this.checkUser();
      this.checkEnv();
      this.getUserGuessStatistic();
      this.checkGuessResult();
      this.checkRecieveChance();
    },
    mounted() {
      if (this.userGuessStatistic.totalChance == 0) {
        this.$refs.nochancepop.open();
      }
    },
    methods: {
      ...mapActions("activity", [
        "getMatchList",
        "setVoteInfo",
        "getUserGuessList",
        "guessMatch",
        "getUserGuessStatistic",
        "checkGuessResult",
        "checkRecieveChance",
        "getUserGuessList"
      ]),
      arrowRight() {
        this.$refs.swipe.next();
      },
      arrowLeft() {
        this.$refs.swipe.prev();
      },
      openVotepop(
        teamName,
        logo,
        matchId,
        winTeamId,
        matchResult,
        userGuess,
        gustTeamLogo,
        matchType
      ) {
        if (this.userGuessStatistic.totalChance == 0) {
          this.$refs.nochancepop.open();
          return;
        }
        if (!this.userGuessStatistic.canGuess) {
          this.$refs.appusepop.open();
          return;
        }
        if (this.userGuessStatistic && this.userGuessStatistic.totalChance == 0) {
          //console.log("没有机会了");
          return;
        }
        // //console.log("-----",(userGuess&&userGuess.matchResult=="equal"&&matchResult!="equal"))
        if (
          (userGuess &&
            userGuess.matchResult == "win" &&
            (matchResult != "win" || userGuess.winTeamId != winTeamId)) ||
          (userGuess &&
            userGuess.matchResult == "equal" &&
            matchResult != "equal")
        ) {
          Toast("只能竞猜已选队伍");
          return;
        }
        let guessInfo = {
          logo: logo,
          matchId: matchId,
          winTeamId: winTeamId,
          matchResult: matchResult
        };
        if (teamName) {
          guessInfo["teamName"] = teamName;
        }
        if (gustTeamLogo) {
          guessInfo["gustTeamLogo"] = gustTeamLogo;
        }
        this.setVoteInfo(guessInfo);
        this.$refs.votepop.open();
      },
      getMonth(date) {
        if (!date) return;
        return date.getMonth() + 1;
      },
      getDate(date) {
        if (!date) return;
        return date.getDate();
      },
      getHours(date) {
        if (!date) return;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        return (
          (hours < 10 ? "0" + hours : hours) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes)
        );
      },
      showRules() {
        this.showRule = true;
        this.showRecord = false;
      },
      showRecords() {
        this.showRule = false;
        this.getUserGuessList();
        this.showRecord = true;
      },
      checkUser() {
        this.isApp = this.$store.state.IS_APP;
      },
      checkEnv() {
        this.isDev = this.$store.state.IS_DEV;
      },
      addChance() {
        redirectAddChance(this.$store.state.IS_APP);
      },
      openShare() {
        this.$refs.sharepop.open();
      },
      change(money) {
        return toYuan(money);
      }
    }
  };
</script>

<style lang="less" scoped>
  .activity {
    background: #000d01;
    padding-bottom: 20pr;
    .wrapper {
      border: 1px solid black;
      height: 1418pr;
      padding-top: 1pr;
      padding-bottom: 60pr;
      background: url("../../../assets/images/bg2.png") no-repeat center;
      background-size: cover;
    }
    .invite-img {
      z-index: 999;
      position: fixed;
      top: 48pr;
      right: 0;
      width: 128pr;
      height: 148pr;
      background: url("../../../assets/images/share.png") no-repeat center;
      background-size: cover;
    }
    .text-box {
      position: relative;
      margin-top: 460pr;
      text-align: center;
      color: #fff;
      height: 104pr;
      background: url("../../../assets/images/rectangle.png") no-repeat center;
      background-size: cover;
      .left {
        font-size: 36pr;
        line-height: 50pr;
        .money,
        .chance-box {
          >span {
            font-size: 48pr;
            color: #f9db02;
            font-weight: bold;
          }
        }
        .whole-num {
          margin-top: 2pr;
          font-size: 32pr;
          line-height: 36pr;
        }
      }
      .right {
        position: absolute;
        top: 30pr;
        right: 0;
        padding: 10pr 36pr;
        font-size: 28pr;
        line-height: 40pr;
        color: #fff;
        background: linear-gradient( -90deg, rgba(224, 30, 30, 1), rgba(252, 193, 34, 1));
        border-radius: 50pr 0px 0px 50pr;
      }
    }
    .swipe {
      height: 518pr;
      .choose-box {
        margin: 40pr 14pr 0 14pr;
        font-size: 24pr;
        line-height: 34pr;
        color: #fff;
        background: #041c4d;
        border-radius: 12pr;
        .time-wrapper {
          padding: 28pr 0;
          // padding: 28pr auto 30pr auto;
          .left-ball {
            width: 90pr;
            height: 62pr;
            background: url("../../../assets/images/left_ball.png") no-repeat center;
            background-size: cover;
          }
          .time {
            margin: 0 75pr;
            font-size: 32pr;
            >span {
              font-size: 48pr;
              color: #f9db02;
            }
          }
          .right-ball {
            width: 90pr;
            height: 62pr;
            background: url("../../../assets/images/right_ball.png") no-repeat center;
            background-size: cover;
          }
        }
        .swiper-wrapper {
          position: relative;
          width: 100%;
          height: 196pr;
          .info-box {
            position: relative;
            width: 100%;
            .left-arrow,
            .right-arrow {
              width: 70pr;
              height: 196pr;
              background: #14306b;
              .img {
                display: block;
                width: 25pr;
                height: 52pr;
                background: url("../../../assets/images/arrow.png") no-repeat center;
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
            .left {
              position: absolute;
              left: 110pr;
            }
            .right {
              position: absolute;
              right: 110pr;
            }
            .country {
              margin-top: 28pr;
              font-size: 30pr;
              >span:first-child {
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
            .vs-img {
              position: absolute;
              top: 10pr;
              left: 258pr;
              margin-top: 60pr;
              margin-left: 16pr;
              width: 192pr;
              height: 114pr;
              background: url("../../../assets/images/vs_img.png") no-repeat center;
              background-size: cover;
            }
          }
        }
        .result {
          margin-top: 14pr;
          .commonsize {
            position: relative;
            font-size: 28pr;
            font-weight: bold;
            .times {
              position: absolute;
              display: inline-block;
              min-width: 45pr;
              height: 50pr;
              line-height: 50pr;
              top: -8pr;
              right: -23pr;
              color: #fff;
              font-size: 20pr;
              text-align: center;
              background: #d7373f;
              border-radius: 100%;
              padding: 0 5pr;
              >span {
                font-size: 14pr;
              }
            }
          }
          .yellowbg {
            color: #4b4945;
            height: 118pr;
            line-height: 68pr;
            background: url("../../../assets/images/btn_bg.png") no-repeat center;
            background-size: cover;
          }
          .winner1 {
            margin-left: 70pr;
          }
          .tie {
            margin-left: 58pr;
          }
          .gray {
            color: #fff;
            height: 118pr;
            line-height: 68pr;
            background: url("../../../assets/images/gray_btn.png") no-repeat center;
            background-size: cover;
          }
          .ml {
            position: absolute;
            right: 110pr;
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
          color: #4b4945;
          background: rgba(249, 219, 2, 1);
        }
        .winner1 {
          margin-left: 90pr;
        }
        .tie {
          margin: 0 48pr;
        }
        .gray {
          background: #bfbfbf;
        }
      }
    }
    .nomatch-wrapper {
      margin: 30pr 14pr 0pr 14pr;
      height: 478pr;
      color: #92b3f8;
      background: #041c4d;
      font-size: 36pr;
      line-height: 60pr;
      text-align: center;
      border-radius: 12pr;
      .text1 {
        padding-top: 127pr;
      }
      .nomatch-btn {
        margin: 110pr auto 30pr auto;
        width: 206pr;
        height: 78pr;
        background: url("../../../assets/images/btn-adchance.png") no-repeat center;
        background-size: cover;
      }
    }
    .rule_record {
      margin: -300pr 16pr 0 16pr;
      font-size: 28pr;
      line-height: 40pr;
      color: #92b3f8;
      .rule {
        padding: 20pr 24pr;
        border-radius: 10pr 0px 0px 0px;
      }
      .record {
        padding: 20pr 24pr;
        border-radius: 0px 10pr 0px 0px;
      }
      .checkbg {
        background: #041c4d;
      }
      .uncheckbg {
        background: #14306b;
      }
    }
  }
</style>


