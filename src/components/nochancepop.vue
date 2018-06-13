<template>
  <mt-popup v-model="visible" class="nochance-pop" :closeOnClickModal="closeOnClickModal">
    <div class="close-icon" @click="close()"></div>
    <div class="pop-header">
      <div class="winner">
        <div class="win-text">已经没有机会了哟~</div>
      </div>
    </div>
    <div class="pop-body box box-tb box-center-center">
      <div class="loser-img"></div>
      <div class="pop-text">“在贴近app的文章里、酒吧里、<br> 广告牌里寻找<span>机会</span>吧</div>
    </div>
    <div class="pop-footer">
      <div class="confirm-btn" @click="download()">{{isApp ? '确认' : '去app使用'}}</div>
      <div class="tips" @click="goTips">增加机会 查看攻略</div>
    </div>
  </mt-popup>
</template>

<script>
  import Vue from "vue";
  import {
    downloadApp,
    redirectAddChance
  } from '../utils/utils'
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
        default: false
      },
      count: Number,
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
      download() {
        if(this.isApp) {
          this.visible = false
        } else {
          downloadApp();
        }
      },
      goTips() {
        redirectAddChance();
      }
    }
  };
</script>

<style lang="less" scoped>
  .nochance-pop {
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
      color: #43475B;
      .winner {
        margin-top: 60pr;
      }
    }
    .pop-body {
      font-size: 24pr;
      line-height: 40pr;
      color: #777C90;
      .loser-img {
        margin-top: 88pr;
        width: 320pr;
        height: 306pr;
        background: url('../assets/images/new_loser.png') no-repeat center;
        background-size: cover;
      }
      .pop-text {
        margin-top: 50pr;
        >span {
          color: #E7461F;
        }
      }
    }
    .pop-footer {
      font-size: 24pr;
      line-height: 44pr;
      color: #4B4945;
      .confirm-btn {
        padding: 20pr 40pr;
        margin: 30pr 160pr 20pr;
        background: #FDDB00;
        border-radius: 50pr;
      }
      .tips {
        color: #14306B;
      }
    }
  }
</style>
