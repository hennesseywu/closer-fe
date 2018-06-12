<template>
  <mt-popup v-model="visible" class="share-pop" :closeOnClickModal="closeOnClickModal">
    <div class="close-icon" @click="close()"></div>
    <div class="pop-body box box-tb box-center-center"></div>
    <div class="pop-footer"></div>
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
    width: 618pr;
    height: 730pr;
    background: url('../assets/images/share_bg.png') no-repeat center;
    background-size: cover;
    .close-icon {
      position: absolute;
      right: 20pr;
      top: 20pr;
      width: 42pr;
      height: 42pr;
      background: url('../assets/images/share_close.png') no-repeat center;
      background-size: cover;
    }
    .pop-body {
      margin: 274pr auto 0;
      width: 226pr;
      height: 226pr;
      background: url('../assets/images/test_code.png') no-repeat center;
      background-size: cover;
    }
    .pop-footer {
      margin: 78pr auto 0;
      width: 306pr;
      height: 104pr;
      background: url('../assets/images/share_btn.png') no-repeat center;
      background-size: cover;
    }
  }
</style>
