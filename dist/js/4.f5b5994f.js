(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"4v0V":function(e,t,i){"use strict";var o=i("WV5a"),s=i.n(o);s.a},"7qb2":function(e,t,i){},FbUH:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"index"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"invite-img",on:{click:e.openShare}}),i("div",{staticClass:"text-desc"},[i("span",{staticClass:"desc"},[e._v("扫描寻找二维码，可获得更多竞猜机会")]),i("span",{staticClass:"tips",on:{click:function(t){e.redirect2Chance()}}},[e._v("查看攻略")])]),e.chanceBoxShow?i("div",{staticClass:"chance-box box-commen box box-tb box-center-center"},[i("div",{staticClass:"img"}),i("div",{staticClass:"btn-img",on:{click:function(t){e.openLoginBox()}}}),i("div",{staticClass:"text-img mt-20"})]):e._e(),e.loginBoxShow?i("div",{staticClass:"login-box box-commen box box-tb box-center-center"},[i("div",{staticClass:"login-info"},[i("div",{staticClass:"phone-box login-commen"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"ml-24",attrs:{type:"text",maxlength:"11",placeholder:"请输入领奖手机号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),i("div",{staticClass:"img-box  box box-lr"},[i("div",{staticClass:"img-put login-commen"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.imgCode,expression:"imgCode"}],attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:e.imgCode},on:{input:function(t){t.target.composing||(e.imgCode=t.target.value)}}})]),i("div",{staticClass:"img-code",on:{click:function(t){e.changeImg()}}},[i("img",{staticClass:"code",attrs:{src:e.isDev?"http://file-sandbox.tiejin.cn/captcha/image?"+e.imageParam:"http://file.tiejin.cn/captcha/image?"+e.imageParam}})])]),i("div",{staticClass:"code-box login-commen"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),i("span",{staticClass:"code",on:{click:function(t){e.getCode({phone:e.phone,grouk_captcha_value:e.imgCode})}}},[e._v(e._s(e.sendCode))])]),i("div",{staticClass:"get-btn",on:{click:function(t){e.login({phone:e.phone,token:e.code})}}}),i("div",{staticClass:"text"})])]):e._e()]),i("Rule",{ref:"rule",attrs:{showIndexRule:e.showIndexRule}}),e.isApp?e._e():i("Getapp",{ref:"getapp"}),i("Sharepop",{ref:"sharepop",attrs:{isApp:e.isApp,isDev:e.isDev}})],1)},s=[],n=i("yT7P"),a=(i("VRzm"),i("dqDD")),c=i("5QxJ"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("mt-popup",{staticClass:"login-pop",attrs:{closeOnClickModal:e.closeOnClickModal},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("div",{staticClass:"pop-header"},[e._v("您还没有登录哦～")]),i("div",{staticClass:"pop-body"},[i("div",{staticClass:"decs"},[e._v("点击【我的】登录就能拿到新人礼金哦")]),i("div",{staticClass:"login-img"})]),i("div",{staticClass:"pop-footer"},[i("div",{staticClass:"confirm-btn"},[e._v("确认")])])])},p=[],d=(i("f3/d"),i("Kw5r"));d["default"].component(a["Popup"].name,a["Popup"]);var r={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},u=r,m=(i("4v0V"),i("KHd+")),v=Object(m["a"])(u,l,p,!1,null,"35ee1855",null),h=v.exports,g=i("tPC7"),C=i("RGCu"),f=i("Qaqr"),b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("mt-popup",{staticClass:"image-pop",attrs:{closeOnClickModal:e.closeOnClickModal},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[i("div",{staticClass:"pop-header"},[e._v("请输入验证码")]),i("div",{staticClass:"pop-body"},[i("div",{staticClass:"login-img"})]),i("div",{staticClass:"pop-footer"},[i("div",{staticClass:"confirm-btn"},[e._v("确认")])])])},x=[];d["default"].component(a["Popup"].name,a["Popup"]);var k={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},_=k,w=(i("MFQ1"),Object(m["a"])(_,b,x,!1,null,"59e56ca2",null)),P=w.exports,S=i("+n12"),O=i("L2JU"),j={name:"index",components:{Toast:a["Toast"],Rule:c["a"],Loginpop:h,Newuserpop:g["a"],Getapp:C["a"],Sharepop:f["a"],Imagepop:P},created:function(){this.id=Object(S["b"])(),this.checkIsApp(),this.checkEnv(),Cookies.get("closer_udid")||this.getAdCookies({webUdid:!0,adid:this.$route.params.channelCode})},mounted:function(){this.checkLogin()},data:function(){return{phone:"",imgCode:"",code:"",isApp:"",isDev:!1,showIndexRule:!0,channelCode:"",id:"",imageParam:0}},computed:Object(n["a"])({},Object(O["c"])("index",{loginSuccess:function(e){return e.loginSuccess},chanceBoxShow:function(e){return e.chanceBoxShow},loginBoxShow:function(e){return e.loginBoxShow},sendCode:function(e){return e.sendCode}})),methods:Object(n["a"])({},Object(O["b"])("index",["getCode","login","openLoginBox","checkLogin","getAdCookies"]),{checkIsApp:function(){this.isApp=this.$store.state.IS_APP},redirect2Chance:function(){Object(S["c"])(this.$store.state.IS_APP)},openShare:function(){this.$refs.sharepop.open()},checkEnv:function(){this.isDev=this.$store.state.IS_DEV},changeImg:function(){this.imageParam=Date.now()}})},B=j,A=(i("j6pE"),Object(m["a"])(B,o,s,!1,null,"37a57a90",null));t["default"]=A.exports},MFQ1:function(e,t,i){"use strict";var o=i("7qb2"),s=i.n(o);s.a},WV5a:function(e,t,i){},"fBH/":function(e,t,i){},j6pE:function(e,t,i){"use strict";var o=i("fBH/"),s=i.n(o);s.a}}]);
//# sourceMappingURL=4.f5b5994f.js.map