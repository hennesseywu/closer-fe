<template>
  <div class="activity">
    <div class="wrapper">
      <div class="invite-img"></div>
      <div class="text-box box box-lr box-center-center">
        <div class="left box box-tb">
          <div class="chance-box">您还有<span>3</span>次机会喔</div>
          <div class="whole-num"><span>9929</span>人参与</div>
        </div>
        <div class="right">增加机会</div>
      </div>
      <div class="choose-box">
        <div class="time-wrapper box box-lr">
          <div class="left-ball"></div>
          <div class="time">
            <span>6</span>月<span>14</span>号
            <span>16:00</span>
            
          </div>
          <div class="right-ball"></div>
        </div>
        <div class="swiper-wrapper">
          <mt-swipe :continuous="false" :showIndicators="false">
            <mt-swipe-item>
              <div class="info-box box box-lr">
                <div class="left-arrow box box-center-center">
                  <span class="img"></span>
                </div>
                <div class="country country1 box box-tb">
                  <span>俄罗斯</span>
                  <span class="flag"></span>
                </div>
                <div class="vs-img"></div>
                <div class="country box box-tb">
                  <span>澳大利亚</span>
                  <span class="flag"></span>
                </div>
                <div class="right-arrow box box-center-center">
                  <span class="img rotate"></span>
                </div>
              </div>
            </mt-swipe-item>
            <!-- <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> -->
          </mt-swipe>
        </div>
        <div class="result box box-lr">
          <div class="common winner1">胜利</div>
          <div class="common tie">平局</div>
          <div class="common winner2">胜利</div>
        </div>
      </div>
      <div class="rule_record box box-lr">
        <div class="rule">规则说明</div>
        <div class="record">投注记录</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'index',
  components: {
    Swipe,
    SwipeItem
	},
}
</script>
<style lang="less" scoped>
  .activity {
    background: #000d01;
    .wrapper {
      padding-top: 1pr;
    background: url("../../../assets/images/activity_bg.jpg") no-repeat center
      center;
    background-size: cover;
    }
    .invite-img {
      position: absolute;
      top: 48pr;
      right: 0;
      width: 128pr;
      height: 148pr;
      background: url("../../../assets/images/share.png") no-repeat center;
      background-size: cover;
    }
    .text-box {
      position: relative;
      margin-top: 458pr;
      text-align: center;
      color: #fff;
      height: 44pr;
      line-height: 44pr;
      .left {
        font-size: 32pr;
        .chance-box {
          > span {
            color: #F9DB02;
          }
        }
        .whole-num {
          margin-top: 2pr;
          font-size: 28pr;
          line-height: 32pr;
        }
      }
      .right {
        position: absolute;
        top: 0;
        right: 0;
        padding: 14pr 44pr;
        font-size: 24pr;
        line-height: 34pr;
        color: #fff;
        background:linear-gradient(-90deg,rgba(224,30,30,1),rgba(252,193,34,1));
        border-radius:50pr 0px 0px 50pr;
      }
    }
    .choose-box {
      margin: 40pr 14pr 20pr 14pr;
      font-size: 24pr;
      line-height: 34pr;
      color: #fff;
      background: #041C4D;
      border-radius: 12pr;
      .time-wrapper {
        padding: 40pr 78pr 52pr 78pr;
        .left-ball {
          width: 90pr;
          height: 40pr;
          background: url("../../../assets/images/left_ball.png") no-repeat center;
          background-size: cover;
        }
        .time {
          margin: 0 99pr;
          > span {
            font-size: 32pr;
            color: #F9DB02;
          }
        }
        .right-ball {
          width: 90pr;
          height: 40pr;
          background: url("../../../assets/images/right_ball.png") no-repeat center;
          background-size: cover;
        }
      }
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 196pr;
        .info-box {
          width: 100%;
          .left-arrow, .right-arrow {
            width: 70pr;
            height: 196pr;
            background: #14306B;
            .img {
              display: block;
              width: 25pr;
              height: 52pr;
              background: url('../../../assets/images/arrow.png') no-repeat center;
              background-size: cover;
            }
            .rotate {
              transform: rotate(180deg);
            }
          }
          .right-arrow {
            position: absolute;
            top: 0;
            right: 0;
          }
          .country {
            margin-top: 28pr;
            // margin: 28pr 60pr 20pr 60pr; 
            font-size: 24pr;
            .flag {
              margin-top: 20pr;
              width: 88pr;
              height: 88pr;
              border-radius: 88pr;
              border: 1px solid red;
            }
          }
          .country1 {
            margin-left: 60pr;
          }
          .vs-img {
            margin: 80pr 36pr 20pr 36pr;
            width: 172pr;
            height: 94pr;
            background: url('../../../assets/images/vs_img.png') no-repeat center;
            background-size: cover;
          }
        }
      }
      .result {
        margin: 34pr;
        padding-bottom: 40pr;
        .common {
          font-size: 28pr;
          color: #4B4945;
          line-height: 44pr;
          padding: 18pr 38pr;
          background:rgba(249,219,2,1);
          border-radius:30pr;
        }
        .winner1 {
          margin-left: 90pr;
        }
        .tie {
          margin: 0 48pr;
        }
        
      }
    }
    .rule_record {
      background:rgba(20,48,107,1);
      border-radius:0px 10px 0px 0px;
    }
  }
</style>


