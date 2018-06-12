<template>
  <div class="index">
    <div class="wrapper">
      <div class="invite-img" @click="share"></div>
      <div class="share-box">
        <div class="content">
          <div class="text">你的好友正在参与竞猜</div>
          <div class="text-yellow">截图分享600万</div>
          <div class="code-img"></div>
          <div class="btn-img" @click="goHome"></div>
          <div class="text-img">“每天分钱 闷起脑壳发财”</div>
        </div>
      </div>
    </div>
        <Getapp ref='getapp' v-if="!isApp"></Getapp>
        <Sharepop ref="sharepop" :isApp="isApp"></Sharepop>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Toast } from "mint-ui";
import Getapp from "../../../components/getapp.vue";
import Sharepop from "../../../components/sharepop.vue";

export default {
  name: "share",
  components: {
    Getapp,
    Sharepop,
    Toast
  },
  data() {
    return {
      isApp: false
    };
  },
  computed: {},
  created() {
    this.isApp = this.$store.state.IS_APP;
    if (this.isApp) {
    }
  },
  methods: {
    ...mapActions("index", ["getUserById"]),
    goHome() {
      console.log("go");
      this.$router.push({
        name: "worldcupIndex"
      });
    },
    share() {
      if (this.isApp) {
        this.$refs.sharepop.open();
      } else {
        Toast("点击右上角浏览器打开");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-top: 1pr;
    background: url("../../../assets/images/bg2.png") no-repeat center center;
    background-size: cover;
    .invite-img {
      position: absolute;
      top: 48pr;
      right: 0;
      width: 128pr;
      height: 148pr;
      background: url("../../../assets/images/share.png") no-repeat center;
      background-size: cover;
    }

    .content {
      text-align: center;
      width: 614pr;
      height: 702pr;
      margin: 470pr auto 0;
      background: url("../../../assets/images/share_bg1.png") no-repeat center;
      background-size: cover;
      .text {
        font-size: 48pr;
        color: #fff;
        padding-top: 48pr;
      }
      .text-yellow {
        font-size: 72pr;
        line-height: 100pr;
        color: #fddb00;
        margin-top: 4pr;
      }
      .code-img {
        margin: 22pr auto 0;
        width: 218pr;
        height: 218pr;
        background: url("../../../assets/images/test_code.png") no-repeat center;
        background-size: cover;
      }
      .btn-img {
        width: 288pr;
        height: 88pr;
        margin: 62pr auto 0;
        background: url("../../../assets/images/share_btn1.png") no-repeat
          center;
        background-size: cover;
      }
      .text-img {
        font-size: 24pr;
        margin-top: 12pr;
        color: #fff;
      }
    }
    .bottom {
      .enter-button {
        width: 372pr;
        height: 80pr;
        margin: 0 87pr 60pr 87pr;
        background: #fddb00;
        border-radius: 50pr;
        color: #4b4945;
      }
    }
  }
}
</style>



