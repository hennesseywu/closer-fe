(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{IC5M:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result-wrapper"},[a("div",{staticClass:"content1"},[a("div",{staticClass:"avater",class:1==t.level?"avater1":2==t.level?"avater2":"avater3"},[a("span",{staticClass:"avater-commen",class:1==t.level?"avater1-icon":2==t.level?"avater2-icon":"avater3-icon"}),a("img",{attrs:{src:t.makeFileUrl(t.user.avatar)}})]),a("div",{staticClass:"regards"},[a("span",[t._v(t._s(t.regards))]),t._v("分\n    ")]),t._m(0)]),a("div",{staticClass:"content2 box box-tb box-center-center"},[a("div",{staticClass:"commen-width animated bounceInDown",class:1==t.level?"local1-img":2==t.level?"local2-img":"local3-img"},[a("div",{staticClass:"logo animated shake"})]),a("div",{staticClass:"local-desc localText"},[t._v("\n      "+t._s(1==t.level?t.localText1:2==t.level?t.localText2:t.localText3)+"\n    ")])]),a("div",{staticClass:"content3"},[a("div",{staticClass:"btn-commen go-answer",on:{click:t.goAnswer}},[t._v("再次答题")]),a("div",{staticClass:"chance-remain"},[t._v("剩余"+t._s(t.chance)+"次答题机会")]),t.isApp?a("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("去分享")]):1==t.level?a("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领5元奖励")]):2==t.level?a("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领2元奖励")]):3==t.level?a("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("下载APP")]):t._e(),t.isApp?a("div",{staticClass:"text-commen go-wallet"},[t._v("去“我的-钱包”查看")]):a("div",{staticClass:"text-commen go-wallet"},[t._v("下载贴近APP，去“我的-钱包”查看")]),a("div",{staticClass:"text-commen tips",on:{click:t.goTips}},[t._v("提高正确率，请查看攻略"),a("span",{staticClass:"arrow"})])]),a("local-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,content:t.dialog.content},on:{close:t.closeDialog}})],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"local-name box box-lr box-center-center"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"name"},[t._v("获得称号")]),a("div",{staticClass:"line right"})])}],i=a("yT7P"),c=a("L2JU"),o=a("dqDD"),l=a("+n12"),r=a("9ijR"),d={components:{localDialog:r["a"]},data:function(){return{isApp:this.$store.state.IS_APP,regards:0,score:0,awardAmt:0,level:"",localText1:"同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO",localText2:"恭喜你获得2元奖励，但你对成都了解还不够多哦！冲击满分赢5元！",localText3:"盆友，你是路过成都吗？得满分可以领5元现金，再试试吧",dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"}}},created:function(){this.IS_WX&&(console.log("result wxshare--"),this.initWxConfig())},mounted:function(){this.score=this.endData.score,this.level=this.endData.level,this.awardAmt=this.endData.awardAmt,this.regardsAdd(),console.log("user--",this.user)},computed:Object(i["a"])({},Object(c["d"])(["IS_APP","IS_WX"]),Object(c["d"])("local",{user:function(t){return t.user},chance:function(t){return t.statistic.chance},currentQuesitionNum:function(t){return t.currentQuesitionNum},statistic:function(t){return t.statistic},endData:function(t){return t.endData}})),methods:Object(i["a"])({},Object(c["c"])(["updateChance","updateCurrentQuestionNum"]),Object(c["b"])("local",["updateChance","initWxConfig","updateCurrentQuestionNum"]),{makeFileUrl:function(t){return Object(l["g"])(t)},regardsAdd:function(){var t=this;this.regards>this.score||setInterval(function(){t.regards>=t.score||t.regards++},10)},goAnswer:function(){this.statistic.totalAwardAmt>=this.statistic.maxAwardAmt?Object(o["Toast"])("您已经获得奖励100元，不能再答题了~"):this.chance>0?(this.updateCurrentQuestionNum(),console.log("updateCurrentQuestionNum",this.currentQuesitionNum),this.$router.push({name:"localAnswer"})):this.dialog.show=!0},closeDialog:function(){this.dialog.show=!1},downloadApp:function(){this.isApp?this.$router.push({name:"localShare"}):Object(l["c"])()},goTips:function(){this.isApp?location.href="closer://community/9Mj8OC0TUL":location.href="https://h5.tiejin.cn/community/9Mj8OC0TUL"}})},u=d,m=(a("M+Qk"),a("KHd+")),v=Object(m["a"])(u,s,n,!1,null,"3e6c6384",null);e["default"]=v.exports},"M+Qk":function(t,e,a){"use strict";var s=a("PLTD"),n=a.n(s);n.a},PLTD:function(t,e,a){}}]);
//# sourceMappingURL=5.f81ba849.js.map