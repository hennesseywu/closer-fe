(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+n12":function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"f",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c});n("SRfc"),n("KKXr"),n("VRzm");function i(t){location.href=t?"closer://community/9j9m4gy8sM":"https://h5.tiejin.cn/community/9j9m4gy8sM"}function r(){location.href="http://tiejin.cn/down?downurl=closer://jump"}function s(t){var e=t/100;return e.toFixed(2)}function a(){var t=window.location.href.split("-");if(!t)return null;var e=t.length;return t[e-1]}function o(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}),document.attachEvent("onWeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")})):WeixinJSBridge.call("hideOptionMenu")}function c(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();e.getHours(),e.getMinutes(),e.getSeconds();return i<10&&(i="0"+i),r<10&&(r="0"+r),n+"-"+i+"-"+r}},"7zTx":function(t,e,n){"use strict";var i=n("ZbsV"),r=n.n(i);r.a},"IU+Z":function(t,e,n){"use strict";var i=n("Mukb"),r=n("KroJ"),s=n("eeVq"),a=n("vhPU"),o=n("K0xU");t.exports=function(t,e,n){var c=o(t),u=n(a,c,""[t]),l=u[0],d=u[1];s(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,l),i(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},KKXr:function(t,e,n){n("IU+Z")("split",2,function(t,e,i){"use strict";var r=n("quPj"),s=i,a=[].push,o="split",c="length",u="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var l=void 0===/()??/.exec("")[1];i=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return s.call(n,t,e);var i,o,d,f,p,v=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,h=void 0===e?4294967295:e>>>0,w=new RegExp(t.source,g+"g");l||(i=new RegExp("^"+w.source+"$(?!\\s)",g));while(o=w.exec(n)){if(d=o.index+o[0][c],d>m&&(v.push(n.slice(m,o.index)),!l&&o[c]>1&&o[0].replace(i,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(o[p]=void 0)}),o[c]>1&&o.index<n[c]&&a.apply(v,o.slice(1)),f=o[0][c],m=d,v[c]>=h))break;w[u]===o.index&&w[u]++}return m===n[c]?!f&&w.test("")||v.push(""):v.push(n.slice(m)),v[c]>h?v.slice(0,h):v}}else"0"[o](void 0,0)[c]&&(i=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(n,r){var s=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,s,r):i.call(String(s),n,r)},i]})},SRfc:function(t,e,n){n("IU+Z")("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},Z2sn:function(t,e,n){"use strict";var i=n("i0HK"),r=n.n(i);r.a},ZbsV:function(t,e,n){},i0HK:function(t,e,n){},nsgK:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pullnew"},[n("router-link",{staticClass:"rule-button",attrs:{to:{name:"pullNewRule"}}},[t._v("活动说明 ")]),n("div",{staticClass:"title"}),n("div",{staticClass:"share-button",on:{click:t.inviteFriends}}),n("div",{staticClass:"content"},[n("div",{staticClass:"left-top-icon"}),n("div",{staticClass:"right-top-icon"}),n("div",{staticClass:"left-bottom-icon"}),n("div",{staticClass:"right-bottom-icon"}),n("div",{staticClass:"content-title"},[t._v("首次邀请好友即奖励10元现金")]),n("div",{staticClass:"content-desc"},[t._v("之后每邀请1位奖励2元，如果您邀请了7位好友，那么第7位奖励您10元")]),n("div",{staticClass:"progress-bg"},t._l(t.pullNewStatic.invitedUsers,function(e,i,r){return n("div",{key:i,class:e.isGrey?"progress grey icon"+(r+1):"progress yellow icon"+(r+1)},[n("span",{staticClass:"progress-text"},[t._v(t._s(e.amount/100))]),t._v("元\n      ")])})),n("div",{staticClass:"progress-desc"},t._l(t.pullNewStatic.invitedUsers,function(e,i,r){return n("div",{key:r,class:0==r?"progress-desc-text"+(r+1):"progress-desc-text"},[t._v(t._s(i)),n("span",{staticClass:"progress-ren"},[t._v("人")])])})),t._m(0),n("div",{staticClass:"share"},[n("div",{staticClass:"timeline",on:{click:function(e){t.toShare("inviteNewGuyActionWxTimeLine")}}}),n("div",{staticClass:"weixin",on:{click:function(e){t.toShare("inviteNewGuyActionWeChat")}}}),n("div",{staticClass:"weibo",on:{click:function(e){t.toShare("inviteNewGuyActionSina")}}}),n("div",{staticClass:"save-img",on:{click:function(e){t.toShare("inviteNewGuyActionSavePicture")}}})]),n("div",{staticClass:"balance"},[n("div",{staticClass:"remain-money"},[t._v("奖金已到账 "+t._s(t.formateMoney(t.pullNewStatic.awardTotalAmt/100))+"元")]),n("div",{staticClass:"drawing",on:{click:function(e){t.toShare("inviteNewGuyActionWithdraw")}}})])]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"friends-list"},[t.pullNewStatic.inviteUserTotalCount>0?n("div",[t.pullNewStatic.awardEnd?n("div",{staticClass:"remind-title"},[t._v("\n          已经提醒全部好友登录了，再去邀请几个朋友一起赚钱吧\n        ")]):n("div",{staticClass:"remind-title"},[t._v("\n          您有"+t._s(t.pullNewStatic.todayNotLoginUserCount)+"位好友今天未登录，提醒他们登录 每位好友登录为您解冻0.2元\n        ")])]):n("div",{staticClass:"remind-title"},[t._v("\n        您还没有好友哦，快去邀请好友赚钱吧！\n      ")]),t.loginUsers.length>0?n("mt-loadmore",{ref:"loadmore",staticClass:"loadmore",attrs:{"bottom-method":t.loadBottom,"auto-fill":!1,"bottom-all-loaded":t.allLoaded,bottomPullText:t.bottomPullText,bottomLoadingText:t.bottomLoadingText,bottomDistance:t.bottomDistance}},[n("div",{staticClass:"remind-content"},t._l(t.loginUsers,function(e,i){return n("div",{key:i,staticClass:"friend"},[n("img",{staticClass:"headphoto",attrs:{src:t.fileUrl+e.inviteeUser.avatar}}),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(e.inviteeUser.fullname))]),n("div",{staticClass:"name"},[t._v(t._s(t.formateDate(e.inviteeUser.createTime)))])]),e.loginAmount?n("div",{staticClass:"amount"},[t._v("+"+t._s(t.formateMoney(e.loginAmount/100)))]):n("div",{class:e.reminded?"reminded":"remind-login",on:{click:function(n){t.remind(e.inviteeUser.objectID,e.reminded)}}})])}))]):t._e()],1)]),t.awardAmt>0?n("Redbag",{attrs:{amount:t.formateMoney(t.awardAmt/100)}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-title"},[n("span",{staticClass:"share-text"},[t._v("分享快捷通道")])])}],s=n("yT7P"),a=(n("ls82"),n("MECJ")),o=(n("f3/d"),n("VRzm"),n("Kw5r")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-popup",{staticClass:"red-bag",model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("div",{staticClass:"money"},[n("span",{staticClass:"num"},[t._v(t._s(t.amount))]),n("span",{staticClass:"txt"},[t._v("元")])]),n("div",{staticClass:"own-money-yesterday"},[t._v("昨日现金收入")]),n("div",{staticClass:"get-money",on:{click:t.close}}),n("div",{staticClass:"close-bag",on:{click:t.close}})])},u=[],l=n("dqDD"),d={name:"redbag",props:{amount:String},data:function(){return{popupVisible:!0}},methods:{close:function(){this.popupVisible=!1}}},f=d,p=(n("Z2sn"),n("KHd+")),v=Object(p["a"])(f,c,u,!1,null,"1d3ad194",null),g=v.exports,m=n("fBUP"),h=n("+n12"),w=n("L2JU");o["default"].component(l["Loadmore"].name,l["Loadmore"]);var b={name:"index",components:{Redbag:g},data:function(){return{bottomDistance:50,bottomPullText:"上拉加载更多",bottomLoadingText:"加载中",redbagVisiable:!1,allLoaded:!1,inviteUsers:[],loginUsers:[],pagenum:1,pagesize:0,loginCount:null,isLogin:!1,fileUrl:m["a"].fileUrl}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.IS_DEV&&(this.fileUrl=m["a"].fileDevURL),this.$store.state.IS_APP?this.checkLogin(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(n){var i,r,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("checkLogin res"),n&&(e.isLogin=!0),t.next=4,e.getPullNewInfo();case 4:return t.next=6,e.getYesterdayAwardAmt();case 6:return t.next=8,e.getInviteUserList({pagenum:e.pagenum});case 8:i=t.sent,r=i.data,s=i.pagesize,a=i.count,e.pagesize=s,e.loginCount=a,e.loginUsers=r;case 15:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):this.checkLogin(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(n){var i,r,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("checkLoginxxx res"),t.next=3,e.getPullNewInfo();case 3:return t.next=5,e.getYesterdayAwardAmt();case 5:return t.next=7,e.getInviteUserList({pagenum:e.pagenum});case 7:i=t.sent,r=i.data,s=i.pagesize,a=i.count,l["Indicator"].close(),e.pagesize=s,e.loginCount=a,e.loginUsers=r;case 15:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:Object(s["a"])({},Object(w["c"])("pullNew",{pullNewStatic:function(t){return t.pullNewStatic},awardAmt:function(t){return t.awardAmt}})),methods:Object(s["a"])({},Object(w["b"])("pullNew",["checkLogin","getInviteUserList","getPullNewInfo","remindLogin","getYesterdayAwardAmt"]),{loadBottom:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,i,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.pagenum!=this.pagesize){t.next=4;break}return this.allLoaded=!0,this.bottomPullText="",t.abrupt("return");case 4:return this.pagenum++,t.next=7,this.getInviteUserList({pagenum:this.pagenum});case 7:for(s in e=t.sent,n=e.data,i=e.pagesize,r=e.count,this.pagesize=i,this.loginCount=r,console.log(n),n)this.loginUsers.push(n[s]);this.$refs.loadmore.onBottomLoaded(),console.log(this.pagenum,"----",this.pagesize),this.pagenum==this.pagesize&&(this.allLoaded=!0,this.bottomPullText="");case 18:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remind:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,n){var i,r,s,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=3;break}return Object(l["Toast"])("已经提醒过啦~"),t.abrupt("return");case 3:return t.next=5,this.remindLogin({invitee:e});case 5:if(i=t.sent,!i){t.next=16;break}return t.next=9,this.getInviteUserList({pagenum:this.pagenum});case 9:r=t.sent,s=r.data,a=r.pagesize,o=r.count,this.pagesize=a,this.loginCount=o,this.loginUsers=s;case 16:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),toShare:function(t){if(this.isLogin){var e=this.$store.state.UA;if(e.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){if(e)try{e.callHandler("inviteNewGuyAction",t,function(t,e){})}catch(t){Object(l["Toast"])("请升级最新版本客户端")}});else if(e.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.inviteNewGuyAction(t)}catch(t){Object(l["Toast"])("请升级最新版本客户端")}}else this.checkLogin(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},inviteFriends:function(){if(this.isLogin){var t=this.$store.state.UA;t.indexOf("closer-ios")>-1?setupWebViewJavascriptBridge(function(t){console.log("toShare ios bridge",t),t&&t.callHandler("inviteUser",null,function(t,e){})}):t.indexOf("closer-android")>-1&&("undefined"!=typeof window.bridge?window.bridge.inviteUser(null):location.href="closer_invite_guys_raise_cash")}else this.checkLogin(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},formateDate:function(t){return Object(h["a"])(t)},formateMoney:function(t){return(Math.round(100*t)/100).toFixed(2)}})},x=b,y=(n("7zTx"),Object(p["a"])(x,i,r,!1,null,"7e04e812",null));e["default"]=y.exports},quPj:function(t,e,n){var i=n("0/R4"),r=n("LZWt"),s=n("K0xU")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},vhPU:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},yT7P:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("oyJW");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){Object(i["a"])(t,e,n[e])})}return t}}}]);
//# sourceMappingURL=3.93f91801.js.map