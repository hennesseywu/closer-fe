(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"+n12":function(t,n,e){"use strict";e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i}),e.d(n,"d",function(){return c}),e.d(n,"b",function(){return s});e("SRfc"),e("KKXr");function o(t){console.log("addchance",t),location.href=t?"closer://community/9j9m4gy8sM":" https://h5.tiejin.cn/community/9j9m4gy8sM"}function i(){console.log("downloadApp");var t=navigator.userAgent||window.navigator.userAgent;t=t.toLowerCase(),t.indexOf("ipad")>-1||t.indexOf("iphone")>-1?location.href="https://itunes.apple.com/us/app/%E8%B4%B4%E8%BF%91/id1363128511?l=zh&ls=1&mt=8":t.indexOf("android")&&(location.href="https://file.tiejin.cn/public/9oczWPpBbY/app-release_101_8_sign.apk")}function c(t){console.log(1212121);var n=t/100;return n.toFixed(2)}function s(){var t=window.location.href.split("-");if(!t)return null;var n=t.length;return t[n-1]}},"5pOR":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"share-box"},[e("div",{staticClass:"content"},[e("div",{staticClass:"text"},[t._v("你的好友正在参与竞猜")]),e("div",{staticClass:"text-yellow"},[t._v("截图分享600万")]),e("div",{staticClass:"code-img"}),e("div",{staticClass:"btn-img",on:{click:t.goHome}}),e("div",{staticClass:"text-img"},[t._v("“每天分钱 闷起脑壳发财”")])])])]),t.isApp?t._e():e("Getapp",{ref:"getapp"}),e("Sharepop",{ref:"sharepop",attrs:{isApp:t.isApp}})],1)},i=[],c=e("yT7P"),s=e("L2JU"),r=e("dqDD"),a=e("RGCu"),l=e("Qaqr"),u={name:"share",components:{Getapp:a["a"],Sharepop:l["a"],Toast:r["Toast"]},data:function(){return{isApp:!1}},computed:{},created:function(){this.isApp=this.$store.state.IS_APP,this.isApp},methods:Object(c["a"])({},Object(s["b"])("index",["getUserById"]),{goHome:function(){console.log("go"),this.$router.push({name:"worldcupIndex"})}})},p=u,d=(e("xcpw"),e("KHd+")),f=Object(d["a"])(p,o,i,!1,null,"131b20be",null);n["default"]=f.exports},"IU+Z":function(t,n,e){"use strict";var o=e("Mukb"),i=e("KroJ"),c=e("eeVq"),s=e("vhPU"),r=e("K0xU");t.exports=function(t,n,e){var a=r(t),l=e(s,a,""[t]),u=l[0],p=l[1];c(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,u),o(RegExp.prototype,a,2==n?function(t,n){return p.call(t,this,n)}:function(t){return p.call(t,this)}))}},KKXr:function(t,n,e){e("IU+Z")("split",2,function(t,n,o){"use strict";var i=e("quPj"),c=o,s=[].push,r="split",a="length",l="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[a]||2!="ab"[r](/(?:ab)*/)[a]||4!="."[r](/(.?)(.?)/)[a]||"."[r](/()()/)[a]>1||""[r](/.?/)[a]){var u=void 0===/()??/.exec("")[1];o=function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!i(t))return c.call(e,t,n);var o,r,p,d,f,v=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),b=0,x=void 0===n?4294967295:n>>>0,m=new RegExp(t.source,h+"g");u||(o=new RegExp("^"+m.source+"$(?!\\s)",h));while(r=m.exec(e)){if(p=r.index+r[0][a],p>b&&(v.push(e.slice(b,r.index)),!u&&r[a]>1&&r[0].replace(o,function(){for(f=1;f<arguments[a]-2;f++)void 0===arguments[f]&&(r[f]=void 0)}),r[a]>1&&r.index<e[a]&&s.apply(v,r.slice(1)),d=r[0][a],b=p,v[a]>=x))break;m[l]===r.index&&m[l]++}return b===e[a]?!d&&m.test("")||v.push(""):v.push(e.slice(b)),v[a]>x?v.slice(0,x):v}}else"0"[r](void 0,0)[a]&&(o=function(t,n){return void 0===t&&0===n?[]:c.call(this,t,n)});return[function(e,i){var c=t(this),s=void 0==e?void 0:e[n];return void 0!==s?s.call(e,c,i):o.call(String(c),e,i)},o]})},MrMX:function(t,n,e){"use strict";var o=e("VqYG"),i=e.n(o);i.a},Qaqr:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("mt-popup",{staticClass:"share-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:function(n){t.close()}}}),e("div",{staticClass:"pop-body box box-tb box-center-center"}),e("div",{staticClass:"pop-footer",on:{click:t.close}})])},i=[],c=(e("f3/d"),e("Kw5r")),s=e("dqDD");c["default"].component(s["Popup"].name,s["Popup"]);var r={name:"pop",components:{},props:{isApp:{type:Boolean,default:!0},className:String,closeOnClickModal:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},a=r,l=(e("l4ln"),e("KHd+")),u=Object(l["a"])(a,o,i,!1,null,"8b7f902c",null);n["a"]=u.exports},RGCu:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"download box box-lr",on:{click:function(n){t.download()}}},[e("div",{staticClass:"logo"}),t._m(0),e("div",{staticClass:"download-btn"},[t._v("立即下载")])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"d-text box box-tb"},[e("span",[t._v("下载「贴近」客户端")]),e("span",[t._v("机会翻倍，奖励翻倍")])])}],c=e("+n12"),s={name:"getapp",methods:{download:function(){console.log("downloadApp"),Object(c["a"])()}}},r=s,a=(e("MrMX"),e("KHd+")),l=Object(a["a"])(r,o,i,!1,null,"6e7061a4",null);n["a"]=l.exports},SRfc:function(t,n,e){e("IU+Z")("match",1,function(t,n,e){return[function(e){"use strict";var o=t(this),i=void 0==e?void 0:e[n];return void 0!==i?i.call(e,o):new RegExp(e)[n](String(o))},e]})},VqYG:function(t,n,e){},aeaF:function(t,n,e){},jXDC:function(t,n,e){},l4ln:function(t,n,e){"use strict";var o=e("jXDC"),i=e.n(o);i.a},quPj:function(t,n,e){var o=e("0/R4"),i=e("LZWt"),c=e("K0xU")("match");t.exports=function(t){var n;return o(t)&&(void 0!==(n=t[c])?!!n:"RegExp"==i(t))}},vhPU:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},xcpw:function(t,n,e){"use strict";var o=e("aeaF"),i=e.n(o);i.a},yT7P:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var o=e("oyJW");function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){Object(o["a"])(t,n,e[n])})}return t}}}]);
//# sourceMappingURL=1.87773709.js.map