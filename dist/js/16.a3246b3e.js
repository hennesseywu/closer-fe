(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"0Ltp":function(t,s,e){},"4v0V":function(t,s,e){"use strict";var i=e("WV5a"),a=e.n(i);a.a},"5QxJ":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.showRule||t.showIndexRule?e("div",{staticClass:"rule-box activity-rule",class:t.chanceBoxShow?"index-rule":t.loginBoxShow?"login-rule":""},[t.showIndexRule?e("div",{staticClass:"rule-title box box-tb box-center-center"},[e("div",{staticClass:"top-line"}),t._v("\n    活动规则\n    "),e("div",{staticClass:"bottom-line"})]):t._e(),e("div",{staticClass:"rule mt14 activity"},[t._v("本活动奖金与苹果公司无关")]),e("div",{staticClass:"rule mt20 activity opacity"},[t._v("竞猜机会获取规则：")]),t._m(0),e("div",{staticClass:"rule mt40 opacity"},[t._v("竞猜规则：")]),t._m(1)]):t._e()},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rule-ul"},[e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("1. 通过扫码获取一次竞猜机会，下载贴近APP送两次竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("2. 装机后用贴近APP扫描贴近设置在APP内、酒吧、网吧、球场、餐饮店等地方隐藏的二维码获取两次竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("3. 每天登陆贴近APP获得一次竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v(" 4. 每个用户每日投注累计上限为50次。")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rule-ul"},[e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("1. 利用竞猜机会直接参与竞猜，竞猜胜平负（每次最少使用一次机会，上不封顶，同一场比赛使用多次竞猜机会，只能猜同样的胜负平）；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("2. 奖金机制：世界杯比赛日设置相应的奖金额度，奖金额度按照世界杯进程做相应的递增。每场比赛竞猜正确的用户根据所投入竞猜的机会多少，平分该场比赛所设置的奖金（所投入竞猜且竞猜正确的机会越多，获得奖金越高），该奖金将注入“贴近App  我的  钱包”，可按照贴近App平台规则提现；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("3. 已投入竞猜的机会，并且竞猜正确后，才能结算现金奖励；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("4. 每场比赛开始前5分钟关闭竞猜窗口，用户无法在已关闭竞猜窗口的比赛场次投入竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("5. 比赛第二日10：00，结算现金奖励。")])]),e("div",{staticClass:"item last"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("所有的竞猜活动，以公司制定的规则为准。公司拥有本活动的最终解释权")])])])}],o={name:"rule",props:{showRule:{type:Boolean,default:!0},showIndexRule:{type:Boolean,default:!1},loginBoxShow:{type:Boolean,default:!1},chanceBoxShow:{type:Boolean,default:!1}},data:function(){return{}},methods:{}},n=o,c=(e("nEyH"),e("KHd+")),l=Object(c["a"])(n,i,a,!1,null,"c42ee462",null);s["a"]=l.exports},"7qb2":function(t,s,e){},FbUH:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"index"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"invite-img",on:{click:t.openShare}}),e("div",{staticClass:"text-desc"},[e("span",{staticClass:"desc"},[t._v("扫描寻找二维码，可获得更多竞猜机会")]),e("span",{staticClass:"tips",on:{click:function(s){t.redirect2Chance()}}},[t._v("查看攻略")])]),t.chanceBoxShow?e("div",{staticClass:"chance-box box-commen box box-tb box-center-center"},[e("div",{staticClass:"img"}),e("div",{staticClass:"btn-img",on:{click:function(s){t.openLoginBox()}}}),e("div",{staticClass:"text-img mt-20"})]):t._e(),t.loginBoxShow?e("div",{staticClass:"login-box box-commen box box-tb box-center-center"},[e("div",{staticClass:"login-info"},[e("div",{staticClass:"phone-box login-commen"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"ml-24",attrs:{type:"text",maxlength:"11",placeholder:"请输入领奖手机号码"},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),e("div",{staticClass:"img-box  box box-lr"},[e("div",{staticClass:"img-put login-commen"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.imgCode,expression:"imgCode"}],attrs:{type:"text",placeholder:"请输入图形验证码"},domProps:{value:t.imgCode},on:{input:function(s){s.target.composing||(t.imgCode=s.target.value)}}})]),e("div",{staticClass:"img-code",on:{click:function(s){t.updateTimestamp()}}},[e("img",{staticClass:"code",attrs:{src:t.isDev?"http://file-sandbox.tiejin.cn/captcha/image?"+t.timestampNow:"http://file.tiejin.cn/captcha/image?"+t.timestampNow}})])]),e("div",{staticClass:"code-box login-commen"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}}),e("span",{staticClass:"code",on:{click:function(s){t.getCode({phone:t.phone,grouk_captcha_value:t.imgCode})}}},[t._v(t._s(t.sendCode))])]),e("div",{staticClass:"get-btn",on:{click:function(s){t.login({phone:t.phone,token:t.code,imgCode:t.imgCode})}}}),e("div",{staticClass:"text"})])]):t._e()]),e("Rule",{ref:"rule",attrs:{showIndexRule:t.showIndexRule,loginBoxShow:t.loginBoxShow,chanceBoxShow:t.chanceBoxShow}}),t.isApp?t._e():e("Getapp",{ref:"getapp"}),e("Sharepop",{ref:"sharepop",attrs:{isApp:t.isApp,isDev:t.isDev}})],1)},a=[],o=e("yT7P"),n=e("dqDD"),c=e("5QxJ"),l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"login-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"pop-header"},[t._v("您还没有登录哦～")]),e("div",{staticClass:"pop-body"},[e("div",{staticClass:"decs"},[t._v("点击【我的】登录就能拿到新人礼金哦")]),e("div",{staticClass:"login-img"})]),e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn"},[t._v("确认")])])])},p=[],d=(e("f3/d"),e("Kw5r"));d["default"].component(n["Popup"].name,n["Popup"]);var r={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},u=r,v=(e("4v0V"),e("KHd+")),m=Object(v["a"])(u,l,p,!1,null,"35ee1855",null),C=m.exports,h=e("tPC7"),g=e("RGCu"),f=e("Qaqr"),b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"image-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"pop-header"},[t._v("请输入验证码")]),e("div",{staticClass:"pop-body"},[e("div",{staticClass:"login-img"})]),e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn"},[t._v("确认")])])])},x=[];d["default"].component(n["Popup"].name,n["Popup"]);var _={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1}}},w=_,k=(e("MFQ1"),Object(v["a"])(w,b,x,!1,null,"59e56ca2",null)),P=k.exports,B=e("+n12"),S=e("L2JU"),A={name:"index",components:{Toast:n["Toast"],Rule:c["a"],Loginpop:C,Newuserpop:h["a"],Getapp:g["a"],Sharepop:f["a"],Imagepop:P},created:function(){this.id=Object(B["e"])(),this.checkIsApp(),this.checkEnv(),Cookies.get("uid")||this.getAdCookies({webUdid:!0,adid:this.$route.params.channelCode})},mounted:function(){this.checkLogin()},data:function(){return{phone:"",imgCode:"",code:"",isApp:"",isDev:!1,showIndexRule:!0,channelCode:"",id:""}},computed:Object(o["a"])({},Object(S["d"])("index",{loginSuccess:function(t){return t.loginSuccess},chanceBoxShow:function(t){return t.chanceBoxShow},loginBoxShow:function(t){return t.loginBoxShow},sendCode:function(t){return t.sendCode},timestampNow:function(t){return t.timestampNow}})),methods:Object(o["a"])({},Object(S["b"])("index",["getCode","login","openLoginBox","checkLogin","getAdCookies","updateTimestamp"]),{checkIsApp:function(){this.isApp=this.$store.state.IS_APP},redirect2Chance:function(){Object(B["k"])(this.$store.state.IS_APP)},openShare:function(){this.$refs.sharepop.open()},checkEnv:function(){this.isDev=this.$store.state.IS_DEV},changeImg:function(){this.imageParam=Date.now()}})},y=A,O=(e("RNv+"),Object(v["a"])(y,i,a,!1,null,"27300a9a",null));s["default"]=O.exports},HZi2:function(t,s,e){},KwBT:function(t,s,e){},MFQ1:function(t,s,e){"use strict";var i=e("7qb2"),a=e.n(i);a.a},"RNv+":function(t,s,e){"use strict";var i=e("HZi2"),a=e.n(i);a.a},WV5a:function(t,s,e){},nEyH:function(t,s,e){"use strict";var i=e("0Ltp"),a=e.n(i);a.a},tPC7:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"newuser-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:function(s){t.close()}}}),e("div",{staticClass:"pop-header"},[t.status?e("div",{staticClass:"winner"},[e("div",{staticClass:"win-text"},[t._v("恭喜您！")]),e("div",{staticClass:"win-btn"},[t._v("获得"+t._s(t.count)+"次竞猜机会")])]):t._e(),t.status?t._e():e("div",{staticClass:"loser"},[e("div",{staticClass:"loser-text"},[t._v("很遗憾"),e("br"),t._v(" 已经领取过了哟～")])])]),e("div",{staticClass:"pop-body box box-tb box-center-center"},[t.status?e("div",{staticClass:"win-img"}):e("div",{staticClass:"loser-img"}),t.presentAvailable?e("div",{staticClass:"decs"},[t._v("“是时候展示真正的技术了！”")]):e("div",{staticClass:"decs"},[t._v("“去APP找一找会有更多机会”")]),t.presentAvailable?e("div",{staticClass:"app-text"},[t._v("还有"),e("span",[t._v("10")]),t._v("元新人大礼哟~")]):t._e(),t.presentAvailable?e("div",{staticClass:"app-desc"},[t._v("进入【我的钱包】-【奖励金】中领取")]):t._e()]),t.isApp?t._e():e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn",on:{click:function(s){t.download()}}},[t._v("下载APP 机会翻倍")])])])},a=[],o=(e("xfY5"),e("f3/d"),e("Kw5r")),n=e("dqDD"),c=e("+n12");o["default"].component(n["Popup"].name,n["Popup"]);var l={name:"pop",components:{},props:{status:{type:Boolean},isApp:{type:Boolean},count:Number,className:String,closeOnClickModal:{type:Boolean,default:!0},presentAvailable:Boolean},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},download:function(){Object(c["d"])()}}},p=l,d=(e("xEQu"),e("KHd+")),r=Object(d["a"])(p,i,a,!1,null,"7b344f88",null);s["a"]=r.exports},xEQu:function(t,s,e){"use strict";var i=e("KwBT"),a=e.n(i);a.a}}]);
//# sourceMappingURL=16.a3246b3e.js.map