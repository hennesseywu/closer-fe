(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{LOby:function(t,e,s){"use strict";var i=s("jg29"),r=s.n(i);r.a},OHX4:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(e){t.handleBack()}}}),s("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(e){t.handleClose()}}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(e){t.handleShare()}}})])])},r=[],n=s("yT7P"),a=s("L2JU"),o={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(n["a"])({},Object(a["d"])(["UA"])),methods:{handleBack:function(){this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},c=o,h=(s("LOby"),s("KHd+")),u=Object(h["a"])(c,i,r,!1,null,null,null);e["a"]=u.exports},PDX0:function(t,e){(function(e){t.exports=e}).call(this,{})},eKgb:function(t,e,s){},gjeX:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("PDX0"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var s=OUTPUT_TYPES[e];t[s]=createOutputMethod(s)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,s=typeof t;if("string"!==s){if("object"!==s)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var i,r,n=0,a=t.length,o=this.blocks,c=this.buffer8;while(n<a){if(this.hashed&&(this.hashed=!1,o[0]=o[16],o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),e)if(ARRAY_BUFFER)for(r=this.start;n<a&&r<64;++n)c[r++]=t[n];else for(r=this.start;n<a&&r<64;++n)o[r>>2]|=t[n]<<SHIFT[3&r++];else if(ARRAY_BUFFER)for(r=this.start;n<a&&r<64;++n)i=t.charCodeAt(n),i<128?c[r++]=i:i<2048?(c[r++]=192|i>>6,c[r++]=128|63&i):i<55296||i>=57344?(c[r++]=224|i>>12,c[r++]=128|i>>6&63,c[r++]=128|63&i):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++n)),c[r++]=240|i>>18,c[r++]=128|i>>12&63,c[r++]=128|i>>6&63,c[r++]=128|63&i);else for(r=this.start;n<a&&r<64;++n)i=t.charCodeAt(n),i<128?o[r>>2]|=i<<SHIFT[3&r++]:i<2048?(o[r>>2]|=(192|i>>6)<<SHIFT[3&r++],o[r>>2]|=(128|63&i)<<SHIFT[3&r++]):i<55296||i>=57344?(o[r>>2]|=(224|i>>12)<<SHIFT[3&r++],o[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],o[r>>2]|=(128|63&i)<<SHIFT[3&r++]):(i=65536+((1023&i)<<10|1023&t.charCodeAt(++n)),o[r>>2]|=(240|i>>18)<<SHIFT[3&r++],o[r>>2]|=(128|i>>12&63)<<SHIFT[3&r++],o[r>>2]|=(128|i>>6&63)<<SHIFT[3&r++],o[r>>2]|=(128|63&i)<<SHIFT[3&r++]);this.lastByteIndex=r,this.bytes+=r-this.start,r>=64?(this.start=r-64,this.hash(),this.hashed=!0):this.start=r}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,s,i,r,n,a=this.blocks;this.first?(t=a[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,i=(-1732584194^2004318071&t)+a[1]-117830708,i=(i<<12|i>>>20)+t<<0,s=(-271733879^i&(-271733879^t))+a[2]-1126478375,s=(s<<17|s>>>15)+i<<0,e=(t^s&(i^t))+a[3]-1316259209,e=(e<<22|e>>>10)+s<<0):(t=this.h0,e=this.h1,s=this.h2,i=this.h3,t+=(i^e&(s^i))+a[0]-680876936,t=(t<<7|t>>>25)+e<<0,i+=(s^t&(e^s))+a[1]-389564586,i=(i<<12|i>>>20)+t<<0,s+=(e^i&(t^e))+a[2]+606105819,s=(s<<17|s>>>15)+i<<0,e+=(t^s&(i^t))+a[3]-1044525330,e=(e<<22|e>>>10)+s<<0),t+=(i^e&(s^i))+a[4]-176418897,t=(t<<7|t>>>25)+e<<0,i+=(s^t&(e^s))+a[5]+1200080426,i=(i<<12|i>>>20)+t<<0,s+=(e^i&(t^e))+a[6]-1473231341,s=(s<<17|s>>>15)+i<<0,e+=(t^s&(i^t))+a[7]-45705983,e=(e<<22|e>>>10)+s<<0,t+=(i^e&(s^i))+a[8]+1770035416,t=(t<<7|t>>>25)+e<<0,i+=(s^t&(e^s))+a[9]-1958414417,i=(i<<12|i>>>20)+t<<0,s+=(e^i&(t^e))+a[10]-42063,s=(s<<17|s>>>15)+i<<0,e+=(t^s&(i^t))+a[11]-1990404162,e=(e<<22|e>>>10)+s<<0,t+=(i^e&(s^i))+a[12]+1804603682,t=(t<<7|t>>>25)+e<<0,i+=(s^t&(e^s))+a[13]-40341101,i=(i<<12|i>>>20)+t<<0,s+=(e^i&(t^e))+a[14]-1502002290,s=(s<<17|s>>>15)+i<<0,e+=(t^s&(i^t))+a[15]+1236535329,e=(e<<22|e>>>10)+s<<0,t+=(s^i&(e^s))+a[1]-165796510,t=(t<<5|t>>>27)+e<<0,i+=(e^s&(t^e))+a[6]-1069501632,i=(i<<9|i>>>23)+t<<0,s+=(t^e&(i^t))+a[11]+643717713,s=(s<<14|s>>>18)+i<<0,e+=(i^t&(s^i))+a[0]-373897302,e=(e<<20|e>>>12)+s<<0,t+=(s^i&(e^s))+a[5]-701558691,t=(t<<5|t>>>27)+e<<0,i+=(e^s&(t^e))+a[10]+38016083,i=(i<<9|i>>>23)+t<<0,s+=(t^e&(i^t))+a[15]-660478335,s=(s<<14|s>>>18)+i<<0,e+=(i^t&(s^i))+a[4]-405537848,e=(e<<20|e>>>12)+s<<0,t+=(s^i&(e^s))+a[9]+568446438,t=(t<<5|t>>>27)+e<<0,i+=(e^s&(t^e))+a[14]-1019803690,i=(i<<9|i>>>23)+t<<0,s+=(t^e&(i^t))+a[3]-187363961,s=(s<<14|s>>>18)+i<<0,e+=(i^t&(s^i))+a[8]+1163531501,e=(e<<20|e>>>12)+s<<0,t+=(s^i&(e^s))+a[13]-1444681467,t=(t<<5|t>>>27)+e<<0,i+=(e^s&(t^e))+a[2]-51403784,i=(i<<9|i>>>23)+t<<0,s+=(t^e&(i^t))+a[7]+1735328473,s=(s<<14|s>>>18)+i<<0,e+=(i^t&(s^i))+a[12]-1926607734,e=(e<<20|e>>>12)+s<<0,r=e^s,t+=(r^i)+a[5]-378558,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[8]-2022574463,i=(i<<11|i>>>21)+t<<0,n=i^t,s+=(n^e)+a[11]+1839030562,s=(s<<16|s>>>16)+i<<0,e+=(n^s)+a[14]-35309556,e=(e<<23|e>>>9)+s<<0,r=e^s,t+=(r^i)+a[1]-1530992060,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[4]+1272893353,i=(i<<11|i>>>21)+t<<0,n=i^t,s+=(n^e)+a[7]-155497632,s=(s<<16|s>>>16)+i<<0,e+=(n^s)+a[10]-1094730640,e=(e<<23|e>>>9)+s<<0,r=e^s,t+=(r^i)+a[13]+681279174,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[0]-358537222,i=(i<<11|i>>>21)+t<<0,n=i^t,s+=(n^e)+a[3]-722521979,s=(s<<16|s>>>16)+i<<0,e+=(n^s)+a[6]+76029189,e=(e<<23|e>>>9)+s<<0,r=e^s,t+=(r^i)+a[9]-640364487,t=(t<<4|t>>>28)+e<<0,i+=(r^t)+a[12]-421815835,i=(i<<11|i>>>21)+t<<0,n=i^t,s+=(n^e)+a[15]+530742520,s=(s<<16|s>>>16)+i<<0,e+=(n^s)+a[2]-995338651,e=(e<<23|e>>>9)+s<<0,t+=(s^(e|~i))+a[0]-198630844,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~s))+a[7]+1126891415,i=(i<<10|i>>>22)+t<<0,s+=(t^(i|~e))+a[14]-1416354905,s=(s<<15|s>>>17)+i<<0,e+=(i^(s|~t))+a[5]-57434055,e=(e<<21|e>>>11)+s<<0,t+=(s^(e|~i))+a[12]+1700485571,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~s))+a[3]-1894986606,i=(i<<10|i>>>22)+t<<0,s+=(t^(i|~e))+a[10]-1051523,s=(s<<15|s>>>17)+i<<0,e+=(i^(s|~t))+a[1]-2054922799,e=(e<<21|e>>>11)+s<<0,t+=(s^(e|~i))+a[8]+1873313359,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~s))+a[15]-30611744,i=(i<<10|i>>>22)+t<<0,s+=(t^(i|~e))+a[6]-1560198380,s=(s<<15|s>>>17)+i<<0,e+=(i^(s|~t))+a[13]+1309151649,e=(e<<21|e>>>11)+s<<0,t+=(s^(e|~i))+a[4]-145523070,t=(t<<6|t>>>26)+e<<0,i+=(e^(t|~s))+a[11]-1120210379,i=(i<<10|i>>>22)+t<<0,s+=(t^(i|~e))+a[2]+718787259,s=(s<<15|s>>>17)+i<<0,e+=(i^(s|~t))+a[9]-343485551,e=(e<<21|e>>>11)+s<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=s-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+s<<0,this.h3=this.h3+i<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,i=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,s=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,s,i="",r=this.array(),n=0;n<15;)t=r[n++],e=r[n++],s=r[n++],i+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|s>>>6)]+BASE64_ENCODE_CHAR[63&s];return t=r[n],i+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",i};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("Q2Ig"),__webpack_require__("yLpj"))},jg29:function(t,e,s){},po5H:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main local-answer"},[t.startData&&t.startData.length>0?s("div",{staticClass:"answer-wrapper"},[t.IS_APP?s("local-header",{attrs:{back:"",close:""}}):t._e(),s("div",{staticClass:"hd-img"}),s("div",{staticClass:"answer-box"},[s("div",{staticClass:"answer-acount"},[t._v(t._s(t.currentQuesitionNum+1)+"/8")]),s("div",{staticClass:"subject",class:t.isUpdate?"animated slideInUp":""},[t._v(t._s(t.startData[t.currentQuesitionNum].title))]),t._l(t.startData[t.currentQuesitionNum].answers,function(e,i){return s("div",{key:i,staticClass:"optoins",class:t.isUpdate?"animated slideInUp":""},[s("div",{staticClass:"list",class:i===t.checkNum?"bg-yellow":"",attrs:{"data-index":i,"data-seq":e.seq,"data-questionId":e.questionId},on:{click:function(e){t.checkOptions(e)}}},[t._v(t._s(e.title))])])})],2),s("div",{staticClass:"next-box",class:t.isUpdate?"animated slideInUp":""},[t.currentQuesitionNum<7?s("div",{class:t.isCheck?"checked":"next-btn",on:{click:function(e){t.next(t.startResult.userAnswerId)}}}):t._e(),7==t.currentQuesitionNum?s("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(e){t.next(t.startResult.userAnswerId)}}},[t._v("完成答题")]):t._e()])],1):t._e()])},r=[],n=s("yT7P"),a=(s("VRzm"),s("dqDD")),o=s("L2JU"),c=s("gjeX"),h=s.n(c),u=(s("+n12"),s("OHX4")),f={data:function(){return{isApp:this.$store.state.IS_APP,checkNum:"",isCheck:!1,options:{},checkArr:[],answers:[],isUpdate:!1,questionNum:0}},components:{localHeader:u["a"]},created:function(){this.statistic&&this.startTest(),this.IS_WX&&(console.log("answer wxshare--"),this.initWxConfig())},mounted:function(){this.isUpdate=!0,this.updateChance()},computed:Object(n["a"])({},Object(o["d"])(["IS_APP","IS_WX"]),Object(o["d"])("local",{statistic:function(t){return t.statistic},startResult:function(t){return t.startResult},startData:function(t){return t.startData},currentQuesitionNum:function(t){return t.questions.currentQuesitionNum},endData:function(t){return t.endData},chance:function(t){return t.statistic.chance},inviter:function(t){return t.inviter},signSalt:function(t){return t.statistic.signSalt}})),beforeRouteEnter:function(t,e,s){e.path;s()},methods:Object(n["a"])({},Object(o["b"])("local",["startTest","nextQuestion","commitTest","getStatistic","updateChance","initWxConfig"]),{checkOptions:function(t){var e=this,s=t.target.dataset.questionid,i=t.target.dataset.seq;this.checkNum=parseInt(t.target.dataset.index),this.answers[this.questionNum]={seq:i,questionId:s},setTimeout(function(){e.isCheck=!0},100)},sign:function(){var t="056fef44ea0ca7ad63a0aae84024ef2d",e=this.signSalt?this.signSalt:"",s=this.inviter||"",i=h()(h()(s+e+t));return console.log("sign params",i),i},next:function(t){if(this.isCheck){var e={userAnswerId:t,answers:this.answers,salt:this.signSalt,sign:this.sign(),inviteUser:this.inviter};console.log(this.answers),this.currentQuesitionNum<7?(this.checkNum="",this.isCheck=!1,this.nextQuestion(),this.questionNum++):this.commitTest(e)}else Object(a["Toast"])("您还未答题哟~")}})},l=f,d=(s("zWwz"),s("KHd+")),_=Object(d["a"])(l,i,r,!1,null,"3f9e90e5",null);e["default"]=_.exports},yT7P:function(t,e,s){"use strict";s.d(e,"a",function(){return r});var i=s("oyJW");function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){Object(i["a"])(t,e,s[e])})}return t}},zWwz:function(t,e,s){"use strict";var i=s("eKgb"),r=s.n(i);r.a}}]);
//# sourceMappingURL=6.cc705ebd.js.map