(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{LOby:function(t,e,s){"use strict";var i=s("jg29"),n=s.n(i);n.a},OHX4:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.V_1_2_3?s("header",{staticClass:"header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(e){t.handleBack()}}}),s("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(e){t.handleClose()}}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(e){t.handleShare()}}})])]):t._e()},n=[],a=s("yT7P"),c=(s("VRzm"),s("L2JU")),o={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(a["a"])({},Object(c["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},r=o,u=(s("LOby"),s("KHd+")),l=Object(u["a"])(r,i,n,!1,null,null,null);e["a"]=l.exports},iIP8:function(t,e,s){},jg29:function(t,e,s){},po5H:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main local-answer",class:{"in-app":t.IS_APP}},[t.IS_APP?s("local-header",{attrs:{back:"",close:""}}):t._e(),t.startData&&t.startData.length>0?s("div",{staticClass:"answer-wrapper"},[s("div",{staticClass:"hd-img"}),s("div",{staticClass:"answer-box"},[s("div",{staticClass:"answer-acount"},[t._v(t._s(t.currentQuesitionNum+1)+"/8")]),s("div",{staticClass:"subject",class:t.isUpdate?"animated slideInUp":""},[t._v(t._s(t.startData[t.currentQuesitionNum].title))]),t._l(t.startData[t.currentQuesitionNum].answers,function(e,i){return s("div",{key:i,staticClass:"optoins",class:t.isUpdate?"animated slideInUp":""},[s("div",{staticClass:"list",class:i===t.checkNum?"bg-yellow":"",attrs:{"data-index":i,"data-seq":e.seq,"data-questionId":e.questionId},on:{click:function(e){t.checkOptions(e)}}},[t._v(t._s(e.title))])])})],2),s("div",{staticClass:"next-box",class:t.isUpdate?"animated slideInUp":""},[t.currentQuesitionNum<7?s("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(e){t.next(t.startResult.userAnswerId)}}},[t._v("下一题")]):s("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(e){t.next(t.startResult.userAnswerId)}}},[t._v("完成答题")])])]):t._e()],1)},n=[],a=s("yT7P"),c=(s("VRzm"),s("dqDD")),o=s("L2JU"),r=s("gjeX"),u=s.n(r),l=(s("+n12"),s("OHX4")),d={data:function(){return{isApp:this.$store.state.IS_APP,checkNum:"",isCheck:!1,options:{},checkArr:[],answers:[],isUpdate:!1,questionNum:0,isCommit:!1}},components:{localHeader:l["a"]},created:function(){console.log("parkk",this.$route.params.from),"undefined"==typeof this.$route.params.from?this.$router.push({name:"localIndex"}):"fromIndex"!=this.$route.params.from&&"playAgain"!=this.$route.params.from&&this.$router.push({name:"localIndex"}),this.statistic&&this.startTest(),this.IS_WX&&(console.log("answer wxshare--"),this.initWxConfig())},mounted:function(){this.isUpdate=!0,this.currentQuesitionNum<8||window.clearInterval(time),this.updateChance(),this.updateCurrentQuestionNum()},computed:Object(a["a"])({},Object(o["d"])(["IS_APP","IS_WX"]),Object(o["d"])("local",{statistic:function(t){return t.statistic},startResult:function(t){return t.startResult},startData:function(t){return t.startData},currentQuesitionNum:function(t){return t.questions.currentQuesitionNum},endData:function(t){return t.endData},chance:function(t){return t.statistic.chance},inviter:function(t){return t.inviter},signSalt:function(t){return t.signSalt}})),beforeRouteEnter:function(t,e,s){e.path;s()},methods:Object(a["a"])({},Object(o["b"])("local",["startTest","nextQuestion","commitTest","getStatistic","updateChance","initWxConfig","updateCurrentQuestionNum"]),{checkOptions:function(t){var e=this,s=t.target.dataset.questionid,i=t.target.dataset.seq;this.checkNum=parseInt(t.target.dataset.index),this.answers[this.questionNum]={seq:i,questionId:s},setTimeout(function(){e.isCheck=!0},100)},sign:function(){var t="056fef44ea0ca7ad63a0aae84024ef2d",e=this.signSalt?this.signSalt:"",s=this.inviter||"",i=u()(u()(s+e+t));return console.log("sign params",i),i},next:function(t){var e=this;if(this.isUpdate=!1,this.isCheck){var s={userAnswerId:t,answers:this.answers,salt:this.signSalt,sign:this.sign(),inviteUser:this.inviter};if(console.log("currentQuesitionNum---",this.currentQuesitionNum),this.currentQuesitionNum<7)this.checkNum="",this.isCheck=!1,this.questionNum++,this.nextQuestion(),setTimeout(function(){e.isUpdate=!0},50);else{if(this.isCommit)return;this.isCommit=!0,this.commitTest(s).then(function(){e.isCommit=!1})}}else Object(c["Toast"])("您还未答题哟~")}})},h=d,f=(s("sJYT"),s("KHd+")),m=Object(f["a"])(h,i,n,!1,null,"2cb7165f",null);e["default"]=m.exports},sJYT:function(t,e,s){"use strict";var i=s("iIP8"),n=s.n(i);n.a},yT7P:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var i=s("oyJW");function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){Object(i["a"])(t,e,s[e])})}return t}}}]);
//# sourceMappingURL=7.b9aa11a9.js.map