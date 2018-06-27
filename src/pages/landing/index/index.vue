<template>
  <div class="landing">
    <div id="pages">
      <div class="page page1 box box-tb box-pack-around">
        <div class="page1-img">
          <img src="../assets/images/zxsq3@2x.png" alt=""> 
        </div>
        <div class="page1-form">
          <tj-input class="page1-form__item page1-form__input" type="text" maxlength="11" placeholder="请输入手机号"></tj-input>
          <tj-button class="page1-form__item page1-form__button" text="立即领取红包" :on-click="download"></tj-button>                  
        </div>
      </div>
      <div class="page page2">
        <img src="../assets/images/1@2x.png" alt="">
      </div>
      <div class="page page3">
        <img src="../assets/images/2@2x.png" alt="">
      </div>
      <div class="page page4">
        <img src="../assets/images/3@2x.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { downloadApp, getPlatform } from "../../../utils/utils";
import tjButton from "../components/tjbutton";
import tjInput from "../components/tjinput";
export default {
  components: {
    tjButton,
    tjInput
  },
  data() {
    return {};
  },
  methods: {
    download() {
      downloadApp();
    }
  }
};
</script>
<style lang="less" scoped>
.landing {
  #pages {
    .page {
      overflow: hidden;
      text-align: center;
    }
    .page1 {
      background: #f5f5f5;
      height: 100vh;
      .page1-img > img {
        width: 100%;
        height: auto;
        padding: 20pr 20pr 0;
        box-sizing: border-box;
      }
      .page1-form {
        padding: 0 20pr;
        box-sizing: border-box;
        .page1-form__input {
          margin-bottom: 32pr;
        }
        .page1-form__button {
          padding: 19pr 0;
          box-sizing: border-box;
        }
      }
    }
    .page2 > img,
    .page3 > img,
    .page4 > img {
      width: 100%;
      height: auto;
    }
  }
}
</style>

