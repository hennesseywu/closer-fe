import Vue from 'vue'
import App from './App'
// import './reset.css'
import './assets/style/reset.less'
import './pages/teabar/assets/style/common.css'
import './common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import axio from './utils/axio'
import Cookies from 'js-cookie';
import Vconsole from 'vconsole';
import MobileDetect from 'mobile-detect';
import wx from 'weixin-js-sdk';
import {isApp, isWechat} from './utils/utils';

if (/sandbox.tiejin/.test(window.location.href) || /127.0.0.1/.test(window.location.href) || /local.tiejin.cn/.test(window.location.href)) {
  const vconsole = new Vconsole()
  store.state.IS_DEV = true
  Cookies.set("IS_DEV", true, {
    expires: 1
  });
}

window.wx = wx;
window.axios = axio;
window.Cookies = Cookies;
window.MobileDetect = MobileDetect;

Cookies.set("GroukAuth", "1.b1cbc66315166758761c20c19940c1dcdd3b0d8445a867604945f363ee2445b3b51375a5e79fe96f5075355ee0a8a2a31e32c8e9f4224cd20ee31a728112e574", { expires: 30 })


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

checkUA();
// 运行时动态设置
pageResize()
window.onresize = pageResize;

function pageResize() {
  let fontSize = Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 375 * 16
  document.documentElement.style.fontSize = (fontSize >= 32 ? 32 : fontSize) + 'px'
}

function checkUA() {
  let ua = (navigator.userAgent || window.navigator.userAgent).toLowerCase();
  store.state.UA = ua;
  store.state.IS_APP = isApp();
  store.state.IS_WX = isWechat();
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')