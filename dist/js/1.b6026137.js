(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+n12":function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return c});n("SRfc"),n("KKXr");function o(t){console.log("addchance",t),location.href=t?"closer://community/9j9m4gy8sM":"https://h5.tiejin.cn/community/9j9m4gy8sM"}function i(){console.log("downloadApp"),location.href="http://web-sandbox.tiejin.cn/down?downurl=closer://jump/to/home"}function s(t){var e=t/100;return e.toFixed(2)}function c(){var t=window.location.href.split("-");if(!t)return null;var e=t.length;return t[e-1]}},"42zx":function(t,e,n){},"5pOR":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"share-box"},[n("div",{staticClass:"content"},[n("div",{staticClass:"text"},[t._v("你的好友正在参与竞猜")]),n("div",{staticClass:"text-yellow"},[t._v("截图分享600万")]),n("div",{staticClass:"code-img"}),n("div",{staticClass:"btn-img",on:{click:t.goHome}}),n("div",{staticClass:"text-img"},[t._v("“每天分钱 闷起脑壳发财”")])])])]),t.isApp?t._e():n("Getapp",{ref:"getapp"}),n("Sharepop",{ref:"sharepop",attrs:{isApp:t.isApp}})],1)},i=[],s=n("yT7P"),c=n("L2JU"),r=n("dqDD"),a=n("RGCu"),l=n("Qaqr"),u={name:"share",components:{Getapp:a["a"],Sharepop:l["a"],Toast:r["Toast"]},data:function(){return{isApp:!1}},computed:{},created:function(){this.isApp=this.$store.state.IS_APP,this.isApp},methods:Object(s["a"])({},Object(c["b"])("index",["getUserById"]),{goHome:function(){console.log("go"),this.$router.push({name:"worldcupIndex"})}})},d=u,p=(n("ehg5"),n("KHd+")),f=Object(p["a"])(d,o,i,!1,null,"00ac54de",null);e["default"]=f.exports},DDEn:function(t,e,n){},"IU+Z":function(t,e,n){"use strict";var o=n("Mukb"),i=n("KroJ"),s=n("eeVq"),c=n("vhPU"),r=n("K0xU");t.exports=function(t,e,n){var a=r(t),l=n(c,a,""[t]),u=l[0],d=l[1];s(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,u),o(RegExp.prototype,a,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},KKXr:function(t,e,n){n("IU+Z")("split",2,function(t,e,o){"use strict";var i=n("quPj"),s=o,c=[].push,r="split",a="length",l="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[a]||2!="ab"[r](/(?:ab)*/)[a]||4!="."[r](/(.?)(.?)/)[a]||"."[r](/()()/)[a]>1||""[r](/.?/)[a]){var u=void 0===/()??/.exec("")[1];o=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return s.call(n,t,e);var o,r,d,p,f,v=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,m=void 0===e?4294967295:e>>>0,x=new RegExp(t.source,h+"g");u||(o=new RegExp("^"+x.source+"$(?!\\s)",h));while(r=x.exec(n)){if(d=r.index+r[0][a],d>b&&(v.push(n.slice(b,r.index)),!u&&r[a]>1&&r[0].replace(o,function(){for(f=1;f<arguments[a]-2;f++)void 0===arguments[f]&&(r[f]=void 0)}),r[a]>1&&r.index<n[a]&&c.apply(v,r.slice(1)),p=r[0][a],b=d,v[a]>=m))break;x[l]===r.index&&x[l]++}return b===n[a]?!p&&x.test("")||v.push(""):v.push(n.slice(b)),v[a]>m?v.slice(0,m):v}}else"0"[r](void 0,0)[a]&&(o=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(n,i){var s=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,s,i):o.call(String(s),n,i)},o]})},Kt3F:function(t,e,n){"use strict";var o=n("DDEn"),i=n.n(o);i.a},LHii:function(t,e,n){},Qaqr:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-popup",{staticClass:"share-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"close-icon",on:{click:function(e){t.close()}}}),n("div",{staticClass:"pop-body box box-tb box-center-center"}),n("div",{staticClass:"pop-footer",on:{click:t.close}})])},i=[],s=(n("f3/d"),n("VRzm"),n("Kw5r")),c=n("dqDD");s["default"].component(c["Popup"].name,c["Popup"]);var r={name:"pop",components:{},props:{isApp:{type:Boolean,default:!0},className:String,closeOnClickModal:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},a=r,l=(n("Rxdm"),n("KHd+")),u=Object(l["a"])(a,o,i,!1,null,"2390037b",null);e["a"]=u.exports},RGCu:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download box box-lr",on:{click:function(e){t.download()}}},[n("div",{staticClass:"logo"}),t._m(0),n("div",{staticClass:"download-btn"},[t._v("立即下载")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-text box box-tb"},[n("span",[t._v("下载「贴近」客户端")]),n("span",[t._v("机会翻倍，奖励翻倍")])])}],s=(n("pIFo"),n("yT7P")),c=n("+n12"),r=n("L2JU"),a={name:"getapp",methods:Object(s["a"])({},Object(r["b"])("index",["getAdCookies"]),{download:function(){if(console.log("channel_cdoe",this.$store.state.CHANNEL_CODE),"0"!=this.$store.state.CHANNEL_CODE){var t=new MobileDetect(this.$store.state.UA),e=t.os(),n="";"iOS"==e?(e="ios",n=t.versionStr("iPhone")):"AndroidOS"==e&&(e="android",n=t.versionStr("Android"),console.log("deviceVersion",n),n=n.replace(/\./g,"_")),console.log(e,"----",n),this.getAdCookies({adid:this.$store.state.CHANNEL_CODE,webUdid:!0,deviceType:e,deviceVersion:n})}Object(c["a"])()}})},l=a,u=(n("Kt3F"),n("KHd+")),d=Object(u["a"])(l,o,i,!1,null,"1c8fee0a",null);e["a"]=d.exports},Rxdm:function(t,e,n){"use strict";var o=n("LHii"),i=n.n(o);i.a},SRfc:function(t,e,n){n("IU+Z")("match",1,function(t,e,n){return[function(n){"use strict";var o=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,o):new RegExp(n)[e](String(o))},n]})},ehg5:function(t,e,n){"use strict";var o=n("42zx"),i=n.n(o);i.a},pIFo:function(t,e,n){n("IU+Z")("replace",2,function(t,e,n){return[function(o,i){"use strict";var s=t(this),c=void 0==o?void 0:o[e];return void 0!==c?c.call(o,s,i):n.call(String(s),o,i)},n]})},quPj:function(t,e,n){var o=n("0/R4"),i=n("LZWt"),s=n("K0xU")("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},vhPU:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},yT7P:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("oyJW");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){Object(o["a"])(t,e,n[e])})}return t}}}]);
//# sourceMappingURL=1.b6026137.js.map