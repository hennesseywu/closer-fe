(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{FZtC:function(t,a,e){},IC5M:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main local-result",class:{"in-app":t.IS_APP}},[t.IS_APP?e("local-header",{attrs:{close:""}}):t._e(),e("div",{staticClass:"result-wrapper"},[e("div",{staticClass:"content1"},[e("div",{staticClass:"avater",class:1==t.level?"avater1":2==t.level?"avater2":"avater3"},[e("span",{staticClass:"avater-commen",class:1==t.level?"avater1-icon":2==t.level?"avater2-icon":"avater3-icon"}),e("img",{attrs:{src:t.makeFileUrl(t.user.avatar)}})]),e("div",{staticClass:"regards"},[e("span",[t._v(t._s(t.regards))]),t._v("分\n      ")]),t._m(0)]),e("div",{staticClass:"content2"},[e("div",{staticClass:"commen-width animated bounceInDown",class:1==t.level?"local1-img":2==t.level?"local2-img":"local3-img"},[e("div",{staticClass:"logo animated shake"}),t.IS_WX?e("div",{staticClass:"go-share animated bounceInDown1",on:{click:t.goShare}},[t._v("去分享")]):t._e()]),e("div",{staticClass:"local-desc localText",domProps:{innerHTML:t._s(1==t.level?t.localText1:2==t.level?t.localText2:t.localText3)}})]),e("div",{staticClass:"content3"},[e("div",{staticClass:"btn-commen go-answer",on:{click:t.goAnswer}},[t._v("再次答题")]),e("div",{staticClass:"chance-remain"},[t._v("剩余"+t._s(t.chance>=0?t.chance:"0")+"次答题机会")]),t.isApp?e("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("去分享")]):1==t.level?e("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领5元奖励")]):2==t.level?e("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领2元奖励")]):3==t.level?e("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("下载APP")]):t._e(),t.isApp?e("div",{staticClass:"text-commen go-wallet"},[t._v("去“我的-钱包”查看")]):e("div",{staticClass:"text-commen go-wallet"},[t._v("下载贴近APP，去“我的-钱包”查看")]),e("div",{staticClass:"text-commen tips",on:{click:t.goTips}},[t._v("提高正确率，请查看攻略"),e("span",{staticClass:"arrow"})])]),e("local-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,content:t.dialog.content},on:{close:t.closeDialog}})],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"local-name box box-lr box-center-center"},[e("div",{staticClass:"line left"}),e("div",{staticClass:"name"},[t._v("获得称号")]),e("div",{staticClass:"line right"})])}],n=e("yT7P"),c=(e("VRzm"),e("L2JU")),o=e("dqDD"),l=e("+n12"),r=e("9ijR"),d=e("OHX4"),u={components:{localDialog:r["a"],localHeader:d["a"]},data:function(){return{isApp:this.$store.state.IS_APP,regards:0,score:"",awardAmt:0,level:"",localText1:"同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO",localText2:"恭喜你获得2元奖励，但你对成都了解还不够多哦！冲击满分赢5元！",localText3:"盆友，你是路过成都吗？得满分可以领5元现<br/>金，再试试吧",dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"}}},created:function(){console.log("parkk",this.$route.params.from),"answer"==this.$route.params.from?this.IS_WX&&this.initWxConfig():this.$router.push({name:"localIndex"})},mounted:function(){if(this.score=this.endData.score?this.endData.score:"",this.level=this.endData.level,this.awardAmt=this.endData.awardAmt,""!=this.score)this.regardsAdd();else{var t={activityId:this.activityId};this.user.objectID&&(t["inviter"]=this.user.objectID)}},computed:Object(n["a"])({},Object(c["d"])(["IS_APP","IS_WX"]),Object(c["d"])("local",{user:function(t){return t.user},chance:function(t){return t.statistic.chance},currentQuesitionNum:function(t){return t.questions.currentQuesitionNum},statistic:function(t){return t.statistic},endData:function(t){return t.endData},activityId:function(t){return t.activityId}})),methods:Object(n["a"])({},Object(c["c"])(["updateChance","updateCurrentQuestionNum"]),Object(c["b"])("local",["updateChance","initWxConfig","updateCurrentQuestionNum"]),{makeFileUrl:function(t){return Object(l["h"])(t)},regardsAdd:function(){var t=this;if(!(this.regards>this.score))var a=setInterval(function(){if(t.regards++,t.regards>=t.score)return t.regards=t.score,void window.clearInterval(a)},10)},goAnswer:function(){this.statistic.totalAwardAmt>=this.statistic.maxAwardAmt?Object(o["Toast"])("您已经获得奖励100元，不能再答题了~"):this.chance>0?(this.updateCurrentQuestionNum(),this.$router.push({name:"localAnswer",params:{from:"playAgain"}})):(this.dialog.show=!0,this.dialog.share=!0)},closeDialog:function(){this.dialog.show=!1},downloadApp:function(){this.isApp?this.$router.push({name:"localShare"}):Object(l["d"])()},goShare:function(){this.IS_WX&&this.$router.push({name:"localShare"})},goTips:function(){this.isApp?location.href="closer://community/9Mj8OC0TUL":location.href="https://h5.tiejin.cn/community/9Mj8OC0TUL"}})},h=u,m=(e("dV10"),e("KHd+")),v=Object(m["a"])(h,s,i,!1,null,"38e3130d",null);a["default"]=v.exports},dV10:function(t,a,e){"use strict";var s=e("FZtC"),i=e.n(s);i.a}}]);
//# sourceMappingURL=5.540abd45.js.map