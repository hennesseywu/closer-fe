(function(e){function t(t){for(var n,a,o=t[0],c=t[1],u=t[2],p=0,l=[];p<o.length;p++)a=o[p],s[a]&&l.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={8:0},s={8:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{0:"51895de2",1:"b0bdec43",2:"2caf8474",3:"bf189d28",4:"4063fad2",5:"8a261946",6:"6b18134a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={0:1,1:1,2:1,3:1,4:1,5:1,6:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+e+"."+{0:"bf4f5525",1:"2dcf0085",2:"24ba45b1",3:"7c4ffda8",4:"d1698850",5:"dcd67c37",6:"06aaa8ce"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var o=s[i],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===n||u===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){o=p[i],u=o.getAttribute("data-href");if(u===n||u===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.request=n,r(s)},l.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=i);var u=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=o(e);var l=setTimeout(function(){d({type:"timeout",target:p})},12e4);function d(t){p.onerror=p.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}s[e]=void 0}}p.onerror=p.onload=d,u.appendChild(p)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=p;i.push([5,7]),r()})({5:function(e,t,r){e.exports=r("Vtdi")},CriB:function(e,t,r){},Dydj:function(e,t,r){"use strict";var n=r("NPbb"),a=r.n(n);a.a},NPbb:function(e,t,r){},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var n,a=r("Kw5r"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},i=[],o={name:"App"},c=o,u=(r("Dydj"),r("KHd+")),p=Object(u["a"])(c,s,i,!1,null,"d3673bd4",null),l=p.exports,d=(r("ZCOS"),r("CriB"),r("fTFf"),r("dqDD")),h=r.n(d),f=(r("qjXo"),r("a94B")),m=(r("f3/d"),r("ls82"),r("MECJ")),g=r("jE9Z"),w=r("oyJW"),b={serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",wxLoginDevUrl:"https://h5-sandbox.tiejin.cn/redirect?redirectUrl=https://a-sandbox.tiejin.cn/teabar/water-9d3foyvita",wxLoginUrl:"https://h5.tiejin.cn/redirect?redirectUrl=https://a.tiejin.cn/teabar/water-9d3foyvita",file:"/file/upload/public",admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone_v2",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",bind_phone:"closer_account.bind_phone",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:(n={add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},Object(w["a"])(n,"check_guess_result","activity_worldcup.check_guess_result"),Object(w["a"])(n,"activity_water_chance","activity_water.chance"),Object(w["a"])(n,"activity_water_update","activity_water.update"),n),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"}},v=r("L2JU");function x(e){return _.apply(this,arguments)}function _(){return _=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.admin.get_code_by_phone,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),_.apply(this,arguments)}function k(e){return y.apply(this,arguments)}function y(){return y=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.admin.closeruser_regist,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return O=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.admin.user_show,{uid:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),O.apply(this,arguments)}function C(e){return R.apply(this,arguments)}function R(){return R=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.statitics.view_count,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),R.apply(this,arguments)}function T(e){return A.apply(this,arguments)}function A(){return A=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.statitics.get_adcookie,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),A.apply(this,arguments)}var U={namespaced:!0,state:{loginSuccess:!1,chanceBoxShow:!0,loginBoxShow:!1,isApp:!1,sendCode:"发送验证码",countDown:60,deviceType:"",deviceVersion:"",adid:"",timestampNow:0},mutations:{updateCountDown:function(e){e.countDown=59;var t=setInterval(function(){e.countDown--,e.sendCode=e.countDown+" s",0==e.countDown&&(clearInterval(t),e.countDown=60,e.sendCode="再次发送")},1e3)},viewCount:function(e,t){e.id=t.id},updateTimestamp:function(e,t){e.timestampNow=Date.now()}},actions:{updateTimestamp:function(e){var t=e.commit;t("updateTimestamp")},viewCount:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,n=t.commit,e.next=3,C(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:a=e.sent,s=a.data,a.cookies,n({type:"viewCount",data:s});case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getAdCookies:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.rootState,r.adid&&"0"==r.adid&&delete r["adid"],e.next=4,T(r).catch(function(e){});case 4:return n=e.sent,a=n.data,a.result&&(s=a.result,s.udid&&Cookies.set("uid",s.udid,{expires:30})),e.abrupt("return",null);case 8:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),checkLogin:function(e){e.state;var t=e.rootState;if(t.IS_APP){var r=t.UA;r.indexOf("closer-ios")>-1&&setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),ue.push({name:"worldcupActivity"})):setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})})}},openLoginBox:function(e){var t=e.state,r=e.rootState;if(r.IS_APP){var n=r.UA;if(n.indexOf("closer-android")>-1){if("undefined"!=typeof window.bridge){var a=window.bridge.getUserToken(null);a?(Cookies.set("GroukAuth",a,{expires:7}),ue.push({name:"worldcupActivity"})):window.bridge.jumpLogin(null)}}else n.indexOf("closer-ios")>-1&&window.WebViewJavascriptBridge&&setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),ue.push({name:"worldcupActivity"})):setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})})}else t.loginBoxShow=!0,t.chanceBoxShow=!1},getUserById:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,e.next=3,j(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getCode:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,a=t.state,t.rootState,/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(r.phone)){e.next=4;break}return Object(d["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:if(0!=r.grouk_captcha_value.length){e.next=8;break}return Object(d["Toast"])("请输入验证码"),e.abrupt("return");case 8:if(60!=a.countDown){e.next=16;break}return e.next=12,x(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 12:s=e.sent,i=s.data,o=s.status,o&&200==o?"undefined"!=typeof i.code&&(0==i.code?(n("updateCountDown"),Object(d["Toast"])("验证码发送成功")):(3003!=i.code&&n("updateTimestamp"),i.result&&Object(d["Toast"])(i.result))):Object(d["Toast"])("网络开小差啦，请稍后再试");case 16:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),login:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,t.rootState,!r.phone||/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(r.phone)){e.next=4;break}return Object(d["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:if(0!=r.imgCode.length){e.next=8;break}return Object(d["Toast"])("请输入图形验证码"),e.abrupt("return");case 8:if(0!=r.token.length){e.next=11;break}return Object(d["Toast"])("请输入验证码"),e.abrupt("return");case 11:return Cookies.get("uid")&&(r["udid"]=Cookies.get("uid")),Cookies.get("aid")&&(r["adid"]=Cookies.get("aid")),r["protocol"]="WEB_SOCKET",e.next=16,k(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 16:if(n=e.sent,a=n.data,"undefined"==typeof a.code){e.next=31;break}if(!a.result||!a.result.token){e.next=28;break}if(Cookies.set("GroukAuth",a.result.token,{expires:60}),!a.result.user){e.next=25;break}if(Cookies.set("user",JSON.stringify(a.result.user),{expires:60}),!r.push){e.next=25;break}return e.abrupt("return",a.result.user);case 25:ue.push({name:"worldcupActivity"}),e.next=29;break;case 28:a.result&&Object(d["Toast"])(a.result);case 29:e.next=33;break;case 31:return Object(d["Toast"])("网络开小差啦，请稍后再试"),e.abrupt("return");case 33:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};function S(e){return L.apply(this,arguments)}function L(){return L=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.get_user_guess_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),L.apply(this,arguments)}function B(e){return I.apply(this,arguments)}function I(){return I=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.get_match_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),I.apply(this,arguments)}function G(e){return P.apply(this,arguments)}function P(){return P=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.get_user_guess_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),P.apply(this,arguments)}function D(e){return E.apply(this,arguments)}function E(){return E=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.guess_match,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),E.apply(this,arguments)}function J(e){return V.apply(this,arguments)}function V(){return V=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.check_guess_result,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),V.apply(this,arguments)}function W(e){return N.apply(this,arguments)}function N(){return N=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.receive_chance,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),N.apply(this,arguments)}var H={namespaced:!0,state:{matchList:"",userGuessList:[],userGuessStatistic:{},recieveChanceInfo:{},userGuessResult:{},voteInfo:{logo:"",teamName:"",matchId:"",winTeamId:"",mathResult:"",gustTeamLogo:!1}},mutations:{updateMatchlist:function(e,t){e.matchList=t.data.result.data;for(var r=0,n=e.matchList.length;r<n;r++)"group"!=e.matchList[r].matchType?e.grayBtn=!0:e.grayBtn=!1},updateUserGuesslist:function(e,t){e.userGuessList=t.data.result.data},updateUserGuessStatistic:function(e,t){e.userGuessStatistic=t.data.result},updateRecieveChance:function(e,t){e.recieveChanceInfo=t.result},updateUserGuessResult:function(e,t){e.userGuessResult=t.result}},actions:{checkRecieveChance:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,a=t.commit,s={},"0"!=Cookies.get("aid")&&(s["channelCode"]=Cookies.get("aid"),s["type"]="other"),e.next=5,W(s).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 5:if(i=e.sent,o=i.data,"undefined"==typeof o.code){e.next=19;break}if(0!=o.code){e.next=16;break}if(c=o.result,a({type:"updateRecieveChance",result:c}),!(c.count&&c.count>0)){e.next=14;break}return e.next=14,n("getUserGuessStatistic");case 14:e.next=17;break;case 16:Cookies.set("aid","illegalAid",{expires:30});case 17:e.next=20;break;case 19:Object(d["Toast"])("网络开小差啦，请稍后再试");case 20:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getMatchList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,B(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:if(a=e.sent,s=a.data,!s.code||0==s.code){e.next=8;break}return Object(d["Toast"])(s.result),e.abrupt("return");case 8:n({type:"updateMatchlist",data:s});case 9:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,S(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:a=e.sent,s=a.data,n({type:"updateUserGuesslist",data:s});case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),guessMatch:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,t.commit,t.state,e.next=3,D(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:if(a=e.sent,s=a.data,!s||0!=s.code){e.next=15;break}return Object(d["Toast"])("竞猜成功"),e.next=9,n("getUserGuessStatistic");case 9:return e.next=11,n("getMatchList");case 11:return e.next=13,n("getUserGuessList");case 13:e.next=16;break;case 15:Object(d["Toast"])(s.result);case 16:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),setVoteInfo:function(e,t){var r=e.state;r.voteInfo=t},checkGuessResult:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,J(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:a=e.sent,s=a.data,n("updateUserGuessResult",s);case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessStatistic:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,G(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:a=e.sent,s=a.data,s.result.totalAwardAmt&&Cookies.set("totalAwardAmt",s.result.totalAwardAmt),n({type:"updateUserGuessStatistic",data:s});case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}},M=r("vhlf");function q(e){return $.apply(this,arguments)}function $(){return $=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.admin.get_auth_path,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),$.apply(this,arguments)}function z(e){return K.apply(this,arguments)}function K(){return K=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.admin.login_with_wechat,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),K.apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return Z=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.admin.bind_phone,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),Z.apply(this,arguments)}function F(e){return Q.apply(this,arguments)}function Q(){return Q=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.activity_water_chance,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),Q.apply(this,arguments)}function Y(e){return ee.apply(this,arguments)}function ee(){return ee=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(b.activity.activity_water_update,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),ee.apply(this,arguments)}var te={namespaced:!0,state:{sendCode:"发送验证码",countDown:60,timestampNow:0},mutations:{updateMatchlist:function(e,t){e.matchList=t.data.result.data;for(var r=0,n=e.matchList.length;r<n;r++)"group"!=e.matchList[r].matchType?e.grayBtn=!0:e.grayBtn=!1},updateTimestamp:function(e,t){e.timestampNow=Date.now()}},actions:{updateTimestamp:function(e){var t=e.commit;t("updateTimestamp")},bindPhone:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,t.rootState,console.log("bindPhone",r),!r.phone||/^(0|86|17951)?(1[23456789][0-9])[0-9]{8}$/.test(r.phone)){e.next=5;break}return Object(d["Toast"])("请输入正确的手机号"),e.abrupt("return");case 5:if(0!=r.code.length){e.next=9;break}return Object(d["Toast"])("请输入验证码"),e.abrupt("return");case 9:if(0!=r.imgCode.length){e.next=12;break}return Object(d["Toast"])("请输入图形验证码"),e.abrupt("return");case 12:return e.next=14,X(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 14:if(n=e.sent,a=n.data,"undefined"==typeof a.code){e.next=25;break}if(0!=a.code){e.next=21;break}return e.abrupt("return",!0);case 21:return Object(d["Toast"])(a.result),e.abrupt("return",!1);case 23:e.next=27;break;case 25:return Object(d["Toast"])("网络开小差啦，请稍后再试"),e.abrupt("return",!1);case 27:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),checkLogin:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.state,n=t.rootState,console.log("checkLogin",n.IS_APP),a=n.UA,a.indexOf("closer-ios")>-1?(console.log("module closer-ios"),setupWebViewJavascriptBridge(function(e){console.log("ios bridge",e),e&&e.callHandler("getUserToken",null,function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("ios token",t),!t){e.next=11;break}return Cookies.set("GroukAuth",t,{expires:7}),e.next=5,axios.post(b.admin.user_show).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 5:a=e.sent,s=a.data,console.log("ios",s.result),s.result?(r(!0),Cookies.set("user",JSON.stringify(s.result),{expires:60})):r(),e.next=14;break;case 11:console.log("ios jumpLogin"),setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)}),r();case 14:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}())})):r();case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getAuthPath:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.rootState,t.state,console.log("getAUth"),a={path:b.wxLoginUrl},n.IS_DEV&&(a.path=b.wxLoginDevUrl),e.next=6,q(a).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 6:s=e.sent,i=s.data,"undefined"!=typeof i.code&&0==i.code&&(location.href=i.result);case 9:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),loginWithWechat:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.rootState,n={plateform:2,protocol:"WEB_SOCKET"},n["code"]=r,e.next=5,z(n).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 5:if(a=e.sent,s=a.data,"undefined"==typeof s.code||0!=s.code){e.next=12;break}return console.log("loginWithWechat",s.result),e.abrupt("return",s.result);case 12:return Object(d["Toast"])("微信认证异常"),location.href=b.wxLoginDevUrl,e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),waterChance:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return Object(M["a"])(t),e.next=3,F(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 3:if(n=e.sent,a=n.data,"undefined"==typeof a.code||0!=a.code){e.next=9;break}return e.abrupt("return",a.result);case 9:return Object(d["Toast"])("网络开小差啦，请稍后再试"),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),waterUpdate:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(Object(M["a"])(t),0!=r.name.length){e.next=4;break}return Object(d["Toast"])("请输入真实姓名"),e.abrupt("return");case 4:if(0!=r.address.length){e.next=7;break}return Object(d["Toast"])("请输入收获地址"),e.abrupt("return");case 7:return e.next=9,Y(r).catch(function(e){Object(d["Toast"])("网络开小差啦，请稍后再试")});case 9:if(n=e.sent,a=n.data,"undefined"==typeof a.code||0!=a.code){e.next=15;break}return e.abrupt("return",a.result);case 15:return Object(d["Toast"])("网络开小差啦，请稍后再试"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};a["default"].use(v["a"]);var re=new v["a"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,IS_DEV:!1},modules:{index:U,activity:H,tbLogin:te}}),ne=function(){return Promise.all([r.e(0),r.e(1),r.e(6)]).then(r.bind(null,"FbUH"))},ae=function(){return Promise.all([r.e(0),r.e(1),r.e(5)]).then(r.bind(null,"7ODX"))},se=function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"5pOR"))},ie=function(){return r.e(3).then(r.bind(null,"CrtJ"))},oe=function(){return r.e(2).then(r.bind(null,"jMpL"))};a["default"].use(g["a"]);var ce=new g["a"]({mode:"history",routes:[{path:"/worldcup/activity",name:"worldcupActivity",component:ae,meta:{title:"贴近世界杯 瓜分600万"}},{path:"/worldcup/:channelCode",name:"worldcupIndex",component:ne,meta:{title:"领取机会"}},{path:"/worldcup/share/",name:"worldcupShare",component:se,meta:{title:"贴近世界杯 瓜分600万"}},{path:"/landing",name:"landing",component:ie,meta:{title:"贴近Closer"}},{path:"/teabar/:channelCode",name:"Tblogin",component:oe,meta:{title:"贴近Closer"}}]});ce.beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r,n){var a,s,i,o,c,u,p,l,d,h,m,g,w;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.meta,t.path,s=t.name,i=t.params,o=t.query,document.title=a.title?a.title:"贴近",c=navigator.userAgent||window.navigator.userAgent,c=c.toLowerCase(),re.state.UA=c,(re.state.UA.indexOf("closer-android")>-1||-1!=re.state.UA.indexOf("closer-ios"))&&(re.state.IS_APP=!0),"worldcupIndex"!=s){e.next=12;break}Cookies.set("aid","0",{expires:30}),i.channelCode&&"0"!=i.channelCode&&Cookies.set("aid",i.channelCode,{expires:30}),c.indexOf("closer-android")>-1?("undefined"!=typeof window.bridge&&(u=window.bridge.getUserToken(null),u?(Cookies.set("GroukAuth",u,{expires:7}),ce.push({name:"worldcupActivity"})):window.bridge.jumpLogin(null)),n()):c.indexOf("closer-ios")>-1?(re.state.IS_APP&&(p=re.state.UA,p.indexOf("closer-ios")>-1&&setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),ce.push({name:"worldcupActivity"})):setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})})),n()):(Cookies.get("GroukAuth")&&(i&&i.channelCode&&Cookies.set("aid",i.channelCode,{expires:30}),ce.push({name:"worldcupActivity"})),n()),e.next=49;break;case 12:if(!(s="tbLogin")){e.next=49;break}if(console.log("getAUth"),!(c.indexOf("closer-android")>-1)){e.next=34;break}if(console.log("closer-android"),console.log("router android","undefined"!=typeof window.bridge),"undefined"==typeof window.bridge){e.next=32;break}if(l=window.bridge.getUserToken(null),console.log("android",l),!l){e.next=30;break}return Cookies.set("GroukAuth",l,{expires:7}),e.next=24,axios.post(b.admin.user_show,i).catch(function(e){Toast("网络开小差啦，请稍后再试")});case 24:d=e.sent,h=d.data,console.log("android",h.result.user),h.result.user&&(Cookies.set("user",JSON.stringify(h.result.user),{expires:60}),n()),e.next=32;break;case 30:console.log("android jumpLogin"),window.bridge.jumpLogin(null);case 32:e.next=49;break;case 34:if(!(c.indexOf("closer-ios")>-1)){e.next=39;break}console.log("closer-ios"),n(),e.next=49;break;case 39:if(!o.code){e.next=42;break}return n(),e.abrupt("return");case 42:return m={path:b.wxLoginUrl},m.path=b.wxLoginDevUrl,e.next=46,axios.post(b.admin.get_auth_path,m).catch(function(e){Toast("网络开小差啦，请稍后再试")});case 46:g=e.sent,w=g.data,void 0!=Object(f["a"])(w.code)&&0==w.code&&(location.href=w.result);case 49:"worldcupActivity"!=s||Cookies.get("GroukAuth")||(ce.push({name:"worldcupIndex",params:{channelCode:0}}),n());case 50:case"end":return e.stop()}},e,this)}));return function(t,r,n){return e.apply(this,arguments)}}());var ue=ce,pe=r("vDqi"),le=r.n(pe),de=le.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3,withCredentials:!0});de.interceptors.request.use(function(e){var t=b.serverDevUrl+e.url;return/a-sandbox.tiejin/.test(window.location.href)?t=b.serverDevUrl+e.url:/a.tiejin/.test(window.location.href)&&(t=b.serverUrl+e.url),e.url=t,re.state.IS_APP?re.state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":re.state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),(Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")||Cookies.get("GroukAuth")&&-1!=e.url.indexOf("closer_account.bind_phone"))&&(e.headers.Authorization=Cookies.get("GroukAuth")),d["Indicator"].open(),e},function(e){return d["Indicator"].close(),Promise.reject(e).catch(e)}),de.interceptors.response.use(function(e){return d["Indicator"].close(),e},function(e){var t=r("B/eG").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),d["Indicator"].close(),t.reject(e).catch(e)});var he=de,fe=r("p46w"),me=r.n(fe),ge=r("OjQg"),we=r.n(ge),be=r("xsZ3"),ve=r.n(be);if(/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/10.3.0.333/.test(window.location.href)){new we.a;re.state.IS_DEV=!0}function xe(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}window.axios=he,window.Cookies=me.a,window.MobileDetect=ve.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t),window.WVJBCallbacks=[e]},500)},a["default"].config.productionTip=!1,a["default"].use(h.a),xe(),window.onresize=xe,new a["default"]({store:re,router:ue,render:function(e){return e(l)}}).$mount("#app")},ZCOS:function(e,t,r){},fTFf:function(e,t,r){}});
//# sourceMappingURL=app.750fa7fc.js.map