(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0HhZ":function(t,e,s){t.exports=s.p+"img/default_share.f4b583de.png"},"5IOF":function(t,e,s){"use strict";var n=s("aStj"),a=s.n(n);a.a},"B/u4":function(t,e,s){},DG0k:function(t,e,s){},Ea1W:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ENV.v123?s("header",{staticClass:"header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(e){t.handleBack()}}}),s("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(e){t.handleClose()}}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"share",style:{display:t.share?"block":"none"},on:{click:function(e){t.handleShare()}}})])]):t._e()},a=[],i=(s("L2JU"),{name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean,home:Boolean},methods:{handleBack:function(){this.home?this.$router.push({name:"moonIndex"}):this.$router.back()},handleClose:function(){if(this.ENV.app&&this.ENV.ios)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.ENV.app&&this.ENV.android&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"moonShare"})}}}),o=i,c=(s("Yjg1"),s("KHd+")),r=Object(c["a"])(o,n,a,!1,null,"bd4e5816",null);e["a"]=r.exports},JxBK:function(t,e,s){},OB1C:function(t,e,s){},Ogc1:function(t,e,s){},Yjg1:function(t,e,s){"use strict";var n=s("DG0k"),a=s.n(n);a.a},aStj:function(t,e,s){},gOwZ:function(t,e,s){"use strict";var n=s("B/u4"),a=s.n(n);a.a},h6AF:function(t,e,s){"use strict";var n=s("OB1C"),a=s.n(n);a.a},ptqt:function(t,e,s){"use strict";var n=s("JxBK"),a=s.n(n);a.a},x6iy:function(t,e,s){"use strict";s.r(e);var n,a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main home"},[s("moon-index",{ref:"moonIndex",attrs:{showIndex:t.propData.showIndex},on:{openAnswer:t.openAnswerPop}}),s("moon-answer",{ref:"moonAnswer",attrs:{startData:t.startData,startResult:t.startResult,showAnswer:t.propData.showAnswer},on:{openResult:t.openResultPop}}),s("moon-result",{ref:"moonResult",attrs:{showResult:t.propData.showResult},on:{openAnswer:t.openAnswerPop}})],1)},i=[],o=(s("ls82"),s("MECJ")),c=s("yT7P"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showIndex?s("div",{staticClass:"moon-index",class:{"in-app":t.ENV.app}},[t._m(0),t.ENV.app?s("moon-header",{attrs:{close:"",share:""}}):t._e(),s("section",{staticClass:"tab box box-pack-between"},[s("div",{staticClass:"tab-default tab-left",on:{click:t.showRankingList}}),s("div",{staticClass:"tab-default tab-right",on:{click:t.showRule}})]),t._m(1),s("section",{staticClass:"bd",class:{active:t.mounted}},[s("div",{staticClass:"bd-progress"},[s("div",{staticClass:"bd-complete",style:{width:t.currentWidth}})]),s("div",{staticClass:"bd-scale box box-pack-between"},[s("div",{staticClass:"bd-scale-default bd-scale-0",class:{active:t.statistic.totalAwardAmt>t.showAmount(0)}},[s("span",{staticClass:"bd-arrow bd-arrow-left"}),s("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(0,2)))])]),s("div",{staticClass:"bd-scale-default bd-scale-50",class:{active:t.statistic.totalAwardAmt>=t.showAmount(.5)}},[s("span",{staticClass:"bd-arrow bd-arrow-center"}),s("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(.5,2)))])]),s("div",{staticClass:"bd-scale-default bd-scale-100",class:{active:t.statistic.totalAwardAmt>=t.showAmount(1)}},[s("span",{staticClass:"bd-arrow bd-arrow-right"}),s("span",{staticClass:"bd-scale-amount"},[t._v(t._s(t.showAmount(1,2)))])])]),s("div",{staticClass:"bd-total"},[t._v("\n      累计获得：\n      "),s("span",{staticClass:"bd-count"},[t._v(t._s(t.currentTotalAmount))]),t._v(" 元\n      "),s("div",{staticClass:"bd-tixian",on:{click:function(e){t.handleWithDraw()}}},[t._v("去提现")])]),s("div",{staticClass:"bd-desc",domProps:{innerHTML:t._s(t.currentDesc)}}),s("div",{staticClass:"bd-btn animated pulse infinite delay-2",on:{click:function(e){t.handleStart()}}}),s("div",{staticClass:"bd-remain"},[t._v("您还有"+t._s(t.statistic.chance)+"次答题机会")])]),s("section",{staticClass:"index-logo"}),s("moon-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,path:t.path,content:t.dialog.content},on:{close:t.closeDialog}})],1):t._e()},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yun-wrapper"},[s("div",{staticClass:"yun"}),s("div",{staticClass:"yun1"}),s("div",{staticClass:"yun2"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hd"},[s("div",{staticClass:"hd-img"})])}],u=s("oyJW"),d=(s("Kw5r"),s("17CV")),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"dialog",class:{active:t.show}},[s("div",{staticClass:"dlg-wrap animated bounceIn faster"},[s("div",{staticClass:"dlg-close",on:{click:function(e){t.handleClose()}}}),s("div",{staticClass:"dlg-img"}),s("div",{staticClass:"dlg-desc",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"dlg-btn",on:{click:function(e){t.handleClick()}}},[t._v(t._s(t.share?"去分享":"确定"))])])])},m=[],p=(s("VRzm"),s("L2JU")),f={name:"moonDialog",props:{show:Boolean,share:Boolean,content:String,path:String},methods:{handleClose:function(){this.$emit("close")},handleClick:function(){this.share?this.ENV.app?this.$router.push({name:"moonShare"}):location.href="".concat(location.origin,"/moon/share"):this.handleClose()}}},v=f,w=(s("h6AF"),s("KHd+")),g=Object(w["a"])(v,h,m,!1,null,"0e5357cf",null),b=g.exports,C=s("Ea1W"),x=s("0HhZ"),A=s.n(x),I=s("+n12"),y=s("dqDD"),j=(n={name:"moonIndex",props:{showIndex:{type:Boolean,default:!1}},data:function(){return{currentWidth:0,path:"",mounted:!1,dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"}}},components:{QrcodeVue:d["a"],moonDialog:b,moonHeader:C["a"]},computed:function(){this.userShare()}},Object(u["a"])(n,"computed",Object(c["a"])({},Object(p["d"])("moon",["aid","isLogin","statistic"]),Object(p["d"])("moon",{currentQuesitionNum:function(t){return t.currentQuesitionNum},objectID:function(t){return t.user.objectID||""},salt:function(t){return t.statistic.signSalt},activityId:function(t){return t.activityId}}),{remainTimesToMax:function(){return Math.ceil(Object(I["h"])(this.statistic.maxAwardAmt-this.statistic.totalAwardAmt)/5)},currentTotalAmount:function(){return(this.statistic.totalAwardAmt/100).toFixed(0)},currentDesc:function(){return 0==this.remainTimesToMax?"恭喜，您已获得全部".concat(Object(I["h"])(this.statistic.maxAwardAmt),"元的现金奖励~"):'您再获得<span style="color: #885505;">'.concat(this.remainTimesToMax,"次</span>王者称号就可以拿到总计").concat(Object(I["h"])(this.statistic.maxAwardAmt),"元的现金奖励了！")}})),Object(u["a"])(n,"created",function(){var t=this,e=this;console.log("isLogin:",e.isLogin),Cookies.set("aid",e.aid,{expires:7}),e.checkParams(e.$route.query),e.isLogin?e.initAnimation():e.ENV.app?e.checkLoginInApp(e.initAnimation):e.ENV.wx&&e.getUserInfoAndLoginWithWx(e.$route.query).then(function(s){s?e.initAnimation():(t.dialog.share=!1,t.dialog.content="亲，请先登录再参与答题吧~",t.dialog.show=!0)})}),Object(u["a"])(n,"methods",Object(c["a"])({},Object(p["b"])("moon",["checkParams","checkLoginInApp","getUserInfoAndLoginWithWx","getStatistic","initWxConfig","updateCurrentQuestionNum","userShare","updateChance"]),Object(p["c"])("moon",["SET_USER","updateCurrentQuestionNum"]),{showAmount:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(this.statistic.maxAwardAmt*t/Math.pow(10,e))},showRankingList:function(){console.log("rank====="),this.isLogin?this.checkOtherEnv()&&this.$router.push({name:"moonRank"}):this.checkLoginInApp(this.initAnimation)},showRule:function(){console.log("rule===="),this.$router.push({name:"moonRule"})},handleStart:function(){this.ENV.app||this.ENV.wx?this.isLogin?this.checkOtherEnv(!0)&&(window.pageTo="answer",this.$emit("openAnswer"),this.updateChance()):this.checkLoginInApp(this.initAnimation):this.dialog={share:!1,content:"亲，请去微信环境下答题吧",show:!0}},closeDialog:function(){this.dialog.show=!1},checkOtherEnv:function(t){return console.log(this.statistic.chance),this.ENV.app||this.ENV.wx?this.statistic.chance<=0&&t?(this.dialog={share:!0,content:"亲，没有答题机会了~<br/>快去分享给好友获取答题机会吧！",show:!0},!1):!(this.remainTimesToMax<=0&&t)||(this.dialog={share:!1,content:"亲，您已经获得全部奖励~<br/>",show:!0},!1):(this.dialog={share:!1,content:"亲，请去微信环境下答题吧",show:!0},!1)},setCurrentWidth:function(){return this.currentWidth=100*this.statistic.totalAwardAmt/this.statistic.maxAwardAmt+"%"},initAnimation:function(){var t=this;this.getStatistic().then(function(){t.initWxConfig(),t.setCurrentWidth()})},handleWithDraw:function(){if(this.ENV.app)if(this.isLogin){if(window.ENV.app&&window.ENV.ios)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("inviteNewGuyAction","inviteNewGuyActionWithdraw",function(t,e){})});else if(window.ENV.app&&window.ENV.android&&"undefined"!=typeof window.bridge)try{window.bridge.inviteNewGuyAction("inviteNewGuyActionWithdraw")}catch(t){Toast("请升级最新版本客户端")}}else this.checkLoginInApp(this.initAnimation);else Object(I["c"])()},makeFileUrl:function(t){var e=Object(I["e"])(t);return e}})),Object(u["a"])(n,"mounted",function(){var t=this;y["Indicator"].open(),setTimeout(function(){t.mounted=!0},800),this.updateCurrentQuestionNum(),console.log("index",this.currentQuesitionNum)}),n),k=j,N=(s("gOwZ"),Object(w["a"])(k,r,l,!1,null,"fd1402e8",null)),O=N.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showAnswer?s("div",{staticClass:"commen moon-answer",class:{"in-app":t.ENV.app}},[t._m(0),t.ENV.app?s("moon-header",{attrs:{back:"",close:""}}):t._e(),t.startData&&t.startData.length>0?s("div",{staticClass:"answer-wrapper"},[s("div",{staticClass:"hd-img"}),s("div",{staticClass:"answer-box box box-tb box-center-center",domProps:{innerHTML:t._s(t.currentQuestion)},on:{click:function(e){t.checkOptions(e)}}}),s("div",{staticClass:"next-box box box-center-center",class:t.isUpdate?"animated slideInUp faster":""},[t.currentQuesitionNum<7?s("div",{staticClass:"btn-width next-btn",on:{click:function(e){t.next(t.startResult.userAnswerId)}}}):s("div",{staticClass:"btn-width complate-btn",on:{click:function(e){t.next(t.startResult.userAnswerId)}}})])]):t._e()],1):t._e()},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yun-wrapper min"},[s("div",{staticClass:"yun"}),s("div",{staticClass:"yun1"})])}],E=s("gjeX"),S=s.n(E),T={props:{showAnswer:{type:Boolean,default:!1},startData:{type:Array,default:[]},startResult:{type:Object,default:{}}},data:function(){return{isApp:this.ENV.app,checkNum:"",isCheck:!1,options:{},checkArr:[],answers:[],isUpdate:!1,questionNum:0,isCommit:!1}},components:{moonHeader:C["a"]},beforeRouteEnter:function(t,e,s){"answer"==window.pageTo?(window.pageTo=null,s()):s("/moon")},created:function(){console.log("answer create======"),this.updateChance(),this.updateCurrentQuestionNum(),this.ENV.app&&(console.log("answer wxshare--"),this.initWxConfig())},mounted:function(){console.log("true"),this.isUpdate=!0},computed:Object(c["a"])({},Object(p["d"])("moon",{statistic:function(t){return t.statistic},currentQuesitionNum:function(t){return t.currentQuesitionNum},endData:function(t){return t.endData},chance:function(t){return t.statistic.chance},inviter:function(t){return t.inviter},signSalt:function(t){return t.signSalt}}),{currentQuestion:function(){var t=this.startData[this.currentQuesitionNum],e=t.title,s=t.answers,n=this.currentQuesitionNum+1;return'\n        <div class="answer-acount">'.concat(n,'/8</div>\n        <div class="subject animated slideInUp faster">').concat(e,'</div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 30ms">\n          <div class="list" data-seq="').concat(s[0].seq,'" data-questionId="').concat(s[0].questionId,'">').concat(s[0].title,'</div>\n        </div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 60ms">\n          <div class="list" data-seq="').concat(s[1].seq,'" data-questionId="').concat(s[1].questionId,'">').concat(s[1].title,'</div>\n        </div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 90ms">\n          <div class="list" data-seq="').concat(s[2].seq,'" data-questionId="').concat(s[2].questionId,'">').concat(s[2].title,'</div>\n        </div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 120ms">\n          <div class="list" data-seq="').concat(s[3].seq,'" data-questionId="').concat(s[3].questionId,'">').concat(s[3].title,"</div>\n        </div>\n      ")}}),methods:Object(c["a"])({},Object(p["b"])("moon",["startTest","nextQuestion","commitTest","getStatistic","updateChance","initWxConfig","updateCurrentQuestionNum"]),{checkOptions:function(t){var e=t.target;if(e.classList.contains("list")){var s=e.dataset.questionid,n=e.dataset.seq,a=document.querySelector(".bg-yellow");a&&a.classList.remove("bg-yellow"),e.classList.add("bg-yellow"),this.answers[this.questionNum]={seq:n,questionId:s},this.isCheck=!0}},sign:function(){var t="056fef44ea0ca7ad63a0aae84024ef2d",e=this.signSalt?this.signSalt:"",s=this.inviter||"",n=S()(S()(s+e+t));return console.log("sign params",n),n},next:function(t){var e=this;if(this.isUpdate=!1,this.isCheck){var s={userAnswerId:t,answers:this.answers,salt:this.signSalt,sign:this.sign(),inviteUser:this.inviter};if(console.log(this.answers),this.currentQuesitionNum<7)this.checkNum="",this.isCheck=!1,this.questionNum++,this.nextQuestion(),this.isUpdate=!0;else{if(this.isCommit)return;this.isCommit=!0,console.log("commitTest:",this.isCommit),this.commitTest(s).then(function(){e.isCommit=!1,sessionStorage.resultCache&&(sessionStorage.resultCache="{}"),e.$emit("openResult")}),this.answers=[]}}else Object(y["Toast"])("您还未答题哟~")}})},V=T,R=(s("ptqt"),Object(w["a"])(V,_,D,!1,null,null,null)),q=R.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showResult?s("div",{staticClass:"moon-result",class:{"in-app":t.ENV.app}},[t._m(0),t.ENV.app?s("moon-header",{attrs:{back:"",home:""}}):t._e(),s("div",{staticClass:"result-wrapper"},[s("div",{staticClass:"content1"},[s("div",{staticClass:"avater"},[s("span",{staticClass:"avater-commen",class:1==t.level?"avater1-icon":2==t.level?"avater2-icon":"avater3-icon"}),s("img",{attrs:{src:t.makeFileUrl(t.avatar)}})]),s("div",{staticClass:"regards"},[s("span",[t._v(t._s(t.score))]),t._v("分\n      ")])]),s("div",{staticClass:"content2"},[s("div",{staticClass:"commen-width animated bounceInDown"},[s("div",{staticClass:"result-bd box box-lr"},[s("div",{staticClass:"level-commen",class:1==t.level?"wangmu":2==t.level?"change":"bajie"}),s("div",{staticClass:"result-text box box-tb"},[s("div",{staticClass:"level",class:1==t.level?"wangmu-text":2==t.level?"change-text":"bajie-text"}),s("div",{staticClass:"desc",domProps:{innerHTML:t._s(1==t.level?t.levelText1:2==t.level?t.levelText2:t.levelText3)}})])])]),s("div",{staticClass:"btn-box box box-lr"},[s("div",{staticClass:"share-btn btn-commen",on:{click:t.goShare}}),s("div",{staticClass:"go-answer btn-commen",on:{click:t.goAnswer}})]),s("div",{staticClass:"chance-remain"},[t._v("剩余"+t._s(t.chance>=0?t.chance:"0")+"次答题机会")])]),s("moon-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,content:t.dialog.content,path:t.path},on:{close:t.closeDialog}})],1)],1):t._e()},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yun-wrapper min"},[s("div",{staticClass:"yun"}),s("div",{staticClass:"yun1"})])}],U={props:{showResult:{type:Boolean,default:!1}},components:{moonDialog:b,moonHeader:C["a"],QrcodeVue:d["a"]},data:function(){return{isApp:this.ENV.app,levelText1:"额滴个神，皓月千万里，C位属于你。邀请各路神仙一起搞事情吧",levelText2:"上天了！你已喜提中秋盒饭，价值2元。想打怪升级？再试试吧",levelText3:"恭喜大帅，今年中秋你可以下凡赏月了。想见嫦娥姐姐？再试试吧",dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"},qrcode:{val:"https://a.tiejin.cn/moon",size:80},defaultImg:A.a,path:""}},beforeRouteEnter:function(t,e,s){console.log("beforeRouteEnter:",e),/^\/moon\/(share|answer)/.test(e.path)||sessionStorage.resultCache&&"{}"!=sessionStorage.resultCache?s():s("/moon")},created:function(){if(console.log("reault create====="),sessionStorage.resultCache&&"{}"!=sessionStorage.resultCache){var t=JSON.parse(sessionStorage.resultCache);console.log("window.CACHE",t),sessionStorage.resultCache="{}",this.setCache(t)}this.ENV.dev?this.qrcode.val="https://a-sandbox.tiejin.cn/moon?activityId="+this.activityId+"&inviter="+this.objectID+"&salt="+this.salt:this.qrcode.val="https://a.tiejin.cn/moon?activityId="+this.activityId+"&inviter="+this.objectID+"&salt="+this.salt,console.log("parkk",this.$route.params.from),this.ENV.wx&&this.initWxConfig()},mounted:function(){if(this.userShare(),""!=this.score);else{var t={activityId:this.activityId};this.objectID&&(t["inviter"]=this.objectID)}},computed:Object(c["a"])({},Object(p["d"])("moon",{chance:function(t){return t.statistic.chance},currentQuesitionNum:function(t){return t.currentQuesitionNum},statistic:function(t){return t.statistic},endData:function(t){return t.endData},activityId:function(t){return t.activityId},objectID:function(t){return t.user.objectID||""},salt:function(t){return t.statistic.signSalt},user:function(t){return t.user},avatar:function(t){return t.user.avatar},fullname:function(t){return t.user.fullname},answerId:function(t){return t.endData.userAnswerId},shareData:function(t){return t.shareData},level:function(t){return t.endData.level},score:function(t){return t.endData.score},awardAmt:function(t){return t.endData.awardAmt}})),methods:Object(c["a"])({},Object(p["c"])(["updateChance","updateCurrentQuestionNum"]),Object(p["c"])("moon",["setCache"]),Object(p["b"])("moon",["updateChance","initWxConfig","userShare","updateCurrentQuestionNum"]),{makeFileUrl:function(t){var e=Object(I["e"])(t);return console.log("result:avatar:",e),e},regardsAdd:function(){var t=this;if(!(this.regards>this.score))var e=setInterval(function(){if(t.regards++,t.regards>=t.score)return t.regards=t.score,void window.clearInterval(e)},10)},goAnswer:function(){this.statistic.totalAwardAmt>=this.statistic.maxAwardAmt?Object(y["Toast"])("您已经获得奖励100元，不能再答题了~"):this.chance>0?(this.updateCurrentQuestionNum(),this.$emit("openAnswer",{params:"fromResult"}),this.updateChance()):(this.dialog.show=!0,this.dialog.share=!0)},closeDialog:function(){this.dialog.show=!1},downloadApp:function(){this.isApp?this.$router.push({name:"moonShare"}):(this.setLocalStorage(),Object(I["c"])())},goShare:function(){this.ENV.wx&&(this.setLocalStorage(),location.href="".concat(location.origin,"/moon/share"))},goTips:function(){this.isApp?location.href="closer://community/9Mj8OC0TUL":(this.setLocalStorage(),location.href="https://h5.tiejin.cn/community/9Mj8OC0TUL")},setLocalStorage:function(){var t={chance:this.chance,currentQuesitionNum:this.currentQuesitionNum,statistic:this.statistic,endData:this.endData,activityId:this.activityId,salt:this.signSalt,user:this.user,answerId:this.userAnswerId,shareData:this.shareData,level:this.level,score:this.score};console.log(t),sessionStorage.resultCache=JSON.stringify(t),localStorage.resultCache=JSON.stringify(t)},avatarLoad:function(t,e){!t&&(e.target.style.display="none")}})},W=U,$=(s("ywUI"),Object(w["a"])(W,L,Q,!1,null,null,null)),B=$.exports,H={props:[],components:{moonIndex:O,moonAnswer:q,moonResult:B},data:function(){return{propData:{showIndex:!1,showAnswer:!1,showResult:!1}}},created:function(){this.propData.showIndex=!0},computed:Object(c["a"])({},Object(p["d"])("moon",{startData:function(t){return t.startData},startResult:function(t){return t.startResult}})),methods:Object(c["a"])({},Object(p["b"])("moon",["startTest"]),{openAnswerPop:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.startTest();case 2:this.propData.showAnswer=!0,this.propData.showIndex=!1,this.propData.showResult=!1;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openResultPop:function(){this.propData.showAnswer=!1,this.propData.showIndex=!1,this.propData.showResult=!0}})},P=H,J=(s("5IOF"),Object(w["a"])(P,a,i,!1,null,null,null));e["default"]=J.exports},ywUI:function(t,e,s){"use strict";var n=s("Ogc1"),a=s.n(n);a.a}}]);
//# sourceMappingURL=5.5381aef7.js.map