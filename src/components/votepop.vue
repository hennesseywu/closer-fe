<template>
  <mt-popup v-model="visible" class="vote-pop" :closeOnClickModal="closeOnClickModal">
    <div class="pop-header box box-lr box-center-center">
      <div class="match">
        <img :src="voteInfo.logo" alt="">
      </div>
      <div class="match match2" v-if="voteInfo.gustTeamLogo&&voteInfo.gustTeamLogo!=''">
        <img :src="voteInfo.gustTeamLogo" alt="">
      </div>
    </div>
    <div class="pop-body box box-tb box-center-center">
      <div class="vote-resule" v-if="voteInfo.matchResult=='equal'">投注平局</div>
      <div class="vote-resule" v-else>投给{{voteInfo.teamName}}</div>
      <div class="rest-times">还剩{{totalChance}}次机会</div>
      <div class="vote-box box box-lr box-center-center">
        <span>使用</span>
        <div class="vbox">
          <span class="reduce" @click="reduce">-</span>
          <input class="input" type="text" ref="chance" v-model="inputChance" @blur="onblur">
          <span class="add" @click="add">+</span>
        </div>
        <span>次机会</span>
      </div>
      <div class="add-vote" @click="addChance"><span v-if="showText">{{textTip}}</span> 增加机会 查看攻略</div>
    </div>
    <div class="pop-footer box box-lr box-center-center">
      <div class="other-btn" @click="close">再想想</div>
      <div class="confirm-btn" @click="confirm(voteInfo)">确认</div>
    </div>
  </mt-popup>
</template>

<script>
  import Vue from "vue";
  import {
    Popup,
    Toast
  } from "mint-ui";
  import {
    redirectAddChance
  } from "../utils/utils";
  Vue.component(Popup.name, Popup);
  
  export default {
    name: "pop",
    components: {
      Toast
    },
    props: {
      guessMatch: Function,
      voteInfo: {
        type: Object,
        default: {}
      },
      className: String,
      closeOnClickModal: {
        type: Boolean,
        default: false
      },
      voteResult: {
        type: String,
        default: '投注胜利'
      },
      totalChance: Number
    },
    data() {
      return {
        showText: false,
        visible: false,
        chance: 1,
        inputChance: 1,
        textTip: "机会不足"
      };
    },
    created() {},
    methods: {
      open() {
        this.visible = true;
        this.chance = 1;
        this.inputChance = 1;
      },
      close() {
        this.visible = false;
      },
      checkChance() {
        this.showText = false
        if (this.inputChance > this.totalChance || this.chance > this.totalChance) {
          this.showText = true
          this.textTip = "机会不足"
        } else {
          this.showText = false
        }
      },
      onblur() {
        this.inputChance = this.$refs.chance.value;
        this.showText = false
        this.checkChance()
      },
      add() {
        this.checkChance();
        this.chance++;
        if (this.chance > this.totalChance) {
          this.chance = this.totalChance
          this.showText = true
          this.textTip = "机会不足"
        }
        this.inputChance = this.chance;
      },
      reduce() {
        if (this.chance > 1) {
          this.chance--;
          this.inputChance = this.chance;
        }
        this.checkChance()
      },
      confirm(voteInfo) {
        this.chance= this.inputChance;
        if (this.chance > this.totalChance){
          this.showText = true;
          console.log("机会不足")
          return;
        } else{
         this.showText = false
        }
        if (!(/^[1-9]+[0-9]*]*$/.test(this.chance))) {
          this.textTip = "请输入正整数";
          this.showText = true;
          return;
        }
  
        if (this.chance == 0) {
          this.textTip = "投注次数不能为0";
          this.showText = true;
          return;
        }
        // console.log('vote---this.chance', this.chance)
        // console.log('vote---this.inputChance', this.inputChance)
        voteInfo['guessTimes'] = this.inputChance;
        // console.log("confirm", voteInfo)
        this.$emit('guessMatch', voteInfo)
        setTimeout(() => {
          this.close()
        }, 500)
      },
      addChance() {
        redirectAddChance(this.$store.state.IS_APP);
      }
    }
  };
</script>

<style lang="less" scoped>
  .vote-pop {
    width: 560pr;
    background: #fff;
    border-radius: 20pr;
    .pop-header {
      .match {
        margin-top: -66pr;
        width: 128pr;
        height: 128pr;
        border-radius: 100%;
        background: url('../assets/images/flag_bg.png') no-repeat center;
        background-size: cover;
        >img {
          width: 110pr;
          height: 110pr;
          border-radius: 100%;
          margin: 9pr;
          overflow: hidden;
        }
      }
      .match2 {
        margin-left: 72pr;
      }
    }
    .pop-body {
      margin-top: 12pr;
      font-size: 40pr;
      line-height: 56pr;
      color: #43475B;
      .rest-times {
        margin-top: 4pr;
        font-size: 24pr;
        line-height: 34pr;
        color: #FCC122;
      }
      .vote-box {
        font-size: 32pr;
        line-height: 60pr;
        height: 60pr;
        color: #43475B;
        margin-top: 56pr;
        .vbox {
          border: 1px solid #F1F0F0;
          border-radius: 10pr 0px 0px 10pr;
          .add,
          .reduce {
            padding: 0 20pr;
          }
          .reduce {
            border-right: 1px solid #F1F0F0;
          }
          .add {
            border-left: 1px solid #F1F0F0;
          }
          .input {
            width: 92pr;
            height: 60pr;
            text-align: center;
          }
        }
      }
      .add-vote {
        margin-top: 24pr;
        color: #14306B;
        font-size: 24pr;
        line-height: 34pr;
        >span {
          color: red;
        }
      }
    }
    .pop-footer {
      margin-top: 40pr;
      font-size: 32pr;
      padding-bottom: 20pr;
      .other-btn {
        width: 180pr;
        height: 80pr;
        line-height: 80pr;
        text-align: center;
        border-radius: 40pr;
        color: #8E8F94;
      }
      .confirm-btn {
        padding: 18pr 58pr;
        background: #F9DB02;
        border-radius: 40pr;
        margin-left: 20pr;
      }
    }
  }
</style>
