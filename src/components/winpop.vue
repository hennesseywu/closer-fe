<template>
  <mt-popup v-model="notAccessVisible" class="pop-box" :closeOnClickModal="false">
    <div class="pop-header">
      <div class="close-icon" @click="close"></div>
    </div>
    <div class="pop-body">
      <div class="title box box-tb">
        <span class="text" v-if="!guessResult">很遗憾,你猜错了</span>
        <span class="text win-text1" v-if="guessResult">恭喜你猜对了！</span>
        <span class="text win-text2" v-if="guessResult">你获得了<span>{{change(awardAmt)}}</span>元</span>
      </div>
      <div class="title-desc">
        <span class="desc">{{totalGuessPerson}}人参与，{{totalBingoPerson}}答对</span>
      </div>
      <div class="content box box-tb box-center-center">
        <div :class="isDev ? 'result-dev' : 'result-online'"></div>
        <div class="text-tips">{{tipsText}}</div>
        <div class="share" @click="jumpToShare()">
          <button class="button" v-if="guessResult">炫耀一下</button>
          <button class="button" v-else>邀请好友 一起赚钱</button>
        </div>
        <div class="guide">
          <a class="href" @click="jumpToAddChance()">增加机会 查看攻略</a>
        </div>
        <div class="line"></div>
        <div class="match-title">
          <span class="title">竞猜比赛队伍</span>
        </div>
        <div class="match">
          <div class="detail-box box box-lr" v-for="(item,index) in matchList" :key="index">
            <span class="detail" v-if="item.matchResult = 'win' && item.winTeamId == item.homeTeamId">{{item.homeTeam.teamName}}(W) vs {{item.gustTeam.teamName}}</span>
            <span class="detail" v-else-if="item.matchResult = 'win' && item.winTeamId == item.gustTeamId">{{item.homeTeam.teamName}} vs {{item.gustTeam.teamName}}(W)</span>
            <span class="detail" v-else>{{item.homeTeam.teamName}} vs {{item.gustTeam.teamName}}</span>
            <span class="guess">{{item.matchDesc}}</span>
          </div>
        </div>
      </div>
      <div class="bottom" v-if="guessResult">
        <span class="wait" @click="close()">等等再说</span>
        <button class="getMoney" @click="jumpToDownload()">去提现</button>
      </div>
      <div class="tips" v-if="isShow">进入【我的钱包】-【奖励金】中领取</div>
    </div>
  </mt-popup>
</template>

<script>
  import Vue from "vue";
  import {
    Popup
  } from "mint-ui";
  import {
    redirectAddChance,
    downloadApp,
    toYuan
  } from "../utils/utils";
  Vue.component(Popup.name, Popup);
  
  export default {
    name: "pop",
    components: {},
    props: {
      className: String,
      totalBingoPerson: Number,
      totalGuessPerson: Number,
      guessResult: Boolean,
      isDev: Boolean,
      awardAmt: {
        type: Number,
        default: 0
      },
      matchList: {
        type: Array,
        defaut: []
      }
    },
    data() {
      return {
        win: false,
        buttonText: '炫耀一下',
        isShow: false,
        notAccessVisible: true,
        tipsText: '截图炫耀一下'
      };
    },
    created() {
        this.showTips()
    },
    methods: {
      showTips() {
        if(this.guessResult) {
          this.tipsText = '截图炫耀一下'
        } else {
          this.tipsText = '截图邀请好友'
        }
      },
      change(money) {
        return toYuan(money)
      },
      open: function() {
        this.notAccessVisible = true;
      },
      close: function() {
        this.notAccessVisible = false;
      },
      jumpToShare: function() {
        //console.log('share-pop________=====______toshare')
        this.$router.push({
          name: "worldcupShare"
        })
      },
      jumpToAddChance() {
        //console.log("jump2chance", this.$store.state.IS_APP)
        redirectAddChance(this.$store.state.IS_APP);
      },
      jumpToDownload() {
        if(this.$store.state.IS_APP) {
          this.isShow = true
        } else {
          downloadApp()
        } 
      }
    }
  };
</script>

<style lang="less" scoped>
  .pop-box {
    box-sizing: border-box;
    width: 592pr;
    border-radius: 10pr;
    padding-bottom: 34pr;
  }
  
  .pop-header {
    height: 24pr;
    .close-icon {
      position: absolute;
      right: 20pr;
      top: 20pr;
      width: 24pr;
      height: 24pr;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 24pr;
        background-color: #9b9b9b;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
  
  .pop-body {
    text-align: center;
    margin-top: 40pr;
    // height: 1038pr;
    .title {
      // height: 56pr;
      color: #43475b;
      .text {
        font-size: 40pr;
      }
      .win-text2 {
        // margin-top: 5pr;
        >span {
          color: rgb(214, 82, 49);
        }
      }
    }
    .title-desc {
      // margin-top: 5pr;
      height: 38pr;
      color: #b1b3bb;
    }
    .content {
      margin-top: 38pr;
      text-align: center;
      .result-dev {
        width: 226pr;
        height: 226pr;
        background: url('../assets/images/test_code.png') no-repeat center;
        background-size: cover;
      }
      .result-online {
        width: 226pr;
        height: 226pr;
        background: url('../assets/images/code_img.png') no-repeat center;
        background-size: cover;
      }
      .text-tips {
        font-size: 24pr;
        color: #4b4945;
        margin-top: 5pr;
      }
      .share {
        margin-top: 48pr;
        .button {
          background: #fddb00;
          width: 372pr;
          height: 80pr;
          border-radius: 50pr;
          color: #4b4945;
        }
      }
      .guide {
        margin-top: 20pr;
        .href {
          font-size: 24pr;
          color: #14306b;
        }
      }
      .line {
        margin-top: 31pr;
        width: 425pr;
        height: 1pr;
        background: #eff0f4;
      }
      .match-title {
        margin-top: 11pr;
        .title {
          color: #b1b3bb;
          font-size: 24pr;
        }
      }
      .match {
        margin-top: 11pr;
        color: #43475b;
        font-size: 24pr;
        height: 80pr;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: scroll;
        .detail-box {
          margin: 10pr;
          .guess {
            margin-left: 120pr;
          }
        }
      }
    }
    .bottom {
      margin-top: 42pr;
      .wait {
        padding-top: 18pr;
        color: #8e8f94;
        font-size: 32pr;
        width: 128pr;
        height: 80pr;
        margin-right: 60pr;
      }
      .getMoney {
        font-size: 32pr;
        background: #ffffff;
        width: 240pr;
        color: #4b4945;
        height: 80pr;
        border-radius: 50pr;
        border: 1px solid #fddb00;
      }
    }
    .tips {
      color: #B1B3BB;
      font-size: 24pr;
      line-height: 34pr;
      margin-top: 20pr;
      text-align: center;
    }
  }
</style>