(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)s=c[l],a[s]&&p.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={5:0},a={5:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{0:"9af787a8",1:"36936bc1",2:"480e47dc",3:"8ae09bce"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={0:1,1:1,2:1,3:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+e+"."+{0:"4a973874",1:"c13c7411",2:"92141b3a",3:"30728c50"}[e]+".css",s=i.p+n,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var c=a[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){c=l[o],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,r(a)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){s[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=o);var u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=setTimeout(function(){d({type:"timeout",target:l})},12e4);function d(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");o.type=n,o.request=s,r[1](o)}a[e]=void 0}}l.onerror=l.onload=d,u.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;o.push([4,4]),r()})({4:function(e,t,r){e.exports=r("Vtdi")},Dydj:function(e,t,r){"use strict";var n=r("NPbb"),s=r.n(n);s.a},NPbb:function(e,t,r){},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var n=r("Kw5r"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],o={name:"App"},c=o,i=(r("Dydj"),r("KHd+")),u=Object(i["a"])(c,s,a,!1,null,"d3673bd4",null),l=u.exports,p=(r("ZCOS"),r("fTFf"),r("dqDD")),d=r.n(p),h=(r("qjXo"),r("f3/d"),r("jE9Z")),f=r("L2JU"),m=(r("ls82"),r("MECJ")),g=r("oyJW"),w={serverUrl:"https://api-sandbox.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",file:"/file/upload/public",admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:Object(g["a"])({add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},"check_guess_result","activity_worldcup.check_guess_result")};function v(e){return _.apply(this,arguments)}function _(){return _=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.admin.get_code_by_phone,{phone:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),_.apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return y=Object(m["a"])(regeneratorRuntime.mark(function e(t){var r,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.phone,n=t.code,s={phone:r,token:n,protocol:"WEB_SOCKET"},e.next=4,axios.post(w.admin.closeruser_regist,s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return k=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.admin.user_show,{uid:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),k.apply(this,arguments)}var j={namespaced:!0,state:{loginSuccess:!1,chanceBoxShow:!0,loginBoxShow:!1,isApp:!1,sendCode:"发送验证码"},mutations:{updateCountDown:function(e){e.sendCode=59;var t=setInterval(function(){e.sendCode--,0==e.sendCode&&(clearInterval(t),e.sendCode="再次发送")},1e3)}},actions:{openLoginBox:function(e){var t=e.state,r=e.rootState;if(r.IS_APP){var n=r.UA;if(console.log("ua",n),n.indexOf("closer-andriod")>0){if("undefined"!=typeof window.bridge){var s=window.bridge.getUserToken(null);Cookies.set("GroukAuth",s,{expires:7}),config.headers.Authorization=s}}else n.indexOf("closer-ios")>0&&window.WebViewJavascriptBridge&&bridge.callHandler("getUserToken",null,function(e,t){e?(Cookies.set("GroukAuth",e,{expires:7}),config.headers.Authorization=e):JsBridge.setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})}else t.loginBoxShow=!0,t.chanceBoxShow=!1},getUserById:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,e.next=3,x(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getCode:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,t.state,t.rootState,/^(0|86|17951)?(13[0-9]|15[012356789]|16[012356789|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(r)){e.next=4;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:return e.next=7,v(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 7:s=e.sent,s.status&&200==s.status&&(n("updateCountDown"),Object(p["Toast"])("验证码发送成功"));case 9:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),login:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,n=t.rootState,console.log("loginModule",r),!r.phone||/^(0|86|17951)?(12[0-9]|13[0-9]|15[012356789]|16[012356789|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(r.phone)){e.next=5;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 5:if(0!=r.code.length){e.next=9;break}return Object(p["Toast"])("请输入验证码"),e.abrupt("return");case 9:return e.next=11,b(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 11:if(s=e.sent,console.log("loginRes",s),!s.data){e.next=19;break}if(a=s.data,!a.code||0==a.code){e.next=18;break}return Object(p["Toast"])(a.result),e.abrupt("return");case 18:a.result&&a.result.token&&(a.result.user&&Cookies.set("user",JSON.stringify(a.result.user),{expires:7}),a.result.isNewUser&&(n.isNewUser=a.result.isNewUser),Cookies.set("GroukAuth",a.result.token,{expires:7}),V.push({name:"worldcupActivity"}));case 19:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};function O(e){return R.apply(this,arguments)}function R(){return R=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.get_user_guess_list,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),R.apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return A=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.activity.get_match_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),A.apply(this,arguments)}function T(e){return U.apply(this,arguments)}function U(){return U=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.activity.get_user_guess_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),U.apply(this,arguments)}function G(e){return S.apply(this,arguments)}function S(){return S=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.guess_match,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),S.apply(this,arguments)}function I(e){return B.apply(this,arguments)}function B(){return B=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(w.activity.check_guess_result,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),B.apply(this,arguments)}function E(e){return L.apply(this,arguments)}function L(){return L=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(w.activity.receive_chance,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),L.apply(this,arguments)}var P={namespaced:!0,state:{grayBtn:!1,matchList:{},userGuessList:[],userGuessStatistic:{},recieveChanceInfo:{},userGuessResult:{},voteInfo:{logo:"",matchId:"",winTeamId:"",mathResult:""}},mutations:{updateMatchlist:function(e,t){e.matchList=t.data.result.data;for(var r=0,n=e.matchList.length;r<n;r++)"group"==e.matchList[r].matchType?e.grayBtn=!0:e.grayBtn=!1},updateUserGuesslist:function(e,t){console.log(1,t),e.userGuessList=t.data.result.data,console.log("userGuessList",e.userGuessList)},updateUserGuessStatistic:function(e,t){console.log(2,t),e.userGuessStatistic=t.data.result},updateRecieveChance:function(e,t){e.recieveChanceInfo=t.result},updateUserGuessResult:function(e,t){e.userGuessResult=t.result}},actions:{checkRecieveChance:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,console.log("checkRecieveChance",r),r&&r.channelCode&&("0"==r.channelCode||""==r.channelCode)&&(r={},console.log(r)),e.next=5,E(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 5:s=e.sent,a=s.data,a.result?(o=a.result,n({type:"updateRecieveChance",result:o})):Object(p["Toast"])("网络开小差啦，请稍后再试");case 8:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getMatchList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,C(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:if(s=e.sent,a=s.data,!a.code||0==a.code){e.next=8;break}return Object(p["Toast"])(a.result),e.abrupt("return");case 8:if(!a.result.data||0!=a.result.data.length){e.next=11;break}return Object(p["Toast"])("没有比赛数据"),e.abrupt("return");case 11:n({type:"updateMatchlist",data:a});case 12:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,O(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,n({type:"updateUserGuesslist",data:a});case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),guessMatch:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,t.commit,t.state,console.log("guessMatch",r),e.next=4,G(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 4:if(s=e.sent,a=s.data,console.log(a),!a||0!=a.code){e.next=17;break}return Object(p["Toast"])("投注成功"),e.next=11,n("getUserGuessStatistic");case 11:return e.next=13,n("getMatchList");case 13:return e.next=15,n("getUserGuessList");case 15:e.next=18;break;case 17:Object(p["Toast"])(a.result);case 18:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),setVoteInfo:function(e,t){var r=e.state;console.log("setVoteInfo",t),r.voteInfo=t},checkGuessResult:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,I(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,n("updateUserGuessResult",a);case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessStatistic:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,T(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,a.result.totalAwardAmt&&Cookies.set("totalAwardAmt",a.result.totalAwardAmt),n({type:"updateUserGuessStatistic",data:a});case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};n["default"].use(f["a"]);var N=new f["a"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1,CHANNEL_CODE:""},modules:{index:j,activity:P}}),J=function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"FbUH"))},D=function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"7ODX"))},M=function(){return r.e(1).then(r.bind(null,"5pOR"))};n["default"].use(h["a"]);var H=new h["a"]({mode:"history",routes:[{path:"/worldcup/:channelCode",name:"worldcupIndex",component:J,meta:{title:"领取机会"}},{path:"/worldcup/activity/",name:"worldcupActivity",component:D,meta:{title:"贴近世界杯 瓜分600万"}},{path:"/worldcup/share/",name:"worldcupShare",component:M,meta:{title:"贴近世界杯 瓜分600万"}}]});H.beforeEach(function(e,t,r){var n=e.meta,s=(e.path,e.name),a=e.params;document.title=n.title?n.title:"贴近",setTimeout(function(){document.title=n.title?n.title:"贴近"},500);var o=navigator.userAgent.toLowerCase()||window.navigator.userAgent.toLowerCase();N.state.UA=o,(o.indexOf("closer-andriod")>0||o.indexOf("closer-ios")>0)&&(N.state.IS_APP=!0),Cookies.get("GroukAuth")&&"worldcupIndex"==s&&(console.log("已登录，直接进活动首页"),a&&a.channelCode&&(N.state.CHANNEL_CODE=a.channelCode),H.push({name:"worldcupActivity"})),"worldcupActivity"!=s||Cookies.get("GroukAuth")||H.push({name:"worldcupIndex"}),r()});var V=H,q=r("vDqi"),z=r.n(q);z.a.interceptors.request.use(function(e){var t=w.devserverUrl+e.url;/sandbox.tiejin/.test(e.url)?t=w.serverDevUrlv:/tiejin/.test(e.url)&&(t=w.serverUrl),e.headers["Closer-Agent"]="Closer-H5",Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")&&(e.headers.Authorization=Cookies.get("GroukAuth"));var r=N.state.UA;if(console.log("ua: ",r),r.indexOf("closer-andriod")>0){if("undefined"!=typeof window.bridge){var n=window.bridge.getUserToken(null);Cookies.set("GroukAuth",n,{expires:7}),e.headers.Authorization=n}}else{if(!(r.indexOf("closer-ios")>0))return console.log("header",e),e.url=t,p["Indicator"].open(),e;window.WebViewJavascriptBridge&&bridge.callHandler("getUserToken",null,function(t,r){t?(Cookies.set("GroukAuth",t,{expires:7}),e.headers.Authorization=t):JsBridge.setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)})})}},function(e){return p["Indicator"].close(),Promise.reject(e)}),z.a.interceptors.response.use(function(e){return p["Indicator"].close(),e},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),p["Indicator"].close(),Promise.reject(e)});var W=z.a,$=r("p46w"),F=r.n($);var K=r("OjQg"),Z=r.n(K);new Z.a;function X(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}window.axios=W,window.Cookies=F.a,window.JsBridge=void 0,n["default"].config.productionTip=!1,n["default"].use(d.a),X(),window.onresize=X,new n["default"]({router:V,store:N,render:function(e){return e(l)}}).$mount("#app")},ZCOS:function(e,t,r){},fTFf:function(e,t,r){}});
//# sourceMappingURL=app.97b585cb.js.map