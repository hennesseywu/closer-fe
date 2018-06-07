<template>
  <div class="index">
    <div class="wrapper">
      <div class="invite-img"></div>
      <div class="share-box">
        <div class="title">
          <span>{{desc}}正在参与竞猜</span>
        </div>
        <div class="content">
          <img class="left-ball" src="../../../assets/images/left_ball.png"> 瓜分了
          <label class="middel-label">600</label>万
          <img class="right-ball" src="../../../assets/images/right_ball.png">
        </div>
        <div class="bottom">
          <button class="enter-button">去瓜分600万</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
      return {
       desc:"你的朋友"
      }
    },
  created(){
      console.log(this.$route.params);
      this.checkUser();
  },  
  methods:{
    checkUser(){
        if(Cookies.get('GroukAuth')&&Cookies.get('GroukAuth')==this.$route.params.id){
            this.desc="我"
        }
    }
  }
}
  
</script>


<style lang="less" scoped>
  .index {
    width: 100%;
    height: 100%;
    .wrapper {
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



