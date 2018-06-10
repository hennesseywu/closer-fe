<template>
  <div class="download box box-lr" @click="downloadApp()">
        <div class="logo"></div>
        <div class="d-text box box-tb">
          <span>下载「贴近」客户端</span>
          <span>机会翻倍，奖励翻倍</span>
        </div>
        <div class="download-btn">立即下载</div>
      </div>
</template>
<script>
export default {
  name: "getapp",
  methods:{
    downloadApp(){
    let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
    if(ua.indexOf('ipad')>-1||ua.indexOf('iphone')>-1){
        location.href="https://itunes.apple.com/us/app/%E8%B4%B4%E8%BF%91/id1363128511?l=zh&ls=1&mt=8";
      }else if(ua.indexOf('android')){
        location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer";
      }
    }
  }
};
</script>


<style lang="less" scoped>
.download {
        position: fixed;
        top: 90.5%;
        width: 100%;
        height: 126pr;
        background: url('../assets/images/down_bg.png') no-repeat center;
        background-size: cover;
        .logo {
          width: 84pr;
          height: 84pr;
          background: url('../assets/images/logo.png') no-repeat center;
          background-size: cover;
          margin: 18pr 22pr 24pr 48pr;
        }
        .d-text {
          color: #fff;
          >span:first-child {
            font-size: 28pr;
            height: 40pr;
            line-height: 40pr;
            margin-top: 26pr;
          }
          >span:last-child {
            font-size: 20pr;
            height: 28pr;
            line-height: 28pr;
          }
        }
        .download-btn {
          margin: 26pr 40pr 31pr auto;
          padding: 15pr 32pr;
          font-size: 28pr;
          color: rgba(75, 73, 69, 1);
          background: rgba(253, 219, 0, 1);
          border-radius: 12pr;
        }
      }
</style>
