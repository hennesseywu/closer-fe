(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"+csi":function(e,t,n){},"+n12":function(e,t,n){"use strict";n.d(t,"d",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a});n("SRfc"),n("KKXr");function i(e){location.href=e?"closer://community/9j9m4gy8sM":"https://h5.tiejin.cn/community/9j9m4gy8sM"}function o(){location.href="http://tiejin.cn/down?downurl=closer://jump"}function s(e){var t=e/100;return t.toFixed(2)}function r(){var e=window.location.href.split("-");if(!e)return null;var t=e.length;return e[t-1]}function a(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")}),document.attachEvent("onWeixinJSBridgeReady",function(){WeixinJSBridge.call("hideOptionMenu")})):WeixinJSBridge.call("hideOptionMenu")}},"9R+A":function(e,t,n){},"IU+Z":function(e,t,n){"use strict";var i=n("Mukb"),o=n("KroJ"),s=n("eeVq"),r=n("vhPU"),a=n("K0xU");e.exports=function(e,t,n){var c=a(e),u=n(r,c,""[e]),d=u[0],l=u[1];s(function(){var t={};return t[c]=function(){return 7},7!=""[e](t)})&&(o(String.prototype,e,d),i(RegExp.prototype,c,2==t?function(e,t){return l.call(e,this,t)}:function(e){return l.call(e,this)}))}},KKXr:function(e,t,n){n("IU+Z")("split",2,function(e,t,i){"use strict";var o=n("quPj"),s=i,r=[].push,a="split",c="length",u="lastIndex";if("c"=="abbc"[a](/(b)*/)[1]||4!="test"[a](/(?:)/,-1)[c]||2!="ab"[a](/(?:ab)*/)[c]||4!="."[a](/(.?)(.?)/)[c]||"."[a](/()()/)[c]>1||""[a](/.?/)[c]){var d=void 0===/()??/.exec("")[1];i=function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!o(e))return s.call(n,e,t);var i,a,l,h,p,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,g=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,v+"g");d||(i=new RegExp("^"+b.source+"$(?!\\s)",v));while(a=b.exec(n)){if(l=a.index+a[0][c],l>f&&(m.push(n.slice(f,a.index)),!d&&a[c]>1&&a[0].replace(i,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(a[p]=void 0)}),a[c]>1&&a.index<n[c]&&r.apply(m,a.slice(1)),h=a[0][c],f=l,m[c]>=g))break;b[u]===a.index&&b[u]++}return f===n[c]?!h&&b.test("")||m.push(""):m.push(n.slice(f)),m[c]>g?m.slice(0,g):m}}else"0"[a](void 0,0)[c]&&(i=function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)});return[function(n,o){var s=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,s,o):i.call(String(s),n,o)},i]})},NeBk:function(e,t,n){"use strict";var i=n("mM+h"),o=n.n(i);o.a},SRfc:function(e,t,n){n("IU+Z")("match",1,function(e,t,n){return[function(n){"use strict";var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i):new RegExp(n)[t](String(i))},n]})},"Sr7/":function(e,t,n){},jMpL:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"index-wrapper"},[e.isLoginShow?n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"login-title"},[e._v("登录即可领取奖励")]),n("div",{staticClass:"phone-box common-height common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"phone",attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),n("div",{staticClass:"imgcode-box common-height"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.imgCode,expression:"imgCode"}],staticClass:"img-code common-bg",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.imgCode},on:{input:function(t){t.target.composing||(e.imgCode=t.target.value)}}}),n("img",{staticClass:"img common-bg",attrs:{src:e.isDev?"http://file-sandbox.tiejin.cn/captcha/image?"+e.timestampNow:"http://file.tiejin.cn/captcha/image?"+e.timestampNow},on:{click:function(t){e.updateTimestamp()}}})]),n("div",{staticClass:"smscode-box common-height common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"sms-code",attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("span",{staticClass:"send-code",on:{click:function(t){e.getCode({phone:e.phone,grouk_captcha_value:e.imgCode,push:!0})}}},[e._v(e._s(e.sendCode))])]),n("div",{staticClass:"btn-common login-btn",class:"ischecked",on:{click:function(t){e.tbLogin()}}},[e._v("登录领取奖励")])]):e._e(),e.isRecieveShow?n("div",{staticClass:"info-wrapper"},[n("div",{staticClass:"info-title"},[e._v("填写信息")]),n("div",{staticClass:"name-info common-height box box-lr"},[n("span",{staticClass:"name"},[e._v("姓名")]),n("div",{staticClass:"name-input common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入您的真实姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),n("div",{staticClass:"addr-info common-height box box-lr"},[n("span",{staticClass:"address"},[e._v("地址")]),n("div",{staticClass:"addr-input common-bg"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{name:"address",cols:"30",rows:"5",placeholder:"请输入您的收货地址"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),n("div",{staticClass:"info-btn btn-common",class:"ischecked",on:{click:function(t){e.submitInfo()}}},[e._v("提交领取奖励")])]):e._e(),e.isOkShow?n("Prize",{ref:"prize"}):e._e()],1),n("Rule",{ref:"rule"})],1)},o=[],s=(n("f3/d"),n("yT7P")),r=(n("ls82"),n("MECJ")),a=(n("VRzm"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rule-wrapper"},[n("div",{staticClass:"rule-box",class:"index-rule"},[n("div",{staticClass:"rule-title"},[e._v("活动规则")]),e._m(0)])])}),c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"rule-content"},[n("li",[e._v("1.炎炎夏日，城市温度运营商“贴近成都”携手健康饮水新平台“太极兵”，给广大市民送清凉，0元把价值1380元的健康饮水新工具“茶吧机”带回家，从此饮水换“袋”，安全无虞。 ")]),n("li",[e._v("2.本活动官方唯一指定入口为贴近APP。若已有贴近APP，可在APP内在线申请，待资料审核通过，“茶吧机”会由工作人员送货上门。")]),n("li",[e._v("3.未下载贴近APP的用户，需在当前页面填写手机号和验证码，随后会自动跳转至下载页面，安装贴近APP后即可在线申请，待资料审核通过，“茶吧机”会由工作人员送货上门。")]),n("li",[e._v("4.本活动截止时间为：2018年7月31日。")]),n("li",[e._v("5.公司拥有本活动的最终解释权。")])])}],u={},d=u,l=(n("lOpt"),n("KHd+")),h=Object(l["a"])(d,a,c,!1,null,"557b4352",null),p=h.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-wrapper"},[n("div",{staticClass:"info-title"},[e._v("填写信息")]),n("div",{staticClass:"name-info common-height box box-lr"},[n("span",{staticClass:"name"},[e._v("姓名")]),n("div",{staticClass:"name-input common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入您的真实姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),n("div",{staticClass:"addr-info common-height box box-lr"},[n("span",{staticClass:"address"},[e._v("地址")]),n("div",{staticClass:"addr-input common-bg"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{name:"address",cols:"30",rows:"5",placeholder:"请输入您的收货地址"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),n("div",{staticClass:"info-btn btn-common",class:"ischecked"},[e._v("提交领取奖励")])])},v=[],f={name:"pop",components:{},props:{name:String,address:String}},g=f,b=(n("o+5v"),Object(l["a"])(g,m,v,!1,null,"164a9ea5",null)),x=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prize-wrapper box box-tb box-center-center"},[n("div",{staticClass:"icon-img"}),n("div",{staticClass:"prize-text"},[e._v("恭喜您已领取奖励！")]),n("div",{staticClass:"prize-tips"},[e._v(e._s(e.tips))]),n("div",{staticClass:"prize-btn btn-common ischecked",on:{click:function(t){e.redirectTo()}}},[e._v(e._s(e.buttonDesc))])])},C=[],k=(n("pIFo"),n("+n12")),S=n("L2JU"),O={data:function(){return{tips:"",buttonDesc:""}},mounted:function(){this.$store.state.IS_APP?(this.tips="去首页看看吧，有更多惊喜~",this.buttonDesc="去首页看看"):(this.buttonDesc="去下载app",this.tips="下载app，填写收货地址，领取奖品")},methods:Object(s["a"])({},Object(S["b"])("index",["getAdCookies"]),{redirectTo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$store.state.IS_APP){e.next=4;break}location.href="closer://jump/to/home",e.next=16;break;case 4:if("0"==this.$store.state.CHANNEL_CODE){e.next=15;break}return t=new MobileDetect(this.$store.state.UA),n=t.os(),i="","iOS"==n?(n="ios",i=t.versionStr("iPhone")):"AndroidOS"==n&&(n="android",i=t.versionStr("Android"),i=i.replace(/\./g,"_")),e.next=11,this.getAdCookies({adid:Cookies.get("aid"),webUdid:!0,deviceType:n,deviceVersion:i});case 11:e.sent,Object(k["a"])(),e.next=16;break;case 15:Object(k["a"])();case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},_=O,y=(n("qg4y"),Object(l["a"])(_,w,C,!1,null,"27ac2213",null)),P=y.exports,R=(n("dqDD"),{name:"login",components:{Rule:p,InfoWrapper:x,Prize:P},data:function(){return{isLoginShow:!1,isRecieveShow:!1,isOkShow:!1,phone:"12000000000",imgCode:"1",code:"180706",isDev:this.$store.state.IS_DEV,name:"",address:""}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:Cookies.get("uid")||this.getAdCookies({webUdid:!0,adid:this.$route.params.channelCode}),this.$route.params.channelCode&&Cookies.set("aid",this.$route.params.channelCode,{expires:7}),this.$store.state.IS_APP?setTimeout(function(){t.checkLogin(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("checkLogin res",n),n&&t.doWaterAction();case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},1500):this.doWaterAction();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),beforeMount:function(){},mounted:function(){},computed:Object(s["a"])({},Object(S["c"])("index",{timestampNow:function(e){return e.timestampNow},sendCode:function(e){return e.sendCode}})),methods:Object(s["a"])({},Object(S["b"])("tbLogin",["getAuthPath","loginWithWechat","checkLogin","bindPhone","waterChance","waterUpdate","waterJoin"]),Object(S["b"])("index",["getCode","login","updateTimestamp","getAdCookies"]),{tbLogin:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("tblogin"),e.next=3,this.bindPhone({phone:this.phone,code:this.code,imgCode:this.imgCode});case 3:t=e.sent,t&&(n=JSON.parse(Cookies.get("user")),n.phones=this.phone,Cookies.set("user",JSON.stringify(n),{expires:60}),this.checkCurrentState(n));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),doWaterAction:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("undefined"==typeof Cookies.get("GroukAuth")||"undefined"==typeof Cookies.get("user")){e.next=6;break}t=JSON.parse(Cookies.get("user")),console.log("cookies exist",t),this.checkCurrentState(t),e.next=11;break;case 6:if(this.$store.state.IS_APP||!this.$route.query.code){e.next=11;break}return e.next=9,this.loginWithWechat(this.$route.query.code);case 9:n=e.sent,n&&n.user&&(Cookies.set("GroukAuth",n.token,{expires:60}),i=n.user,Cookies.set("user",JSON.stringify(i),{expires:7}),this.checkCurrentState(i));case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),checkCurrentState:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("checkCurrentState",t),""!=t.phones){e.next=7;break}this.isRecieveShow=!1,this.isOkShow=!1,this.isLoginShow=!0,e.next=28;break;case 7:return console.log("user",t),e.next=10,this.waterJoin({phone:t.phones,adid:Cookies.get("aid")});case 10:return n=e.sent,console.log("joinRes",n),e.next=14,this.waterChance();case 14:i=e.sent,console.log("state",i),e.t0=i,e.next=0===e.t0?19:1===e.t0?23:2===e.t0?26:28;break;case 19:return this.isLoginShow=!1,this.isRecieveShow=!1,this.isOkShow=!0,e.abrupt("break",28);case 23:return this.$store.IS_APP=!0,this.$store.IS_APP?(this.isLoginShow=!1,this.isRecieveShow=!0,this.isOkShow=!1):(this.isLoginShow=!1,this.isRecieveShow=!1,this.isOkShow=!0),e.abrupt("break",28);case 26:return this.$store.IS_APP?(this.isLoginShow=!1,this.isRecieveShow=!0,this.isOkShow=!1):(this.isLoginShow=!1,this.isRecieveShow=!1,this.isOkShow=!0),e.abrupt("break",28);case 28:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),submitInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.waterUpdate({name:this.name,address:this.address});case 2:t=e.sent,"undefined"!=typeof t&&0==t&&(console.log("waterRes",t),this.checkCurrentState(Cookies.get("user")));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})}),j=R,A=(n("NeBk"),Object(l["a"])(j,i,o,!1,null,"4dbc356e",null));t["default"]=A.exports},lOpt:function(e,t,n){"use strict";var i=n("Sr7/"),o=n.n(i);o.a},"mM+h":function(e,t,n){},"o+5v":function(e,t,n){"use strict";var i=n("+csi"),o=n.n(i);o.a},pIFo:function(e,t,n){n("IU+Z")("replace",2,function(e,t,n){return[function(i,o){"use strict";var s=e(this),r=void 0==i?void 0:i[t];return void 0!==r?r.call(i,s,o):n.call(String(s),i,o)},n]})},qg4y:function(e,t,n){"use strict";var i=n("9R+A"),o=n.n(i);o.a},quPj:function(e,t,n){var i=n("0/R4"),o=n("LZWt"),s=n("K0xU")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==o(e))}},vhPU:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},yT7P:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("oyJW");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){Object(i["a"])(e,t,n[t])})}return e}}}]);
//# sourceMappingURL=2.615c0061.js.map