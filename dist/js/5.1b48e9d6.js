(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"+J9h":function(t,e,s){},"7cza":function(t,e,s){"use strict";var a=s("+J9h"),n=s.n(a);n.a},"9ijR":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"dialog",class:{active:t.show}},[s("div",{staticClass:"dlg-wrap animated bounceIn faster"},[s("div",{staticClass:"dlg-close",on:{click:function(e){t.handleClose()}}}),s("div",{staticClass:"dlg-img"}),s("div",{staticClass:"dlg-desc",domProps:{innerHTML:t._s(t.content)}}),s("div",{staticClass:"dlg-btn",on:{click:function(e){t.handleClick()}}},[t._v(t._s(t.share?"去分享":"确定"))])])])},n=[],c={name:"localDialog",props:{show:Boolean,share:Boolean,content:String},methods:{handleClose:function(){this.$emit("close")},handleClick:function(){this.share||this.handleClose()}}},o=c,l=(s("7cza"),s("KHd+")),i=Object(l["a"])(o,a,n,!1,null,"6e19e494",null);e["a"]=i.exports},GGlF:function(t,e,s){"use strict";var a=s("mKIT"),n=s.n(a);n.a},IC5M:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result-wrapper"},[s("div",{staticClass:"content1"},[s("div",{staticClass:"avater",class:1==t.level?"avater1":2==t.level?"avater2":"avater3"},[s("span",{staticClass:"avater-commen",class:1==t.level?"avater1-icon":2==t.level?"avater2-icon":"avater3-icon"}),s("img",{attrs:{src:t.makeFileUrl(t.user.avatar)}})]),s("div",{staticClass:"regards"},[s("span",[t._v(t._s(t.regards))]),t._v("分\n    ")]),t._m(0)]),s("div",{staticClass:"content2 box box-tb box-center-center"},[s("div",{staticClass:"commen-width animated bounceInDown",class:1==t.level?"local1-img":2==t.level?"local2-img":"local3-img"},[s("div",{staticClass:"logo animated shake"})]),s("div",{staticClass:"local-desc localText"},[t._v("\n      "+t._s(1==t.level?t.localText1:2==t.level?t.localText2:t.localText3)+"\n    ")])]),s("div",{staticClass:"content3"},[s("div",{staticClass:"btn-commen go-answer",on:{click:t.goAnswer}},[t._v("再次答题")]),s("div",{staticClass:"chance-remain"},[t._v("剩余"+t._s(t.chance)+"次答题机会")]),t.isApp?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("去分享")]):1==t.level?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领5元奖励")]):2==t.level?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("领2元奖励")]):3==t.level?s("div",{staticClass:"btn-commen get-cash animated zoomIn",on:{click:t.downloadApp}},[t._v("下载APP")]):t._e(),t.isApp?t._e():s("div",{staticClass:"text-commen go-wallet"},[t._v("去“我的-钱包”查看")]),s("div",{staticClass:"text-commen tips",on:{click:t.goTips}},[t._v("提高正确率，请查看攻略"),s("span",{staticClass:"arrow"})])]),s("local-dialog",{attrs:{show:t.dialog.show,share:t.dialog.share,content:t.dialog.content},on:{close:t.closeDialog}})],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"local-name box box-lr box-center-center"},[s("div",{staticClass:"line left"}),s("div",{staticClass:"name"},[t._v("获得称号")]),s("div",{staticClass:"line right"})])}],c=s("yT7P"),o=s("L2JU"),l=s("dqDD"),i=s("+n12"),r=s("9ijR"),d={components:{localDialog:r["a"]},data:function(){return{isApp:this.$store.state.IS_APP,regards:0,score:0,awardAmt:0,level:"",chance:0,localText1:"同样是九年义务教育，为什么你那么优秀？你“土”的一览众山小，谁都没你DIAO",localText2:"恭喜你获得2元奖励，但你对成都了解还不够多哦！冲击满分赢5元！",localText3:"盆友，你是路过成都吗？得满分可以领5元现金，再试试吧",dialog:{show:!1,share:!1,content:"呃~没有答题机会了，<br/>快去分享给好友获取答题机会吧！"}}},created:function(){this.score=sessionStorage.score,this.level=sessionStorage.level,this.awardAmt=sessionStorage.awardAmt,console.log("level",this.level),this.regardsAdd()},mounted:function(){this.chance=this.$store.state.local.statistic.chance,console.log("user--",this.user)},computed:Object(c["a"])({},Object(o["d"])("local",{user:function(t){return t.user}})),methods:{makeFileUrl:function(t){return Object(i["f"])(t)},regardsAdd:function(){var t=this;this.regards>this.score||setInterval(function(){t.regards>=t.score||t.regards++},10)},goAnswer:function(){this.awardAmt>=100?Object(l["Toast"])("您已经获得奖励100元，不能再答题了~"):this.chance>0?(this.chance--,this.$router.push({name:"localAnswer"})):this.dialog.show=!0},closeDialog:function(){this.dialog.show=!1},downloadApp:function(){this.isApp?this.$router.push({name:"localShare"}):Object(i["b"])()},goTips:function(){this.isApp}}},v=d,h=(s("GGlF"),s("KHd+")),u=Object(h["a"])(v,a,n,!1,null,"9d945834",null);e["default"]=u.exports},mKIT:function(t,e,s){},yT7P:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var a=s("oyJW");function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){Object(a["a"])(t,e,s[e])})}return t}}}]);
//# sourceMappingURL=5.1b48e9d6.js.map