import Vue from 'vue'
import App from './App'
// import './reset.css'
import './assets/style/reset.less'
import './common.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import axio from './utils/axio'
import Cookies from 'js-cookie';

// vconsole 调试
// import Vconsole from 'vconsole'
// var vconsole = new Vconsole()

window.axios = axio;
window.Cookies = Cookies;

window.setupWebViewJavascriptBridge = function(callback) {
        // console.log(ca llback)
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
    // Vue.use(VueAxios, axios);


Vue.config.productionTip = false

Vue.use(MintUI)

// 运行时动态设置
pageResize()
window.onresize = pageResize;




function pageResize() {
    let fontSize = Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 375 * 16
    document.documentElement.style.fontSize = (fontSize >= 32 ? 32 : fontSize) + 'px'
}


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')