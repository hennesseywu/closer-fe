<template>
  <mt-popup v-model="visible" class="newuser-pop" :closeOnClickModal="closeOnClickModal">
    <div class="close-icon" @click="close()"></div>
    <div class="pop-header">
      <div class="winner" v-if="newUser">
        <div class="win-text">恭喜您！</div>
        <div class="win-btn">获得{{count}}次竞猜机会</div>
      </div>
      <div class="loser" v-if="!newUser">
        <div class="loser-text">很遗憾<br> 已经领取过了哟～</div>
      </div>
    </div>
    <div class="pop-body box box-tb box-center-center">
      <div class="win-img" v-if="newUser"></div>
      <div class="loser-img" v-else></div>
      <div class="decs" v-if="newUser">“是时候展示真正的技术了！”</div>
      <div class="decs" v-else>“去APP找一找会有更多机会”</div>
      <div class="app-text" v-if="newUser">还有<span>10</span>元新人大礼哟~</div>
      <div class="app-desc" v-if="newUser">进入【我的钱包】-【奖励金】中领取</div>
      <!-- <slot></slot> -->
    </div>
    <div class="pop-footer" v-if="!isApp">
      <div class="confirm-btn" v-on:click="redirectTo()">下载APP 机会翻倍</div>
    </div>
  </mt-popup>
</template>

<script>
  import Vue from "vue";
  import {
    Popup
  } from "mint-ui";
  Vue.component(Popup.name, Popup);
  
  export default {
    name: "pop",
    components: {},
    props: {
      newUser: {
        type: Boolean,
        default: false
      },
      isApp: {
        type: Boolean,
        default: true
      },
      count:Number
      ,
      className: String,
      closeOnClickModal: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      open() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      }
    }
  };
</script>

<style lang="less" scoped>
  .newuser-pop {
    width: 590pr;
    border-radius: 10pr;
    background: #fff;
    text-align: center;
    padding-bottom: 40pr;
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
    .pop-header {
      margin-top: 56pr;
      font-size: 40pr;
      line-height: 44pr;
      color: #4B4945;
      .winner {
        .win-btn {
          margin: 12pr 154pr 66pr 154pr;
          font-size: 28pr;
          // height: 40pr;
          // line-height: 40pr;
          padding: 6pr 20pr;
          color: #fff;
          background: linear-gradient(-90deg, rgba(224, 30, 30, 1), rgba(252, 193, 34, 1));
          border-radius: 50pr;
        }
      }
      .loser {
        text-align: center;
        color: #8E8B8B;
        .loser-text {
          font-size: 40pr;
          line-height: 56pr;
        }
      }
    }
    .pop-body {
      font-size: 24pr;
      line-height: 40pr;
      color: #B1B3BB;
      .win-img {
        margin-top: 16pr;
        width: 494pr;
        height: 300pr;
        background: url('../assets/images/new_win.png') no-repeat center;
        background-size: cover;
      }
      .loser-img {
        margin-top: 76pr;
        width: 320pr;
        height: 306pr;
        background: url('../assets/images/new_loser.png') no-repeat center;
        background-size: cover;
      }
      .decs {
        margin-top: 48pr;
      }
      .app-text {
        margin-top: 60pr;
        font-size: 36pr;
        color: #4B4945;
        line-height: 50pr;
        >span {
          color: #E7461F;
        }
      }
      .app-desc {
        font-size: 24pr;
        line-height: 34pr;
        margin-top: 16pr;
        color: #B1B3BB;
      }
    }
    .pop-footer {
      margin-top: 1pr;
      font-size: 28pr;
      line-height: 44pr;
      color: #4B4945;
      .confirm-btn {
        padding: 20pr 70pr;
        margin: 24pr 90pr 20pr 90pr;
        background: #FDDB00;
        border-radius: 50pr;
      }
    }
  }
</style>
