(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"/zfx":function(t,a,e){},"7LJ7":function(t,a,e){"use strict";var s=e("/zfx"),n=e.n(s);n.a},Ea1W:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.ENV.v123?e("header",{staticClass:"header"},[e("div",{staticClass:"left"},[e("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(a){t.handleBack()}}}),e("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(a){t.handleClose()}}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"share",style:{display:t.share?"block":"none"},on:{click:function(a){t.handleShare()}}})])]):t._e()},n=[],i=(e("VRzm"),e("L2JU"),{name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean,home:Boolean},mounted:function(){console.log("evn.v123---",this.ENV.v123)},methods:{handleBack:function(){this.home?this.$router.push({name:"moonIndex"}):this.$router.back()},handleClose:function(){if(this.ENV.app&&this.ENV.ios)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.ENV.app&&this.ENV.android&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"moonShare"})}}}),c=i,o=(e("dHYW"),e("KHd+")),l=Object(o["a"])(c,s,n,!1,null,"57e44399",null);a["a"]=l.exports},PtkR:function(t,a,e){},VisK:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main",class:{"in-app":t.ENV.app}},[t._m(0),e("div",{staticClass:"moon-rule"},[t.ENV.app?e("moon-header",{attrs:{back:""}}):t._e(),t._m(1)],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"yun-wrapper min"},[e("div",{staticClass:"yun"}),e("div",{staticClass:"yun1"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"bd"},[e("div",{staticClass:"bd-name"},[t._v("活动规则")]),e("div",{staticClass:"bd-wrap"},[e("div",{staticClass:"bd-chance"},[e("div",{staticClass:"bd-title"},[t._v("\n            机会获取\n          ")]),e("div",{staticClass:"bd-content"},[e("p",[t._v("1、用户每天将自动获得2次游戏机会。")]),e("p",[t._v("2、游戏机会用完之后，可通过分享游戏并邀请好友参与的方式获取游戏机会，每邀请一位好友参与游戏，即可获得一次游戏机会。例如，小王将游戏分享到微信群中，有10位好友参与了游戏，那么小王即可获得10次游戏机会。")]),e("p",[t._v("3、每次答题（包括中途退出）均会消耗一次游戏机会，请尽量完成答题，冲击奖金。")]),e("p",[t._v("4、当用户奖金池达到100元之后，用户将无法进行游戏")])])]),e("div",{staticClass:"bd-reward"},[e("div",{staticClass:"bd-title"},[t._v("奖金获得")]),e("div",{staticClass:"bd-content"},[e("p",[t._v("1、每位用户最多可冲击100元现金奖励，在此之前，用户可无限次答题，每次得分在60-100之间的，奖励2元，得分100分的，奖励5元。不足60分的没有奖金。")]),e("p",[t._v("2、您的奖金将被发放至您的贴近账户【我的-钱包】中，可进入该板块进行查看。如果您还未注册APP，烦请用微信注册登陆再查看。")]),e("p",[t._v("3、奖励金为冻结金额，您可以通过邀请好友注册贴近、每天登陆APP进行解冻")])])])])])}],i=(e("VRzm"),e("Kw5r"),e("L2JU"),e("Ea1W")),c={name:"rule",components:{moonHeader:i["a"]},created:function(){}},o=c,l=(e("7LJ7"),e("KHd+")),r=Object(l["a"])(o,s,n,!1,null,"66312195",null);a["default"]=r.exports},dHYW:function(t,a,e){"use strict";var s=e("PtkR"),n=e.n(s);n.a}}]);
//# sourceMappingURL=3.c98a4106.js.map