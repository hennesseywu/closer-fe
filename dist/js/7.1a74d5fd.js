(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"4RIW":function(t,s,e){},LOby:function(t,s,e){"use strict";var i=e("jg29"),n=e.n(i);n.a},NDGs:function(t,s,e){"use strict";var i=e("4RIW"),n=e.n(i);n.a},OHX4:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.V_1_2_3?e("header",{staticClass:"header"},[e("div",{staticClass:"left"},[e("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(s){t.handleBack()}}}),e("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(s){t.handleClose()}}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(s){t.handleShare()}}})])]):t._e()},n=[],a=e("yT7P"),c=(e("VRzm"),e("L2JU")),r={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(a["a"])({},Object(c["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},o=r,u=(e("LOby"),e("KHd+")),l=Object(u["a"])(o,i,n,!1,null,null,null);s["a"]=l.exports},jg29:function(t,s,e){},po5H:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main local-answer"},[t.startData&&t.startData.length>0?e("div",{staticClass:"answer-wrapper"},[e("div",{staticClass:"hd-img"}),e("div",{staticClass:"answer-box"},[e("div",{staticClass:"answer-acount"},[t._v(t._s(t.currentQuesitionNum+1)+"/8")]),e("div",{staticClass:"subject",class:t.isUpdate?"animated slideInUp":""},[t._v(t._s(t.startData[t.currentQuesitionNum].title))]),t._l(t.startData[t.currentQuesitionNum].answers,function(s,i){return e("div",{key:i,staticClass:"optoins",class:t.isUpdate?"animated slideInUp":""},[e("div",{staticClass:"list",class:i===t.checkNum?"bg-yellow":"",attrs:{"data-index":i,"data-seq":s.seq,"data-questionId":s.questionId},on:{click:function(s){t.checkOptions(s)}}},[t._v(t._s(s.title))])])})],2),e("div",{staticClass:"next-box",class:t.isUpdate?"animated slideInUp":""},[t.currentQuesitionNum<7?e("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(s){t.next(t.startResult.userAnswerId)}}},[t._v("下一题")]):e("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(s){t.next(t.startResult.userAnswerId)}}},[t._v("完成答题")])])]):t._e()])},n=[],a=e("yT7P"),c=(e("VRzm"),e("dqDD")),r=e("L2JU"),o=e("gjeX"),u=e.n(o),l=(e("+n12"),e("OHX4")),d={data:function(){return{isApp:this.$store.state.IS_APP,checkNum:"",isCheck:!1,options:{},checkArr:[],answers:[],isUpdate:!1,questionNum:0,isCommit:!1}},components:{localHeader:l["a"]},created:function(){console.log("parkk",this.$route.params.from),"undefined"==typeof this.$route.params.from?this.$router.push({name:"localIndex"}):"fromIndex"!=this.$route.params.from&&"playAgain"!=this.$route.params.from&&this.$router.push({name:"localIndex"}),this.statistic&&this.startTest(),this.IS_WX&&(console.log("answer wxshare--"),this.initWxConfig())},mounted:function(){var t=this;if(this.isUpdate=!0,this.currentQuesitionNum<8)var s=setInterval(function(){t.isUpdate=!1},1500);else window.clearInterval(s);this.updateChance(),this.updateCurrentQuestionNum()},computed:Object(a["a"])({},Object(r["d"])(["IS_APP","IS_WX"]),Object(r["d"])("local",{statistic:function(t){return t.statistic},startResult:function(t){return t.startResult},startData:function(t){return t.startData},currentQuesitionNum:function(t){return t.questions.currentQuesitionNum},endData:function(t){return t.endData},chance:function(t){return t.statistic.chance},inviter:function(t){return t.inviter},signSalt:function(t){return t.signSalt}})),beforeRouteEnter:function(t,s,e){s.path;e()},methods:Object(a["a"])({},Object(r["b"])("local",["startTest","nextQuestion","commitTest","getStatistic","updateChance","initWxConfig","updateCurrentQuestionNum"]),{checkOptions:function(t){var s=this,e=t.target.dataset.questionid,i=t.target.dataset.seq;this.checkNum=parseInt(t.target.dataset.index),this.answers[this.questionNum]={seq:i,questionId:e},setTimeout(function(){s.isCheck=!0},100)},sign:function(){var t="056fef44ea0ca7ad63a0aae84024ef2d",s=this.signSalt?this.signSalt:"",e=this.inviter||"",i=u()(u()(e+s+t));return console.log("sign params",i),i},next:function(t){var s=this;if(this.isCheck){var e={userAnswerId:t,answers:this.answers,salt:this.signSalt,sign:this.sign(),inviteUser:this.inviter};if(console.log("currentQuesitionNum---",this.currentQuesitionNum),this.currentQuesitionNum<7)this.isUpdate=!0,this.checkNum="",this.isCheck=!1,this.questionNum++,this.nextQuestion();else{if(this.isCommit)return;this.isCommit=!0,this.commitTest(e).then(function(){s.isCommit=!1})}}else Object(c["Toast"])("您还未答题哟~")}})},h=d,f=(e("NDGs"),e("KHd+")),m=Object(f["a"])(h,i,n,!1,null,"2b6b7408",null);s["default"]=m.exports},yT7P:function(t,s,e){"use strict";e.d(s,"a",function(){return n});var i=e("oyJW");function n(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(s){Object(i["a"])(t,s,e[s])})}return t}}}]);
//# sourceMappingURL=7.1a74d5fd.js.map