<template>
  <mt-popup v-model="visible" class="vote-pop" :closeOnClickModal="closeOnClickModal">
    <div class="pop-header box box-lr box-center-center">
      <div class="match">
        <img :src="voteInfo.logo" alt="">
      </div>
      <!-- <div class="match match2">
        <img src="" alt="">
      </div> -->
    </div>
    <div class="pop-body box box-tb box-center-center">
      <div class="vote-resule">{{voteResult}}</div>
      <div class="rest-times">还剩{{totalChance}}次机会</div>
      <div class="vote-box box box-lr box-center-center">
        <span>使用</span>
        <div class="vbox">
          <span class="reduce" @click="reduce">-</span>
          <input class="input" type="text" ref="chance" v-model="chance" @blur="onblur">
          <span class="add" @click="add">+</span>
        </div>
        <span>次机会</span> 
      </div>
      <div class="add-vote"><span v-if="showText">机会不足</span> 增加机会 查看攻略</div>
    </div>
    <div class="pop-footer box box-lr box-center-center">
      <div class="other-btn" @click="close">再想想</div>
      <div class="confirm-btn" @click="confirm(voteInfo)">确认</div>
    </div>
  </mt-popup>
</template>
<script>
import Vue from "vue";
import { Popup, Toast } from "mint-ui";
Vue.component(Popup.name, Popup);

export default {
  name: "pop",
  components: {
    Toast
  },
  props: {
    guessMatch:{
      type:Function
    },
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
      chance: 0,
      inputChance: 0
    };
  },
  created() {
    
  },
  methods: {
    // watch: {
    //   value(newValue, oldValue) {
    //     this.chance
    //   }
    // },
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    checkChance() {
      this.showText = false
      if(this.inputChance >=this.totalChance || this.chance >= this.totalChance) {
        this.showText = true
      } else {
        this.showText = false
      }
    },
    onblur() {
      this.inputChance = this.$refs.chance.value
      this.showText = false
      this.checkChance()
    },
    add() {
      this.checkChance()
      if(this.chance >=this.totalChance) {
          this.chance=this.totalChance
      }else{
        this.chance++
      }
    },
    reduce() {
      if(this.chance > 0) {
        this.chance--
      } 
      this.checkChance()
    },
    confirm(voteInfo) {
      // this.checkChance()
      if(this.showText) return;
      console.log("confirm",voteInfo);
      delete voteInfo['logo']
      voteInfo['guessTimes']=this.chance;
      console.log(voteInfo)
      this.$emit('guessMatch',voteInfo)
      setTimeout(()=>{
        this.close();
      },500)

      // this.$emit('input', event)
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
      background: #fff;
      > img {
        width: 110pr;
        height: 110pr;
        border-radius: 100%;
        margin: 9pr;
        overflow: hidden;
      } 
    }
    .match2{
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
        .add, .reduce {
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
      > span {
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
