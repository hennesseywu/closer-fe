(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"2znc":function(s,t,e){},"4bDl":function(s,t,e){},"7ODX":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"activity"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"invite-img",on:{click:function(t){s.redirectTo()}}}),e("div",{staticClass:"text-box box box-lr box-center-center"},[e("div",{staticClass:"left box box-tb"},[e("div",{staticClass:"chance-box"},[s._v("您还有"),e("span",[s._v(s._s(s.userGuessStatistic.totalChance))]),s._v("次机会喔")]),e("div",{staticClass:"whole-num"},[e("span",[s._v(s._s(s.userGuessStatistic.totalGuessPerson))]),s._v("人参与")])]),e("div",{staticClass:"right",on:{click:s.addChance}},[s._v("增加机会")])]),e("div",{staticClass:"swipe"},[s.matchList?e("mt-swipe",{ref:"swipe",attrs:{continuous:!0,auto:0,showIndicators:!1}},s._l(s.matchList,function(t,a){return e("mt-swipe-item",{key:a},[e("div",{staticClass:"choose-box"},[e("div",{staticClass:"time-wrapper box box-lr"},[e("div",{staticClass:"left-ball"}),e("div",{staticClass:"time"},[e("span",[s._v(s._s(s.getMonth(new Date(t.startTime))))]),s._v("月"),e("span",[s._v(s._s(s.getDate(new Date(t.startTime))))]),s._v("号\n                "),e("span",[s._v(s._s(s.getHours(new Date(t.startTime))))])]),e("div",{staticClass:"right-ball"})]),e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"info-box box box-lr"},[e("div",{staticClass:"left-arrow box box-center-center",on:{click:function(t){s.arrowLeft()}}},[e("span",{staticClass:"img"})]),e("div",{staticClass:"country country1 box box-tb"},[e("span",[s._v(s._s(t.homeTeam.teamName))]),e("span",{staticClass:"flag"},[e("img",{attrs:{src:t.homeTeam.logo,alt:"主队logo"}})])]),e("div",{staticClass:"vs-img"}),e("div",{staticClass:"country box box-tb"},[e("span",[s._v(s._s(t.gustTeam.teamName))]),e("span",{staticClass:"flag"},[e("img",{attrs:{src:t.gustTeam.logo,alt:"客队logo"}})])]),e("div",{staticClass:"right-arrow box box-center-center",on:{click:function(t){s.arrowRight()}}},[e("span",{staticClass:"img rotate"})])])]),e("div",{staticClass:"result box box-lr"},[e("div",{staticClass:"commonsize winner1",class:t.userGuess&&"equal"==t.userGuess.matchResult||t.userGuess&&"win"==t.userGuess.matchResult&&t.homeTeam.teamId!=t.userGuess.winTeamId?"gray":"yellowbg",on:{click:function(e){s.openVotepop(t.homeTeam.teamName,t.homeTeam.logo,t.matchId,t.homeTeam.teamId,"win",t.userGuess)}}},[e("div",{staticClass:"winbtn"},[s._v("胜利")]),t.userGuess&&"win"==t.userGuess.matchResult&&t.homeTeam.teamId==t.userGuess.winTeamId?e("div",{staticClass:"times"},[s._v("X "+s._s(t.userGuess.guessTimes))]):s._e()]),e("div",{staticClass:"commonsize tie",class:"group"!=t.matchType||"group"==t.matchType&&t.userGuess&&"equal"!=t.userGuess.matchResult?"gray":"yellowbg",on:{click:function(e){s.openVotepop(t.homeTeam.teamName,t.homeTeam.logo,t.matchId,t.homeTeam.teamId,"equal",t.userGuess,t.gustTeam.logo)}}},[e("div",{staticClass:"winbtn"},[s._v("平局")]),t.userGuess&&"equal"==t.userGuess.matchResult?e("span",{staticClass:"times"},[s._v("X "+s._s(t.userGuess.guessTimes))]):s._e()]),e("div",{staticClass:"commonsize yellowbg winner2",class:t.userGuess&&"equal"==t.userGuess.matchResult||t.userGuess&&"win"==t.userGuess.matchResult&&t.gustTeam.teamId!=t.userGuess.winTeamId?"gray":"yellowbg",on:{click:function(e){s.openVotepop(t.gustTeam.teamName,t.gustTeam.logo,t.matchId,t.gustTeam.teamId,"win",t.userGuess)}}},[e("div",{staticClass:"winbtn"},[s._v("胜利")]),t.userGuess&&"win"==t.userGuess.matchResult&&t.gustTeam.teamId==t.userGuess.winTeamId?e("span",{staticClass:"times"},[s._v("X "+s._s(t.userGuess.guessTimes))]):s._e()])])])])})):s._e()],1)]),s.isApp?s._e():e("Getapp",{ref:"getapp"}),e("div",{staticClass:"rule_record box box-lr"},[e("div",{staticClass:"rule",class:s.showRule?"checkbg":"uncheckbg",on:{click:s.showRules}},[s._v("规则说明")]),e("div",{staticClass:"record",class:s.showRecord?"checkbg":"uncheckbg",on:{click:s.showRecords}},[s._v("投注记录")])]),e("Rule",{ref:"rule",attrs:{showRule:s.showRule}}),e("Votepop",{ref:"votepop",attrs:{voteInfo:s.voteInfo,totalChance:s.userGuessStatistic.totalChance},on:{guessMatch:s.guessMatch}}),e("Record",{ref:"record",attrs:{showRecord:s.showRecord,userGuessList:s.userGuessList}}),s.recieveChanceInfo.status?e("Newuserpop",{ref:"newuserpop",attrs:{newUser:!1,presentAvailable:s.recieveChanceInfo.presentAvailable,isApp:s.isApp,count:s.recieveChanceInfo.count}}):s._e(),"undefined"!=typeof s.userGuessResult.guessResult?e("Winpop",{ref:"winpop",attrs:{guessResult:s.userGuessResult.guessResult,awardAmt:s.userGuessResult.totalAwardAmt,totalGuessPerson:s.userGuessResult.totalGuessPerson,matchList:s.userGuessResult.guessMatchList,totalBingoPerson:s.userGuessResult.totalBingoPerson},on:{jumpTo:s.redirectTo}}):s._e(),e("Nochancepop",{ref:"nochancepop"})],1)},i=[],o=e("yT7P"),c=e("dqDD"),n=e("L2JU"),u=e("+n12"),l=e("5QxJ"),r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return s.showRecord?e("div",{staticClass:"record-box"},[s._l(s.userGuessList,function(t,a){return s.userGuessList.length>0?e("div",{key:a,staticClass:"record-list box box-lr"},[e("div",{staticClass:"time"},[s._v(s._s(s.formataDate(new Date(t.startTime))))]),t.userGuess.guessResult&&t.winTeamId==t.homeTeamId?e("div",{staticClass:"coountry"},[s._v(s._s(t.homeTeam.teamName)+"(W) VS "+s._s(t.gustTeam.teamName))]):t.userGuess.guessResult&&t.winTeamId==t.gustTeamId?e("div",{staticClass:"coountry"},[s._v(s._s(t.homeTeam.teamName)+" VS "+s._s(t.gustTeam.teamName)+"(W)")]):e("div",{staticClass:"coountry"},[s._v(s._s(t.homeTeam.teamName)+" VS "+s._s(t.gustTeam.teamName)+" ")]),t.userGuess.guessResult?e("div",{staticClass:"money"},[s._v("获得"+s._s(s.change(t.userGuess.awardAmt))+"元")]):s._e(),t.userGuess.guessResult?e("div",{staticClass:"correct-times"},[s._v(s._s("bingo"===t.userGuess.guessResult?"正确":"fail"===t.userGuess.guessResult?"失败":"待开奖")+"X"+s._s(t.userGuess.guessTimes))]):e("div",{staticClass:"correct-times"},[s._v("待开奖")])]):s._e()}),s.userGuessList.length>0?e("div",{staticClass:"btn-goapp",on:{click:s.goApp}},[s._v("去APP提现")]):s._e(),s.showTips?e("div",{staticClass:"tips"},[s._v("进入【我的钱包】-【奖励金】中领取")]):s._e(),0==s.userGuessList.length?e("div",{staticClass:"no-record"},[s._v("\n    您还没有投注过哦~快去参与拿大奖吧\n  ")]):s._e()],2):s._e()},h=[],p={name:"records",props:{showRecord:{type:Boolean,default:!1},userGuessList:{type:Array,default:function(){return[]}}},data:function(){return{isApp:!1,showTips:!1}},mounted:function(){console.log(this.userGuessList.length)},methods:{change:function(s){return Object(u["c"])(s)},formataDate:function(s){if(s)return s.getMonth()+1+"月"+s.getDate()+"日"},goApp:function(){this.isApp=this.$store.state.IS_APP,this.isApp?this.showTips=!0:Object(u["a"])()}}},m=p,d=(e("R/mF"),e("KHd+")),v=Object(d["a"])(m,r,h,!1,null,"d0ca16f0",null),f=v.exports,C=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("mt-popup",{staticClass:"vote-pop",attrs:{closeOnClickModal:s.closeOnClickModal},model:{value:s.visible,callback:function(t){s.visible=t},expression:"visible"}},[e("div",{staticClass:"pop-header box box-lr box-center-center"},[e("div",{staticClass:"match"},[e("img",{attrs:{src:s.voteInfo.logo,alt:""}})]),s.voteInfo.gustTeamLogo&&""!=s.voteInfo.gustTeamLogo?e("div",{staticClass:"match match2"},[e("img",{attrs:{src:s.voteInfo.gustTeamLogo,alt:""}})]):s._e()]),e("div",{staticClass:"pop-body box box-tb box-center-center"},["equal"==s.voteInfo.matchResult?e("div",{staticClass:"vote-resule"},[s._v("投注平局")]):e("div",{staticClass:"vote-resule"},[s._v("投给"+s._s(s.voteInfo.teamName))]),e("div",{staticClass:"rest-times"},[s._v("还剩"+s._s(s.totalChance)+"次机会")]),e("div",{staticClass:"vote-box box box-lr box-center-center"},[e("span",[s._v("使用")]),e("div",{staticClass:"vbox"},[e("span",{staticClass:"reduce",on:{click:s.reduce}},[s._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.chance,expression:"chance"}],ref:"chance",staticClass:"input",attrs:{type:"text"},domProps:{value:s.chance},on:{blur:s.onblur,input:function(t){t.target.composing||(s.chance=t.target.value)}}}),e("span",{staticClass:"add",on:{click:s.add}},[s._v("+")])]),e("span",[s._v("次机会")])]),e("div",{staticClass:"add-vote",on:{click:s.goTips}},[s.showText?e("span",[s._v(s._s(s.textTip))]):s._e(),s._v(" 增加机会 查看攻略")])]),e("div",{staticClass:"pop-footer box box-lr box-center-center"},[e("div",{staticClass:"other-btn",on:{click:s.close}},[s._v("再想想")]),e("div",{staticClass:"confirm-btn",on:{click:function(t){s.confirm(s.voteInfo)}}},[s._v("确认")])])])},g=[],b=(e("xfY5"),e("f3/d"),e("Kw5r"));b["default"].component(c["Popup"].name,c["Popup"]);var _={name:"pop",components:{Toast:c["Toast"]},props:{guessMatch:Function,voteInfo:{type:Object,default:{}},className:String,closeOnClickModal:{type:Boolean,default:!1},voteResult:{type:String,default:"投注胜利"},totalChance:Number},data:function(){return{showText:!1,visible:!1,chance:1,inputChance:1,textTip:"机会不足"}},created:function(){},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},checkChance:function(){this.showText=!1,this.inputChance>=this.totalChance||this.chance>=this.totalChance?(this.showText=!0,this.textTip="机会不足"):this.showText=!1},onblur:function(){this.inputChance=this.$refs.chance.value,this.showText=!1,this.checkChance()},add:function(){this.checkChance(),this.chance>=this.totalChance?this.chance=this.totalChance:this.chance++},reduce:function(){this.chance>1&&this.chance--,this.checkChance()},confirm:function(s){var t=this;if(!this.showText){if(!/^[1-9]+[0-9]*]*$/.test(this.chance))return this.textTip="请输入正整数",void(this.showText=!0);if(0==this.chance)return this.textTip="投注次数不能为0",void(this.showText=!0);s["guessTimes"]=this.chance,console.log("confirm",s),this.$emit("guessMatch",s),setTimeout(function(){t.close()},500)}},goTips:function(){window.location.href="http://baidu.com/"}}},w=_,x=(e("Dldw"),Object(d["a"])(w,C,g,!1,null,"87271c9c",null)),T=x.exports,G=e("tPC7"),R=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("mt-popup",{staticClass:"pop-box",attrs:{closeOnClickModal:!1},model:{value:s.notAccessVisible,callback:function(t){s.notAccessVisible=t},expression:"notAccessVisible"}},[e("div",{staticClass:"pop-header"},[e("div",{staticClass:"close-icon",on:{click:s.close}})]),e("div",{staticClass:"pop-body"},[e("div",{staticClass:"title box box-tb"},[s.guessResult?s._e():e("span",{staticClass:"text"},[s._v("很遗憾,你猜错了")]),s.guessResult?e("span",{staticClass:"text win-text1"},[s._v("恭喜你猜对了！")]):s._e(),s.guessResult?e("span",{staticClass:"text win-text2"},[s._v("你获得了"),e("span",[s._v(s._s(s.change(s.awardAmt)))]),s._v("元")]):s._e()]),e("div",{staticClass:"title-desc"},[e("span",{staticClass:"desc"},[s._v(s._s(s.totalGuessPerson)+"人参与，"+s._s(s.totalBingoPerson)+"答对")])]),e("div",{staticClass:"content box box-tb box-center-center"},[e("div",{class:s.guessResult?"result-win":"result-img"}),e("div",{staticClass:"share",on:{click:function(t){s.jumpToShare()}}},[s.guessResult?e("button",{staticClass:"button"},[s._v("炫耀一下")]):e("button",{staticClass:"button"},[s._v("邀请好友一起赚钱")])]),e("div",{staticClass:"guide"},[e("a",{staticClass:"href",on:{click:function(t){s.jumpToAddChance()}}},[s._v("增加机会 查看攻略")])]),e("div",{staticClass:"line"}),e("div",{staticClass:"match-title"},[e("span",{staticClass:"title"},[s._v("竞猜比赛队伍")])]),e("div",{staticClass:"match"},s._l(s.matchList,function(t,a){return e("div",{key:a,staticClass:"detail-box box box-lr"},[e("span",{staticClass:"detail"},[s._v(s._s(t.homeTeam.teamName)+" vs "+s._s(t.gustTeam.teamName))]),e("span",{staticClass:"guess"},[s._v(s._s(t.matchDesc))])])}))]),s.guessResult?e("div",{staticClass:"bottom"},[e("span",{staticClass:"wait",on:{click:function(t){s.close()}}},[s._v("等等再说")]),e("button",{staticClass:"getMoney",on:{click:function(t){s.jumpToDownload()}}},[s._v("去提现")])]):s._e(),s.guessResult?e("div",{staticClass:"tips"},[s._v("进入【我的钱包】-【奖励金】中领取")]):s._e()])])},k=[];b["default"].component(c["Popup"].name,c["Popup"]);var I={name:"pop",components:{},props:{className:String,totalBingoPerson:Number,totalGuessPerson:Number,guessResult:Boolean,awardAmt:{type:Number,default:0},matchList:{type:Array,defaut:[]},jumpTo:Function},data:function(){return{win:!1,buttonText:"炫耀一下",isShow:!1,notAccessVisible:!0}},methods:{change:function(s){return Object(u["c"])(s)},open:function(){this.notAccessVisible=!0},close:function(){this.notAccessVisible=!1},jumpToShare:function(){this.$emit("jumpTo")},jumpToAddChance:function(){console.log("jump2chance",this.$store.state.IS_APP),Object(u["b"])(this.$store.state.IS_APP)},jumpToDownload:function(){Object(u["a"])()}}},A=I,y=(e("xciG"),Object(d["a"])(A,R,k,!1,null,"4d46ee63",null)),S=y.exports,L=e("RGCu"),N=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("mt-popup",{staticClass:"nochance-pop",attrs:{closeOnClickModal:s.closeOnClickModal},model:{value:s.visible,callback:function(t){s.visible=t},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:function(t){s.close()}}}),e("div",{staticClass:"pop-header"},[e("div",{staticClass:"winner"},[e("div",{staticClass:"win-text"},[s._v("已经没有机会了哟~")])])]),e("div",{staticClass:"pop-body box box-tb box-center-center"},[e("div",{staticClass:"loser-img"}),e("div",{staticClass:"pop-text"},[s._v("“在贴近app的文章里、酒吧里、"),e("br"),s._v(" 广告牌里寻找"),e("span",[s._v("机会")]),s._v("吧")])]),e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn",on:{click:s.close}},[s._v("确认")]),e("div",{staticClass:"tips",on:{click:s.goTips}},[s._v("增加机会 查看攻略")])])])},P=[];b["default"].component(c["Popup"].name,c["Popup"]);var j={name:"pop",components:{},props:{newUser:{type:Boolean,default:!1},isApp:{type:Boolean,default:!0},count:Number,className:String,closeOnClickModal:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},goTips:function(){window.location.href="http://baidu.com/"}}},O=j,D=(e("JrQu"),Object(d["a"])(O,N,P,!1,null,"2f8aad40",null)),M=D.exports,$={name:"index",components:{Swipe:c["Swipe"],SwipeItem:c["SwipeItem"],Rule:l["a"],Record:f,Votepop:T,Newuserpop:G["a"],Winpop:S,Getapp:L["a"],Nochancepop:M},data:function(){return{showRule:!0,showRecord:!1,isApp:!1}},computed:Object(o["a"])({},Object(n["c"])("activity",{grayBtn:function(s){return s.grayBtn},matchList:function(s){return s.matchList},userGuessStatistic:function(s){return s.userGuessStatistic},voteInfo:function(s){return s.voteInfo},recieveChanceInfo:function(s){return s.recieveChanceInfo},userGuessList:function(s){return s.userGuessList},userGuessResult:function(s){return s.userGuessResult}})),created:function(){this.getMatchList(),this.checkUser(),this.getUserGuessStatistic(),this.checkGuessResult(),this.checkRecieveChance({channelCode:this.$store.state.CHANNEL_CODE})},mounted:function(){0==this.userGuessStatistic.totalChance&&this.$refs.nochancepop.open()},methods:Object(o["a"])({},Object(n["b"])("activity",["getMatchList","setVoteInfo","getUserGuessList","guessMatch","getUserGuessStatistic","checkGuessResult","checkRecieveChance","getUserGuessList"]),{arrowRight:function(){this.$refs.swipe.next()},arrowLeft:function(){this.$refs.swipe.prev()},openVotepop:function(s,t,e,a,i,o,n){if(console.log(a,"--",i,"---",o),console.log(this.userGuessStatistic.totalChance),0!=this.userGuessStatistic.totalChance)if(this.userGuessStatistic&&0==this.userGuessStatistic.totalChance)console.log("没有机会了");else if(o&&"win"==o.matchResult&&("win"!=i||o.winTeamId!=a)||o&&"equal"==o.matchResult&&"equal"!=i)Object(c["Toast"])("只能投注已选队伍");else{var u={logo:t,matchId:e,winTeamId:a,matchResult:i};s&&(u["teamName"]=s),n&&(u["gustTeamLogo"]=n),this.setVoteInfo(u),this.$refs.votepop.open()}else this.$refs.nochancepop.open()},getMonth:function(s){if(s)return s.getMonth()+1},getDate:function(s){if(s)return s.getDate()},getHours:function(s){if(s){var t=s.getHours(),e=s.getMinutes();return(t<10?"0"+t:t)+":"+(e<10?"0"+e:e)}},showRules:function(){this.showRule=!0,this.showRecord=!1},showRecords:function(){this.showRule=!1,this.getUserGuessList(),this.showRecord=!0},checkUser:function(){this.isApp=this.$store.state.IS_APP},redirectTo:function(){var s="",t=0;if(console.log(Cookies.get("totalAwardAmt")),Cookies.get("totalAwardAmt")&&(t=Cookies.get("totalAwardAmt")),Cookies.get("user")){var e=JSON.parse(Cookies.get("user"));e.objectID&&(s=e.objectID)}this.$router.push({name:"worldcupShare",params:{userId:s,amount:t}})},addChance:function(){Object(u["b"])(this.$store.state.IS_APP)}})},V=$,B=(e("sYWk"),Object(d["a"])(V,a,i,!1,null,"3a832666",null));t["default"]=B.exports},CCfm:function(s,t,e){},Dldw:function(s,t,e){"use strict";var a=e("4bDl"),i=e.n(a);i.a},JrQu:function(s,t,e){"use strict";var a=e("CCfm"),i=e.n(a);i.a},KHBp:function(s,t,e){},"R/mF":function(s,t,e){"use strict";var a=e("2znc"),i=e.n(a);i.a},cVSA:function(s,t,e){},sYWk:function(s,t,e){"use strict";var a=e("cVSA"),i=e.n(a);i.a},xciG:function(s,t,e){"use strict";var a=e("KHBp"),i=e.n(a);i.a}}]);
//# sourceMappingURL=2.a9c8b7c4.js.map