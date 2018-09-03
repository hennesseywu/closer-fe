import Vue from 'vue'
import App from './App'
// import './reset.css'
import './assets/style/reset.less'
import './pages/teabar/assets/style/common.css'
import './assets/style/common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import axio from './utils/axio'
import Cookies from 'js-cookie';
import Vconsole from 'vconsole';
import MobileDetect from 'mobile-detect';
import wx from 'weixin-js-sdk';
import {isApp, isWechat, compareVersion} from './utils/utils';


if (/sandbox.tiejin/.test(window.location.href) || /127.0.0.1/.test(window.location.href)) {
  const vconsole = new Vconsole()
  store.state.IS_DEV = true;
  Cookies.set("IS_DEV", true, {
    expires: 1
  });

  // if (/local.tiejin.cn/.test(window.location.href)) {
  //   Cookies.set("GroukAuth", '1.a35f4f962297c68519b7ece0243a162d9091571d7d37df63d2833ea30d7a711cd722492c834580c8500e224a273f94dc', {
  //     expires: 1
  //   });
  // }
}

window.wx = wx;
window.axios = axio;
window.Cookies = Cookies;
window.MobileDetect = MobileDetect;


window.setupWebViewJavascriptBridge = function(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

Vue.config.productionTip = false
Vue.use(MintUI)

initState();
// 运行时动态设置
pageResize()
window.onresize = pageResize;

function pageResize() {
  let fontSize = Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 375 * 16
  document.documentElement.style.fontSize = (fontSize >= 32 ? 32 : fontSize) + 'px'
}

function initState() {
  let ua = (navigator.userAgent || window.navigator.userAgent).toLowerCase();
  store.state.V_1_2_3 = compareVersion(ua, '1.2.3', '1.2.2');
  store.state.UA = ua;
  store.state.IS_APP = isApp();
  store.state.IS_WX = isWechat();
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')