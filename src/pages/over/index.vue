<template>
  <div class="activity-over">
    <img class="over-img" @click="activityOver()" src="./assets/activity_over.png">
    <p class="over-content">哦~网页已经过期啦</p>
    <p class="over-desc">"看看别的内容吧"</p>
  </div>
</template>

<script>
  export default {
    name: "index",
    methods: {
      activityOver() {
        console.log("over")
        if (this.$store.state.IS_APP) {
          location.href = 'closer://jump/to/home'
        } else {
          if (typeof(WeixinJSBridge) != "undefined") {
            WeixinJSBridge.call('closeWindow');
          } else {
            if (navigator.userAgent.indexOf("MSIE") > 0) {
              if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                window.opener = null;
                window.close();
              } else {
                window.open('', '_top');
                window.top.close();
              }
            } else if (navigator.userAgent.indexOf("Firefox") > 0) {
              window.location.href = 'about:blank ';
              //window.history.go(-2);  
            } else {
              window.opener = null;
              window.open('', '_self', '');
              window.close();
            }
          }
  
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .activity-over {
    width: 100%;
    height: 100%;
    text-align: center;
    .over-img {
      margin: 344pr 208pr 48pr 166pr;
      width: 376pr;
      height: 288pr;
    }
    .over-content {
      color: #4B4945;
      font-size: 36pr
    }
    .over-desc {
      color: #A4A3A1;
      font-size: 24pr
    }
  }
</style>

