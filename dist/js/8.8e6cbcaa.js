(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"3mO2":function(t,i,s){"use strict";s.r(i);var a,n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"main local-index",class:{"in-app":t.IS_APP}},[t.IS_APP?s("local-header",{attrs:{close:"",share:""}}):t._e(),s("section",{staticClass:"tab"},[s("div",{staticClass:"tab-default tab-left",on:{click:function(i){t.showRankingList()}}},[t._v("好友排行榜")]),s("div",{staticClass:"tab-default tab-right",on:{click:function(i){t.showRule()}}},[t._v("活动规则")])]),s("section",{staticClass:"hd animated bounceInDown fast"},[s("div",{staticClass:"hd-default hd-1",class:{active:t.mounted}}),s("div",{staticClass:"hd-default hd-2",class:{active:t.mounted}}),s("div",{staticClass:"hd-default hd-3",class:{active:t.mounted}}),s("div",{staticClass:"hd-default hd-4",class:{active:t.mounted}}),s("div",{staticClass:"hd-img"})]),s("section",{staticClass:"bd",class:{active:t.mounted}},[s("div",{staticClass:"bd-progress"},[s("div",{staticClass:"bd-complete",style:{width:t.currentWidth}})]),s("div",{staticClass:"bd-scale"},[s("div",{staticClass:"bd-scale-default bd-scale-0",class:{active:t.statistic.totalAwardAmt>t.showAmount(0)}},[s("span",{staticClass:"bd-arrow bd-arrow-left"}),s("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(0,2)))])]),s("div",{staticClass:"bd-scale-default bd-scale-50",class:{active:t.statistic.totalAwardAmt>=t.showAmount(.5)}},[s("span",{staticClass:"bd-arrow bd-arrow-center"}),s("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(.5,2)))])]),s("div",{staticClass:"bd-scale-default bd-scale-100",class:{active:t.statistic.totalAwardAmt>=t.showAmount(1)}},[s("span",{staticClass:"bd-arrow bd-arrow-right"}),s("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(1,2)))])])]),s("div",{staticClass:"bd-total"},[t._v("\n      累计获得：\n      "),s("span",{staticClass:"bd-count"},[t._v(t._s(t.currentTotalAmount))]),t._v(" 元\n      "),s("span",{staticClass:"bd-tixian",on:{click:function(i){t.handleWithDraw()}}},[t._v("去提现")])]),s("div",{staticClass:"bd-desc",domProps:{innerHTML:t._s(t.currentDesc)}}),s("div",{staticClass:"bd-btn animated pulse infinite delay-2",on:{click:function(i){t.handleStart()}}}),s("div",{staticClass:"bd-remain"},[t._v("您还有"+t._s(t.statistic.chance)+"次答题机会")])]),s("section",{staticClass:"ft"}),s("div",{ref:"canvasContainer",staticClass:"share-default"},[s("img",{staticClass:"share-default-bg",attrs:{src:t.defaultImg,alt:""}}),s("div",{staticClass:"share-qrcode"},[s("qrcode-vue",{attrs:{value:t.qrcode.val,size:t.qrcode.size}})],1)]),s("local-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,content:t.dialog.content},on:{close:t.closeDialog}})],1)},e=[],o=s("oyJW"),c=s("yT7P"),r=(s("VRzm"),s("Kw5r"),s("17CV")),l=s("9ijR"),d=s("OHX4"),u=s("qtr8"),h=s.n(u),m=s("L2JU"),f=s("+n12"),b=(a={name:"localIndex",data:function(){return{currentWidth:0,mounted:!1,dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"},qrcode:{val:"https://a.tiejin.cn/local",size:80},defaultImg:h.a}},components:{QrcodeVue:r["a"],localDialog:l["a"],localHeader:d["a"]},beforeMount:function(){var t=document.createElement("img");t.src="https://file-sandbox.tiejin.cn/public/a161gNu0qY/blob.png",document.body.appendChild(t)},computed:function(){this.userShare()}},Object(o["a"])(a,"computed",Object(c["a"])({},Object(m["d"])("local",["aid","isLogin","statistic"]),Object(m["d"])(["IS_APP","IS_WX"]),Object(m["d"])("local",{currentQuesitionNum:function(t){return t.questions.currentQuesitionNum}}),{remainTimesToMax:function(){return Math.ceil(Object(f["n"])(this.statistic.maxAwardAmt-this.statistic.totalAwardAmt)/5)},currentTotalAmount:function(){return(this.statistic.totalAwardAmt/100).toFixed(0)},currentDesc:function(){return 0==this.remainTimesToMax?"恭喜，您已获得全部".concat(Object(f["n"])(this.statistic.maxAwardAmt),"元的现金奖励~"):'您再获得<span style="color: #f20707;">'.concat(this.remainTimesToMax,"次</span>王者称号就可以拿到总计").concat(Object(f["n"])(this.statistic.maxAwardAmt),"元的现金奖励了！")}})),Object(o["a"])(a,"created",function(){var t=this,i=this;console.log("isLogin:",i.isLogin),Cookies.set("aid",i.aid,{expires:7}),i.checkParams(i.$route.query),i.isLogin?i.initAnimation():i.IS_APP?i.checkLoginInApp(i.initAnimation):i.IS_WX&&i.getUserInfoAndLoginWithWx(i.$route.query).then(function(s){s?(i.initAnimation(),i.initWxConfig()):(t.dialog.share=!1,t.dialog.content="亲，请先登录再参与答题吧~",t.dialog.show=!0)})}),Object(o["a"])(a,"methods",Object(c["a"])({},Object(m["b"])("local",["checkParams","checkLoginInApp","getUserInfoAndLoginWithWx","getStatistic","initWxConfig","updateCurrentQuestionNum","userShare"]),Object(m["c"])("local",["SET_USER","updateCurrentQuestionNum"]),{showAmount:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(this.statistic.maxAwardAmt*t/Math.pow(10,i))},showRankingList:function(){this.isLogin?this.checkOtherEnv()&&this.$router.push({name:"localRank"}):this.checkLoginInApp(this.initAnimation)},showRule:function(){this.$router.push({name:"localRule",params:{from:"localIndex"}})},handleStart:function(){this.IS_APP||this.IS_WX?this.isLogin?this.checkOtherEnv(!0)&&(window.pageTo="answer",this.$router.push({name:"localAnswer",params:{from:"fromIndex"}})):this.checkLoginInApp(this.initAnimation):this.dialog={share:!1,content:"亲，请去微信环境下答题吧",show:!0}},closeDialog:function(){this.dialog.show=!1},checkOtherEnv:function(t){return console.log(this.statistic.chance),this.IS_APP||this.IS_WX?this.statistic.chance<=0&&t?(this.dialog={share:!0,content:"亲，没有答题机会了~<br/>快去分享给好友获取答题机会吧！",show:!0},!1):!(this.remainTimesToMax<=0&&t)||(this.dialog={share:!1,content:"亲，您已经获得全部奖励~<br/>",show:!0},!1):(this.dialog={share:!1,content:"亲，请去微信环境下答题吧",show:!0},!1)},setCurrentWidth:function(){return this.currentWidth=100*this.statistic.totalAwardAmt/this.statistic.maxAwardAmt+"%"},initAnimation:function(){var t=this;this.getStatistic().then(function(){t.setCurrentWidth()})},handleWithDraw:function(){if(this.IS_APP)if(this.isLogin){var t=this.$store.state.UA;if(t.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("inviteNewGuyAction","inviteNewGuyActionWithdraw",function(t,i){})});else if(t.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.inviteNewGuyAction("inviteNewGuyActionWithdraw")}catch(t){Toast("请升级最新版本客户端")}}else this.checkLoginInApp(this.initAnimation);else Object(f["d"])()},makeFileUrl:function(t){var i=Object(f["i"])(t);return i},drawHtmlToCanvas:function(){var t=this,i=this.$refs.canvasContainer;console.log("xxxx"),Object(f["f"])(i).then(function(i){Object(f["l"])(i).then(function(i){var s=i.data;t.imgUrl=t.makeFileUrl(s.result.url),console.log(t.imgUrl)})})}})),Object(o["a"])(a,"mounted",function(){var t=this;setTimeout(function(){t.drawHtmlToCanvas()},800),setTimeout(function(){t.mounted=!0},800),this.updateCurrentQuestionNum(),console.log("index",this.currentQuesitionNum)}),a),v=b,w=(s("Hn+2"),s("KHd+")),g=Object(w["a"])(v,n,e,!1,null,"16751837",null);i["default"]=g.exports},GQWD:function(t,i,s){},"Hn+2":function(t,i,s){"use strict";var a=s("GQWD"),n=s.n(a);n.a},qtr8:function(t,i,s){t.exports=s.p+"img/default_share.f4b583de.png"}}]);
//# sourceMappingURL=8.8e6cbcaa.js.map