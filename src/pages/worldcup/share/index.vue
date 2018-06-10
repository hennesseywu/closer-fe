<template>
  <div class="index">
    <div class="wrapper">
      <div class="invite-img" @click="share"></div>
      <div class="share-box">
        <div class="title">
          <span>{{desc}}</span>
        </div>
        <div class="content">
          <img class="left-ball" src="../../../assets/images/left_ball.png"> 获得了
          <label class="middel-label" v-if="amount>0"> {{amount}} </label>
          <label class="middel-label" v-else> 100 </label> 元
          <img class="right-ball" src="../../../assets/images/right_ball.png">
        </div>
        <div class="bottom">
          <button class="enter-button" @click="goHome()">{{buttonDesc}}</button>
        </div>
      </div>
    </div>
        <Getapp ref='getapp' v-if="!isApp"></Getapp>
        <Sharepop ref="sharepop"></Sharepop>
  </div>
</template>

<script>

  import {
    mapState,
    mapActions
  } from 'vuex'
  import Getapp from '../../../components/getapp.vue';
  import Sharepop from '../../../components/sharepop.vue';


  export default {
    name:"share",
    components: {
        Getapp,
        Sharepop
    },
    data() {
      return {
        desc:  "",
        isSelf: false,
        amount: 0,
        buttonDesc: "去瓜分600万",
        isApp:false,
      }
    },
    computed: {
  
    },
    created() {
      this.checkUser();
    },
    methods: {
      ...mapActions('index', ['getUserById']),
      goHome() {
        console.log("go")
        this.$router.push({
          name: 'worldcupIndex'
        })
      },
     async checkUser() {
        this.isApp = this.$store.state.IS_APP;
        console.log("share",this.$route.params)
        if (this.$route.params.amount) {
            this.amount = this.$route.params.amount;
          }
        if (Cookies.get("user")) {
          let user = JSON.parse(Cookies.get("user"))
        if (user.objectID == this.$route.params.id) {
          console.log("true")
          this.desc = "我参与竞猜游戏";
          this.isSelf = true;
          this.buttonDesc = "再玩一次"
        } else {
          if (this.$route.params.id) {
            let user =await this.getUserById(this.$route.params.id);
            if (user.data.result&&user.data.result.username) {
              this.desc ="你的朋友 "+user.data.result.username.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') + " 参与竞猜";
            }
          }
        }
     }
      },
      share() {
        console.log('vadfadfadfadfadfadf')
        this.$refs.sharepop.open()
      }
    }
  }
</script>

<style lang="less" scoped>
  .index {
    width: 100%;
    height: 100%;
    .wrapper {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('../../../assets/images/bg.png') no-repeat center center;
      background-size: cover;
      .invite-img {
        position: absolute;
        top: 48pr;
        right: 0;
        width: 128pr;
        height: 148pr;
        background: url('../../../assets/images/share.png') no-repeat center;
        background-size: cover;
      }
      .share-box {
        left: 2%;
        width: 96%;
        top: 536pr;
        background: #041C4D;
        position: absolute;
        border-radius: 12pr;
        text-align: center;
        color: #ffffff;
        .title {
          margin-top: 60pr;
          font-size: 14pr;
        }
        .content {
          margin: 20pr 0 100pr 0;
          .left-ball {
            float: left;
            margin-left: 39pr;
            width: 92;
            height: 62pr;
          }
          .middel-label {
            color: #FDDB00;
            font-size: 48pr;
          }
          .right-ball {
            float: right;
            margin-right: 39pr;
            width: 92pr;
            height: 62pr;
          }
          ;
        }
        .bottom {
          .enter-button {
            width: 372pr;
            height: 80pr;
            margin: 0 87pr 60pr 87pr;
            background: #FDDB00;
            border-radius: 25pr;
            color: #4B4945;
          }
        }
      }
    }
  }
</style>



