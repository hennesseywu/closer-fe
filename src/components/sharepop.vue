<template>
  <mt-popup v-model="visible" class="share-pop" :closeOnClickModal="closeOnClickModal">
    <div class="close-icon" @click="close()"></div>
    <div class="pop-header">
      <div class="winner">
        <div class="win-text">分享好友~</div>
      </div>
    </div>
    <div class="pop-body box box-tb box-center-center">
      <div class="pop-text" v-if="isApp">截图分享好友吧，一起瓜分<span>600</span>万</div>
      <div class="pop-text" v-else>打开浏览器分享，一起瓜分<span>600</span>万</div>
    </div>
    <div class="pop-footer">
      <div class="confirm-btn" @click="close">确认</div>
      <div class="tips">长按识别二维码就可以参加活动</div>
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
      isApp: {
        type: Boolean,
        default: true
      },
      className: String,
      closeOnClickModal: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      open() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      },
    }
  };
</script>

<style lang="less" scoped>
  .share-pop {
    width: 590pr;
    border-radius: 10pr;
    background: #fff;
    text-align: center;
    color: #4b4945;
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
      font-size: 32pr;
      line-height: 44pr;
      .winner {
        margin-top: 62pr;
      }
    }
    .pop-body {
      font-size: 28pr;
      line-height: 40pr;
      margin-top: 60pr;
      .pop-text {
        > span {
          font-size: 60pr;
          color: #E7C90D;
        }
      }
    }
    .pop-footer {
      font-size: 24pr;
      line-height: 44pr;
      color: #4B4945;
      .confirm-btn {
        padding: 20pr 70pr;
        margin: 30pr 160pr 26pr;
        background: #FDDB00;
        border-radius: 50pr;
      }
      .tips {
        color: #E7760D;
      }
    }
  }
</style>
