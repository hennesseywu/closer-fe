(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"/0lW":function(t,e,n){"use strict";var a=n("WAoH"),c=n.n(a);c.a},LOby:function(t,e,n){"use strict";var a=n("jg29"),c=n.n(a);c.a},OHX4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.V_1_2_3?n("header",{staticClass:"header"},[n("div",{staticClass:"left"},[n("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(e){t.handleBack()}}}),n("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(e){t.handleClose()}}})]),n("div",{staticClass:"right"},[n("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(e){t.handleShare()}}})])]):t._e()},c=[],s=n("yT7P"),o=n("L2JU"),i={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean,home:Boolean},computed:Object(s["a"])({},Object(o["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},l=i,r=(n("LOby"),n("KHd+")),d=Object(r["a"])(l,a,c,!1,null,null,null);e["a"]=d.exports},URgv:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main rule"},[t.IS_APP?n("local-header",{attrs:{back:""}}):t._e(),t._m(0)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bd"},[n("div",{staticClass:"bd-name"},[t._v("游戏规则")]),n("div",{staticClass:"bd-wrap"},[n("div",{staticClass:"bd-chance"},[n("div",{staticClass:"bd-title"},[t._v("\n          机会获得\n        ")]),n("div",{staticClass:"bd-content"},[n("p",[t._v("1、用户每天将自动获得一次游戏机会。")]),n("p",[t._v("2、游戏机会用完之后，可通过分享游戏并邀请好友参与的方式获取游戏机会，每邀请一位好友参与游戏，即可获得一次游戏机会。例如，小王将游戏分享到微信群中，有10位好友参与了游戏，那么小王即可获得10次游戏机会。")]),n("p",[t._v("3、每次答题（包括中途退出）均会消耗一次游戏机会，请尽量完成答题，冲击奖金。")]),n("p",[t._v("4、当用户奖金池达到100元之后，用户将无法进行游戏。")])])]),n("div",{staticClass:"bd-reward"},[n("div",{staticClass:"bd-title"},[t._v("奖金获得")]),n("div",{staticClass:"bd-content"},[n("p",[t._v("1、每位用户最多可冲击100元现金奖励，在此之前，用户可无限次答题，每次得分在60-100之间的，奖励2元，得分100分的，奖励5元。不足60分的没有奖金。")]),n("p",[t._v("2、您的奖金将被发放至您的贴近账户【我的-钱包】中，可进入该板块进行查看。如果您还未注册APP，烦请用微信注册登录再查看。")]),n("p",[t._v("3、奖励金为冻结金额，您可以通过邀请好友注册贴近、每天登录APP进行解冻。")])])])])])}],s=(n("pIFo"),n("yT7P")),o=(n("Kw5r"),n("L2JU")),i=n("OHX4"),l={name:"rule",components:{localHeader:i["a"]},computed:Object(s["a"])({},Object(o["d"])(["IS_APP"])),created:function(){var t=this.$route.params.from;"localIndex"!=t&&this.$router.replace({name:"localIndex"})}},r=l,d=(n("/0lW"),n("KHd+")),u=Object(d["a"])(r,a,c,!1,null,null,null);e["default"]=u.exports},WAoH:function(t,e,n){},jg29:function(t,e,n){},yT7P:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var a=n("oyJW");function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},c=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),c.forEach(function(e){Object(a["a"])(t,e,n[e])})}return t}}}]);
//# sourceMappingURL=4.fb960603.js.map