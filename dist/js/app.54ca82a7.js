(function(e){function t(t){for(var n,s,c=t[0],i=t[1],o=t[2],l=0,p=[];l<c.length;l++)s=c[l],a[s]&&p.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(p.length)p.shift()();return u.push.apply(u,o||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={4:0},a={4:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{0:"ab1b8966",1:"82f88d60",2:"8bcb922c"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={0:1,1:1,2:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+e+"."+{0:"5b9f71dc",1:"4f492a31",2:"952d5b67"}[e]+".css",s=i.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],o=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===n||o===s))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],o=c.getAttribute("data-href");if(o===n||o===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.request=n,r(a)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){s[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=u);var o=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=setTimeout(function(){m({type:"timeout",target:l})},12e4);function m(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");u.type=n,u.request=s,r[1](u)}a[e]=void 0}}l.onerror=l.onload=m,o.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var p=0;p<o.length;p++)t(o[p]);var m=l;u.push([4,3]),r()})({4:function(e,t,r){e.exports=r("Vtdi")},Dydj:function(e,t,r){"use strict";var n=r("NPbb"),s=r.n(n);s.a},NPbb:function(e,t,r){},Vtdi:function(e,t,r){"use strict";r.r(t);r("VRzm");var n=r("Kw5r"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],u={name:"App"},c=u,i=(r("Dydj"),r("KHd+")),o=Object(i["a"])(c,s,a,!1,null,"d3673bd4",null),l=o.exports,p=(r("ZCOS"),r("fTFf"),r("dqDD")),m=r.n(p),h=(r("qjXo"),r("jE9Z")),d=r("L2JU"),g=(r("ls82"),r("MECJ")),f=r("oyJW"),v={serverUrl:"https://api-sandbox.tiejin.cn/command/",devserverUrl:"http://192.168.156.232:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",file:"/file/upload/public",admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:Object(f["a"])({add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},"check_guess_result","activity_worldcup.check_guess_result")};function _(e){return w.apply(this,arguments)}function w(){return w=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(v.admin.get_code_by_phone,{phone:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),w.apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return y=Object(g["a"])(regeneratorRuntime.mark(function e(t){var r,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.phone,n=t.code,s={phone:r,token:n,protocol:"WEB_SOCKET"},e.next=4,axios.post(v.admin.closeruser_regist,s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)})),y.apply(this,arguments)}function x(e){return k.apply(this,arguments)}function k(){return k=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(v.admin.user_show,{uid:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),k.apply(this,arguments)}var T={namespaced:!0,state:{loginSuccess:!1,chanceBoxShow:!1,loginBoxShow:!0,isApp:!1},actions:{getUserById:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.state,e.next=3,x(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getCode:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,t.rootState,/^(0|86|17951)?(13[0-9]|15[012356789]|16[012356789|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(r)){e.next=4;break}return Object(p["Toast"])("请输入正确的手机号"),e.abrupt("return");case 4:return e.next=7,_(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 7:n=e.sent,n.status&&200==n.status&&Object(p["Toast"])("验证码发送成功");case 9:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),login:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit,t.state,n=t.rootState,0!=r.code.length){e.next=4;break}return Object(p["Toast"])("请输入验证码"),e.abrupt("return");case 4:return e.next=6,b(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 6:if(s=e.sent,console.log("loginRes",s),!s.data){e.next=14;break}if(a=s.data,!a.code||0==a.code){e.next=13;break}return Object(p["Toast"])(a.result),e.abrupt("return");case 13:a.result&&a.result.token&&(a.result.user&&Cookies.set("user",JSON.stringify(a.result.user),{expires:7}),a.result.isNewUser&&(n.isNewUser=a.result.isNewUser),Cookies.set("GroukAuth",a.result.token,{expires:7}),J.push("/activity"));case 14:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};function j(e){return R.apply(this,arguments)}function R(){return R=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(v.activity.get_user_guess_list,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),R.apply(this,arguments)}function O(e){return I.apply(this,arguments)}function I(){return I=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(v.activity.get_match_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),I.apply(this,arguments)}function S(e){return U.apply(this,arguments)}function U(){return U=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(v.activity.get_user_guess_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),U.apply(this,arguments)}function A(e){return C.apply(this,arguments)}function C(){return C=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service",t),e.next=3,axios.post(v.activity.guess_match,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),C.apply(this,arguments)}function G(e){return L.apply(this,arguments)}function L(){return L=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(v.activity.receive_chance,{channelCode:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),L.apply(this,arguments)}var B={namespaced:!0,state:{grayBtn:!1,matchList:{},userGuessList:[],userGuessStatistic:{},recieveChanceInfo:{},userGuessResult:{},voteInfo:{logo:"",matchId:"",winTeamId:"",mathResult:""}},mutations:{updateMatchlist:function(e,t){e.matchList=t.data.result.data;for(var r=0,n=e.matchList.length;r<n;r++)"group"==e.matchList[r].matchType?e.grayBtn=!0:e.grayBtn=!1},updateUserGuesslist:function(e,t){console.log(1,t),e.userGuessList=t.data.result.data,console.log("userGuessList",e.userGuessList)},updateUserGuessStatistic:function(e,t){console.log(2,t),e.userGuessStatistic=t.data.result},updateRecieveChance:function(e,t){e.recieveChanceInfo=t.result},updateUserGuessResult:function(e,t){e.userGuessResult=t.result}},actions:{checkRecieveChance:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,G(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,a.result?(u={presentAvailable:!0,count:1111,status:!1},n({type:"updateRecieveChance",result:u})):Object(p["Toast"])("网络开小差啦，请稍后再试");case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getMatchList:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,O(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:if(s=e.sent,a=s.data,!a.code||0==a.code){e.next=8;break}return Object(p["Toast"])(a.result),e.abrupt("return");case 8:if(!a.result.data||0!=a.result.data.length){e.next=11;break}return Object(p["Toast"])("没有比赛数据"),e.abrupt("return");case 11:n({type:"updateMatchlist",data:a});case 12:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessList:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,j(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,n({type:"updateUserGuesslist",data:a});case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),guessMatch:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,t.commit,t.state,console.log("guessMatch",r),e.next=4,A(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 4:return s=e.sent,s.data,s.code,e.next=9,n("getUserGuessStatistic");case 9:return e.next=11,n("getMatchList");case 11:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),setVoteInfo:function(e,t){var r=e.state;console.log("setVoteInfo",t),r.voteInfo=t},checkGuessResult:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,s={result:{totalGuessPerson:0,totalBingoPerson:0,guessMatchList:[{matchDate:"2018-06-07 18:00:00",settleStatus:"pending",gustTeamId:"4",matchType:"knockout",userGuess:{matchType:"group",matchResult:"equal",updateTime:1528401223e3,guessTimes:1,userName:"test",guessResult:"bingo",uid:"9cuTjllpID",createTime:1528401223e3,phone:"12000000001",winTeamId:3,awardAmt:101,guessId:2,matchId:0xcde672e00000f8,status:!1},matchDesc:"5:4",matchResult:"win",updateTime:1528411754e3,activityId:"1",matchLongDate:0,createTime:1528251799e3,gustTeam:{teamName:"乌拉圭",createTime:1528343048e3,teamId:4,logo:"https://file.tiejin.cn/public/9m1UH3oRS1/uruguay%402x.png",teamDesc:"A",updateTime:1528343048e3,teamStatus:"pending",status:!1},winTeamId:"3",homeTeam:{teamName:"埃及",createTime:1528343048e3,teamId:3,logo:"https://file.tiejin.cn/public/9m1DYy63Z2/egypt%402x.png",teamDesc:"A",updateTime:1528343048e3,teamStatus:"pending",status:!1},startTime:15283656e5,endTime:15283656e5,homeTeamId:"3",matchId:"57955751284441333",status:!1},{matchDate:"2018-06-20 15:15:00",settleStatus:"pending",gustTeamId:"6",matchType:"group",userGuess:{matchType:"group",matchResult:"equal",updateTime:1528401223e3,guessTimes:1,userName:"test",guessResult:"fail",uid:"9cuTjllpID",createTime:1528401223e3,phone:"12000000001",winTeamId:3,awardAmt:0,guessId:3,matchId:0xce2e46800000f0,status:!1},updateTime:15283989e5,activityId:"4",matchLongDate:0,createTime:15283989e5,gustTeam:{teamName:"西班牙",createTime:1528343048e3,teamId:6,logo:"https://file.tiejin.cn/public/9m1Qukt3TM/spain%402x.png",teamDesc:"B",updateTime:1528343048e3,teamStatus:"pending",status:!1},winTeamId:"0",homeTeam:{teamName:"秘鲁",createTime:1528343048e3,teamId:11,logo:"https://file.tiejin.cn/public/9m1L3B9E81/peru%402x.png",teamDesc:"C",updateTime:1528343048e3,teamStatus:"pending",status:!1},startTime:15294789e5,endTime:15294789e5,homeTeamId:"11",matchId:"58034725532467440",status:!1}],guessResult:!0},code:0},n("updateUserGuessResult",s),console.log(s);case 4:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),getUserGuessStatistic:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,t.state,e.next=3,S(r).catch(function(e){Object(p["Toast"])("网络开小差啦，请稍后再试")});case 3:s=e.sent,a=s.data,n({type:"updateUserGuessStatistic",data:a});case 6:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}};n["default"].use(d["a"]);var D=new d["a"].Store({state:{UA:"",IS_APP:!1,IS_NEW_USER:!1},modules:{index:T,activity:B}}),E=function(){return r.e(2).then(r.bind(null,"FbUH"))},P=function(){return r.e(1).then(r.bind(null,"7ODX"))},N=function(){return r.e(0).then(r.bind(null,"5pOR"))};n["default"].use(h["a"]);var M=new h["a"]({mode:"history",routes:[{path:"/",name:"首页",component:E,meta:{title:"领取机会"}},{path:"/activity",name:"贴近世界杯 瓜分600万",component:P,meta:{title:"贴近世界杯 瓜分600万"}},{path:"/share/:id/:amount",name:"贴近世界杯 瓜分600",component:N,meta:{title:"贴近世界杯 瓜分600"}}]});M.beforeEach(function(e,t,r){var n=e.meta,s=e.path;document.title=n.title?n.title:"贴近",setTimeout(function(){document.title=n.title?n.title:"贴近"},500);var a=navigator.userAgent.toLowerCase()||window.navigator.userAgent.toLowerCase();D.state.UA=a,-1==a.indexOf("closer-andriod")&&-1==a.indexOf("closer-ios")||(D.state.IS_APP=!0),!Cookies.get("GroukAuth")||"/"!=s&&"/index"!=s||(console.log("已登录，直接进活动首页"),M.push("/activity")),r()});var J=M,q=r("vDqi"),H=r.n(q);H.a.interceptors.request.use(function(e){var t=v.serverUrl+e.url;if(/sandbox.tiejin/.test(e.url)?t=v.serverDevUrlv:/tiejin/.test(e.url)&&(t=v.serverUrl),e.headers["Closer-Agent"]="Closer-H5",Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")&&(e.headers.Authorization=Cookies.get("GroukAuth")),console.log("header",e),D.state.UA.indexOf("closer-andriod")>0);else{if(!(D.state.UA.indexOf("closer-ios")>0))return e.url=t,p["Indicator"].open(),e;JsBridge.setupWebViewJavascriptBridge(function(r){r.callHandler("getUserToken",null,function(r,n){if(r.token)return e.headers.Authorization=r.token,e.url=t,p["Indicator"].open(),e;JsBridge.setupWebViewJavascriptBridge(function(n){return n.callHandler("jumpLogin",null),e.headers.Authorization=r.token,e.url=t,p["Indicator"].open(),e})})})}},function(e){return p["Indicator"].close(),Promise.reject(e)}),H.a.interceptors.response.use(function(e){return p["Indicator"].close(),e},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({path:"/login"});break;case 403:e.message="拒绝访问",router.push({path:"/login"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),p["Indicator"].close(),Promise.reject(e)});var V=H.a,z=r("p46w"),W=r.n(z);function Z(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}window.axios=V,window.Cookies=W.a,window.JsBridge=void 0,n["default"].config.productionTip=!1,n["default"].use(m.a),Z(),window.onresize=Z,new n["default"]({router:J,store:D,render:function(e){return e(l)}}).$mount("#app")},ZCOS:function(e,t,r){},fTFf:function(e,t,r){}});
//# sourceMappingURL=app.54ca82a7.js.map