(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1sfi":function(t,s,e){},Z09v:function(t,s,e){"use strict";var i=e("1sfi"),n=e.n(i);n.a},po5H:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.startData&&t.startData.length>0?e("div",{staticClass:"answer-wrapper"},[e("div",{staticClass:"answer-box"},[e("div",{staticClass:"answer-acount"},[t._v(t._s(t.currentQuesitionNum+1)+"/8")]),e("div",{staticClass:"subject",class:t.isUpdate?"animated slideInUp":""},[t._v(t._s(t.startData[t.currentQuesitionNum].title))]),t._l(t.startData[t.currentQuesitionNum].answers,function(s,i){return e("div",{key:i,staticClass:"optoins",class:t.isUpdate?"animated slideInUp":""},[e("div",{staticClass:"list",class:i===t.checkNum?"bg-yellow":"",on:{click:function(s){t.checkOptions(i)}}},[t._v(t._s(s.title))])])})],2),e("div",{staticClass:"next-box",class:t.isUpdate?"animated slideInUp":""},[t.currentQuesitionNum<7?e("div",{class:t.isCheck?"checked":"next-btn",on:{click:function(s){t.next(t.startResult.userAnswerId,t.startData[t.currentQuesitionNum].questionId,t.checkNum+1)}}}):t._e(),7==t.currentQuesitionNum?e("div",{staticClass:"finish",class:t.isCheck?"isfinish":"unfinish",on:{click:function(s){t.next(t.startResult.userAnswerId,t.startData[t.currentQuesitionNum].questionId,t.checkNum+1)}}},[t._v("完成答题")]):t._e()])]):t._e()},n=[],c=e("yT7P"),a=e("dqDD"),r=e("L2JU"),u={data:function(){return{isApp:this.$store.state.IS_APP,checkNum:"",isCheck:!1,options:{},checkArr:[],isUpdate:!1}},created:function(){this.getStatistic(),this.statistic&&this.startTest()},mounted:function(){this.isUpdate=!0},computed:Object(c["a"])({},Object(r["d"])("local",{statistic:function(t){return t.statistic},startResult:function(t){return t.startResult},startData:function(t){return t.startData},currentQuesitionNum:function(t){return t.currentQuesitionNum},endData:function(t){return t.endData}})),methods:Object(c["a"])({},Object(r["b"])("local",["startTest","nextQuestion","commitTest","getStatistic"]),{checkOptions:function(t){var s=this;this.checkNum=t,setTimeout(function(){s.isCheck=!0},100)},next:function(t,s,e){if(this.isCheck){this.checkArr.push({questionId:s,seq:e});var i={userAnswerId:t,answers:this.checkArr,inviteUser:"",salt:"",sign:""};console.log(2,this.checkArr),this.currentQuesitionNum<7?(this.checkNum="",this.isCheck=!1,this.nextQuestion()):this.commitTest(i)}else Object(a["Toast"])("您还未答题哟~")}})},o=u,l=(e("Z09v"),e("KHd+")),h=Object(l["a"])(o,i,n,!1,null,"4aa8fcb1",null);s["default"]=h.exports},yT7P:function(t,s,e){"use strict";e.d(s,"a",function(){return n});var i=e("oyJW");function n(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(s){Object(i["a"])(t,s,e[s])})}return t}}}]);
//# sourceMappingURL=6.342a4b2c.js.map