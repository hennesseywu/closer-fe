<template>
  <div class="result-wrapper">
    <div class="content1">
      <div class="avater avater1">
        <span class="avater-commen avater1-icon"></span>
      </div>
      <div class="regards">
        <span>{{regards}}</span>分
      </div>
      <div class="local-name box box-lr box-center-center">
        <div class="line left"></div>
        <div class="name">获得称号</div>
        <div class="line right"></div>
      </div>
    </div>
    <div class="content2 box box-tb box-center-center">
      <div class="commen-width local1-img localImg">
        <div class="logo localLogo"></div>
      </div>
      <div class="local-desc localText">
        同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO
      </div>
    </div>
    <div class="content3">
      <div class="btn-commen go-answer">再次答题</div>
      <div class="chance-remain">剩余999次答题机会</div>
      <div class="btn-commen get-cash cash">{{btnText}}</div>
      <div class="text-commen go-wallet">去“我的-钱包”查看</div>
      <div class="text-commen tips">提高正确率，请查看攻略<span class="arrow"></span> </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        btnText: "下载APP",
        regards: 60,
      };
    },
    created() {
      this.regardsAdd();
    },
    methods: {
      regardsAdd() {
        setInterval(() => {
          if (this.regards >= 100) {
            return;
          }
          this.regards++;
        }, 10);
      }
    }
  };
</script>

<style lang="less" scoped>
  .result-wrapper {
    width: 100%;
    min-height: 1334pr;
    height: 100%;
    background: url(../assets/images/result_bg.png) no-repeat center;
    background-size: cover;
    color: #fff;
    padding-top: 162pr;
    text-align: center;
    .content1 {
      .avater {
        position: relative;
        width: 180pr;
        height: 180pr;
        border-radius: 180pr;
        margin: 0 auto;
        .avater-commen {
          position: absolute;
          top: -42pr;
          left: -10pr;
          display: inline-block;
          width: 84pr;
          height: 66pr;
        }
        .avater1-icon {
          background: url(../assets/images/avater1_logo.png) no-repeat center;
          background-size: cover;
        }
        .avater2-icon {
          background: url(../assets/images/avater2_logo.png) no-repeat center;
          background-size: cover;
        }
        .avater3-icon {
          background: url(../assets/images/avater3_logo.png) no-repeat center;
          background-size: cover;
        }
      }
      .avater1 {
        border: 8pr solid #d3b2d3;
      }
      .avater2 {
        border: 8pr solid #ffee00;
      }
      .avater3 {
        border: 8pr solid #ffffff;
      }
      .regards {
        font-size: 40pr;
        margin-top: 20pr;
        >span {
          font-size: 72pr;
        }
      }
      .local-name {
        position: relative;
        margin-top: 40pr;
        margin-bottom: 29pr;
        font-size: 36pr;
        height: 50pr;
        line-height: 50pr;
        .line {
          width: 258pr;
          height: 1px;
          background: url(../assets/images/line.png) no-repeat center;
          background-size: cover;
        }
        .name {
          margin: 0 10pr;
        }
        .left {
          transform: rotate(180deg);
        }
      }
    }
    .content2 {
      position: relative;
      height: 288pr;
      .commen-width {
        width: 568pr;
        height: 138pr;
        margin: 0 auto;
      }
      .local1-img {
        position: absolute;
        background: url(../assets/images/local1.png) no-repeat center;
        background-size: cover;
        top: -1000pr;
        .logo {
          margin: 0 auto;
          width: 230pr;
          height: 134pr;
          background: url(../assets/images/local1_logo.png) no-repeat center;
          background-size: cover;
          opacity: 0;
          position: absolute;
          top: -30pr;
          right: 30%;
        }
        .localLogo {
          animation: localLogo 1s .8s linear;
          -webkit-animation: localLogo 1s .8s linear;
          opacity: 0;
        }
      }
      .localImg {
        animation: localImg .5s .3s linear;
        -webkit-animation: localImg .5s .3s linear;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
      .local2-img {
        background: url(../assets/images/local2.png) no-repeat center;
        background-size: cover;
        .logo {
          margin: 0 auto;
          width: 202pr;
          height: 186pr;
          background: url(../assets/images/local2_logo.png) no-repeat center;
          background-size: cover;
        }
      }
      .local3-img {
        background: url(../assets/images/local3.png) no-repeat center;
        background-size: cover;
        .logo {
          margin: 0 auto;
          width: 238pr;
          height: 206pr;
          background: url(../assets/images/local3_logo.png) no-repeat center;
          background-size: cover;
        }
      }
      .local-desc {
        position: absolute;
        top: 160pr;
        padding: 0 40pr;
        font-size: 32pr;
        line-height: 44pr;
        opacity: 0;
      }
      .localText {
        animation: localText .5s 1.8s linear;
        -webkit-animation: localText .5s 1.8s linear;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
    }
    .content3 {
      .btn-commen {
        width: 348pr;
        height: 130pr;
        line-height: 110pr;
        font-size: 36pr;
        color: #333;
        font-weight: bold;
      }
      .go-answer {
        background: url(../assets/images/go_answer.png) no-repeat center;
        background-size: cover;
        margin: 0 auto;
      }
      .chance-remain {
        font-size: 28pr;
        line-height: 40pr;
      }
      .get-cash {
        background: url(../assets/images/white_btn.png) no-repeat center;
        background-size: cover;
        margin: 22pr auto 0 auto;
        // opacity: 0;
        animation: cash .5s 2s ease-in;
      }
      .cash {
        animation: cash .5s 2s ease-in;
        opacity: 1;
        ;
      }
      .text-commen {
        font-size: 28pr;
        line-height: 40pr;
      }
      .tips {
        color: #fddb00;
        margin-top: 42pr;
        .arrow {
          display: inline-block;
          margin-left: 10pr;
          width: 12pr;
          height: 20pr;
          background: url(../assets/images/arrow.png) no-repeat center;
          background-size: cover;
        }
      }
    }
  }
  
  // 动画
  @keyframes localImg {
    0% {
      top: -1000pr;
    }
    80% {
      top: 20pr;
    }
    90% {
      top: -20pr;
    }
    100% {
      top: 0pr;
    }
  }
  
  @keyframes localLogo {
    0% {
      opacity: 1;
      transform: scale(1.5);
    }
    25% {
      transform: rotate(25deg);
      opacity: 1;
    }
    50% {
      transform: rotate(0deg);
      opacity: 1;
    }
    75% {
      transform: rotate(-25deg);
      opacity: 1;
    }
    100% {
      position: absolute;
      top: 0;
      right: 30%;
      transform: scale(0.5);
      opacity: 0;
    }
  }
  
  @keyframes localText {
    0% {
      top: 140pr;
      opacity: 0;
    }
    100% {
      top: 160pr;
      opacity: 1;
    }
  }
  
  @keyframes cash {
    0% {
      transform: scale(.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
