(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"4v0V":function(e,t,o){"use strict";var s=o("WV5a"),n=o.n(s);n.a},"9nTi":function(e,t,o){"use strict";var s=o("gdP+"),n=o.n(s);n.a},FbUH:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"index"},[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"invite-img",on:{click:function(t){e.redirectTo()}}}),e._m(0),e.chanceBoxShow?o("div",{staticClass:"chance-box box-commen box box-tb box-center-center"},[o("div",{staticClass:"img"}),o("div",{staticClass:"btn-img",on:{click:function(t){e.openLoginBox()}}}),o("div",{staticClass:"text-img mt-20"})]):e._e(),e.loginBoxShow?o("div",{staticClass:"login-box box-commen box box-tb box-center-center"},[o("div",{staticClass:"login-info"},[o("div",{staticClass:"phone-box login-commen"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"ml-24",attrs:{type:"text",maxlength:"11",placeholder:"请输入领奖手机号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),o("div",{staticClass:"code-box login-commen"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),o("span",{staticClass:"code",on:{click:function(t){e.getCode(e.phone)}}},[e._v(e._s(e.sendCode))])]),o("div",{staticClass:"get-btn",on:{click:function(t){e.login({phone:e.phone,code:e.code})}}}),o("div",{staticClass:"text"})])]):e._e()]),o("Rule",{ref:"rule",attrs:{showIndexRule:e.showIndexRule}}),e.isApp?e._e():o("Getapp",{ref:"getapp"})],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-desc"},[o("span",{staticClass:"desc"},[e._v("扫描寻找二维码，可获得更多竞猜机会")]),o("span",{staticClass:"tips"},[e._v("查看攻略")])])}],i=o("yT7P"),a=(o("VRzm"),o("5QxJ")),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("mt-popup",{staticClass:"login-pop",attrs:{closeOnClickModal:e.closeOnClickModal},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[o("div",{staticClass:"pop-header"},[e._v("您还没有登录哦～")]),o("div",{staticClass:"pop-body"},[o("div",{staticClass:"decs"},[e._v("点击【我的】登录就能拿到新人礼金哦")]),o("div",{staticClass:"login-img"})]),o("div",{staticClass:"pop-footer"},[o("div",{staticClass:"confirm-btn"},[e._v("确认")])])])},l=[],r=(o("f3/d"),o("Kw5r")),p=o("dqDD");r["default"].component(p["Popup"].name,p["Popup"]);var d={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},u=d,m=(o("4v0V"),o("KHd+")),v=Object(m["a"])(u,c,l,!1,null,"35ee1855",null),h=v.exports,C=o("tPC7"),g=o("RGCu"),f=o("L2JU"),x={name:"index",components:{Rule:a["a"],Loginpop:h,Newuserpop:C["a"],Getapp:g["a"]},created:function(){this.checkIsApp()},data:function(){return{phone:"",code:"",isApp:"",showIndexRule:!0,channelCode:""}},computed:Object(i["a"])({},Object(f["c"])("index",{loginSuccess:function(e){return e.loginSuccess},chanceBoxShow:function(e){return e.chanceBoxShow},loginBoxShow:function(e){return e.loginBoxShow},sendCode:function(e){return e.sendCode}})),methods:Object(i["a"])({},Object(f["b"])("index",["getCode","login","openLoginBox"]),{checkIsApp:function(){console.log("isApp",this.$store.state.IS_APP),console.log("params",this.$route.params),this.$route.params.channelCode&&(this.$store.state.CHANNEL_CODE=this.$route.params.channelCode),this.isApp=this.$store.state.IS_APP},redirectTo:function(){var e="",t=0;if(console.log(Cookies.get("totalAwardAmt")),Cookies.get("totalAwardAmt")&&(t=Cookies.get("totalAwardAmt")),Cookies.get("user")){var o=JSON.parse(Cookies.get("user"));o.objectID&&(e=o.objectID)}this.$router.push({name:"worldcupShare",params:{userId:e,amount:t}})}})},b=x,w=(o("9nTi"),Object(m["a"])(b,s,n,!1,null,"78da15ee",null));t["default"]=w.exports},WV5a:function(e,t,o){},"gdP+":function(e,t,o){}}]);
//# sourceMappingURL=3.429b70e0.js.map