(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"+csi":function(e,t,n){},E3M9:function(e,t,n){"use strict";var s=n("IvpI"),i=n.n(s);i.a},IvpI:function(e,t,n){},"Sr7/":function(e,t,n){},WzOq:function(e,t,n){},"cB/F":function(e,t,n){},fjjq:function(e,t,n){"use strict";var s=n("WzOq"),i=n.n(s);i.a},jMpL:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"index-wrapper"},[e.isLoginShow?n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"login-title"},[e._v("登录即可领取奖励")]),n("div",{staticClass:"phone-box common-height common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"phone",attrs:{type:"text",placeholder:"请输入手机号",maxlength:"11"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),n("div",{staticClass:"imgcode-box common-height"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.imgCode,expression:"imgCode"}],staticClass:"img-code common-bg",attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.imgCode},on:{input:function(t){t.target.composing||(e.imgCode=t.target.value)}}}),n("img",{staticClass:"img common-bg",attrs:{src:e.isDev?"http://file-sandbox.tiejin.cn/captcha/image?"+e.timestampNow:"http://file.tiejin.cn/captcha/image?"+e.timestampNow},on:{click:function(t){e.updateTimestamp()}}})]),n("div",{staticClass:"smscode-box common-height common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"sms-code",attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),n("span",{staticClass:"send-code",on:{click:function(t){e.getCode({phone:e.phone,grouk_captcha_value:e.imgCode,type:"bind"})}}},[e._v(e._s(e.sendCode))])]),n("div",{staticClass:"btn-common login-btn",class:""!=e.code&&""!=e.imgCode&&""!=e.phone?"ischecked":"uncheck",on:{click:function(t){e.tbLogin()}}},[e._v("登录领取奖励")])]):e._e(),e.isRecieveShow?n("div",{staticClass:"info-wrapper"},[n("div",{staticClass:"info-title"},[e._v("填写信息")]),n("div",{staticClass:"name-info common-height box box-lr"},[n("span",{staticClass:"name"},[e._v("姓名")]),n("div",{staticClass:"name-input common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入您的真实姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),n("div",{staticClass:"addr-info common-height box box-lr"},[n("span",{staticClass:"address"},[e._v("地址")]),n("div",{staticClass:"addr-input common-bg"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{name:"address",cols:"30",rows:"5",placeholder:"请输入您的详细收货地址       例：xx省xx市xx区(县)xx街道"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),n("div",{staticClass:"info-btn btn-common",class:"ischecked",on:{click:function(t){e.submitInfo()}}},[e._v("提交领取奖励")])]):e._e(),e.isAppLogin?n("Tologin",{ref:"tologin"}):e._e(),e.isOkShow?n("Prize",{ref:"prize"}):e._e()],1),n("Rule",{ref:"rule"})],1)},i=[],o=(n("f3/d"),n("yT7P")),r=(n("ls82"),n("MECJ")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rule-wrapper"},[n("div",{staticClass:"rule-box",class:"index-rule"},[n("div",{staticClass:"rule-title"},[e._v("活动规则")]),e._m(0)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"rule-content"},[n("li",[e._v("1.炎炎夏日，城市温度运营商“贴近成都”携手健康饮水新平台“太极兵”，给广大市民送清凉，0元把价值1380元的健康饮水新工具“茶吧机”带回家，从此饮水换“袋”，安全无虞。 ")]),n("li",[e._v("2.本活动官方唯一指定入口为贴近APP。若已有贴近APP，可在APP内在线申请，待资料审核通过，“茶吧机”会由工作人员送货上门。")]),n("li",[e._v("3.未下载贴近APP的用户，需在当前页面填写手机号和验证码，随后会自动跳转至下载页面，安装贴近APP后即可在线申请，待资料审核通过，“茶吧机”会由工作人员送货上门。")]),n("li",[e._v("4.本活动截止时间为：2018年7月31日。")]),n("li",[e._v("5.公司拥有本活动的最终解释权。")])])}],u={},d=u,l=(n("lOpt"),n("KHd+")),p=Object(l["a"])(d,a,c,!1,null,"557b4352",null),h=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-wrapper"},[n("div",{staticClass:"info-title"},[e._v("填写信息")]),n("div",{staticClass:"name-info common-height box box-lr"},[n("span",{staticClass:"name"},[e._v("姓名")]),n("div",{staticClass:"name-input common-bg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入您的真实姓名"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),n("div",{staticClass:"addr-info common-height box box-lr"},[n("span",{staticClass:"address"},[e._v("地址")]),n("div",{staticClass:"addr-input common-bg"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{name:"address",cols:"30",rows:"5",placeholder:"请输入您的收货地址"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})])]),n("div",{staticClass:"info-btn btn-common",class:"ischecked"},[e._v("提交领取奖励")])])},g=[],v={name:"pop",components:{},props:{name:String,address:String}},f=v,b=(n("o+5v"),Object(l["a"])(f,m,g,!1,null,"164a9ea5",null)),w=b.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"prize-wrapper box box-tb box-center-center"},[n("div",{staticClass:"icon-img"}),n("div",{staticClass:"prize-text"},[e._v("恭喜您已领取奖励！")]),n("div",{staticClass:"prize-tips"},[e._v(e._s(e.tips))]),n("div",{staticClass:"prize-btn btn-common ischecked",on:{click:function(t){e.redirectTo()}}},[e._v(e._s(e.buttonDesc))])])},C=[],k=(n("pIFo"),n("+n12")),_=n("L2JU"),O={data:function(){return{tips:"",buttonDesc:""}},mounted:function(){this.$store.state.IS_APP?(this.tips="去首页看看吧，有更多惊喜~",this.buttonDesc="去首页看看"):(this.buttonDesc="去下载app",this.tips="下载app，填写收货地址，领取奖品")},methods:Object(o["a"])({},Object(_["b"])("index",["getAdCookies"]),{redirectTo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("redirect",this.$store.state.IS_APP),!this.$store.state.IS_APP){e.next=5;break}location.href="closer://jump/to/home",e.next=17;break;case 5:if("0"==this.$store.state.CHANNEL_CODE){e.next=16;break}return t=new MobileDetect(this.$store.state.UA),n=t.os(),s="","iOS"==n?(n="ios",s=t.versionStr("iPhone")):"AndroidOS"==n&&(n="android",s=t.versionStr("Android"),s=s.replace(/\./g,"_")),e.next=12,this.getAdCookies({adid:Cookies.get("aid"),webUdid:!0,deviceType:n,deviceVersion:s});case 12:e.sent,Object(k["d"])(),e.next=17;break;case 16:Object(k["d"])();case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},S=O,P=(n("y4nF"),Object(l["a"])(S,x,C,!1,null,"95d23b16",null)),j=P.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-wrapper"},[e._m(0),n("div",{staticClass:"info-btn btn-common",on:{click:function(t){e.jumpLogin()}}},[e._v("去登录")])])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-content"},[n("p",[e._v("您还没有登录~")]),n("p",[e._v("请登录后领取奖励")])])}],$={name:"pop",components:{},props:{name:String,address:String},methods:{jumpLogin:function(){this.$store.state.UA.indexOf("closer-ios")>-1?(console.log("ios jumpLogin"),setupWebViewJavascriptBridge(function(e){console.log("ios jumpLogin success",e),e.callHandler("jumpLogin",null)})):this.$store.state.UA.indexOf("closer-android")>-1&&(console.log("android jumpLogin"),window.bridge.jumpLogin(null))}}},R=$,L=(n("fjjq"),Object(l["a"])(R,A,y,!1,null,"ddb28ec2",null)),I=L.exports,N=(n("dqDD"),{name:"index",components:{Rule:h,InfoWrapper:w,Prize:j,Tologin:I},data:function(){return{isLoginShow:!1,isRecieveShow:!1,isOkShow:!1,isAppLogin:!1,phone:"",imgCode:"",code:"",isDev:this.$store.state.IS_DEV,name:"",address:""}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:Cookies.get("uid")||this.getAdCookies({webUdid:!0,adid:this.$route.params.channelCode}),this.$route.params.channelCode&&Cookies.set("aid",this.$route.params.channelCode,{expires:30});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.state.IS_APP?this.checkLogin(function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("checkLogin res",n),console.log(t.$store.state.UA),!(n&&t.$store.state.UA.indexOf("closer-ios")>-1)){e.next=7;break}return e.next=5,t.doWaterAction();case 5:e.next=9;break;case 7:return e.next=9,t.doWaterAction();case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()):this.doWaterAction();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:Object(o["a"])({},Object(_["d"])("index",{timestampNow:function(e){return e.timestampNow},sendCode:function(e){return e.sendCode}})),methods:Object(o["a"])({},Object(_["b"])("tbLogin",["getAuthPath","loginWithWechat","checkLogin","bindPhone","waterChance","waterUpdate","waterJoin","wechatConfig"]),Object(_["b"])("index",["getCode","login","updateTimestamp","getAdCookies"]),{tbLogin:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("bindPhone"),e.next=3,this.bindPhone({phone:this.phone,code:this.code,imgCode:this.imgCode});case 3:t=e.sent,t&&(this.$store.state.UA.indexOf("closer-ios")>-1?(console.log("ios bind"),setupWebViewJavascriptBridge(function(e){console.log("ios bind success",e),e.callHandler("updateUser",null)})):this.$store.state.UA.indexOf("closer-android")>-1&&(console.log("android bind"),window.bridge.updateUser(null)),n=JSON.parse(Cookies.get("user")),n.phones=this.phone,Cookies.set("user",JSON.stringify(n),{expires:30}),this.checkCurrentState(n));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),doWaterAction:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("doAction",Cookies.get("GroukAuth")),"undefined"==typeof Cookies.get("GroukAuth")||"undefined"==typeof Cookies.get("user")||!this.$store.state.IS_APP){e.next=7;break}t=JSON.parse(Cookies.get("user")),console.log("cookies exist"),this.checkCurrentState(t),e.next=15;break;case 7:if(!this.$route.query.code){e.next=14;break}return e.next=10,this.loginWithWechat(this.$route.query.code);case 10:n=e.sent,n&&n.user&&(Cookies.set("GroukAuth",n.token,{expires:30}),s=n.user,Cookies.set("user",JSON.stringify(s),{expires:30}),this.checkCurrentState(s)),e.next=15;break;case 14:this.$store.state.IS_APP?this.isAppLogin=!0:this.getAuthPath();case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),checkCurrentState:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("checkCurrentState",t),""!=t.phones){e.next=7;break}this.isRecieveShow=!1,this.isOkShow=!1,this.isLoginShow=!0,e.next=29;break;case 7:return n={adid:Cookies.get("aid")},this.$route.query.code?n["code"]=this.$route.query.code:n["phone"]=t.phones,e.next=11,this.waterJoin(n);case 11:return s=e.sent,console.log("joinRes",s),e.next=15,this.waterChance();case 15:i=e.sent,console.log("state",i),e.t0=i,e.next=0===e.t0?20:1===e.t0?24:2===e.t0?26:28;break;case 20:return this.isLoginShow=!1,this.isRecieveShow=!1,this.isOkShow=!1,e.abrupt("break",29);case 24:return this.$store.state.IS_APP?(this.isLoginShow=!1,this.isRecieveShow=!0,this.isOkShow=!1):(this.isLoginShow=!1,this.isRecieveShow=!1,this.isOkShow=!0),e.abrupt("break",29);case 26:return this.$store.state.IS_APP,this.isLoginShow=!1,this.isRecieveShow=!1,this.isOkShow=!0,e.abrupt("break",29);case 28:return e.abrupt("break",29);case 29:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),submitInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.waterUpdate({name:this.name,address:this.address});case 2:t=e.sent,t&&(console.log("waterRes",t),this.checkCurrentState(Cookies.get("user")));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})}),E=N,U=(n("E3M9"),Object(l["a"])(E,s,i,!1,null,"5b8721ec",null));t["default"]=U.exports},lOpt:function(e,t,n){"use strict";var s=n("Sr7/"),i=n.n(s);i.a},"o+5v":function(e,t,n){"use strict";var s=n("+csi"),i=n.n(s);i.a},y4nF:function(e,t,n){"use strict";var s=n("cB/F"),i=n.n(s);i.a},yT7P:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n("oyJW");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){Object(s["a"])(e,t,n[t])})}return e}}}]);
//# sourceMappingURL=12.a9608c0b.js.map