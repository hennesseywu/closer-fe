(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{LOby:function(t,s,e){"use strict";var n=e("jg29"),i=e.n(n);i.a},OHX4:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.V_1_2_3?e("header",{staticClass:"header"},[e("div",{staticClass:"left"},[e("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(s){t.handleBack()}}}),e("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(s){t.handleClose()}}})]),e("div",{staticClass:"right"},[e("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(s){t.handleShare()}}})])]):t._e()},i=[],a=e("yT7P"),c=e("L2JU"),o={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean,home:Boolean},computed:Object(a["a"])({},Object(c["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},r=o,l=(e("LOby"),e("KHd+")),u=Object(l["a"])(r,n,i,!1,null,null,null);s["a"]=u.exports},"R/40":function(t,s,e){},eZn9:function(t,s,e){"use strict";var n=e("R/40"),i=e.n(n);i.a},jg29:function(t,s,e){},po5H:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main local-answer",class:{"in-app":t.IS_APP}},[t.IS_APP?e("local-header",{attrs:{back:"",close:""}}):t._e(),t.startData&&t.startData.length>0?e("div",{staticClass:"answer-wrapper"},[e("div",{staticClass:"hd-img"}),e("div",{staticClass:"answer-box",domProps:{innerHTML:t._s(t.currentQuestion)},on:{click:function(s){t.checkOptions(s)}}}),e("div",{staticClass:"next-box",class:t.isUpdate?"animated slideInUp faster":""},[t.currentQuesitionNum<7?e("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(s){t.next(t.startResult.userAnswerId)}}},[t._v("下一题")]):e("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(s){t.next(t.startResult.userAnswerId)}}},[t._v("完成答题")])])]):t._e()],1)},i=[],a=e("yT7P"),c=(e("VRzm"),e("dqDD")),o=e("L2JU"),r=e("gjeX"),l=e.n(r),u=(e("+n12"),e("OHX4")),d={data:function(){return{isApp:this.$store.state.IS_APP,checkNum:"",isCheck:!1,options:{},checkArr:[],answers:[],isUpdate:!1,questionNum:0,isCommit:!1}},components:{localHeader:u["a"]},beforeRouteEnter:function(t,s,e){"answer"==window.pageTo?(window.pageTo=null,e()):e("/local")},created:function(){this.updateChance(),this.updateCurrentQuestionNum(),this.startTest(),this.IS_WX&&(console.log("answer wxshare--"),this.initWxConfig())},mounted:function(){console.log("true"),this.isUpdate=!0},computed:Object(a["a"])({},Object(o["d"])(["IS_APP","IS_WX"]),Object(o["d"])("local",{statistic:function(t){return t.statistic},startResult:function(t){return t.startResult},startData:function(t){return t.startData},currentQuesitionNum:function(t){return t.currentQuesitionNum},endData:function(t){return t.endData},chance:function(t){return t.statistic.chance},inviter:function(t){return t.inviter},signSalt:function(t){return t.signSalt}}),{currentQuestion:function(){var t=this.startData[this.currentQuesitionNum],s=t.title,e=t.answers,n=this.currentQuesitionNum+1;return'\n        <div class="answer-acount">'.concat(n,'/8</div>\n        <div class="subject animated slideInUp faster">').concat(s,'</div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 30ms">\n          <div class="list" data-seq="').concat(e[0].seq,'" data-questionId="').concat(e[0].questionId,'">').concat(e[0].title,'</div>\n        </div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 60ms">\n          <div class="list" data-seq="').concat(e[1].seq,'" data-questionId="').concat(e[1].questionId,'">').concat(e[1].title,'</div>\n        </div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 90ms">\n          <div class="list" data-seq="').concat(e[2].seq,'" data-questionId="').concat(e[2].questionId,'">').concat(e[2].title,'</div>\n        </div>\n        <div class="optoins animated slideInUp faster" style="animation-delay: 120ms">\n          <div class="list" data-seq="').concat(e[3].seq,'" data-questionId="').concat(e[3].questionId,'">').concat(e[3].title,"</div>\n        </div>\n      ")}}),methods:Object(a["a"])({},Object(o["b"])("local",["startTest","nextQuestion","commitTest","getStatistic","updateChance","initWxConfig","updateCurrentQuestionNum"]),{checkOptions:function(t){var s=t.target;if(s.classList.contains("list")){var e=s.dataset.questionid,n=s.dataset.seq,i=document.querySelector(".bg-yellow");i&&i.classList.remove("bg-yellow"),s.classList.add("bg-yellow"),this.answers[this.questionNum]={seq:n,questionId:e},this.isCheck=!0}},sign:function(){var t="056fef44ea0ca7ad63a0aae84024ef2d",s=this.signSalt?this.signSalt:"",e=this.inviter||"",n=l()(l()(e+s+t));return console.log("sign params",n),n},next:function(t){if(this.isUpdate=!1,this.isCheck){var s={userAnswerId:t,answers:this.answers,salt:this.signSalt,sign:this.sign(),inviteUser:this.inviter};if(console.log(this.answers),this.currentQuesitionNum<7)this.checkNum="",this.isCheck=!1,this.questionNum++,this.nextQuestion(),this.isUpdate=!0;else{if(this.isCommit)return;this.isCommit=!0,this.commitTest(s).then(function(){})}}else Object(c["Toast"])("您还未答题哟~")}})},h=d,f=(e("eZn9"),e("KHd+")),m=Object(f["a"])(h,n,i,!1,null,null,null);s["default"]=m.exports},yT7P:function(t,s,e){"use strict";e.d(s,"a",function(){return i});var n=e("oyJW");function i(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(s){Object(n["a"])(t,s,e[s])})}return t}}}]);
//# sourceMappingURL=7.c5f1eae5.js.map