<template>
  <div class="rule">
    <div class="back" @click="back">
      <span class="arrow"></span>返回
    </div>
    <div class="rule-title">
      <span class="rule-text">贴近奖励金发放和提取规则</span>
    </div>
    <div class="rule-content">
      <div class="rule-text">
        <div class="left-top-icon"></div>
        <div class="right-top-icon"></div>
        <div class="left-bottom-icon"></div>
  
        <div class="right-bottom-icon"></div>
        <p class="content-title">什么是贴近奖励金：</p>
        <p class="content-text">
          贴近平台针对首次注册APP的新用户以及进行邀请拉新的老用户提供的现金奖励，可支持提现。
        </p>
        <p class="content-title">
          发放规则：
        </p>
        <p class="content-text">
          • 新用户下载并注册贴近APP即可获得10元现金奖励。老用户通过邀请拉新，邀请到首个用户注册贴近APP,可获得10元现金奖励，从邀请的第二个好友开始，老用户可获得2元现金奖励，邀请人数达到7或7的倍数时，会触发阶段性奖励，奖励金由2元提升到10元。例如：小王作为贴近的老用户，邀请了7位好友，那么他合计可获得的邀请拉新奖励金是：10+2+2+2+2+2+10=30元。加上小王最开始注册获得的10元新用户奖励，小王账户中一共会有40元现金。
        </p>
        <p class="content-text">
          • 被邀请新用户的同一手机设备、同一手机号码仅可领取一次。
        </p>
        <p class="content-title">
          如何提现：
        </p>
        <p class="content-text">
          • 用户账户中的现金分为两部分，一部分为可直接提现的余额，一部分为冻结金额。新用户注册贴近获得的首次10元奖励将直接出现在余额账户当中。当余额中的金额达到20元时，即可实时提现到支付宝。用户需进行身份认证并绑定支付宝。
        </p>
        <p class="content-text">
          • 每天提现总金额不得超过800元。
        </p>
        <p class="content-text">
          • 如果每个月的提现额度超过税务机关的规定上限，我们会代扣所得税，如果您邀请的好友比较多，建议您可分月申请将奖励金提现。
        </p>
        <p class="content-title">
          冻结金额如何解冻：
        </p>
        <p class="content-text">
          • 您每天登录可解冻0.2元。
        </p>
        <p class="content-text">
          • 您邀请的好友，每登陆一天，那么您账户的冻结金额当中就会有0.2元解冻。例如，小王邀请了7位好友，这7位好友在某天同时登陆了APP，那么小王就会有0.2*7=1.4元的现金解冻。
        </p>
        <p class="content-text">
          • 您可通过不断邀请好友下载注册贴近APP解冻，每邀请一位好友解冻1元。例如，小王在注册当天即邀请了10位好友，那么小王会获得46元现金，原本小王账户中会有10元的余额和36元的冻结金额，但是因为邀请了10位好友注册APP解冻了10元，小王的可提现余额变成了20元，当天即可提现。
        </p>
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      back(){
        this.$router.push({name:"pullNew"})
      }
    }
  }
</script>

<style lang="less" scoped>
  .rule {
    background: url("../assets/images/bg.png") no-repeat center;
    background-size: cover;
    height: 2776pr;
    padding-top: 76pr;
    .back {
      margin-left: 40pr;
      color: #ffffff;
      width: 120pr;
      .arrow:after {
        content: '';
        display: inline-block;
        width: 24pr;
        height: 24pr;
        border-top: 3pr solid #ffffff;
        border-right: 3pr solid #ffffff;
        transform: rotate(225deg);
        -webkit-transform: rotate(225deg);
      }
    }
    .rule-title {
      margin: 58pr 60pr 77pr 60pr;
      height: 1px;
      border-top: 1px solid #FCF2EE;
      text-align: center;
      font-size: 36pr;
      color: #FCF2EE;
      .rule-text {
        background-color: #025182;
        position: relative;
        color: #FCF2EE;
        top: -24pr;
        width: 432pr;
        height: 50pr;
        padding: 0 20pr;
        margin: 0 40pr 0 40pr;
      }
    }
    .rule-content {
      background: #025182;
      padding-bottom: 54pr;
      position: relative;
      .left-top-icon {
        background: url("../assets/images/icon2.png") no-repeat center;
        background-size: cover;
        width: 44pr;
        height: 52pr;
        position: absolute;
        left: 46pr;
        top: 10pr;
      }
      .right-top-icon {
        background: url("../assets/images/icon2.png") no-repeat center;
        background-size: cover;
        position: absolute;
        width: 44pr;
        height: 52pr;
        right: 46pr;
        top: 10pr;
      }
      .left-bottom-icon {
        background: url("../assets/images/icon3.png") no-repeat center;
        background-size: cover;
        width: 44pr;
        height: 52pr;
        position: absolute;
        left: 46pr;
        bottom: 70pr;
      }
      .right-bottom-icon {
        background: url("../assets/images/icon4.png") no-repeat center;
        background-size: cover;
        width: 44pr;
        height: 52pr;
        position: absolute;
        right: 46pr;
        bottom: 70pr;
      }
      .rule-text {
        width: 710pr;
        height: 2442pr;
        margin: 52pr 17pr 17pr 21pr;
        border: 6pr solid #000000;
        background: #ffffff;
        border-radius: 10pr;
        font-size: 32pr;
        color: #222222;
        line-height: 48pr;
        padding: 60pr 42pr 0 40pr;
      }
      .content-title {
        font-size: 36pr;
        font-weight: 800;
        margin-top: 40pr;
      }
      .content-text {
        font-size: 32pr
      }
    }
  }
</style>


