<template>
  <mt-popup v-model="visible" class="login-pop" :closeOnClickModal="closeOnClickModal">
    <div class="pop-header">您还没有登录哦～</div>
    <div class="pop-body">
      <div class="decs">点击【我的】登录就能拿到新人礼金哦</div>
      <div class="login-img"></div>
      <!-- <slot></slot> -->
    </div>
    <div class="pop-footer">
      <div class="confirm-btn">确认</div>
    </div>
  </mt-popup>
</template>
<script>
import Vue from "vue";
import { Popup } from "mint-ui";
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
      visible: false
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
.login-pop {
  width: 590pr;
  border-radius: 10pr;
  background: #fff;
  text-align: center;
  .pop-header {
    margin-top: 56pr;
    font-size: 32pr;
    line-height: 44pr;
    color: #4B4945;
  }
  .pop-body {
    margin-top: 16pr;
    font-size: 28pr;
    line-height: 40pr;
    color: #BDBBBB;
    .login-img {
      margin-top: 44pr;
      width: 568pr;
      height: 50pr;
      background: url('../assets/images/login_img.png') no-repeat center;
      background-size: cover;
    }
  }
  .pop-footer {
    margin-top: 1pr;
    font-size: 32pr;
    line-height: 44pr;
    color: #4B4945;
    .confirm-btn {
      padding: 30pr;
    }
  }
  
}
</style>
