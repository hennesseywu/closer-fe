<template>
  <div class="rule-box activity-rule" :class="showIndexRule ? 'index-rule' : ''" v-if="showRule || showIndexRule">
      <div class="rule-title box box-tb box-center-center" v-if="showIndexRule">
        <div class="top-line"></div>
        活动规则
        <div class="bottom-line"></div>
      </div>
      <div class="rule activity">竞猜机会获取规则：</div>
      <div class="rule-ul">
        <div class="item">
          <span class="c-img"></span>
          <span class="right">1. 通过扫码获取一次竞猜机会，下载贴近APP送两次竞猜机会；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">2. 装机后用贴近APP扫描贴近设置在APP内、酒吧、网吧、球场、餐饮店等地方隐藏的二维码获取两次竞猜机会；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">3. 每天登陆贴近APP获得一次竞猜机会。</span>
        </div>
      </div>
      <div class="rule">竞猜规则：</div>
      <div class="rule-ul">
        <div class="item">
          <span class="c-img"></span>
          <span class="right">1. 利用竞猜机会直接参与竞猜，竞猜胜平负（每次最少使用一次机会，上不封顶，同一场比赛使用多次竞猜机会，只能猜同样的胜负平）；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">2. 奖金机制：世界杯比赛日设置相应的奖金额度，奖金额度按照世界杯进程做相应的递增。每场比赛竞猜正确的用户根据所投入竞猜的机会多少，平分该场比赛所设置的奖金（所投入竞猜且竞猜正确的机会越多，获得奖金越高），该奖金将注入“贴近App  我的  钱包”，可按照贴近App平台规则提现；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">3. 已投入竞猜的机会，并且竞猜正确后，才能结算现金奖励；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">4. 每场比赛开始前5分钟关闭竞猜窗口，用户无法在已关闭竞猜窗口的比赛场次投入竞猜机会；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">5. 比赛第二日10：00，结算现金奖励。</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">所有的竞猜活动，以公司制定的规则为准。公司拥有本活动的最终解释权</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'rule',
  props: {
    showRule: {
      type: Boolean,
      default: true
    },
    showIndexRule: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  .activity-rule {
    margin: 0 16pr 60pr 16pr;
    padding-top: 52pr;
  }
  .index-rule {
    margin-top: -400pr;
  }
  .rule-box {
    // margin: 40pr;
    font-size: 26pr;
    line-height: 36pr;
    color: rgba(146,179,248,0.5);
    background:rgba(4,28,77,1);
    padding-bottom: 20pr;
    .rule-title {
      text-align: center;
      padding-top: 16pr;
      font-size: 32pr;
      line-height: 44pr;
      .top-line, .bottom-line {
        width: 488pr;
        height: 6pr;
        background: url('../assets/images/line.png') no-repeat center;
        background-size: cover;
      }
    }
    .index-mt40 {
      margin-top: 40pr;
    }
    .rule {
      // margin-top: 40pr;
      line-height: 40pr;
    }
    .rule-ul {
      margin-top: 10pr;
    }
    .rule, .rule-ul {
      padding: 0 40pr;
      .item {
        margin-top: 10pr;
        .c-img {
          display: block;
          width: 40pr;
          height: 24pr;
          background: url("../assets/images/circle.png") no-repeat center center;
          background-size: cover;
        }
        .right {
          display: block;
          margin-left: 60pr;
          margin-top: -30pr;
        }
      }
    }
  }
</style>


