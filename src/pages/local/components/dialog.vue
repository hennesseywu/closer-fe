<template>
  <section class="dialog"
    :class="{active: show}">
    <div class="dlg-wrap animated bounceIn faster">
      <div class="dlg-close" @click="handleClose()"></div>
      <div class="dlg-img"></div>
      <div class="dlg-desc" v-html="content"></div>
      <div class="dlg-btn" @click="handleClick()">{{share ? '去分享' : '确定'}}</div>
    </div>
  </section>
</template>

<script>

  import { mapState } from 'vuex';
  export default {
    name: 'localDialog',
    props:{
      show: Boolean,
      share: Boolean,
      content: String,
      path:String
    },
    computed: {
      ...mapState(['IS_APP'])
    },
    methods:{
      handleClose() {
        this.$emit('close');
      },
      handleClick() {
        if (this.share) {
          if (this.IS_APP) {
            // 端内跳分享页
            this.$router.push({
              name: 'localShare'
            })
          } else  {
           location.href = `/static/share.html?path=${this.path}`
          }
        } else {
          this.handleClose();
        }
      }
    }
  };
</script>


<style lang="less" scoped>

  @import '../assets/style/animation.less';
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    display: none;
    &.active {
      display: block;
    }
    .dlg-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 630pr;
      height: 618pr;
      margin-top: -309pr;
      margin-left: -315pr;
      background: #fff;
      border-radius: 24pr;
    }
    .dlg-close {
      position: absolute;
      top: 20pr;
      right: 20pr;
      width: 60pr;
      height: 68pr;
      background: url(../assets/images/close.png) center no-repeat;
      background-size: 60pr 68pr;
    }
    .dlg-img {
      position: absolute;
      top: 96pr;
      left: 50%;
      width: 148pr;
      height: 148pr;
      margin-left: -74pr;
      background: url(../assets/images/dialog_sad.png) center no-repeat;
      background-size: 148pr;
    }
    .dlg-desc {
      position: absolute;
      top: 282pr;
      left: 54pr;
      width: 510pr;
      min-height: 120pr;
      line-height: 64pr;
      text-align: center;
      font-size: 32pr;
      color: #333;
    }
    .dlg-btn {
      position: absolute;
      bottom: 62pr;
      left: 166pr;
      width: 300pr;
      height: 94pr;
      font-size: 32pr;
      font-weight: bold;
      line-height: 90pr;
      text-align: center;
      background: url(../assets/images/dialog_btn_share.png) center no-repeat;
      background-size: 300pr 94pr;
      color: #333;
    }
  }
</style>
