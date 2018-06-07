<template>
  <div class="rule-box activity-rule" :class="showIndexRule ? 'index-rule' : ''" v-if="showRule || showIndexRule">
      <div class="rule-title box box-tb box-center-center" v-if="showIndexRule">
        <div class="top-line"></div>
        活动规则
        <div class="bottom-line"></div>
      </div>
      <div class="rule activity">投注机会获取规则：</div>
      <div class="rule-ul">
        <div class="item">
          <span class="c-img"></span>
          <span class="right">通过扫码获取一个投注机会，下载贴近APP送两个投注机会；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">装机后用贴近APP扫描贴近设置在APP内、酒吧、网吧、球场、餐饮店等地方隐藏的二维码获取两个投注机会；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">每天登陆贴近APP获得一个投注机会。</span>
        </div>
      </div>
      <div class="rule">竞猜规则：</div>
      <div class="rule-ul">
        <div class="item">
          <span class="c-img"></span>
          <span class="right">利用投注机会直接下注，竞猜胜平负（每次最少投注一次机会，上不封顶）；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">奖金机制：世界杯比赛日设置相应的奖金额度，奖金额度按照世界杯进程做相应的递增。每场比赛竞猜正确的用户根据所投注的机会多少，平分该场比赛所设置的奖金（猜中的投注机会越多，获得奖金越高）；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">奖金设置 
            <br> 小组赛奖金方案：
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小组赛第一轮（6天）奖金：5万/每天 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小组赛第二轮（6天）奖金：10万/每天 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小组赛第三轮（5天）奖金：15万/每天 
            <br>淘汰赛奖金方案： 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;八分之一决赛（4天）奖金：25万/每天 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四分之一决赛（2天）奖金：40万/每天 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;半决赛（2天）奖金：50万/每天 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三四名决赛（1天）奖金：55万 
            <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;决赛（1天）奖金：100万
            </span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">已进行投注的机会，并且竞猜正确后，才能结算现金奖励；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">比赛前5分钟停止投注；</span>
        </div>
        <div class="item">
          <span class="c-img"></span>
          <span class="right">比赛第二日09：00，结算现金奖励。</span>
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
      default: false
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
    margin: 40pr;
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


