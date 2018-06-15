<template>
  <mt-popup v-model="visible" class="appuse-pop" :closeOnClickModal="closeOnClickModal">
    <div class="close-icon" @click="close"></div>
    <div class="pop-header">
      <div class="text">还想参与竞猜？</div>
    </div>
    <div class="pop-footer">
      <div class="confirm-btn" @click="goApp">进入APP使用</div>
      <div class="tips">非app内只能投注一次哦</div>
    </div>
  </mt-popup>
</template>
<script>
import Vue from "vue";
import { Popup } from "mint-ui";
import { downloadApp } from '../utils/utils'
Vue.component(Popup.name, Popup);

export default {
  name: "pop",
  components: {},
  props: {
    className: String,
    closeOnClickModal: {
      type: Boolean,
      default: false
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
    goApp(){
      downloadApp()
    }
  }
};
</script>
<style lang="less" scoped>
.appuse-pop {
  width: 590pr;
  border-radius: 10pr;
  background: #fff;
  text-align: center;
  padding-bottom: 40pr;
  .close-icon {
    position: absolute;
    right: 20pr;
    top: 20pr;
    width: 28pr;
    height: 28pr;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 2px;
      height: 28pr;
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
    margin-top: 60pr;
    font-size: 40pr;
    line-height: 56pr;
    color: #4b4945;
  }
  .pop-footer {
    margin-top: 60pr;
    font-size: 28pr;
    line-height: 40pr;
    color: #4b4945;
    .confirm-btn {
      padding: 20pr 102pr;
      margin: 0 84pr;
      background: #fddb00;
      border-radius: 50pr;
    }
    .tips {
      font-size: 24pr;
      line-height: 34pr;
      color: #fba14f;
      margin-top: 20pr;
    }
  }
}
</style>
