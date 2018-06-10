export default {
  downloadApp(){
    let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
    if(ua.indexOf('ipad')>-1||ua.indexOf('iphone')>-1){
        location.href="https://itunes.apple.com/us/app/%E8%B4%B4%E8%BF%91/id1363128511?l=zh&ls=1&mt=8";
      }else if(ua.indexOf('android')){
        location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer";
      }
    }
}