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
      <div class="commen-width local1-img animated bounceInDown">
        <div class="logo animated shake"></div>
      </div>
      <div class="local-desc localText">
        同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO
      </div>
    </div>
    <div class="content3">
      <div class="btn-commen go-answer">再次答题</div>
      <div class="chance-remain">剩余999次答题机会</div>
      <div class="btn-commen get-cash animated zoomIn ">{{btnText}}</div>
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
  @import '../assets/style/animation.less';
  @import '../assets/style/result.less';
</style>
