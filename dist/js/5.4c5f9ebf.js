(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{FTqt:function(t,e,s){},IC5M:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result-wrapper"},[s("div",{staticClass:"content1"},[s("div",{staticClass:"avater",class:1==t.level?"avater1":2==t.level?"avater2":"avater3"},[s("span",{staticClass:"avater-commen",class:1==t.level?"avater1-icon":2==t.level?"avater2-icon":"avater3-icon"}),s("img",{attrs:{src:t.makeFileUrl(t.user.avatar)}})]),s("div",{staticClass:"regards"},[s("span",[t._v(t._s(t.regards))]),t._v("分\n    ")]),t._m(0)]),s("div",{staticClass:"content2 box box-tb box-center-center"},[s("div",{staticClass:"commen-width animated bounceInDown",class:1==t.level?"local1-img":2==t.level?"local2-img":"local3-img"},[s("div",{staticClass:"logo animated shake"})]),s("div",{staticClass:"local-desc localText"},[t._v("\n      "+t._s(1==t.level?t.localText1:2==t.level?t.localText2:t.localText3)+"\n    ")])]),s("div",{staticClass:"content3"},[s("div",{staticClass:"btn-commen go-answer",on:{click:t.goAnswer}},[t._v("再次答题")]),s("div",{staticClass:"chance-remain"},[t._v("剩余"+t._s(t.chance)+"次答题机会")]),t.isApp?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("去分享")]):1==t.level?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领5元奖励")]):2==t.level?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领2元奖励")]):3==t.level?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("下载APP")]):t._e(),t.isApp?t._e():s("div",{staticClass:"text-commen go-wallet"},[t._v("去“我的-钱包”查看")]),s("div",{staticClass:"text-commen tips",on:{click:t.goTips}},[t._v("提高正确率，请查看攻略"),s("span",{staticClass:"arrow"})])]),s("local-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,content:t.dialog.content},on:{close:t.closeDialog}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"local-name box box-lr box-center-center"},[s("div",{staticClass:"line left"}),s("div",{staticClass:"name"},[t._v("获得称号")]),s("div",{staticClass:"line right"})])}],o=s("yT7P"),i=s("L2JU"),c=s("dqDD"),l=s("+n12"),r=s("9ijR"),d={components:{localDialog:r["a"]},data:function(){return{isApp:this.$store.state.IS_APP,regards:0,score:0,awardAmt:0,level:"",localText1:"同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO",localText2:"恭喜你获得2元奖励，但你对成都了解还不够多哦！冲击满分赢5元！",localText3:"盆友，你是路过成都吗？得满分可以领5元现金，再试试吧",dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"}}},created:function(){this.score=sessionStorage.score,this.level=sessionStorage.level,this.awardAmt=sessionStorage.awardAmt,this.regardsAdd(),this.IS_WX&&(console.log("result wxshare--"),this.initWxConfig())},mounted:function(){console.log("user--",this.user)},computed:Object(o["a"])({},Object(i["d"])(["IS_APP","IS_WX"]),Object(i["d"])("local",{user:function(t){return t.user},chance:function(t){return t.statistic.chance},currentQuesitionNum:function(t){return t.currentQuesitionNum}})),methods:Object(o["a"])({},Object(i["c"])(["updateChance","updateCurrentQuestionNum"]),Object(i["b"])("local",["updateChance","initWxConfig","updateCurrentQuestionNum"]),{makeFileUrl:function(t){return Object(l["g"])(t)},regardsAdd:function(){var t=this;this.regards>this.score||setInterval(function(){t.regards>=t.score||t.regards++},10)},goAnswer:function(){this.awardAmt>=100?Object(c["Toast"])("您已经获得奖励100元，不能再答题了~"):this.chance>0?(this.updateCurrentQuestionNum(),console.log("updateCurrentQuestionNum",this.currentQuesitionNum),this.$router.push({name:"localAnswer"})):this.dialog.show=!0},closeDialog:function(){this.dialog.show=!1},downloadApp:function(){this.isApp?this.$router.push({name:"localShare"}):Object(l["c"])()},goTips:function(){this.isApp}})},u=d,v=(s("X9v0"),s("KHd+")),m=Object(v["a"])(u,a,n,!1,null,"8e31d922",null);e["default"]=m.exports},X9v0:function(t,e,s){"use strict";var a=s("FTqt"),n=s.n(a);n.a}}]);
//# sourceMappingURL=5.4c5f9ebf.js.map