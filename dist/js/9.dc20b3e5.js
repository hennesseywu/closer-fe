(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"/0Rd":function(t,e,i){},"6Ccq":function(t,e,i){"use strict";var s=i("/0Rd"),n=i.n(s);n.a},Z2sn:function(t,e,i){"use strict";var s=i("i0HK"),n=i.n(s);n.a},i0HK:function(t,e,i){},nsgK:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pullnew"},[i("div",{staticClass:"rule-button",on:{click:t.toRule}},[t._v("\n    活动说明\n  ")]),i("div",{staticClass:"title"}),i("div",{staticClass:"pullnew-title"},[i("div",{staticClass:"share-button",on:{click:t.inviteFriends}})]),i("div",{staticClass:"content"},[i("div",{staticClass:"left-top-icon"}),i("div",{staticClass:"right-top-icon"}),i("div",{staticClass:"left-bottom-icon"}),i("div",{staticClass:"right-bottom-icon"}),i("div",{staticClass:"content-title"},[t._v("首次邀请好友即奖励10元现金")]),i("div",{staticClass:"content-desc"},[t._v("之后每邀请1位奖励2元，如果您邀请了7位好友，那么第7位奖励您10元")]),i("div",{staticClass:"progress-bg"},t._l(t.pullNewStatic.invitedUsers,function(e,s,n){return i("div",{key:s,class:e.isGrey?"progress grey icon"+(n+1):"progress yellow icon"+(n+1)},[i("span",{staticClass:"progress-text"},[t._v(t._s(e.amount/100))]),t._v("元\n      ")])})),i("div",{staticClass:"progress-desc"},t._l(t.pullNewStatic.invitedUsers,function(e,s,n){return i("div",{key:n,class:0==n?"progress-desc-text"+(n+1):"progress-desc-text"},[t._v(t._s(s)),i("span",{staticClass:"progress-ren"},[t._v("人")])])})),t._m(0),i("div",{staticClass:"share"},[i("div",{staticClass:"timeline",on:{click:function(e){t.toShare("inviteNewGuyActionWxTimeLine")}}}),i("div",{staticClass:"weixin",on:{click:function(e){t.toShare("inviteNewGuyActionWeChat")}}}),i("div",{staticClass:"weibo",on:{click:function(e){t.toShare("inviteNewGuyActionSina")}}}),i("div",{staticClass:"save-img",on:{click:function(e){t.toShare("inviteNewGuyActionSavePicture")}}})]),i("div",{staticClass:"share-tips"},[t._v("此活动需在最新版本客户端参与")]),i("div",{staticClass:"balance"},[i("div",{staticClass:"remain-money"},[t._v("奖金已到账 "+t._s(t.formateMoney(t.pullNewStatic.awardTotalAmt/100))+"元")]),i("div",{staticClass:"drawing",on:{click:function(e){t.toShare("inviteNewGuyActionWithdraw")}}})])]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"friends-list"},[t.loginUsers.length>0?i("div",{staticClass:"remind-self"},[i("img",{staticClass:"headphoto",attrs:{src:t.fileUrl+t.loginUsers[0].inviteeUser.avatar}}),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[t._v(t._s(t.loginUsers[0].inviteeUser.fullname))]),i("div",{staticClass:"name"},[t._v(t._s(t.formateDate(t.loginUsers[0].inviteeUser.createTime)))])]),t.loginUsers[0].loginAmount?i("div",{staticClass:"amount"},[t._v("你今日获得 +"+t._s(t.formateMoney(t.loginUsers[0].loginAmount/100))+"元")]):i("div",{staticClass:"amount"},[t._v("你今日获得 0元")])]):t._e(),i("div",{staticClass:"line"}),t.pullNewStatic.inviteUserTotalCount>0?i("div",[t.pullNewStatic.awardEnd?i("div",{staticClass:"remind-title"},[t._v("\n          恭喜你，奖金全部解冻了，再接再厉去邀请哦~\n        ")]):i("div",[t.pullNewStatic.inviteUserTotalCount==t.pullNewStatic.remindCount?i("div",{staticClass:"remind-title"},[t._v("\n            已经提醒全部好友登录了，再去邀请几个朋友一起赚钱吧!\n          ")]):i("div",{staticClass:"remind-title"},[t._v("\n            您有"+t._s(t.pullNewStatic.todayNotLoginUserCount)+"位好友今天未登录，提醒他们登录 每位好友登录为您解冻0.2元\n          ")])])]):i("div",{staticClass:"remind-title"},[t._v("\n        您还没有好友哦，快去邀请好友赚钱吧！\n      ")]),!t.pullNewStatic.awardEnd&&t.loginUsers.length>0?i("mt-loadmore",{ref:"loadmore",staticClass:"loadmore",attrs:{"bottom-method":t.loadBottom,"auto-fill":!1,"bottom-all-loaded":t.allLoaded,bottomPullText:t.bottomPullText,bottomLoadingText:t.bottomLoadingText,bottomDistance:t.bottomDistance}},[i("div",{staticClass:"remind-content"},t._l(t.loginUsers,function(e,s){return 0!=s?i("div",{key:s,staticClass:"friend"},[i("div",{staticClass:"top"},[i("img",{staticClass:"headphoto",attrs:{src:t.fileUrl+e.inviteeUser.avatar}}),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[t._v(t._s(e.inviteeUser.fullname))]),i("div",{staticClass:"name"},[t._v(t._s(t.formateDate(e.inviteeUser.createTime)))])]),e.loginAmount?i("div",{staticClass:"amount"},[t._v("+"+t._s(t.formateMoney(e.loginAmount/100)))]):i("div",{class:e.reminded?"reminded":"remind-login",on:{click:function(i){t.remind(e.inviteeUser.objectID,e.reminded,i)}}})]),0==e.awardedCount&&"undefined"!=typeof e.step?i("div",[i("div",{staticClass:"arrow"},[i("span",{staticClass:"progress-span"},[t._v("邀请进度")]),i("span",{staticClass:"arrow-right",on:{click:function(e){t.clickArrow(e,s)}}})]),i("div",{staticClass:"middle",attrs:{id:"m"+s}},[i("div",{class:e.step.step1?"dot":"dot-grey"}),i("div",{staticClass:"line"}),i("div",{class:e.step.step2||e.step.step3?"dot":"dot-grey"}),i("div",{staticClass:"line"}),i("div",{class:e.step.step3?"dot":"dot-grey"})]),i("div",{staticClass:"progress-bottom",attrs:{id:"b"+s}},[i("span",{class:e.step.step1?"desc1 desc-active":"desc1"},[t._v("进入首页")]),i("span",{class:e.step.step2||e.step.step3?"desc2 desc-active":"desc2"},[t._v("查看1篇文章")]),i("span",{class:e.step.step3?"desc3 desc-active":"desc3"},[t._v("查看2篇文章")])])]):t._e()]):t._e()}))]):t._e()],1)]),t.awardAmt>0?i("Redbag",{attrs:{amount:t.formateMoney(t.awardAmt/100)}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"share-title"},[i("span",{staticClass:"share-text"},[t._v("分享快捷通道")])])}],a=i("yT7P"),o=(i("ls82"),i("MECJ")),r=(i("f3/d"),i("Kw5r")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mt-popup",{staticClass:"red-bag",model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[i("div",{staticClass:"money"},[i("span",{staticClass:"num"},[t._v(t._s(t.amount))]),i("span",{staticClass:"txt"},[t._v("元")])]),i("div",{staticClass:"own-money-yesterday"},[t._v("昨日现金收入")]),i("div",{staticClass:"get-money",on:{click:t.close}}),i("div",{staticClass:"close-bag",on:{click:t.close}})])},l=[],d=i("dqDD"),u={name:"redbag",props:{amount:String},data:function(){return{popupVisible:!0}},methods:{close:function(){this.popupVisible=!1}}},m=u,p=(i("Z2sn"),i("KHd+")),v=Object(p["a"])(m,c,l,!1,null,"1d3ad194",null),f=v.exports,g=i("fBUP"),h=i("+n12"),w=i("L2JU");r["default"].component(d["Loadmore"].name,d["Loadmore"]);var b={name:"index",components:{Redbag:f},data:function(){return{bottomDistance:50,bottomPullText:"上拉加载更多",bottomLoadingText:"加载中",redbagVisiable:!1,allLoaded:!1,allLoaded1:!1,inviteUsers:[],loginUsers:[],pageNum:1,pageSize:10,totalPageNum:0,isLogin:!1,tabActive:"tabLeft",fileUrl:g["a"].fileUrl}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$store.state.IS_DEV&&(this.fileUrl=g["a"].fileDevURL),this.$store.state.IS_APP?this.checkLogin(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(i){var s,n,a,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i&&(e.isLogin=!0),t.next=3,e.getPullNewInfo({noIndicator:!0});case 3:return t.next=5,e.getYesterdayAwardAmt({noIndicator:!0});case 5:return t.next=7,e.getInviteUserList({pagenum:e.pageNum,pagesize:e.pageSize,noIndicator:!0});case 7:for(r in s=t.sent,n=s.data,a=s.pagesize,o=s.count,e.totalPageNum=Math.ceil(o/a),n)"undefined"!=typeof n[r].awardedCount&&0==n[r].awardedCount&&"undefined"!=typeof n[r].userActions&&(n[r].step=e.checkLoginUser(n[r].userActions));e.loginUsers=n,e.pageNum==e.totalPageNum&&(e.allLoaded=!0,e.bottomPullText="");case 15:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):this.$router.push({name:"activityOver"});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),computed:Object(a["a"])({},Object(w["d"])("pullNew",{pullNewStatic:function(t){return t.pullNewStatic},awardAmt:function(t){return t.awardAmt}})),methods:Object(a["a"])({},Object(w["b"])("pullNew",["checkLogin","getInviteUserList","getPullNewInfo","remindLogin","getYesterdayAwardAmt"]),{loadBottom:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,i,s,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.pageNum!=this.totalPageNum){t.next=5;break}return"tabLeft"==this.tabActive?this.$refs.loadmore.onBottomLoaded():this.$refs.loadmore1.onBottomLoaded(),this.allLoaded=!0,this.bottomPullText="",t.abrupt("return");case 5:return this.pageNum++,t.next=8,this.getInviteUserList({pagenum:this.pageNum,pagesize:this.pageSize});case 8:for(a in e=t.sent,i=e.data,s=e.pagesize,n=e.count,this.totalPageNum=Math.ceil(n/s),i)"undefined"!=typeof i[a].awardedCount&&0==i[a].awardedCount&&"undefined"!=typeof i[a].userActions&&(i[a].step=this.checkLoginUser(i[a].userActions)),this.loginUsers.push(i[a]);"tabLeft"==this.tabActive?this.$refs.loadmore.onBottomLoaded():this.$refs.loadmore1.onBottomLoaded(),this.pageNum==this.totalPageNum&&(this.allLoaded=!0,this.bottomPullText="");case 16:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remind:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,i,s){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=3;break}return Object(d["Toast"])("已经提醒过啦~"),t.abrupt("return");case 3:return console.log(e),t.next=6,this.remindLogin({invitee:e});case 6:n=t.sent,n&&(s.srcElement.className="reminded");case 8:case"end":return t.stop()}},t,this)}));return function(e,i,s){return t.apply(this,arguments)}}(),checkLoginUser:function(t){var e=0,i=0,s=0;for(var n in t)"listFeed"==t[n]["userActionEnum"]?e=1:"viewSubject"==t[n]["userActionEnum"]&&(1==t[n]["count"]?i=1:s=1);return{step1:e,step2:i,step3:s}},toShare:function(t){if(this.isLogin){var e=this.$store.state.UA;if(e.indexOf("closer-ios")>-1){setupWebViewJavascriptBridge(function(e){e&&e.callHandler("inviteNewGuyAction",t,function(t,e){})})}else if(e.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.inviteNewGuyAction(t)}catch(t){Object(d["Toast"])("请升级最新版本客户端")}}else this.checkLogin(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},clickArrow:function(t,e){"arrow-right"==t.target.className?(t.target.className="arrow-down",document.getElementById("m"+e).style.display="flex",document.getElementById("b"+e).style.display="flex"):(t.target.className="arrow-right",document.getElementById("m"+e).style.display="none",document.getElementById("b"+e).style.display="none")},inviteFriends:function(){if(this.isLogin){var t=this.$store.state.UA;t.indexOf("closer-ios")>-1?setupWebViewJavascriptBridge(function(t){t&&t.callHandler("inviteUser",null,function(t,e){})}):t.indexOf("closer-android")>-1&&("undefined"!=typeof window.bridge?window.bridge.inviteUser(null):location.href="closer_invite_guys_raise_cash")}else this.checkLogin(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},formateDate:function(t){return Object(h["c"])(t)},formateMoney:function(t){return(Math.round(100*t)/100).toFixed(2)},toRule:function(){this.$router.push({name:"pullNewRule"})},clickTab:function(t){this.tabActive=t}})},C=b,y=(i("6Ccq"),Object(p["a"])(C,s,n,!1,null,"e57fdbc2",null));e["default"]=y.exports},yT7P:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var s=i("oyJW");function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Object(s["a"])(t,e,i[e])})}return t}}}]);
//# sourceMappingURL=9.dc20b3e5.js.map