(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"+n12":function(t,e,n){"use strict";n.d(e,"e",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c});n("SRfc"),n("KKXr"),n("VRzm");function i(t){location.href=t?"closer://community/9j9m4gy8sM":"https://h5.tiejin.cn/community/9j9m4gy8sM"}function r(){location.href="http://tiejin.cn/down?downurl=closer://jump"}function a(t){var e=t/100;return e.toFixed(2)}function s(){var t=window.location.href.split("-");if(!t)return null;var e=t.length;return t[e-1]}function o(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}),document.attachEvent("onWeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")})):WeixinJSBridge.call("hideOptionMenu")}function c(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();e.getHours(),e.getMinutes(),e.getSeconds();return i<10&&(i="0"+i),r<10&&(r="0"+r),n+"-"+i+"-"+r}},"IU+Z":function(t,e,n){"use strict";var i=n("Mukb"),r=n("KroJ"),a=n("eeVq"),s=n("vhPU"),o=n("K0xU");t.exports=function(t,e,n){var c=o(t),u=n(s,c,""[t]),l=u[0],d=u[1];a(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,l),i(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},KKXr:function(t,e,n){n("IU+Z")("split",2,function(t,e,i){"use strict";var r=n("quPj"),a=i,s=[].push,o="split",c="length",u="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var l=void 0===/()??/.exec("")[1];i=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return a.call(n,t,e);var i,o,d,f,p,v=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=void 0===e?4294967295:e>>>0,w=new RegExp(t.source,m+"g");l||(i=new RegExp("^"+w.source+"$(?!\\s)",m));while(o=w.exec(n)){if(d=o.index+o[0][c],d>g&&(v.push(n.slice(g,o.index)),!l&&o[c]>1&&o[0].replace(i,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(o[p]=void 0)}),o[c]>1&&o.index<n[c]&&s.apply(v,o.slice(1)),f=o[0][c],g=d,v[c]>=h))break;w[u]===o.index&&w[u]++}return g===n[c]?!f&&w.test("")||v.push(""):v.push(n.slice(g)),v[c]>h?v.slice(0,h):v}}else"0"[o](void 0,0)[c]&&(i=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});return[function(n,r){var a=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,a,r):i.call(String(a),n,r)},i]})},SRfc:function(t,e,n){n("IU+Z")("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]})},Z2sn:function(t,e,n){"use strict";var i=n("i0HK"),r=n.n(i);r.a},eCF9:function(t,e,n){"use strict";var i=n("oWP6"),r=n.n(i);r.a},i0HK:function(t,e,n){},nsgK:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pullnew"},[n("router-link",{staticClass:"rule-button",attrs:{to:{name:"pullNewRule"}}},[t._v("活动说明 ")]),n("div",{staticClass:"title"}),n("div",{staticClass:"share-button",on:{click:t.inviteFriends}}),n("div",{staticClass:"content"},[n("div",{staticClass:"left-top-icon"}),n("div",{staticClass:"right-top-icon"}),n("div",{staticClass:"left-bottom-icon"}),n("div",{staticClass:"right-bottom-icon"}),n("div",{staticClass:"content-title"},[t._v("首次邀请好友即奖励10元现金")]),n("div",{staticClass:"content-desc"},[t._v("之后每邀请1位奖励2元，如果您邀请了7位好友，那么第7位奖励您10元")]),n("div",{staticClass:"progress-bg"},t._l(t.pullNewStatic.invitedUsers,function(e,i,r){return n("div",{key:i,class:e.isGrey?"progress grey icon"+(r+1):"progress yellow icon"+(r+1)},[n("span",{staticClass:"progress-text"},[t._v(t._s(e.amount/100))]),t._v("元\n      ")])})),n("div",{staticClass:"progress-desc"},t._l(t.pullNewStatic.invitedUsers,function(e,i,r){return n("div",{key:r,class:0==r?"progress-desc-text"+(r+1):"progress-desc-text"},[t._v(t._s(i)),n("span",{staticClass:"progress-ren"},[t._v("人")])])})),t._m(0),n("div",{staticClass:"share"},[n("div",{staticClass:"timeline",on:{click:function(e){t.toShare("inviteNewGuyActionWxTimeLine")}}}),n("div",{staticClass:"weixin",on:{click:function(e){t.toShare("inviteNewGuyActionWeChat")}}}),n("div",{staticClass:"weibo",on:{click:function(e){t.toShare("inviteNewGuyActionSina")}}}),n("div",{staticClass:"save-img",on:{click:function(e){t.toShare("inviteNewGuyActionSavePicture")}}})]),n("div",{staticClass:"balance"},[n("div",{staticClass:"remain-money"},[t._v("奖金已到账 "+t._s(t.formateMoney(t.pullNewStatic.awardTotalAmt/100))+"元")]),n("div",{staticClass:"drawing",on:{click:function(e){t.toShare("inviteNewGuyActionWithdraw")}}})])]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"friends-list"},[t.pullNewStatic.inviteUserTotalCount>0?n("div",[t.pullNewStatic.awardEnd?n("div",{staticClass:"remind-title"},[t._v("\n          恭喜你，奖金全部解冻了，再接再厉去邀请哦~\n        ")]):n("div",[t.pullNewStatic.inviteUserTotalCount==t.pullNewStatic.remindCount?n("div",{staticClass:"remind-title"},[t._v("\n            已经提醒全部好友登录了，再去邀请几个朋友一起赚钱吧!\n          ")]):n("div",{staticClass:"remind-title"},[t._v("\n            您有"+t._s(t.pullNewStatic.todayNotLoginUserCount)+"位好友今天未登录，提醒他们登录 每位好友登录为您解冻0.2元\n          ")])])]):n("div",{staticClass:"remind-title"},[t._v("\n        您还没有好友哦，快去邀请好友赚钱吧！\n      ")]),!t.pullNewStatic.awardEnd&&t.loginUsers.length>0?n("mt-loadmore",{ref:"loadmore",staticClass:"loadmore",attrs:{"bottom-method":t.loadBottom,"auto-fill":!1,"bottom-all-loaded":t.allLoaded,bottomPullText:t.bottomPullText,bottomLoadingText:t.bottomLoadingText,bottomDistance:t.bottomDistance}},[n("div",{staticClass:"remind-content"},t._l(t.loginUsers,function(e,i){return n("div",{key:i,staticClass:"friend"},[n("img",{staticClass:"headphoto",attrs:{src:t.fileUrl+e.inviteeUser.avatar}}),n("div",{staticClass:"info"},[n("div",{staticClass:"name"},[t._v(t._s(e.inviteeUser.fullname))]),n("div",{staticClass:"name"},[t._v(t._s(t.formateDate(e.inviteeUser.createTime)))])]),e.loginAmount?n("div",{staticClass:"amount"},[t._v("+"+t._s(t.formateMoney(e.loginAmount/100)))]):n("div",{class:e.reminded?"reminded":"remind-login",on:{click:function(n){t.remind(e.inviteeUser.objectID,e.reminded)}}})])}))]):t._e()],1)]),t.awardAmt>0?n("Redbag",{attrs:{amount:t.formateMoney(t.awardAmt/100)}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-title"},[n("span",{staticClass:"share-text"},[t._v("分享快捷通道")])])}],a=n("yT7P"),s=(n("ls82"),n("MECJ")),o=(n("f3/d"),n("VRzm"),n("Kw5r")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-popup",{staticClass:"red-bag",model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("div",{staticClass:"money"},[n("span",{staticClass:"num"},[t._v(t._s(t.amount))]),n("span",{staticClass:"txt"},[t._v("元")])]),n("div",{staticClass:"own-money-yesterday"},[t._v("昨日现金收入")]),n("div",{staticClass:"get-money",on:{click:t.close}}),n("div",{staticClass:"close-bag",on:{click:t.close}})])},u=[],l=n("dqDD"),d={name:"redbag",props:{amount:String},data:function(){return{popupVisible:!0}},methods:{close:function(){this.popupVisible=!1}}},f=d,p=(n("Z2sn"),n("KHd+")),v=Object(p["a"])(f,c,u,!1,null,"1d3ad194",null),m=v.exports,g=n("fBUP"),h=n("+n12"),w=n("L2JU");o["default"].component(l["Loadmore"].name,l["Loadmore"]);var b={name:"index",components:{Redbag:m},data:function(){return{bottomDistance:50,bottomPullText:"上拉加载更多",bottomLoadingText:"加载中",redbagVisiable:!1,allLoaded:!1,inviteUsers:[],loginUsers:[],pageNum:1,pageSize:4,totalPageNum:0,isLogin:!1,fileUrl:g["a"].fileUrl}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.IS_DEV&&(this.fileUrl=g["a"].fileDevURL),this.$store.state.IS_APP?this.checkLogin(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var i,r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n&&(e.isLogin=!0),t.next=3,e.getPullNewInfo();case 3:return t.next=5,e.getYesterdayAwardAmt();case 5:return t.next=7,e.getInviteUserList({pageNum:e.pageNum,pagesize:e.pageSize});case 7:i=t.sent,r=i.data,a=i.pagesize,s=i.count,e.totalPageNum=Math.ceil(s/a),e.loginUsers=r;case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):this.checkLogin(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var i,r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return Cookies.set("GroukAuth","1.ae2ffef1f78b3914d8d7eb4d5002eeb983c8462cc7dffea14b7cdc1f2400593a59829487130fd337b7974adf0ed36262d180b0d194d5529584c124ef4f649b01",{expires:30}),t.next=3,e.getPullNewInfo();case 3:return t.next=5,e.getYesterdayAwardAmt();case 5:return t.next=7,e.getInviteUserList({pageNum:e.pageNum,pagesize:e.pageSize});case 7:i=t.sent,r=i.data,a=i.pagesize,s=i.count,e.totalPageNum=Math.ceil(s/a),e.loginUsers=r,e.pageNum==e.totalPageNum&&(e.allLoaded=!0,e.bottomPullText="");case 14:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:Object(a["a"])({},Object(w["c"])("pullNew",{pullNewStatic:function(t){return t.pullNewStatic},awardAmt:function(t){return t.awardAmt}})),methods:Object(a["a"])({},Object(w["b"])("pullNew",["checkLogin","getInviteUserList","getPullNewInfo","remindLogin","getYesterdayAwardAmt"]),{loadBottom:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,i,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.pageNum!=this.totalPageNum){t.next=6;break}return console.log("loadBottom"),this.$refs.loadmore.onBottomLoaded(),this.allLoaded=!0,this.bottomPullText="",t.abrupt("return");case 6:return this.pageNum++,t.next=9,this.getInviteUserList({pageNum:this.pageNum,pagesize:this.pageSize});case 9:for(a in e=t.sent,n=e.data,i=e.pagesize,r=e.count,this.totalPageNum=Math.ceil(r/i),n)this.loginUsers.push(n[a]);this.$refs.loadmore.onBottomLoaded(),console.log(this.pageNum,"----",this.totalPageNum),this.pageNum==this.totalPageNum&&(this.allLoaded=!0,this.bottomPullText="");case 18:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remind:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,n){var i,r,a,s,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=3;break}return Object(l["Toast"])("已经提醒过啦~"),t.abrupt("return");case 3:return t.next=5,this.remindLogin({invitee:e});case 5:if(i=t.sent,!i){t.next=17;break}return this.pageNum=1,t.next=10,this.getInviteUserList({pageNum:this.pageNum,pagesize:this.pageSize});case 10:r=t.sent,a=r.data,s=r.pagesize,o=r.count,this.pagesize=s,this.loginCount=o,this.loginUsers=a;case 17:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),toShare:function(t){if(this.isLogin){var e=this.$store.state.UA;if(e.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){e&&e.callHandler("inviteNewGuyAction",t,function(t,e){})});else if(e.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.inviteNewGuyAction(t)}catch(t){Object(l["Toast"])("请升级最新版本客户端")}}else this.checkLogin(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},inviteFriends:function(){if(this.isLogin){var t=this.$store.state.UA;t.indexOf("closer-ios")>-1?setupWebViewJavascriptBridge(function(t){console.log("toShare ios bridge",t),t&&t.callHandler("inviteUser",null,function(t,e){})}):t.indexOf("closer-android")>-1&&("undefined"!=typeof window.bridge?window.bridge.inviteUser(null):location.href="closer_invite_guys_raise_cash")}else this.checkLogin(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},formateDate:function(t){return Object(h["a"])(t)},formateMoney:function(t){return(Math.round(100*t)/100).toFixed(2)}})},x=b,y=(n("eCF9"),Object(p["a"])(x,i,r,!1,null,"09c0d173",null));e["default"]=y.exports},oWP6:function(t,e,n){},quPj:function(t,e,n){var i=n("0/R4"),r=n("LZWt"),a=n("K0xU")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},vhPU:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},yT7P:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("oyJW");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){Object(i["a"])(t,e,n[e])})}return t}}}]);
//# sourceMappingURL=3.5d767f0b.js.map