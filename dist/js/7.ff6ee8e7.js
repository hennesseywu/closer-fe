(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"3mO2":function(t,i,a){"use strict";a.r(i);var s,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"main local-index",class:{"in-app":t.IS_APP}},[t.IS_APP?a("local-header",{attrs:{close:"",share:""}}):t._e(),a("section",{staticClass:"tab"},[a("div",{staticClass:"tab-default tab-left",on:{click:function(i){t.showRankingList()}}},[t._v("好友排行榜")]),a("div",{staticClass:"tab-default tab-right",on:{click:function(i){t.showRule()}}},[t._v("活动规则")])]),a("section",{staticClass:"hd animated bounceInDown fast"},[a("div",{staticClass:"hd-default hd-1",class:{active:t.mounted}}),a("div",{staticClass:"hd-default hd-2",class:{active:t.mounted}}),a("div",{staticClass:"hd-default hd-3",class:{active:t.mounted}}),a("div",{staticClass:"hd-default hd-4",class:{active:t.mounted}}),a("div",{staticClass:"hd-img"})]),a("section",{staticClass:"bd",class:{active:t.mounted}},[a("div",{staticClass:"bd-progress"},[a("div",{staticClass:"bd-complete",style:{width:t.currentWidth}})]),a("div",{staticClass:"bd-scale"},[a("div",{staticClass:"bd-scale-default bd-scale-0",class:{active:t.statistic.totalAwardAmt>t.showAmount(0)}},[a("span",{staticClass:"bd-arrow bd-arrow-left"}),a("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(0,2)))])]),a("div",{staticClass:"bd-scale-default bd-scale-50",class:{active:t.statistic.totalAwardAmt>=t.showAmount(.5)}},[a("span",{staticClass:"bd-arrow bd-arrow-center"}),a("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(.5,2)))])]),a("div",{staticClass:"bd-scale-default bd-scale-100",class:{active:t.statistic.totalAwardAmt>=t.showAmount(1)}},[a("span",{staticClass:"bd-arrow bd-arrow-right"}),a("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(1,2)))])])]),a("div",{staticClass:"bd-total"},[t._v("\n      累计获得：\n      "),a("span",{staticClass:"bd-count"},[t._v(t._s(t.currentTotalAmount))]),t._v(" 元\n      "),a("span",{staticClass:"bd-tixian",on:{click:function(i){t.handleWithDraw()}}},[t._v("去提现")])]),a("div",{staticClass:"bd-desc",domProps:{innerHTML:t._s(t.currentDesc)}}),a("div",{staticClass:"bd-btn animated pulse infinite delay-2",on:{click:function(i){t.handleStart()}}}),a("div",{staticClass:"bd-remain"},[t._v("您还有"+t._s(t.statistic.chance)+"次答题机会")])]),a("section",{staticClass:"ft"}),a("local-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,path:t.path,content:t.dialog.content},on:{close:t.closeDialog}}),a("div",{ref:"canvasContainer",staticClass:"share-default"},[a("img",{staticClass:"share-default-bg",attrs:{src:t.defaultImg,alt:""}}),a("div",{staticClass:"share-qrcode"},[a("qrcode-vue",{attrs:{value:t.qrcode.val,size:t.qrcode.size}})],1)])],1)},e=[],c=a("oyJW"),o=a("yT7P"),r=(a("Kw5r"),a("17CV")),l=a("9ijR"),d=a("OHX4"),u=a("qtr8"),h=a.n(u),m=a("L2JU"),f=a("+n12"),v=a("dqDD"),w=(s={name:"localIndex",data:function(){return{currentWidth:0,path:"",mounted:!1,dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"},qrcode:{val:"https://a.tiejin.cn/local",size:80},defaultImg:h.a}},components:{QrcodeVue:r["a"],localDialog:l["a"],localHeader:d["a"]},computed:function(){this.userShare()}},Object(c["a"])(s,"computed",Object(o["a"])({},Object(m["d"])("local",["aid","isLogin","statistic"]),Object(m["d"])(["IS_APP","IS_WX","IS_DEV"]),Object(m["d"])("local",{currentQuesitionNum:function(t){return t.currentQuesitionNum},objectID:function(t){return t.user.objectID||""},salt:function(t){return t.statistic.signSalt},activityId:function(t){return t.activityId}}),{remainTimesToMax:function(){return Math.ceil(Object(f["k"])(this.statistic.maxAwardAmt-this.statistic.totalAwardAmt)/5)},currentTotalAmount:function(){return(this.statistic.totalAwardAmt/100).toFixed(0)},currentDesc:function(){return 0==this.remainTimesToMax?"恭喜，您已获得全部".concat(Object(f["k"])(this.statistic.maxAwardAmt),"元的现金奖励~"):'您再获得<span style="color: #f20707;">'.concat(this.remainTimesToMax,"次</span>王者称号就可以拿到总计").concat(Object(f["k"])(this.statistic.maxAwardAmt),"元的现金奖励了！")}})),Object(c["a"])(s,"created",function(){var t=this,i=this;console.log("isLogin:",i.isLogin),Cookies.set("aid",i.aid,{expires:7}),i.checkParams(i.$route.query),i.isLogin?i.initAnimation():i.IS_APP?i.checkLoginInApp(i.initAnimation):i.IS_WX&&i.getUserInfoAndLoginWithWx(i.$route.query).then(function(a){a?i.initAnimation():(t.dialog.share=!1,t.dialog.content="亲，请先登录再参与答题吧~",t.dialog.show=!0)})}),Object(c["a"])(s,"methods",Object(o["a"])({},Object(m["b"])("local",["checkParams","checkLoginInApp","getUserInfoAndLoginWithWx","getStatistic","initWxConfig","updateCurrentQuestionNum","userShare"]),Object(m["c"])("local",["SET_USER","updateCurrentQuestionNum"]),{showAmount:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(this.statistic.maxAwardAmt*t/Math.pow(10,i))},showRankingList:function(){this.isLogin?this.checkOtherEnv()&&this.$router.push({name:"localRank"}):this.checkLoginInApp(this.initAnimation)},showRule:function(){this.$router.push({name:"localRule",params:{from:"localIndex"}})},handleStart:function(){this.IS_APP||this.IS_WX?this.isLogin?this.checkOtherEnv(!0)&&(window.pageTo="answer",this.$router.push({name:"localAnswer",params:{from:"fromIndex"}})):this.checkLoginInApp(this.initAnimation):this.dialog={share:!1,content:"亲，请去微信环境下答题吧",show:!0}},drawHtmlToCanvas:function(){var t=this,i=this.$refs.canvasContainer;Object(f["e"])(i).then(function(i){setTimeout(function(){Object(f["j"])(i).then(function(i){var a=i.data;console.log("draw path"),Cookies.set("path",a.result.url,{expires:30}),t.path=a.result.url,v["Indicator"].close()})},1e3)})},closeDialog:function(){this.dialog.show=!1},checkOtherEnv:function(t){return console.log(this.statistic.chance),this.IS_APP||this.IS_WX?this.statistic.chance<=0&&t?(this.dialog={share:!0,content:"亲，没有答题机会了~<br/>快去分享给好友获取答题机会吧！",show:!0},!1):!(this.remainTimesToMax<=0&&t)||(this.dialog={share:!1,content:"亲，您已经获得全部奖励~<br/>",show:!0},!1):(this.dialog={share:!1,content:"亲，请去微信环境下答题吧",show:!0},!1)},setCurrentWidth:function(){return this.currentWidth=100*this.statistic.totalAwardAmt/this.statistic.maxAwardAmt+"%"},initAnimation:function(){var t=this;this.getStatistic().then(function(){t.IS_DEV?t.qrcode.val="https://a-sandbox.tiejin.cn/local?activityId="+t.activityId+"&inviter="+t.objectID+"&salt="+t.salt:t.qrcode.val="https://a.tiejin.cn/local?activityId="+t.activityId+"&inviter="+t.objectID+"&salt="+t.salt,console.log("qrcode.val:",t.qrcode.val),t.initWxConfig(),t.setCurrentWidth(),"undefined"==typeof Cookies.get("path")&&t.IS_WX?setTimeout(function(){t.drawHtmlToCanvas()},100):t.path=Cookies.get("path")})},handleWithDraw:function(){if(this.IS_APP)if(this.isLogin){var t=this.$store.state.UA;if(t.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("inviteNewGuyAction","inviteNewGuyActionWithdraw",function(t,i){})});else if(t.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.inviteNewGuyAction("inviteNewGuyActionWithdraw")}catch(t){Toast("请升级最新版本客户端")}}else this.checkLoginInApp(this.initAnimation);else Object(f["d"])()},makeFileUrl:function(t){var i=Object(f["h"])(t);return i}})),Object(c["a"])(s,"mounted",function(){var t=this;v["Indicator"].open(),setTimeout(function(){t.mounted=!0},800),this.updateCurrentQuestionNum(),console.log("index",this.currentQuesitionNum)}),s),b=w,p=(a("mi2j"),a("KHd+")),g=Object(p["a"])(b,n,e,!1,null,null,null);i["default"]=g.exports},ZWSE:function(t,i,a){},mi2j:function(t,i,a){"use strict";var s=a("ZWSE"),n=a.n(s);n.a}}]);
//# sourceMappingURL=7.ff6ee8e7.js.map