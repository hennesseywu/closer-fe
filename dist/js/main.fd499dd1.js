(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={13:0},i={13:0},o=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{0:"86a64656",1:"757d1b82",2:"7be21889",3:"4c11b97c",4:"07960113",5:"6c3b1a5a",6:"d118484b",7:"64d7ebd5",8:"3c8bd623",9:"57575381",10:"447b9904",11:"abbe5c22"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+e+"."+{0:"31d6cfe0",1:"f4c16be4",2:"4b30ae4d",3:"6854ed9f",4:"03a6a853",5:"fd1d25ca",6:"70d705bd",7:"640caf45",8:"32c1bc2a",9:"21772bab",10:"96226f91",11:"bd20b16b"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var s=i[o],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=o);var u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=setTimeout(function(){p({type:"timeout",target:l})},12e4);function p(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");o.type=r,o.request=a,n[1](o)}i[e]=void 0}}l.onerror=l.onload=p,u.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},c.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([4,12]),n()})({"+n12":function(e,t,n){"use strict";n.d(t,"d",function(){return u}),n.d(t,"f",function(){return d}),n.d(t,"g",function(){return p}),n.d(t,"i",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"h",function(){return g}),n.d(t,"k",function(){return m}),n.d(t,"a",function(){return v}),n.d(t,"b",function(){return w}),n.d(t,"e",function(){return _}),n.d(t,"j",function(){return y});n("ls82"),n("NO8f"),n("pIFo"),n("Oyvg"),n("OG14"),n("SRfc"),n("KKXr");var r=n("MECJ"),a=n("fBUP"),i=n("lR8Q"),o=n.n(i),s=n("gjeX"),c=n.n(s);function u(){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i,o,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("0"==Cookies.get("aid")){e.next=10;break}return t=new MobileDetect(navigator.userAgent),n=t.os(),r="","iOS"==n?(n="ios",r=t.versionStr("iPhone")):"AndroidOS"==n&&(n="android",r=t.versionStr("Android"),r=r.replace(/\./g,"_")),e.next=7,axios.post(a["a"].statitics.get_adcookie,{adid:Cookies.get("aid"),webUdid:!1,deviceType:n,deviceVersion:r});case 7:i=e.sent,o=i.data,o.result&&(s=o.result,s.udid&&Cookies.set("uid",s.udid,{expires:30}));case 10:location.href="http://tiejin.cn/down?downurl=closer://jump";case 11:case"end":return e.stop()}},e,this)})),l.apply(this,arguments)}function d(){var e=navigator.userAgent.toLowerCase();return/closer-(android|ios)/.test(e)}function p(){var e=navigator.userAgent.toLowerCase();return/micromessenger/.test(e)}function f(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}),document.attachEvent("onWeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")})):WeixinJSBridge.call("hideOptionMenu")}function h(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return r<10&&(r="0"+r),a<10&&(a="0"+a),n+"-"+r+"-"+a}function g(e,t,n){if(e){var r=n||500,i=Cookies.get("IS_DEV")?a["a"].fileDevURL:a["a"].fileUrl;return"src"===t?-1!==e.indexOf("://")?e+"?s="+r:i+e+"?s="+r:-1!==e.indexOf("://")?e:i+e}}function m(e){return~~(e/100)}function v(e,t){var n=[];for(var r in t)t.hasOwnProperty(r)&&n.push("".concat(r,"=").concat(t[r]));return e+(e.indexOf("?")>-1?"&":"?")+n.join("&")}function w(e,t,n){var r=e.indexOf("android")>-1?t:n;try{var a=parseInt(r.replace(/\./g,"")),i=parseInt((e.split("closerapp/version/")[1]||"").replace(/\./g,""));return i>=a}catch(e){return!1}}function _(e){return new Promise(function(t,n){var r=e,a=r.offsetWidth,i=r.offsetHeight,s=document.createElement("canvas"),c=s.getContext("2d"),u=x(c);s.width=a*u,s.height=i*u,c.scale(u,u),c.mozImageSmoothingEnabled=!1,c.webkitImageSmoothingEnabled=!1,c.msImageSmoothingEnabled=!1,c.imageSmoothingEnabled=!1;var l={scale:u,canvas:s,logging:!1,width:a,height:i,backgroundColor:null,useCORS:!0};o()(r,l).then(function(e){console.log("html2canvas:finish:",e);var n=b(e,e.width,e.height,"image/jpeg");console.log("convertToImage:finish:"),t(n)})})}function b(e,t,n,r){try{r=o(r);var a=s(e,r,t,n);console.log(5);var i=c(a);return console.log(6),i}catch(e){throw console.log(7,e),new Error(e)}function o(e){e=e.toLowerCase().replace(/jpg/i,"jpeg");var t=e.match(/png|jpeg|bmp|gif/)[0];return"image/"+t}function s(e,t,n,r){e=u(e,n,r),console.log(3,e);var a=e.toDataURL(t);return console.log(4),a}function c(e){var t=document.createElement("img");return t.src=e,t}function u(e,t,n){var r=e.width,a=e.height;void 0==t&&(t=r),void 0==n&&(n=a);var i=document.createElement("canvas"),o=i.getContext("2d");return i.width=t,i.height=n,i.style.width=t,i.style.height=n,console.log(1,r,a,t,n),o.mozImageSmoothingEnabled=!1,o.webkitImageSmoothingEnabled=!1,o.msImageSmoothingEnabled=!1,o.imageSmoothingEnabled=!1,o.drawImage(e,0,0,r,a,0,0,t,n),console.log(2),i}}function x(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}function y(e){var t=document.forms[0],n=c()(Date.now()+"file"),r=o(e.src,n);console.log("upload");var a=new FormData(t);a.append("file",r);var i=Cookies.get("IS_DEV")?"https://file-sandbox.tiejin.cn":"https://file.tiejin.cn";return axios.post(i+"/file/upload/public",a,{headers:{Accept:"application/json; charset=utf-8",Authorization:Cookies.get("GroukAuth")}});function o(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=atob(e.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));var a=new Blob([new Uint8Array(n)],{type:"image/png"});return a}}},4:function(e,t,n){n("201c"),e.exports=n("Vtdi")},"68vw":function(e,t,n){},D2H8:function(e,t,n){"use strict";var r=n("68vw"),a=n.n(r);a.a},L3Ta:function(e,t,n){},QctN:function(e,t,n){"use strict";n("f3/d"),n("VRzm");var r=n("Kw5r"),a=n("jE9Z"),i=n("fBUP"),o=n("dqDD"),s=n("+n12"),c=(n("wNa6"),function(){return n.e(11).then(n.bind(null,"CrtJ"))}),u=function(){return n.e(10).then(n.bind(null,"BBkl"))},l=function(){return n.e(9).then(n.bind(null,"nsgK"))},d=function(){return n.e(8).then(n.bind(null,"MVSw"))},p=function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,"3mO2"))},f=function(){return n.e(6).then(n.bind(null,"po5H"))},h=function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,"IC5M"))},g=function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"y8bz"))},m=function(){return n.e(3).then(n.bind(null,"URgv"))},v=function(){return n.e(2).then(n.bind(null,"ZO67"))};r["default"].use(a["a"]);var w=new a["a"]({mode:"history",routes:[{path:"/landing",name:"landing",component:c,meta:{title:"贴近Closer"}},{path:"/over",name:"activityOver",component:u,meta:{title:"贴近Closer"}},{path:"/pullnew",name:"pullNew",component:l,meta:{title:"邀好友，赚现金"}},{path:"/pullNew/rule",name:"pullNewRule",component:d,meta:{title:"邀好友，赚现金"}},{path:"/local",name:"localIndex",component:p,meta:{title:"谁是成都最土著"}},{path:"/local/answer",name:"localAnswer",component:f,meta:{title:"谁是成都最土著"}},{path:"/local/result",name:"localResult",component:h,meta:{title:"谁是成都最土著"}},{path:"/local/share",name:"localShare",component:g,meta:{title:"分享"}},{path:"/local/rule",name:"localRule",component:m,meta:{title:"活动规则"}},{path:"/local/rank",name:"localRank",component:v,meta:{title:"排行榜"}}]});w.beforeEach(function(e,t,n){var r=e.meta,a=e.path,c=e.fullPath,u=e.query,l=e.name;e.params;if(document.title=r.title?r.title:"贴近","localIndex"==l)if(Object(s["f"])())console.log("closer device"),Cookies.remove("user"),n();else if(Object(s["g"])()){if(u.code)return void n();console.log("fullpath:",c,u);var d=(location.origin.indexOf("local.tiejin.cn")>-1?i["a"].wxLoginLocalUrl:Cookies.get("IS_DEV")?i["a"].wxLoginDevUrl:i["a"].wxLoginUrl)+a+"?params="+encodeURIComponent(JSON.stringify(u)),p={path:d};console.log("from:",d),axios.post(i["a"].admin.get_auth_path,p).then(function(e){var t=e.data;"undefined"!=typeof t.code&&0==t.code?location.href=t.result:n()}).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")})}else n();else n()}),t["a"]=w},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o={name:"App"},s=o,c=(n("D2H8"),n("KHd+")),u=Object(c["a"])(s,a,i,!1,null,"1d76026a",null),l=u.exports,d=(n("201c"),n("ZCOS"),n("L3Ta"),n("dqDD")),p=n.n(d),f=(n("qjXo"),n("QctN")),h=n("wNa6"),g=n("vDqi"),m=n.n(g),v=n("fBUP"),w=m.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).BASE_API,timeout:15e3,withCredentials:!0});w.interceptors.request.use(function(e){var t=v["a"].serverDevUrl+e.url;return/^https?:\/\//.test(e.url)?t=e.url:/a-sandbox.tiejin/.test(window.location.href)?t=v["a"].serverDevUrl+e.url:/a.tiejin/.test(window.location.href)&&(t=v["a"].serverUrl+e.url),e.url=t,h["a"].state.IS_APP?h["a"].state.UA.indexOf("closer-ios")>-1?e.headers["Closer-Agent"]="Closer-Ios":h["a"].state.UA.indexOf("closer-android")>-1&&(e.headers["Closer-Agent"]="Closer-Android"):e.headers["Closer-Agent"]="Closer-H5",Cookies.get("uid")&&(e.headers["X-Udid"]=Cookies.get("uid")),Cookies.get("aid")&&(e.headers["X-Adid"]=Cookies.get("aid")),(Cookies.get("GroukAuth")&&-1==e.url.indexOf("auth")&&-1==e.url.indexOf("account")||Cookies.get("GroukAuth")&&-1!=e.url.indexOf("closer_account.bind_phone"))&&(e.headers.Authorization=Cookies.get("GroukAuth")),e.data&&"undefined"!=typeof e.data.noIndicator||d["Indicator"].open(),e},function(e){return d["Indicator"].close(),Promise.reject(e).catch(e)}),w.interceptors.response.use(function(e){return d["Indicator"].close(),e},function(e){var t=n("B/eG").default;if(e&&e.response)switch(e.response.status){case 400:e.message="请求错误";break;case 401:e.message="未授权，请登录",router.push({name:"worldcupIndex"});break;case 403:e.message="拒绝访问",router.push({name:"worldcupIndex"});break;case 404:e.message="请求地址出错: ".concat(e.response.config.url);break;case 408:e.message="请求超时";break;case 500:e.message="服务器内部错误";break;case 501:e.message="服务未实现";break;case 502:e.message="网关错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网关超时";break;case 505:e.message="HTTP版本不受支持";break;default:}else e.message="网络错误，请稍后再试！";return e&&e.response&&e.response.data&&e.response.data.message?console.warn(e.response.data.message):console.warn(e.message),d["Indicator"].close(),t.reject(e).catch(e)});var _=w,b=n("p46w"),x=n.n(b),y=n("OjQg"),k=n.n(y),j=n("xsZ3"),S=n.n(j),O=n("GKBh"),R=n.n(O),C=n("+n12");if(/sandbox.tiejin/.test(window.location.href)||/127.0.0.1/.test(window.location.href)||/local.tiejin/.test(window.location.href)){new k.a;h["a"].state.IS_DEV=!0,x.a.set("IS_DEV",!0,{expires:1})}function A(){var e=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/375*16;document.documentElement.style.fontSize=(e>=32?32:e)+"px"}function I(){var e=(navigator.userAgent||window.navigator.userAgent).toLowerCase();h["a"].state.V_1_2_3=Object(C["b"])(e,"1.2.3","1.2.2"),h["a"].state.UA=e,h["a"].state.IS_APP=Object(C["f"])(),h["a"].state.IS_WX=Object(C["g"])()}window.wx=R.a,window.axios=_,window.Cookies=x.a,window.MobileDetect=S.a,window.setupWebViewJavascriptBridge=function(e){if(window.WebViewJavascriptBridge)return e(WebViewJavascriptBridge);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(e);window.WVJBCallbacks=[e];var t=document.createElement("iframe");t.style.display="none",t.src="https://__bridge_loaded__",document.documentElement.appendChild(t),setTimeout(function(){document.documentElement.removeChild(t)},0)},r["default"].config.productionTip=!1,r["default"].use(p.a),I(),A(),window.onresize=A,new r["default"]({store:h["a"],router:f["a"],render:function(e){return e(l)}}).$mount("#app")},ZCOS:function(e,t,n){},fBUP:function(e,t,n){"use strict";var r,a=n("oyJW");n("VRzm");t["a"]={fileUrl:"https://file.tiejin.cn",fileDevURL:"https://file-sandbox.tiejin.cn",serverUrl:"https://api.tiejin.cn/command/",devserverUrl:"http://10.3.0.11:8080/command/",subdevserverUrl:"http://oms-sandbox.tiejin.cn/command",serverDevUrl:"https://api-sandbox.tiejin.cn/command/",downUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer",wxLoginLocalUrl:"https://h5-sandbox.tiejin.cn/redirect?redirectUrl=http://local.tiejin.cn:8889",wxLoginDevUrl:"https://h5-sandbox.tiejin.cn/redirect?redirectUrl=https://a-sandbox.tiejin.cn",wxLoginUrl:"https://h5.tiejin.cn/redirect?redirectUrl=https://a.tiejin.cn",file:"/file/upload/public",admin:{get_auth_path:"closer_auth.get_auth_path",login_with_wechat:"closer_auth.login_with_wechat",closeruser_regist:"closer_auth.closeruser_regist",get_code_by_phone:"closer_account.get_code_by_phone_v2",check:"closer_account.check",check_wechat:"closer_account.check_wechat",info:"closer_user.info",user_show:"closer_user.show",bind_phone:"closer_account.bind_phone",like:"closer_reply.like",add_reply:"closer_reply.add_reply",invite_counts:"closer_user.invite_counts",wechat_config:"closer_share.wechat_config"},command:{show:"closer_subject.show",incr_view:"closer_subject.incr_view",comments:"closer_reply.comments",videos:"ali_vod.accessInfo",report:"closer_report.add",like:"closer_reply.like",add_reply:"closer_reply.add_reply",replys:"closer_reply.replys",reportType:"closer_report.get_report_types"},community:{show:"closer_community.show",community_subject_list_index:"closer_subject.community_subject_list_index",subscription:"closer_community.subscription"},group:{show:"closer_class.show",recruiting:"closer_class.recruiting",group_subject_list:"closer_subject.class_subject_list_index",share_group:"closer_share.outer_group"},activity:(r={get_activity:"closer_activity.get_activity",add_channel:"activity_worldcup.add_channel",check_guess_result:"activity_worldcup.check_guess_result",get_match_list:"activity_worldcup.get_match_list",get_user_guess_list:"activity_worldcup.get_user_guess_list",get_user_guess_statistic:"activity_worldcup.get_user_guess_statistic",guess_match:"activity_worldcup.guess_match",receive_chance:"activity_worldcup.receive_chance"},Object(a["a"])(r,"check_guess_result","activity_worldcup.check_guess_result"),Object(a["a"])(r,"activity_water_chance","activity_water.chance"),Object(a["a"])(r,"activity_water_update","activity_water.update"),Object(a["a"])(r,"activity_water_join","activity_water.join"),Object(a["a"])(r,"get_invite_statistic","closer_invite.get_statistic"),Object(a["a"])(r,"get_invitee_page_list","closer_invite.get_invitee_page_list"),Object(a["a"])(r,"get_yesterday_award_amt","closer_invite.get_yesterday_award_amt"),Object(a["a"])(r,"remind_login","closer_invite.remind_login"),Object(a["a"])(r,"tuzhu",{get_question_statistic:"activity_tuzhu.get_question_statistic",end_test:"activity_tuzhu.end_test",get_rank_list:"activity_tuzhu.get_rank_list",share_user_answer:"activity_tuzhu.share_user_answer",start_test:"activity_tuzhu.start_test",get_default_share:"activity_tuzhu.get_default_share_url"}),r),statitics:{view_count:"closer_promotion_activity.view_count",get_adcookie:"closer_statistics.get_adcookie"}}},wNa6:function(e,t,n){"use strict";n("VRzm");var r=n("Kw5r"),a=n("L2JU"),i=(n("ls82"),n("MECJ")),o=n("dqDD"),s=n("fBUP");n("jE9Z");function c(e){return u.apply(this,arguments)}function u(){return u=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].activity.get_invite_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),u.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].activity.get_yesterday_award_amt,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),d.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].activity.get_invitee_page_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),f.apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].activity.remind_login,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),g.apply(this,arguments)}var m={namespaced:!0,state:{pullNewStatic:{awardTotalAmt:0,invitedUsers:{1:{amount:1e3,isGrey:!0},2:{amount:200,isGrey:!0},3:{amount:200,isGrey:!0},4:{amount:200,isGrey:!0},5:{amount:200,isGrey:!0},6:{amount:200,isGrey:!0},7:{amount:1e3,isGrey:!0}}},awardAmt:0},mutations:{updatePullNewStatic:function(e,t){e.pullNewStatic=t},updateAwardAmt:function(e,t){e.awardAmt=t}},actions:{checkLogin:function(e,t){e.state;var n=e.rootState,r=n.UA;if(r.indexOf("closer-ios")>-1)setTimeout(function(){setupWebViewJavascriptBridge(function(e){e&&e.callHandler("getUserToken",null,function(e,n){e?(Cookies.set("GroukAuth",e,{expires:30}),axios.post(s["a"].admin.user_show).then(function(e){var n=e.data;n.result?(Cookies.set("user",JSON.stringify(n.result),{expires:30}),t(!0)):(Cookies.remove("user"),Cookies.remove("GroukAuth"),t())}).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")})):(Cookies.remove("user"),Cookies.remove("GroukAuth"),setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)}),t())})})},500);else if(r.indexOf("closer-android")>-1){if("undefined"!=typeof window.bridge){var a=window.bridge.getUserToken(null);a?(Cookies.set("GroukAuth",a,{expires:30}),axios.post(s["a"].admin.user_show).then(function(e){var n=e.data;n.result?(Cookies.set("user",JSON.stringify(n.result),{expires:30}),t(!0)):(Cookies.remove("user"),Cookies.remove("GroukAuth"),t())}).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")})):(Cookies.remove("user"),Cookies.remove("GroukAuth"),window.bridge.jumpLogin(null),t())}}else t()},getPullNewInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s,u,l,d,p,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,c(n).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 3:if(a=e.sent,i=a.data,"undefined"!=typeof i.code&&0==i.code&&"undefined"!=typeof i.result.inviteUserTotalCount){if(s={},u=i.result.inviteUserTotalCount,l=i.result.invitedUsers,u<4)for(d=0;d<7;d++)l[d]?s[d+1]=l[d]:(p=200,(d+1)%7!=0&&0!=d||(p=1e3),s[d+1]={amount:p,isGrey:!0});else for(d=0;d<7;d++)l[d]?s[u-3+d]=l[d]:(f=200,(u-3+d)%7==0&&(f=1e3),s[u-3+d]={amount:f,isGrey:!0});i.result.invitedUsers=s,r("updatePullNewStatic",i.result)}case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getYesterdayAwardAmt:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,l(n).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 3:a=e.sent,i=a.data,"undefined"!=typeof i.code&&0==i.code&&r("updateAwardAmt",i.result);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getInviteUserList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.next=3,p(n).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 3:if(r=e.sent,a=r.data,"undefined"==typeof a.code||0!=a.code){e.next=7;break}return e.abrupt("return",a.result);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),remindLogin:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,h(n).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 3:if(a=e.sent,i=a.data,"undefined"==typeof i.code||0!=i.code){e.next=9;break}return Object(o["Toast"])("提醒成功喽~"),r("getPullNewInfo"),e.abrupt("return",!0);case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}},v=n("a94B"),w={wechatConfig:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("service--",t),e.next=3,axios.post(s["a"].admin.wechat_config,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUserInfoInApp:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].admin.user_show);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),checkWxCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].admin.check_wechat,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),loginWithWx:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].admin.login_with_wechat,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getStatistic:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].activity.tuzhu.get_question_statistic,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getRankList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,axios.post(s["a"].activity.tuzhu.get_rank_list,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),startTest:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,axios.post(s["a"].activity.tuzhu.start_test,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),endTest:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("endTest",t),e.next=3,axios.post(s["a"].activity.tuzhu.end_test,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),userShare:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(1,t),e.next=3,axios.post(s["a"].activity.tuzhu.share_user_answer,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),userDefaultShare:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(1,t),e.next=3,axios.post(s["a"].activity.tuzhu.get_default_share,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},_=(n("QctN"),n("+n12")),b=(n("Po9p"),{namespaced:!0,state:{aid:"TuZhuActivity-2",isLogin:!1,activityId:2,inviter:"",signSalt:"",user:{},statistic:{maxAwardAmt:1e4,totalAwardAmt:0,chance:0,rank:0,signSalt:""},rank:{selfRank:{user:{}},rankList:[]},startResult:{},startData:[],currentQuesitionNum:0,endData:{},shareData:"",wxConfig:null},mutations:{SET_USER:function(e,t){e.user=t,e.isLogin=!0},SET_STATISTIC:function(e,t){e.statistic=t},SET_RANKLIST:function(e,t){e.rank=t},startData:function(e,t){var n=t.data.result;e.startResult=n,e.startData=n.questions},setEndData:function(e,t){e.endData=t.result,t.result.totalAwardAmt&&(e.statistic.totalAwardAmt=t.result.totalAwardAmt)},shareData:function(e,t){var n=t.data.result;e.shareData=n.shareUrl||n.defaultShareUrl},SET_PARAMS:function(e,t){var n=t.inviter,r=t.activityId,a=t.salt;r&&(e.activityId=r),n&&(e.inviter=n),a&&(e.signSalt=a)},updateChance:function(e){var t=e.statistic.chance;e.statistic.chance=--t},updateCurrentQuestionNum:function(e){e.currentQuesitionNum=0,e.startResult={},e.startData=[],console.log(123,e.currentQuesitionNum)},nextQuestion:function(e){var t=e.currentQuesitionNum;e.currentQuesitionNum=++t},setWxConfig:function(e,t){e.wxConfig=t},setCache:function(e,t){e.statistic=t.statistic,e.endData=t.endData,e.shareData=t.shareData,e.user=t.user,e.objectID=t.objectID,e.currentQuesitionNum=t.currentQuesitionNum}},actions:{updateChance:function(e){var t=e.commit;t("updateChance")},updateCurrentQuestionNum:function(e){var t=e.commit;t("updateCurrentQuestionNum")},userShare:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s,c,u,l,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,a=t.commit,!sessionStorage.userAnswerId){e.next=10;break}return i={userAnswerId:sessionStorage.userAnswerId},e.next=5,w.userShare(i).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 5:s=e.sent,c=s.data,void 0!=Object(v["a"])(c.code)&&0==c.code?a({type:"shareData",data:c}):c.result&&Object(o["Toast"])(c.result),e.next=17;break;case 10:return u={activityId:r.activityId},console.log("default share--",u),e.next=14,w.userDefaultShare(u).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 14:l=e.sent,d=l.data,void 0!=Object(v["a"])(d.code)&&0==d.code?a({type:"shareData",data:d}):d.result&&Object(o["Toast"])(d.result);case 17:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),checkParams:function(e,t){var n=e.commit,r=t.params,a=t.activityId,i=t.inviter,o=t.salt;try{r=JSON.parse(decodeURIComponent(r))}catch(e){r={}}a=r.activityId||a||"",i=r.inviter||i||"",o=r.salt||o||"",console.log("params:",a,i),n("SET_PARAMS",{activityId:a,inviter:i,salt:o})},checkLoginInApp:function(e,t){e.state;var n=e.commit,r=e.rootState;console.log("checkLogin",r.IS_APP);var a=r.UA;if(a.indexOf("closer-ios")>-1)console.log("module closer-ios"),setTimeout(function(){setupWebViewJavascriptBridge(function(e){console.log("ios bridge",e),e&&e.callHandler("getUserToken",null,function(e,r){console.log("ios token",e),e?(Cookies.set("GroukAuth",e,{expires:30}),w.getUserInfoInApp().then(function(e){var r=e.data;if(console.log("ios",r.result),r.result){var a=r.result;Cookies.set("user",a,{expires:30}),n("SET_USER",a),t(!0)}else t()}).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")})):(console.log("ios jumpLogin"),setupWebViewJavascriptBridge(function(e){e.callHandler("jumpLogin",null)}),t())})})},500);else if(a.indexOf("closer-android")>-1){if(console.log("closer-android"),console.log("module android","undefined"!=typeof window.bridge),"undefined"!=typeof window.bridge){var i=window.bridge.getUserToken(null);console.log("android",i),i?(Cookies.set("GroukAuth",i,{expires:30}),w.getUserInfoInApp().then(function(e){var r=e.data;if(console.log("android",r.result),r.result){var a=r.result;Cookies.set("user",a,{expires:30}),n("SET_USER",a),t(!0)}else t()}).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")})):(console.log("android jumpLogin"),window.bridge.jumpLogin(null),t())}}else t()},getUserInfoAndLoginWithWx:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,o,s,c,u,l,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.state,a=t.commit,i=n.code,o=n.inviter,o=r.inviter||o,s=Cookies.get("user"),c=Cookies.get("GroukAuth"),!s||!c){e.next=11;break}return console.log("user-from-cookie:",JSON.parse(s)),a("SET_USER",JSON.parse(s)),e.abrupt("return",!0);case 11:return u={plateform:2,code:i,inviter:o,adid:r.aid,protocol:"WEB_SOCKET"},e.next=14,w.loginWithWx(u);case 14:if(l=e.sent,d=l.data,0!=d.code){e.next=26;break}return s=d.result.user,c=d.result.token,console.log("user-from-server:",s),a("SET_USER",s),Cookies.set("GroukAuth",c,{expires:7}),Cookies.set("user",s,{expires:7}),e.abrupt("return",!0);case 26:return e.abrupt("return",!1);case 27:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),getStatistic:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,e.next=3,w.getStatistic({activityId:r.activityId});case 3:a=e.sent,i=a.data,0==i.code?n("SET_STATISTIC",i.result):Object(o["Toast"])("网络开小差啦，请稍后再试");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getRankList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,e.next=3,w.getRankList({activityId:r.activityId,inviteUser:r.inviter});case 3:a=e.sent,i=a.data,0==i.code?n("SET_RANKLIST",i.result):Object(o["Toast"])("网络开小差啦，请稍后再试");case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),startTest:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=t.state,i={activityId:a.activityId},e.next=4,w.startTest(i).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 4:if(s=e.sent,c=s.data,void 0==Object(v["a"])(c.code)||0!=c.code){e.next=10;break}r({type:"startData",data:c}),e.next=12;break;case 10:return Object(o["Toast"])("网络开小差啦，请稍后再试"),e.abrupt("return");case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),nextQuestion:function(e,t){var n=e.state,r=e.commit;r("nextQuestion"),n.currentQuesitionNum,n.startData.length},commitTest:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,a=t.commit,e.next=3,w.endTest(n).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 3:i=e.sent,s=i.data,console.log(3,s),Object(v["a"])(void 0!=s.code)&&0==s.code?(a("setEndData",s),window.sessionStorage.userAnswerId=r.endData.userAnswerId):s.result&&Object(o["Toast"])(s.result);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),initWxConfig:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,s,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state,t.rootState,r=t.commit,a=n.wxConfig,a&&a.signature&&a.appId&&a.nonceStr&&a.timestamp){e.next=14;break}return i={url:location.href},e.next=6,w.wechatConfig(i).catch(function(e){Object(o["Toast"])("网络开小差啦，请稍后再试")});case 6:if(s=e.sent,c=s.data,"undefined"==typeof c.code||0!=c.code){e.next=13;break}r("setWxConfig",c.result),a=c.result,e.next=14;break;case 13:return e.abrupt("return");case 14:u=Object(_["a"])(location.origin+"/local",{inviter:n.user.objectID,activityId:n.activityId,salt:n.statistic.signSalt}),sessionStorage.setItem("link",u),console.log("wxConfig::",u),a&&a.signature&&a.appId&&a.nonceStr&&a.timestamp&&(wx.config({debug:!1,signature:a.signature,appId:a.appId,nonceStr:a.nonceStr,timestamp:a.timestamp,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),wx.ready(function(){console.log("ready"),wx.onMenuShareAppMessage({title:"是成都人就来瓜分百万大奖",desc:"参与成都人纯度测试，纯度越高，奖金越多！",link:u,imgUrl:"http://file.tiejin.cn/public/9Ykg0XgzgX/share_img.png",type:"",dataUrl:"",success:function(){Object(o["Toast"])("分享成功~")}}),wx.onMenuShareTimeline({title:"是成都人就来瓜分百万大奖",link:u,imgUrl:"http://file.tiejin.cn/public/9Ykg0XgzgX/share_img.png",success:function(){Object(o["Toast"])("分享成功~")}})}),wx.error(function(e){console.log("error",e)}));case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}});r["default"].use(a["a"]);t["a"]=new a["a"].Store({state:{UA:"",IS_APP:!1,IS_WX:!1,IS_NEW_USER:!1,IS_DEV:!1,V_1_2_3:!1},modules:{pullNew:m,local:b}})}});
//# sourceMappingURL=main.fd499dd1.js.map