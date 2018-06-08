<template>
    <mt-popup v-model="notAccessVisible" :class="win? 'win-pox-box':'pop-box'" :closeOnClickModal="false">
        <div class="pop-header">
            <div class="close-icon" @click="close"></div>
        </div>
        <div :class="win ?'win-pop-box':'pop-body'">
            <div class="title">
                <span class="text">很遗憾你猜错了</span>
            </div>
            <div class="title-desc">
              <span class="desc">9378人参与，2367答对</span>
            </div>
          <div class="content">
                  <img class="result-img" src="../../../assets/images/result_wrong.png">
            <div class="share">
            <button  class="button">邀请好友 一起赚钱</button>
            </div>
            <div class="guide">
            <a  class="href">增加机会 查看攻略</a>
            </div>
            <div class="line"></div>
            <div class="match-title">
             <span class="title">竞猜比赛队伍</span>
            </div>
            <div class="match">
              <span class="detail">俄罗斯 vs 中国</span><span class="guess">俄罗斯x10</span>
              <span class="detail">俄罗斯 vs 中国</span><span class="guess">俄罗斯x10</span>
              <span class="detail">俄罗斯 vs 中国</span><span class="guess">俄罗斯x10</span>
            </div>
        </div>
        <div class="bottom">
          <span class="wait">等等再说</span>
          <button class="getMoney">去提现</button>
        </div>
        </div>
    </mt-popup>
 
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui'
Vue.component(Popup.name, Popup)

export default {
    name: 'pop',
    components: {

    },
    props: {
        className: String
    },
    data() {
        return {
            win:false,
            notAccessVisible: true
        }
    },
    methods: {
        open: function () {
            this.notAccessVisible = true
        },
        close: function () {
            this.notAccessVisible = false
        }
    }
}
</script>
<style lang="less" scoped>
.pop-box {
    box-sizing: border-box;
    width: 592pr;
    height: 1082pr;
    // padding: 16pr 0px;
    border-radius: 10pr;
}
.pop-header {
    height: 24pr;
    .close-icon {
        position: absolute;
        right: 20pr;
        top: 20pr;
        width: 24pr;
        height: 24pr;
        &::before, &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 24pr;
            background-color: #9B9B9B;
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
    height: 1038pr;
    .title {
        height: 56pr;
        color: #43475B;
        .text {
            font-size: 40pr;
        }
    }
    .title-desc{
        margin-top: 10pr;
        height: 38pr;
        color: #B1B3BB;
    }

    .content{
      height: 788pr;
      margin-top: 48pr;
      text-align: center;
      .result-img{
            width:348pr;
            height: 320pr;
      }
      .share{
        margin-top: 48pr;
    .button{
        background:#FDDB00;
        width: 372pr;
        height: 80pr;
        border-radius: 50pr;
        color: #4B4945;
          }
    }
    .guide{
      margin-top:20pr;
      .href{
        font-size: 24pr;
       color: #14306B;
      }
      
    }

    .line{
      margin-top:31pr;
      // width:425pr;
      height:2pr;
      border:1px solid #EFF0F4
    }
    .match-title{
      margin-top:11pr;
      .title{
      color: #B1B3BB;
      font-size: 24pr;
      }
    }

    .match{
      margin-top:18pr;
      color:#43475B;
      font-size: 24pr;
      .detail{
      float: left;
      margin-left: 94pr;
      }
      .guess{
        float:right;
        margin-right: 72pr;
      }
    }
    }
    .bottom{
      height: 80pr;
      // margin-top: 62pr;
      .wait{
          padding-top: 18pr;
          color: #8E8F94;
          font-size: 32pr;
          width: 128pr;
          height: 80pr;
          margin-right: 60pr;
      }
      .getMoney{
        font-size: 32pr;
        background:#ffffff;
        width:240pr;
        color:#4B4945;
        height:80pr;
        border-radius:50pr;
        border:1px solid #FDDB00;
      }
    }
}


</style>