(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)s=i[l],o[s]&&p.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},s={5:0},o={5:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{0:"c164d10a",1:"a0a278e8",2:"8815c069",3:"b29a6af1"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={0:1,1:1,2:1,3:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+e+"."+{0:"22198f64",1:"fdb95a98",2:"855e160d",3:"fa7f22a8"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===s))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],u=i.getAttribute("data-href");if(u===r||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,n(o)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){s[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=a);var u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=setTimeout(function(){d({type:"timeout",target:l})},12e4);function d(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");a.type=r,a.request=s,n[1](a)}o[e]=void 0}}l.onerror=l.onload=d,u.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;a.push([4,4]),n()})({4:function(e,t,n){e.exports=n("Vtdi")},Dydj:function(e,t,n){"use strict";var r=n("NPbb"),s=n.n(r);s.a},NPbb:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"App"},i=a,c=(n("Dydj"),n("KHd+")),u=Object(c["a"])(i,s,o,!1,null,"d3673bd4",null),l=u.exports,p=(n("ZCOS"),n("fTFf"),n("dqDD")),d=n.n(p),h=(n("qjXo"),n("f3/d"),n("jE9Z")),f=n("L2JU"),g=(n("ls82"),n("MECJ")),m=n("oyJW"),w={serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",file:"/file/upload/public",admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:Object(m["a"])({add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},"check_guess_result","activity_worldcup.check_guess_result"),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"}};function v(e){return _.apply(this,arguments)}function _(){return _=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.admin.get_code_by_phone,{phone:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),_.apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return y=Object(g["a"])(regeneratorRuntime.mark(function e(t){var n,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.phone,r=t.code,s={phone:n,token:r,protocol:"WEB_SOCKET"},e.next=4,axios.post(w.admin.closeruser_regist,s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return x=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.admin.user_show,{uid:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),x.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.statitics.view_count,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),O.apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return A=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.statitics.get_adcookie,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),A.apply(this,arguments)}var R={namespaced:!0,state:{loginSuccess:!1,chanceBoxShow:!0,loginBoxShow:!1,isApp:!1,sendCode:"发送验证码",countDown:60,deviceType:"",deviceVersion:"",adid:""},mutations:{updateCountDown:function(e){e.countDown=59;var t=setInterval(function(){e.countDown--,e.sendCode=e.countDown+" s",0==e.countDown&&(clearInterval(t),e.countDown=60,e.sendCode="再次发送")},1e3)},viewCount:function(e,t){e.id=t.id}},actions:{viewCount:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,r=t.commit,e.next=3,j(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,o=s.data,s.cookies,r({type:"viewCount",data:o});case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getAdCookies:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.rootState,n.adid&&"0"==n.adid&&delete n["adid"],e.next=4,C(n).catch(function(e){});case 4:r=e.sent,s=r.data,s.result&&(o=s.result,o.udid&&Cookies.set("uid",o.udid,{expires:30}),o.adid&&Cookies.set("aid",o.adid,{expires:30}));case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),checkLogin:function(e){e.state;var t=e.rootState;if(console.log("checkLogin",t.IS_APP),t.IS_APP){var n=t.UA;n.indexOf("closer-ios")>-1&&(console.log("module closer-ios"),setupWebViewJavascriptBridge(function(e){console.log("ios bridge",e),e&&e.callHandler("getUserToken",null,function(e,t){console.log("ios token",e),e?(Cookies.set("GroukAuth",e,{expires:7}),X.push({name:"worldcupActivity"})):(console.log("ios jumpLogin"),setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)}))})}))}},openLoginBox:function(e){var t=e.state,n=e.rootState;if(console.log("openLoginBox",n.IS_APP),n.IS_APP){var r=n.UA;if(r.indexOf("closer-android")>-1){if(console.log("android","undefined"!=typeof window.bridge),"undefined"!=typeof window.bridge){var s=window.bridge.getUserToken(null);console.log("android",s),s?(Cookies.set("GroukAuth",s,{expires:7}),X.push({name:"worldcupActivity"})):(console.log("android jumpLogin"),window.bridge.jumpLogin(null))}}else r.indexOf("closer-ios")>-1&&(console.log("closer-ios",window.WebViewJavascriptBridge),window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(e){console.log("ios bridge",e),e&&e.callHandler("getUserToken",null,function(e,t){console.log("ios token",e),e?(Cookies.set("GroukAuth",e,{expires:7}),X.push({name:"worldcupActivity"})):(console.log("ios jumpLogin"),setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)}))})}))}else t.loginBoxShow=!0,t.chanceBoxShow=!1},getUserById:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,e.next=3,k(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getCode:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,s=t.state,t.rootState,/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(n)){e.next=4;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:if(60!=s.countDown){e.next=10;break}return e.next=8,v(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 8:o=e.sent,o.status&&200==o.status&&(r("updateCountDown"),Object(p["Toast"])("验证码发送成功"));case 10:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),login:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,r=t.rootState,console.log("loginModule",n),!n.phone||/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(n.phone)){e.next=5;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 5:if(0!=n.code.length){e.next=9;break}return Object(p["Toast"])("请输入验证码"),e.abrupt("return");case 9:return Cookies.get("uid")&&(n["udid"]=Cookies.get("uid")),Cookies.get("aid")&&(n["adid"]=Cookies.get("aid")),e.next=13,b(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 13:if(s=e.sent,console.log("loginRes",s),!s.data){e.next=21;break}if(o=s.data,!o.code||0==o.code){e.next=20;break}return Object(p["Toast"])(o.result),e.abrupt("return");case 20:o.result&&o.result.token&&(Cookies.set("GroukAuth",o.result.token,{expires:7}),o.result.user&&Cookies.set("user",JSON.stringify(o.result.user),{expires:7}),o.result.isNewUser&&(r.isNewUser=o.result.isNewUser),console.log("push worldcupActivity"),X.push({name:"worldcupActivity"}));case 21:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};function T(e){return U.apply(this,arguments)}function U(){return U=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.get_user_guess_list,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),U.apply(this,arguments)}function S(e){return L.apply(this,arguments)}function L(){return L=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.get_match_list,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),L.apply(this,arguments)}function B(e){return I.apply(this,arguments)}function I(){return I=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.activity.get_user_guess_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),I.apply(this,arguments)}function P(e){return G.apply(this,arguments)}function G(){return G=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.guess_match,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),G.apply(this,arguments)}function E(e){return D.apply(this,arguments)}function D(){return D=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.check_guess_result,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),D.apply(this,arguments)}function V(e){return J.apply(this,arguments)}function J(){return J=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.activity.receive_chance,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),J.apply(this,arguments)}var N={namespaced:!0,state:{matchList:{},userGuessList:[],userGuessStatistic:{},recieveChanceInfo:{},userGuessResult:{},voteInfo:{logo:"",teamName:"",matchId:"",winTeamId:"",mathResult:"",gustTeamLogo:!1}},mutations:{updateMatchlist:function(e,t){e.matchList=t.data.result.data;for(var n=0,r=e.matchList.length;n<r;n++)"group"!=e.matchList[n].matchType?e.grayBtn=!0:e.grayBtn=!1},updateUserGuesslist:function(e,t){e.userGuessList=t.data.result.data,console.log("userGuessList",e.userGuessList)},updateUserGuessStatistic:function(e,t){e.userGuessStatistic=t.data.result},updateRecieveChance:function(e,t){e.recieveChanceInfo=t.result},updateUserGuessResult:function(e,t){e.userGuessResult=t.result}},actions:{checkRecieveChance:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,s=t.commit,console.log("checkRecieveChance",n),"0"==n.channelCode?(n={},console.log(n)):n["type"]="other",e.next=5,V(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 5:if(o=e.sent,a=o.data,!a.result){e.next=15;break}if(i=a.result,s({type:"updateRecieveChance",result:i}),!(i.count&&i.count>0)){e.next=13;break}return e.next=13,r("getUserGuessStatistic");case 13:e.next=16;break;case 15:Object(p["Toast"])("网络开小差啦，请稍后再试");case 16:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getMatchList:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,S(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:if(s=e.sent,o=s.data,!o.code||0==o.code){e.next=8;break}return Object(p["Toast"])(o.result),e.abrupt("return");case 8:if(!o.result.data||0!=o.result.data.length){e.next=11;break}return Object(p["Toast"])("没有比赛数据"),e.abrupt("return");case 11:r({type:"updateMatchlist",data:o});case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getUserGuessList:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,T(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,o=s.data,r({type:"updateUserGuesslist",data:o});case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),guessMatch:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,t.commit,t.state,console.log("guessMatch",n),e.next=4,P(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 4:if(s=e.sent,o=s.data,console.log(o),!o||0!=o.code){e.next=17;break}return Object(p["Toast"])("投注成功"),e.next=11,r("getUserGuessStatistic");case 11:return e.next=13,r("getMatchList");case 13:return e.next=15,r("getUserGuessList");case 15:e.next=18;break;case 17:Object(p["Toast"])(o.result);case 18:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),setVoteInfo:function(e,t){var n=e.state;console.log("setVoteInfo",t),n.voteInfo=t},checkGuessResult:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,E(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,o=s.data,r("updateUserGuessResult",o);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getUserGuessStatistic:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,n){var r,s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,e.next=3,B(n).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,o=s.data,o.result.totalAwardAmt&&Cookies.set("totalAwardAmt",o.result.totalAwardAmt),r({type:"updateUserGuessStatistic",data:o});case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}};r["default"].use(f["a"]);var W=new f["a"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,CHANNEL_CODE:"0"},modules:{index:R,activity:N}}),H=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"FbUH"))},M=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"7ODX"))},q=function(){return n.e(1).then(n.bind(null,"5pOR"))};r["default"].use(h["a"]);var z=new h["a"]({mode:"history",routes:[{path:"/worldcup/activity",name:"worldcupActivity",component:M,meta:{title:"贴近世界杯 瓜分600万"}},{path:"/worldcup/:channelCode",name:"worldcupIndex",component:H,meta:{title:"领取机会"}},{path:"/worldcup/share/",name:"worldcupShare",component:q,meta:{title:"贴近世界杯 瓜分600万"}}]});z.beforeEach(function(e,t,n){var r=e.meta,s=(e.path,e.name),o=e.params;document.title=r.title?r.title:"贴近",setTimeout(function(){document.title=r.title?r.title:"贴近"},500);var a=navigator.userAgent||window.navigator.userAgent;if(W.state.UA=a.toLowerCase(),a=W.state.UA,(W.state.UA.indexOf("closer-android")>-1||-1!=W.state.UA.indexOf("closer-ios"))&&(W.state.IS_APP=!0,console.log("isApp true")),"worldcupIndex"==s)if(a.indexOf("closer-android")>-1){if(console.log("router android","undefined"!=typeof window.bridge),"undefined"!=typeof window.bridge){var i=window.bridge.getUserToken(null);console.log("android",i),i&&(Cookies.set("GroukAuth",i,{expires:7}),z.push({name:"worldcupActivity"}))}}else if(a.indexOf("closer-ios")>-1){if(W.state.IS_APP){var c=W.state.UA;c.indexOf("closer-ios")>-1&&(console.log("module closer-ios"),setupWebViewJavascriptBridge(function(e){console.log("ios bridge",e),e&&e.callHandler("getUserToken",null,function(e,t){console.log("ios token",e),e?(Cookies.set("GroukAuth",e,{expires:7}),z.push({name:"worldcupActivity"})):(console.log("ios jumpLogin"),setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)}))})}))}}else Cookies.get("GroukAuth")&&(console.log("已登录，直接进活动首页"),o&&o.channelCode&&(W.state.CHANNEL_CODE=o.channelCode),z.push({name:"worldcupActivity"}));"worldcupActivity"!=s||Cookies.get("GroukAuth")||z.push({name:"worldcupIndex",params:{channelCode:0}}),n()});var X=z,Z=n("vDqi"),$=n.n(Z),F=$.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3});F.interceptors.request.use(function(e){console.log(e);var t=w.serverDevUrl+e.url;return/a-sandbox.tiejin/.test(window.location.href)?t=w.serverDevUrl+e.url:/a.tiejin/.test(window.location.href)&&(t=w.serverUrl+e.url),console.log("requrl",t),e.url=t,W.state.IS_APP?W.state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":W.state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")&&(e.headers.Authorization=Cookies.get("GroukAuth")),console.log("axio req header",e),p["Indicator"].open(),e},function(e){return p["Indicator"].close(),Promise.reject(e)}),F.interceptors.response.use(function(e){return p["Indicator"].close(),e},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),p["Indicator"].close(),Promise.reject(e)});var K=F,Q=n("p46w"),Y=n.n(Q),ee=n("OjQg"),te=n.n(ee),ne=n("xsZ3"),re=n.n(ne);if(/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/10.3.0.5/.test(window.location.href))new te.a;function se(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}window.axios=K,window.Cookies=Y.a,window.MobileDetect=re.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t),window.WVJBCallbacks=[e]},500)},r["default"].config.productionTip=!1,r["default"].use(d.a),se(),window.onresize=se,new r["default"]({router:X,store:W,render:function(e){return e(l)}}).$mount("#app")},ZCOS:function(e,t,n){},fTFf:function(e,t,n){}});
//# sourceMappingURL=app.7aea67f9.js.map