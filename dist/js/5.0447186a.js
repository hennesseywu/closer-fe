(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"4v0V":function(e,t,o){"use strict";var i=o("WV5a"),s=o.n(i);s.a},"7qb2":function(e,t,o){},FbUH:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"index"},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"invite-img",on:{click:e.openShare}}),o("div",{staticClass:"text-desc"},[o("span",{staticClass:"desc"},[e._v("扫描寻找二维码，可获得更多竞猜机会")]),o("span",{staticClass:"tips",on:{click:function(t){e.redirect2Chance()}}},[e._v("查看攻略")])]),e.chanceBoxShow?o("div",{staticClass:"chance-box box-commen box box-tb box-center-center"},[o("div",{staticClass:"img"}),o("div",{staticClass:"btn-img",on:{click:function(t){e.openLoginBox()}}}),o("div",{staticClass:"text-img mt-20"})]):e._e(),e.loginBoxShow?o("div",{staticClass:"login-box box-commen box box-tb box-center-center"},[o("div",{staticClass:"login-info"},[o("div",{staticClass:"phone-box login-commen"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"ml-24",attrs:{type:"text",maxlength:"11",placeholder:"请输入领奖手机号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),o("div",{staticClass:"img-box  box box-lr"},[o("div",{staticClass:"img-put login-commen"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.imgCode,expression:"imgCode"}],attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.imgCode},on:{input:function(t){t.target.composing||(e.imgCode=t.target.value)}}})]),o("div",{staticClass:"img-code",on:{click:function(t){e.updateTimestamp()}}},[o("img",{staticClass:"code",attrs:{src:e.isDev?"http://file-sandbox.tiejin.cn/captcha/image?"+e.timestampNow:"http://file.tiejin.cn/captcha/image?"+e.timestampNow}})])]),o("div",{staticClass:"code-box login-commen"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),o("span",{staticClass:"code",on:{click:function(t){e.getCode({phone:e.phone,grouk_captcha_value:e.imgCode})}}},[e._v(e._s(e.sendCode))])]),o("div",{staticClass:"get-btn",on:{click:function(t){e.login({phone:e.phone,token:e.code,imgCode:e.imgCode})}}}),o("div",{staticClass:"text"})])]):e._e()]),o("Rule",{ref:"rule",attrs:{showIndexRule:e.showIndexRule,loginBoxShow:e.loginBoxShow,chanceBoxShow:e.chanceBoxShow}}),e.isApp?e._e():o("Getapp",{ref:"getapp"}),o("Sharepop",{ref:"sharepop",attrs:{isApp:e.isApp,isDev:e.isDev}})],1)},s=[],n=o("yT7P"),a=(o("VRzm"),o("dqDD")),c=o("5QxJ"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("mt-popup",{staticClass:"login-pop",attrs:{closeOnClickModal:e.closeOnClickModal},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[o("div",{staticClass:"pop-header"},[e._v("您还没有登录哦～")]),o("div",{staticClass:"pop-body"},[o("div",{staticClass:"decs"},[e._v("点击【我的】登录就能拿到新人礼金哦")]),o("div",{staticClass:"login-img"})]),o("div",{staticClass:"pop-footer"},[o("div",{staticClass:"confirm-btn"},[e._v("确认")])])])},p=[],d=(o("f3/d"),o("Kw5r"));d["default"].component(a["Popup"].name,a["Popup"]);var r={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},u=r,m=(o("4v0V"),o("KHd+")),v=Object(m["a"])(u,l,p,!1,null,"35ee1855",null),h=v.exports,g=o("tPC7"),C=o("RGCu"),f=o("Qaqr"),b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("mt-popup",{staticClass:"image-pop",attrs:{closeOnClickModal:e.closeOnClickModal},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[o("div",{staticClass:"pop-header"},[e._v("请输入验证码")]),o("div",{staticClass:"pop-body"},[o("div",{staticClass:"login-img"})]),o("div",{staticClass:"pop-footer"},[o("div",{staticClass:"confirm-btn"},[e._v("确认")])])])},x=[];d["default"].component(a["Popup"].name,a["Popup"]);var w={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},k=w,_=(o("MFQ1"),Object(m["a"])(k,b,x,!1,null,"59e56ca2",null)),S=_.exports,P=o("+n12"),O=o("L2JU"),B={name:"index",components:{Toast:a["Toast"],Rule:c["a"],Loginpop:h,Newuserpop:g["a"],Getapp:C["a"],Sharepop:f["a"],Imagepop:S},created:function(){this.id=Object(P["b"])(),this.checkIsApp(),this.checkEnv(),Cookies.get("closer_udid")||this.getAdCookies({webUdid:!0,adid:this.$route.params.channelCode})},mounted:function(){this.checkLogin()},data:function(){return{phone:"",imgCode:"",code:"",isApp:"",isDev:!1,showIndexRule:!0,channelCode:"",id:""}},computed:Object(n["a"])({},Object(O["c"])("index",{loginSuccess:function(e){return e.loginSuccess},chanceBoxShow:function(e){return e.chanceBoxShow},loginBoxShow:function(e){return e.loginBoxShow},sendCode:function(e){return e.sendCode},timestampNow:function(e){return e.timestampNow}})),methods:Object(n["a"])({},Object(O["b"])("index",["getCode","login","openLoginBox","checkLogin","getAdCookies","updateTimestamp"]),{checkIsApp:function(){this.isApp=this.$store.state.IS_APP},redirect2Chance:function(){Object(P["d"])(this.$store.state.IS_APP)},openShare:function(){this.$refs.sharepop.open()},checkEnv:function(){this.isDev=this.$store.state.IS_DEV},changeImg:function(){this.imageParam=Date.now()}})},j=B,A=(o("tQ1o"),Object(m["a"])(j,i,s,!1,null,"1928edc6",null));t["default"]=A.exports},MFQ1:function(e,t,o){"use strict";var i=o("7qb2"),s=o.n(i);s.a},PuFm:function(e,t,o){},WV5a:function(e,t,o){},tQ1o:function(e,t,o){"use strict";var i=o("PuFm"),s=o.n(i);s.a}}]);
//# sourceMappingURL=5.0447186a.js.map