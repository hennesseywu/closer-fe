<template>
  <mt-popup v-model="notAccessVisible" class="pop-box" :closeOnClickModal="false">
    <div class="pop-header">
      <div class="close-icon" @click="close"></div>
    </div>
    <div class="pop-body">
      <div class="title box box-tb">
        <span class="text" v-if="!guessResult">很遗憾,你猜错了</span>
        <span class="text win-text1" v-if="guessResult">恭喜你猜对了！</span>
        <span class="text win-text2" v-if="guessResult">你获得了<span>{{toYuan(awardAmt)}}</span>元</span>
      </div>
      <div class="title-desc">
        <span class="desc">{{totalGuessPerson}}人参与，{{totalBingoPerson}}答对</span>
      </div>
      <div class="content box box-tb box-center-center">
        <div :class="guessResult ? 'result-win':'result-img'"></div>
        <div class="share" @click="jumpToShare()">
          <button class="button" v-if="guessResult">炫耀一下</button>
          <button class="button" v-else>邀请好友一起赚钱</button>
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
            <span class="detail">{{item.homeTeam.teamName}} vs {{item.gustTeam.teamName}}</span><span class="guess">{{item.matchDesc}}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="wait" @click="close()">等等再说</span>
        <button class="getMoney" @click="jumpToDownload()">去提现</button>
      </div>
      <div class="tips">进入【我的钱包】-【奖励金】中领取</div>
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
    downloadApp
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
      awardAmt: {
        type: Number,
        default: 0
      },
      matchList: {
        type: Array,
        defaut: []
      },
      jumpTo: Function
    },
    data() {
      return {
        win: false,
        buttonText: '炫耀一下',
        isShow: false,
        notAccessVisible: true
  
      };
    },
    methods: {
      toYuan: function(money) {
        return (money / 100 + "").substring(".", (money / 100 + "").indexOf(".") + 3)
      },
      open: function() {
        this.notAccessVisible = true;
      },
      close: function() {
        this.notAccessVisible = false;
      },
      jumpToShare: function() {
        this.$emit('jumpTo')
      },
      jumpToAddChance() {
        console.log("jump2chance",this.$store.state.IS_APP)
        redirectAddChance(this.$store.state.IS_APP);
      },
      jumpToDownload() {
        downloadApp()
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
    margin-top: 60pr;
    // height: 1038pr;
    .title {
      // height: 56pr;
      color: #43475b;
      .text {
        font-size: 40pr;
      }
      .win-text2 {
        margin-top: 10pr;
        >span {
          color: rgb(214, 82, 49);
        }
      }
    }
    .title-desc {
      margin-top: 10pr;
      height: 38pr;
      color: #b1b3bb;
    }
    .content {
      margin-top: 48pr;
      text-align: center;
      .result-img {
        width: 348pr;
        height: 320pr;
        background: url('../assets/images/result_wrong.png') no-repeat center;
        background-size: cover;
      }
      .result-win {
        width: 452pr;
        height: 228pr;
        background: url('../assets/images/result_win.png') no-repeat center;
        background-size: cover;
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
        height: 180pr;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: scroll;
        .detail-box {
          // margin-top: 20pr;
          // width: 100%;
          // margin-left: 90pr;
          margin: 20pr 10pr;
          .detail {
            // display: block;
            // float: left;
            // margin-top: 20pr;
            // margin-left: 94pr;
          }
          .guess {
            margin-left: 120pr;
          }
        }
      }
    }
    .bottom {
      margin-top: 62pr;
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
      margin-top: 40pr;
      text-align: center;
    }
  }
</style>