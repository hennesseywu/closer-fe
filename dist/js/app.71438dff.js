(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)s=o[l],a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var o=r[s];0!==a[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={6:0},a={6:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{0:"f0c0ce0d",1:"0a2934c8",2:"1cb95724",3:"199d77f3",4:"38644bb5"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={0:1,1:1,2:1,3:1,4:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+e+"."+{0:"6695cb9a",1:"be72ae09",2:"3e887da2",3:"467d91b4",4:"90bbb1da"}[e]+".css",s=c.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var o=a[i],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===n||u===s))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){o=l[i],u=o.getAttribute("data-href");if(u===n||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,r(a)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){s[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=i);var u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var p=setTimeout(function(){d({type:"timeout",target:l})},12e4);function d(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,r[1](i)}a[e]=void 0}}l.onerror=l.onload=d,u.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([4,5]),r()})({4:function(e,t,r){e.exports=r("Vtdi")},Dydj:function(e,t,r){"use strict";var n=r("NPbb"),s=r.n(n);s.a},NPbb:function(e,t,r){},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var n=r("Kw5r"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i={name:"App"},o=i,c=(r("Dydj"),r("KHd+")),u=Object(c["a"])(o,s,a,!1,null,"d3673bd4",null),l=u.exports,p=(r("ZCOS"),r("fTFf"),r("dqDD")),d=r.n(p),h=(r("qjXo"),r("f3/d"),r("jE9Z")),f=r("L2JU"),m=(r("ls82"),r("MECJ")),w=r("oyJW"),g={serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",file:"/file/upload/public",admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:Object(w["a"])({add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},"check_guess_result","activity_worldcup.check_guess_result"),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"}};function v(e){return b.apply(this,arguments)}function b(){return b=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.admin.get_code_by_phone,{phone:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),b.apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return x=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.admin.closeruser_regist,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),x.apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return k=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.admin.user_show,{uid:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),k.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.statitics.view_count,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),O.apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return A=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.statitics.get_adcookie,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),A.apply(this,arguments)}var R={namespaced:!0,state:{loginSuccess:!1,chanceBoxShow:!0,loginBoxShow:!1,isApp:!1,sendCode:"发送验证码",countDown:60,deviceType:"",deviceVersion:"",adid:""},mutations:{updateCountDown:function(e){e.countDown=59;var t=setInterval(function(){e.countDown--,e.sendCode=e.countDown+" s",0==e.countDown&&(clearInterval(t),e.countDown=60,e.sendCode="再次发送")},1e3)},viewCount:function(e,t){e.id=t.id}},actions:{viewCount:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,n=t.commit,e.next=3,j(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,s.cookies,n({type:"viewCount",data:a});case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getAdCookies:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.rootState,r.adid&&"0"==r.adid&&delete r["adid"],e.next=4,C(r).catch(function(e){});case 4:n=e.sent,s=n.data,s.result&&(a=s.result,a.udid&&Cookies.set("uid",a.udid,{expires:30}),a.adid&&Cookies.set("aid",a.adid,{expires:30}));case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),checkLogin:function(e){e.state;var t=e.rootState;if(t.IS_APP){var r=t.UA;r.indexOf("closer-ios")>-1&&setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),X.push({name:"worldcupActivity"})):setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})})}},openLoginBox:function(e){var t=e.state,r=e.rootState;if(r.IS_APP){var n=r.UA;if(n.indexOf("closer-android")>-1){if("undefined"!=typeof window.bridge){var s=window.bridge.getUserToken(null);s?(Cookies.set("GroukAuth",s,{expires:7}),X.push({name:"worldcupActivity"})):window.bridge.jumpLogin(null)}}else n.indexOf("closer-ios")>-1&&window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),X.push({name:"worldcupActivity"})):setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})})}else t.loginBoxShow=!0,t.chanceBoxShow=!1},getUserById:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,e.next=3,y(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getCode:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,s=t.state,t.rootState,/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(r)){e.next=4;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:if(60!=s.countDown){e.next=10;break}return e.next=8,v(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 8:a=e.sent,a.status&&200==a.status&&(n("updateCountDown"),Object(p["Toast"])("验证码发送成功"));case 10:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),login:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,n=t.rootState,!r.phone||/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(r.phone)){e.next=4;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:if(0!=r.token.length){e.next=8;break}return Object(p["Toast"])("请输入验证码"),e.abrupt("return");case 8:return Cookies.get("uid")&&(r["udid"]=Cookies.get("uid")),Cookies.get("aid")&&(r["adid"]=Cookies.get("aid")),r["protocol"]="WEB_SOCKET",e.next=13,_(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 13:if(s=e.sent,!s.data){e.next=20;break}if(a=s.data,!a.code||0==a.code){e.next=19;break}return Object(p["Toast"])(a.result),e.abrupt("return");case 19:a.result&&a.result.token&&(Cookies.set("GroukAuth",a.result.token,{expires:7}),a.result.user&&Cookies.set("user",JSON.stringify(a.result.user),{expires:7}),a.result.isNewUser&&(n.isNewUser=a.result.isNewUser),X.push({name:"worldcupActivity"}));case 20:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};function T(e){return U.apply(this,arguments)}function U(){return U=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.activity.get_user_guess_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),U.apply(this,arguments)}function S(e){return B.apply(this,arguments)}function B(){return B=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.activity.get_match_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),B.apply(this,arguments)}function E(e){return I.apply(this,arguments)}function I(){return I=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.activity.get_user_guess_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),I.apply(this,arguments)}function G(e){return P.apply(this,arguments)}function P(){return P=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.activity.guess_match,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),P.apply(this,arguments)}function L(e){return D.apply(this,arguments)}function D(){return D=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.activity.check_guess_result,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),D.apply(this,arguments)}function J(e){return V.apply(this,arguments)}function V(){return V=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(g.activity.receive_chance,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),V.apply(this,arguments)}var N={namespaced:!0,state:{matchList:{},userGuessList:[],userGuessStatistic:{},recieveChanceInfo:{},userGuessResult:{},voteInfo:{logo:"",teamName:"",matchId:"",winTeamId:"",mathResult:"",gustTeamLogo:!1}},mutations:{updateMatchlist:function(e,t){e.matchList=t.data.result.data;for(var r=0,n=e.matchList.length;r<n;r++)"group"!=e.matchList[r].matchType?e.grayBtn=!0:e.grayBtn=!1},updateUserGuesslist:function(e,t){e.userGuessList=t.data.result.data},updateUserGuessStatistic:function(e,t){e.userGuessStatistic=t.data.result},updateRecieveChance:function(e,t){e.recieveChanceInfo=t.result},updateUserGuessResult:function(e,t){e.userGuessResult=t.result}},actions:{checkRecieveChance:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,s=t.commit,"0"==r.channelCode?r={}:r["type"]="other",e.next=4,J(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 4:if(a=e.sent,i=a.data,!i.result){e.next=14;break}if(o=i.result,s({type:"updateRecieveChance",result:o}),!(o.count&&o.count>0)){e.next=12;break}return e.next=12,n("getUserGuessStatistic");case 12:e.next=15;break;case 14:Object(p["Toast"])("网络开小差啦，请稍后再试");case 15:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getMatchList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,S(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:if(s=e.sent,a=s.data,!a.code||0==a.code){e.next=8;break}return Object(p["Toast"])(a.result),e.abrupt("return");case 8:if(!a.result.data||0!=a.result.data.length){e.next=11;break}return Object(p["Toast"])("没有比赛数据"),e.abrupt("return");case 11:n({type:"updateMatchlist",data:a});case 12:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,T(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,n({type:"updateUserGuesslist",data:a});case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),guessMatch:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,t.commit,t.state,e.next=3,G(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:if(s=e.sent,a=s.data,!a||0!=a.code){e.next=15;break}return Object(p["Toast"])("竞猜成功"),e.next=9,n("getUserGuessStatistic");case 9:return e.next=11,n("getMatchList");case 11:return e.next=13,n("getUserGuessList");case 13:e.next=16;break;case 15:Object(p["Toast"])(a.result);case 16:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),setVoteInfo:function(e,t){var r=e.state;r.voteInfo=t},checkGuessResult:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,L(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,n("updateUserGuessResult",a);case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessStatistic:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,E(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,a.result.totalAwardAmt&&Cookies.set("totalAwardAmt",a.result.totalAwardAmt),n({type:"updateUserGuessStatistic",data:a});case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};n["default"].use(f["a"]);var W=new f["a"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,CHANNEL_CODE:"0"},modules:{index:R,activity:N}}),H=function(){return Promise.all([r.e(0),r.e(1),r.e(4)]).then(r.bind(null,"FbUH"))},M=function(){return Promise.all([r.e(0),r.e(1),r.e(3)]).then(r.bind(null,"7ODX"))},q=function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"5pOR"))};n["default"].use(h["a"]);var z=new h["a"]({mode:"history",routes:[{path:"/worldcup/activity",name:"worldcupActivity",component:M,meta:{title:"贴近世界杯 瓜分600万"}},{path:"/worldcup/:channelCode",name:"worldcupIndex",component:H,meta:{title:"领取机会"}},{path:"/worldcup/share/",name:"worldcupShare",component:q,meta:{title:"贴近世界杯 瓜分600万"}}]});z.beforeEach(function(e,t,r){var n=e.meta,s=(e.path,e.name),a=e.params;document.title=n.title?n.title:"贴近",setTimeout(function(){document.title=n.title?n.title:"贴近"},500);var i=navigator.userAgent||window.navigator.userAgent;if(W.state.UA=i.toLowerCase(),i=W.state.UA,(W.state.UA.indexOf("closer-android")>-1||-1!=W.state.UA.indexOf("closer-ios"))&&(W.state.IS_APP=!0),"worldcupIndex"==s)if(a.channelCode&&"0"!=a.channelCode&&Cookies.set("aid",a.channelCode,{expires:30}),i.indexOf("closer-android")>-1){if("undefined"!=typeof window.bridge){var o=window.bridge.getUserToken(null);o&&(Cookies.set("GroukAuth",o,{expires:7}),z.push({name:"worldcupActivity"}))}}else if(i.indexOf("closer-ios")>-1){if(W.state.IS_APP){var c=W.state.UA;c.indexOf("closer-ios")>-1&&setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),z.push({name:"worldcupActivity"})):setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})})}}else Cookies.get("GroukAuth")&&(a&&a.channelCode&&(W.state.CHANNEL_CODE=a.channelCode),z.push({name:"worldcupActivity"}));"worldcupActivity"!=s||Cookies.get("GroukAuth")||z.push({name:"worldcupIndex",params:{channelCode:0}}),r()});var X=z,Z=r("vDqi"),$=r.n(Z),F=$.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3});F.interceptors.request.use(function(e){var t=g.serverDevUrl+e.url;return/a-sandbox.tiejin/.test(window.location.href)?t=g.serverDevUrl+e.url:/a.tiejin/.test(window.location.href)&&(t=g.serverUrl+e.url),e.url=t,W.state.IS_APP?W.state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":W.state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")&&(e.headers.Authorization=Cookies.get("GroukAuth")),p["Indicator"].open(),e},function(e){return p["Indicator"].close(),Promise.reject(e)}),F.interceptors.response.use(function(e){return p["Indicator"].close(),e},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),p["Indicator"].close(),Promise.reject(e)});var K=F,Q=r("p46w"),Y=r.n(Q),ee=r("OjQg"),te=r.n(ee),re=r("xsZ3"),ne=r.n(re);if(/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/10.3.0.5/.test(window.location.href))new te.a;function se(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}window.axios=K,window.Cookies=Y.a,window.MobileDetect=ne.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t),window.WVJBCallbacks=[e]},500)},n["default"].config.productionTip=!1,n["default"].use(d.a),se(),window.onresize=se,new n["default"]({router:X,store:W,render:function(e){return e(l)}}).$mount("#app")},ZCOS:function(e,t,r){},fTFf:function(e,t,r){}});
//# sourceMappingURL=app.71438dff.js.map