(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"+n12":function(t,n,e){"use strict";e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"d",function(){return r}),e.d(n,"b",function(){return c});e("SRfc"),e("KKXr"),e("VRzm");function i(t){location.href=t?"closer://community/9j9m4gy8sM":"https://h5.tiejin.cn/community/9j9m4gy8sM"}function o(){location.href="http://tiejin.cn/down?downurl=closer://jump"}function r(t){var n=t/100;return n.toFixed(2)}function c(){var t=window.location.href.split("-");if(!t)return null;var n=t.length;return t[n-1]}},"8V8G":function(t,n,e){},"IU+Z":function(t,n,e){"use strict";var i=e("Mukb"),o=e("KroJ"),r=e("eeVq"),c=e("vhPU"),s=e("K0xU");t.exports=function(t,n,e){var u=s(t),a=e(c,u,""[t]),l=a[0],d=a[1];r(function(){var n={};return n[u]=function(){return 7},7!=""[t](n)})&&(o(String.prototype,t,l),i(RegExp.prototype,u,2==n?function(t,n){return d.call(t,this,n)}:function(t){return d.call(t,this)}))}},KKXr:function(t,n,e){e("IU+Z")("split",2,function(t,n,i){"use strict";var o=e("quPj"),r=i,c=[].push,s="split",u="length",a="lastIndex";if("c"=="abbc"[s](/(b)*/)[1]||4!="test"[s](/(?:)/,-1)[u]||2!="ab"[s](/(?:ab)*/)[u]||4!="."[s](/(.?)(.?)/)[u]||"."[s](/()()/)[u]>1||""[s](/.?/)[u]){var l=void 0===/()??/.exec("")[1];i=function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!o(t))return r.call(e,t,n);var i,s,d,f,v,p=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=void 0===n?4294967295:n>>>0,x=new RegExp(t.source,b+"g");l||(i=new RegExp("^"+x.source+"$(?!\\s)",b));while(s=x.exec(e)){if(d=s.index+s[0][u],d>h&&(p.push(e.slice(h,s.index)),!l&&s[u]>1&&s[0].replace(i,function(){for(v=1;v<arguments[u]-2;v++)void 0===arguments[v]&&(s[v]=void 0)}),s[u]>1&&s.index<e[u]&&c.apply(p,s.slice(1)),f=s[0][u],h=d,p[u]>=m))break;x[a]===s.index&&x[a]++}return h===e[u]?!f&&x.test("")||p.push(""):p.push(e.slice(h)),p[u]>m?p.slice(0,m):p}}else"0"[s](void 0,0)[u]&&(i=function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)});return[function(e,o){var r=t(this),c=void 0==e?void 0:e[n];return void 0!==c?c.call(e,r,o):i.call(String(r),e,o)},i]})},Qaqr:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mt-popup",{staticClass:"share-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:function(n){t.close()}}}),e("div",{staticClass:"pop-body box box-tb box-center-center",class:t.isDev?"env-dev":"env-online"}),e("div",{staticClass:"pop-footer",on:{click:t.close}})])},o=[],r=(e("f3/d"),e("VRzm"),e("Kw5r")),c=e("dqDD");r["default"].component(c["Popup"].name,c["Popup"]);var s={name:"pop",components:{},props:{isApp:{type:Boolean,default:!0},className:String,closeOnClickModal:{type:Boolean,default:!0},isDev:Boolean},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},u=s,a=(e("n3bD"),e("KHd+")),l=Object(a["a"])(u,i,o,!1,null,"991bcf90",null);n["a"]=l.exports},RGCu:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"download box box-lr",on:{click:function(n){t.download()}}},[e("div",{staticClass:"logo"}),t._m(0),e("div",{staticClass:"download-btn"},[t._v("立即下载")])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"d-text box box-tb"},[e("span",[t._v("下载「贴近」客户端")]),e("span",[t._v("机会翻倍，奖励翻倍")])])}],r=(e("pIFo"),e("yT7P")),c=e("+n12"),s=e("L2JU"),u={name:"getapp",methods:Object(r["a"])({},Object(s["b"])("index",["getAdCookies"]),{download:function(){if("0"!=this.$store.state.CHANNEL_CODE){var t=new MobileDetect(this.$store.state.UA),n=t.os(),e="";"iOS"==n?(n="ios",e=t.versionStr("iPhone")):"AndroidOS"==n&&(n="android",e=t.versionStr("Android"),e=e.replace(/\./g,"_")),this.getAdCookies({adid:this.$store.state.CHANNEL_CODE,webUdid:!0,deviceType:n,deviceVersion:e}),setTimeout(function(){Object(c["a"])()},500)}else Object(c["a"])()}})},a=u,l=(e("ulWU"),e("KHd+")),d=Object(l["a"])(a,i,o,!1,null,"84117414",null);n["a"]=d.exports},SRfc:function(t,n,e){e("IU+Z")("match",1,function(t,n,e){return[function(e){"use strict";var i=t(this),o=void 0==e?void 0:e[n];return void 0!==o?o.call(e,i):new RegExp(e)[n](String(i))},e]})},aoAJ:function(t,n,e){},n3bD:function(t,n,e){"use strict";var i=e("aoAJ"),o=e.n(i);o.a},pIFo:function(t,n,e){e("IU+Z")("replace",2,function(t,n,e){return[function(i,o){"use strict";var r=t(this),c=void 0==i?void 0:i[n];return void 0!==c?c.call(i,r,o):e.call(String(r),i,o)},e]})},quPj:function(t,n,e){var i=e("0/R4"),o=e("LZWt"),r=e("K0xU")("match");t.exports=function(t){var n;return i(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==o(t))}},ulWU:function(t,n,e){"use strict";var i=e("8V8G"),o=e.n(i);o.a},vhPU:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},yT7P:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var i=e("oyJW");function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Object(i["a"])(t,n,e[n])})}return t}}}]);
//# sourceMappingURL=0.c9de59dd.js.map