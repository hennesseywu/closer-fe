(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"/e88":function(t,s){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0Ltp":function(t,s,e){},"5QxJ":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.showRule||t.showIndexRule?e("div",{staticClass:"rule-box activity-rule",class:t.chanceBoxShow?"index-rule":t.loginBoxShow?"login-rule":""},[t.showIndexRule?e("div",{staticClass:"rule-title box box-tb box-center-center"},[e("div",{staticClass:"top-line"}),t._v("\n    活动规则\n    "),e("div",{staticClass:"bottom-line"})]):t._e(),e("div",{staticClass:"rule mt14 activity"},[t._v("本活动奖金与苹果公司无关")]),e("div",{staticClass:"rule mt20 activity opacity"},[t._v("竞猜机会获取规则：")]),t._m(0),e("div",{staticClass:"rule mt40 opacity"},[t._v("竞猜规则：")]),t._m(1)]):t._e()},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rule-ul"},[e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("1. 通过扫码获取一次竞猜机会，下载贴近APP送两次竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("2. 装机后用贴近APP扫描贴近设置在APP内、酒吧、网吧、球场、餐饮店等地方隐藏的二维码获取两次竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("3. 每天登陆贴近APP获得一次竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v(" 4. 每个用户每日投注累计上限为50次。")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rule-ul"},[e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("1. 利用竞猜机会直接参与竞猜，竞猜胜平负（每次最少使用一次机会，上不封顶，同一场比赛使用多次竞猜机会，只能猜同样的胜负平）；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("2. 奖金机制：世界杯比赛日设置相应的奖金额度，奖金额度按照世界杯进程做相应的递增。每场比赛竞猜正确的用户根据所投入竞猜的机会多少，平分该场比赛所设置的奖金（所投入竞猜且竞猜正确的机会越多，获得奖金越高），该奖金将注入“贴近App  我的  钱包”，可按照贴近App平台规则提现；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("3. 已投入竞猜的机会，并且竞猜正确后，才能结算现金奖励；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("4. 每场比赛开始前5分钟关闭竞猜窗口，用户无法在已关闭竞猜窗口的比赛场次投入竞猜机会；")])]),e("div",{staticClass:"item"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("5. 比赛第二日10：00，结算现金奖励。")])]),e("div",{staticClass:"item last"},[e("span",{staticClass:"c-img"}),e("span",{staticClass:"right"},[t._v("所有的竞猜活动，以公司制定的规则为准。公司拥有本活动的最终解释权")])])])}],n={name:"rule",props:{showRule:{type:Boolean,default:!0},showIndexRule:{type:Boolean,default:!1},loginBoxShow:{type:Boolean,default:!1},chanceBoxShow:{type:Boolean,default:!1}},data:function(){return{}},methods:{}},c=n,o=(e("nEyH"),e("KHd+")),l=Object(o["a"])(c,a,i,!1,null,"c42ee462",null);s["a"]=l.exports},"7ODX":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"activity"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"invite-img",on:{click:t.openShare}}),e("div",{staticClass:"text-box box box-lr box-center-center"},[e("div",{staticClass:"left box box-tb"},[t.userGuessStatistic.totalAwardAmt>0?e("div",{staticClass:"money"},[t._v("你累积获得了"),e("span",[t._v(t._s(t.change(t.userGuessStatistic.totalAwardAmt)))]),t._v("元 ")]):t._e(),e("div",{staticClass:"chance-box"},[t._v("您还有"),e("span",[t._v(t._s(t.userGuessStatistic.totalChance))]),t._v("次机会喔")]),e("div",{staticClass:"whole-num"},[e("span",[t._v(t._s(t.userGuessStatistic.totalGuessPerson))]),t._v("次竞猜参与")])]),e("div",{staticClass:"right",on:{click:t.addChance}},[t._v("增加机会")])]),t.userGuessStatistic.isWorldCupEnd?e("div",{staticClass:"end-wrapper nomatch-wrapper"},[e("div",{staticClass:"text1"},[t._v("竞猜结束")]),e("div",{staticClass:"text"},[t._v("快去领取您的奖金吧~")])]):e("div",["string"!=typeof t.matchList&&0==t.matchList.length?e("div",{staticClass:"nomatch-wrapper"},[e("div",{staticClass:"text1"},[t._v("比赛竞猜马上呈现")]),e("div",{staticClass:"text"},[t._v("稍后更精彩...")]),e("div",{staticClass:"nomatch-btn",on:{click:t.addChance}})]):e("div",{staticClass:"swipe"},[e("mt-swipe",{ref:"swipe",attrs:{continuous:!0,auto:0,showIndicators:!1}},t._l(t.matchList,function(s,a){return e("mt-swipe-item",{key:a},[e("div",{staticClass:"choose-box"},[e("div",{staticClass:"time-wrapper box box-lr box-center-center"},[e("div",{staticClass:"left-ball"}),e("div",{staticClass:"time"},[e("span",[t._v(t._s(t.getMonth(new Date(s.startTime))))]),t._v("月"),e("span",[t._v(t._s(t.getDate(new Date(s.startTime))))]),t._v("号\n                  "),e("span",[t._v(t._s(t.getHours(new Date(s.startTime))))])]),e("div",{staticClass:"right-ball"})]),e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"info-box box box-lr"},[e("div",{staticClass:"left-arrow box box-center-center",on:{click:function(s){t.arrowLeft()}}},[e("span",{staticClass:"img"})]),e("div",{staticClass:"country left country1 box box-tb box-center-center"},[e("span",[t._v(t._s(s.homeTeam.teamName))]),e("span",{staticClass:"flag"},[e("img",{attrs:{src:s.homeTeam.logo,alt:"主队logo"}})])]),e("div",{staticClass:"vs-img"}),e("div",{staticClass:"country right box box-tb box-center-center"},[e("span",[t._v(t._s(s.gustTeam.teamName))]),e("span",{staticClass:"flag"},[e("img",{attrs:{src:s.gustTeam.logo,alt:"客队logo"}})])]),e("div",{staticClass:"right-arrow box box-center-center",on:{click:function(s){t.arrowRight()}}},[e("span",{staticClass:"img rotate"})])])]),e("div",{staticClass:"result box box-lr"},[e("div",{staticClass:"commonsize winner1",class:s.userGuess&&"equal"==s.userGuess.matchResult||s.userGuess&&"win"==s.userGuess.matchResult&&s.homeTeam.teamId!=s.userGuess.winTeamId?"gray":"yellowbg",on:{click:function(e){t.openVotepop(s.homeTeam.teamName,s.homeTeam.logo,s.matchId,s.homeTeam.teamId,"win",s.userGuess,!1,s.matchType)}}},[e("div",{staticClass:"winbtn"},[t._v("胜利")]),s.userGuess&&"win"==s.userGuess.matchResult&&s.homeTeam.teamId==s.userGuess.winTeamId?e("span",{staticClass:"times"},[t._v("x"+t._s(s.userGuess.guessTimes))]):t._e()]),"group"==s.matchType?e("div",{staticClass:"commonsize tie",class:s.userGuess&&"equal"!=s.userGuess.matchResult?"gray":"yellowbg",on:{click:function(e){t.openVotepop(s.homeTeam.teamName,s.homeTeam.logo,s.matchId,s.homeTeam.teamId,"equal",s.userGuess,s.gustTeam.logo,s.matchType)}}},[e("div",{staticClass:"winbtn"},[t._v("平局")]),s.userGuess&&"equal"==s.userGuess.matchResult?e("span",{staticClass:"times"},[t._v("x"+t._s(s.userGuess.guessTimes))]):t._e()]):t._e(),e("div",{staticClass:"commonsize ml yellowbg winner2",class:s.userGuess&&"equal"==s.userGuess.matchResult||s.userGuess&&"win"==s.userGuess.matchResult&&s.gustTeam.teamId!=s.userGuess.winTeamId?"gray":"yellowbg",on:{click:function(e){t.openVotepop(s.gustTeam.teamName,s.gustTeam.logo,s.matchId,s.gustTeam.teamId,"win",s.userGuess,!1,s.matchType)}}},[e("div",{staticClass:"winbtn"},[t._v("胜利")]),s.userGuess&&"win"==s.userGuess.matchResult&&s.gustTeam.teamId==s.userGuess.winTeamId?e("span",{staticClass:"times"},[t._v("x"+t._s(s.userGuess.guessTimes))]):t._e()])])])])}))],1)])]),t.isApp?t._e():e("Getapp",{ref:"getapp"}),e("div",{staticClass:"rule_record box box-lr"},[e("div",{staticClass:"rule",class:t.showRule?"checkbg":"uncheckbg",on:{click:t.showRules}},[t._v("规则说明")]),e("div",{staticClass:"record",class:t.showRecord?"checkbg":"uncheckbg",on:{click:t.showRecords}},[t._v("竞猜记录")])]),e("Rule",{ref:"rule",attrs:{showRule:t.showRule}}),e("Votepop",{ref:"votepop",attrs:{voteInfo:t.voteInfo,totalChance:t.userGuessStatistic.totalChance},on:{guessMatch:t.guessMatch}}),e("Record",{ref:"record",attrs:{showRecord:t.showRecord,userGuessList:t.userGuessList,isApp:t.isApp}}),t.recieveChanceInfo.isPopUp?e("Newuserpop",{ref:"newuserpop",attrs:{status:t.recieveChanceInfo.status,presentAvailable:t.recieveChanceInfo.presentAvailable,isApp:t.isApp,count:t.recieveChanceInfo.count}}):t._e(),"undefined"!=typeof t.userGuessResult.guessResult?e("Winpop",{ref:"winpop",attrs:{isDev:t.isDev,guessResult:t.userGuessResult.guessResult,awardAmt:t.userGuessResult.totalAwardAmt,totalGuessPerson:t.userGuessResult.totalGuessPerson,matchList:t.userGuessResult.guessMatchList,totalBingoPerson:t.userGuessResult.totalBingoPerson}}):t._e(),e("Nochancepop",{ref:"nochancepop",attrs:{isApp:t.isApp}}),e("Sharepop",{ref:"sharepop",attrs:{isApp:t.isApp,isDev:t.isDev}}),e("Appusepop",{ref:"appusepop"})],1)},i=[],n=e("yT7P"),c=e("dqDD"),o=e("L2JU"),l=e("+n12"),u=e("5QxJ"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.showRecord?e("div",{staticClass:"record-box"},[t.isApp?e("div",{staticClass:"record-tips"},[t._v("小贴士：进入【设置】-【钱包】中提现")]):t._e(),t._l(t.userGuessList,function(s,a){return t.userGuessList.length>0?e("div",{key:a,staticClass:"record-list box box-lr"},[e("div",{staticClass:"time"},[t._v(t._s(t.formataDate(new Date(s.startTime))))]),s.userGuess.guessResult&&s.winTeamId==s.homeTeamId?e("div",{staticClass:"coountry"},[t._v(t._s(s.homeTeam.teamName)+"(W) VS "+t._s(s.gustTeam.teamName))]):s.userGuess.guessResult&&s.winTeamId==s.gustTeamId?e("div",{staticClass:"coountry"},[t._v(t._s(s.homeTeam.teamName)+" VS "+t._s(s.gustTeam.teamName)+"(W)")]):e("div",{staticClass:"coountry"},[t._v(t._s(s.homeTeam.teamName)+" VS "+t._s(s.gustTeam.teamName)+" ")]),s.userGuess.guessResult?e("div",{staticClass:"money"},[t._v("获得"+t._s(t.change(s.userGuess.awardAmt))+"元")]):t._e(),s.userGuess.guessResult?e("div",{staticClass:"correct-times"},[t._v(t._s("bingo"===s.userGuess.guessResult?"正确":"fail"===s.userGuess.guessResult?"失败":"待开奖")+"X"+t._s(s.userGuess.guessTimes))]):e("div",{staticClass:"correct-times"},[t._v("待开奖")])]):t._e()}),t.userGuessList.length>0&&!t.isApp?e("div",{staticClass:"btn-goapp",on:{click:t.goApp}},[t._v("去提现")]):t._e(),0==t.userGuessList.length?e("div",{staticClass:"no-record"},[t._v("\n    您还没有竞猜过哦~快去参与拿大奖吧\n  ")]):t._e()],2):t._e()},p=[],h={name:"records",props:{showRecord:{type:Boolean,default:!1},userGuessList:{type:Array,default:function(){return[]}},isApp:{type:Boolean,default:!1}},data:function(){return{showTips:!1}},mounted:function(){},methods:{change:function(t){return Object(l["k"])(t)},formataDate:function(t){if(t)return t.getMonth()+1+"月"+t.getDate()+"日"},goApp:function(){this.isApp=this.$store.state.IS_APP,this.isApp?this.showTips=!0:Object(l["d"])()}}},v=h,d=(e("Zdll"),e("KHd+")),m=Object(d["a"])(v,r,p,!1,null,"a7c04480",null),f=m.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"vote-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"pop-header box box-lr box-center-center"},[e("div",{staticClass:"match"},[e("img",{attrs:{src:t.voteInfo.logo,alt:""}})]),t.voteInfo.gustTeamLogo&&""!=t.voteInfo.gustTeamLogo?e("div",{staticClass:"match match2"},[e("img",{attrs:{src:t.voteInfo.gustTeamLogo,alt:""}})]):t._e()]),e("div",{staticClass:"pop-body box box-tb box-center-center"},["equal"==t.voteInfo.matchResult?e("div",{staticClass:"vote-resule"},[t._v("竞猜平局")]):e("div",{staticClass:"vote-resule"},[t._v("投给"+t._s(t.voteInfo.teamName))]),e("div",{staticClass:"rest-times"},[t._v("还剩"+t._s(t.totalChance)+"次机会")]),e("div",{staticClass:"vote-box box box-lr box-center-center"},[e("span",[t._v("使用")]),e("div",{staticClass:"vbox"},[e("span",{staticClass:"reduce",on:{click:t.reduce}},[t._v("-")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputChance,expression:"inputChance"}],ref:"chance",staticClass:"input",attrs:{type:"text"},domProps:{value:t.inputChance},on:{blur:t.onblur,input:function(s){s.target.composing||(t.inputChance=s.target.value)}}}),e("span",{staticClass:"add",on:{click:t.add}},[t._v("+")])]),e("span",[t._v("次机会")])]),e("div",{staticClass:"add-vote",on:{click:t.addChance}},[t.showText?e("span",[t._v(t._s(t.textTip))]):t._e(),t._v(" 增加机会 查看攻略")])]),e("div",{staticClass:"pop-footer box box-lr box-center-center"},[e("div",{staticClass:"other-btn",on:{click:t.close}},[t._v("再想想")]),e("div",{staticClass:"confirm-btn",on:{click:function(s){t.confirm(t.voteInfo)}}},[t._v("确认")])])])},_=[],b=(e("xfY5"),e("f3/d"),e("Kw5r"));b["default"].component(c["Popup"].name,c["Popup"]);var g={name:"pop",components:{Toast:c["Toast"]},props:{guessMatch:Function,voteInfo:{type:Object,default:{}},className:String,closeOnClickModal:{type:Boolean,default:!1},voteResult:{type:String,default:"竞猜胜利"},totalChance:Number},data:function(){return{showText:!1,visible:!1,chance:1,inputChance:1,textTip:"机会不足"}},created:function(){},methods:{open:function(){this.visible=!0,this.chance=1,this.inputChance=1},close:function(){this.visible=!1},checkChance:function(){this.showText=!1,this.inputChance>this.totalChance||this.chance>this.totalChance?(this.showText=!0,this.textTip="机会不足"):this.showText=!1},onblur:function(){this.inputChance=this.$refs.chance.value,this.showText=!1,this.checkChance()},add:function(){this.checkChance(),this.chance++,this.chance>this.totalChance&&(this.chance=this.totalChance,this.showText=!0,this.textTip="机会不足"),this.inputChance=this.chance},reduce:function(){this.chance>1&&(this.chance--,this.inputChance=this.chance),this.checkChance()},confirm:function(t){var s=this;if(this.chance=this.inputChance,this.chance>this.totalChance)this.showText=!0;else{if(this.showText=!1,!/^[1-9]+[0-9]*]*$/.test(this.chance))return this.textTip="请输入正整数",void(this.showText=!0);if(0==this.chance)return this.textTip="竞猜次数不能为0",void(this.showText=!0);t["guessTimes"]=this.inputChance,this.$emit("guessMatch",t),setTimeout(function(){s.close()},500)}},addChance:function(){Object(l["j"])(this.$store.state.IS_APP)}}},w=g,x=(e("dsXV"),Object(d["a"])(w,C,_,!1,null,"bfcf2c38",null)),T=x.exports,G=e("tPC7"),A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"pop-box",attrs:{closeOnClickModal:!1},model:{value:t.notAccessVisible,callback:function(s){t.notAccessVisible=s},expression:"notAccessVisible"}},[e("div",{staticClass:"pop-header"},[e("div",{staticClass:"close-icon",on:{click:t.close}})]),e("div",{staticClass:"pop-body"},[e("div",{staticClass:"title box box-tb"},[t.guessResult?t._e():e("span",{staticClass:"text"},[t._v("很遗憾,你猜错了")]),t.guessResult?e("span",{staticClass:"text win-text1"},[t._v("恭喜你猜对了！")]):t._e(),t.guessResult?e("span",{staticClass:"text win-text2"},[t._v("你获得了"),e("span",[t._v(t._s(t.change(t.awardAmt)))]),t._v("元")]):t._e()]),e("div",{staticClass:"title-desc"},[e("span",{staticClass:"desc"},[t._v(t._s(t.totalGuessPerson)+"次竞猜参与，"+t._s(t.totalBingoPerson)+"答对")])]),e("div",{staticClass:"content box box-tb box-center-center"},[e("div",{class:t.isDev?"result-dev":"result-online"}),e("div",{staticClass:"text-tips"},[t._v(t._s(t.tipsText))]),e("div",{staticClass:"share",on:{click:function(s){t.jumpToShare()}}},[t.guessResult?e("button",{staticClass:"button"},[t._v("炫耀一下")]):e("button",{staticClass:"button"},[t._v("邀请好友 一起赚钱")])]),e("div",{staticClass:"guide"},[e("a",{staticClass:"href",on:{click:function(s){t.jumpToAddChance()}}},[t._v("增加机会 查看攻略")])]),e("div",{staticClass:"line"}),e("div",{staticClass:"match-title"},[e("span",{staticClass:"title"},[t._v("竞猜比赛队伍")])]),e("div",{staticClass:"match"},t._l(t.matchList,function(s,a){return e("div",{key:a,staticClass:"detail-box box box-lr"},[(s.matchResult=s.winTeamId==s.homeTeamId)?e("span",{staticClass:"detail"},[t._v(t._s(s.homeTeam.teamName)+"(W) vs "+t._s(s.gustTeam.teamName))]):(s.matchResult=s.winTeamId==s.gustTeamId)?e("span",{staticClass:"detail"},[t._v(t._s(s.homeTeam.teamName)+" vs "+t._s(s.gustTeam.teamName)+"(W)")]):e("span",{staticClass:"detail"},[t._v(t._s(s.homeTeam.teamName)+" vs "+t._s(s.gustTeam.teamName))]),e("span",{staticClass:"guess"},[t._v(t._s(s.matchDesc))])])}))]),t.guessResult?e("div",{staticClass:"bottom"},[e("span",{staticClass:"wait",on:{click:function(s){t.close()}}},[t._v("等等再说")]),e("button",{staticClass:"getMoney",on:{click:function(s){t.jumpToDownload()}}},[t._v("去提现")])]):t._e(),t.isShow?e("div",{staticClass:"tips"},[t._v("进入【我的钱包】-【奖励金】中领取")]):t._e()])])},R=[];b["default"].component(c["Popup"].name,c["Popup"]);var I={name:"pop",components:{},props:{className:String,totalBingoPerson:Number,totalGuessPerson:Number,guessResult:Boolean,isDev:Boolean,awardAmt:{type:Number,default:0},matchList:{type:Array,defaut:[]}},data:function(){return{win:!1,buttonText:"炫耀一下",isShow:!1,notAccessVisible:!0,tipsText:"截图炫耀一下"}},created:function(){this.showTips()},methods:{showTips:function(){this.guessResult?this.tipsText="截图炫耀一下":this.tipsText="截图邀请好友"},change:function(t){return Object(l["k"])(t)},open:function(){this.notAccessVisible=!0},close:function(){this.notAccessVisible=!1},jumpToShare:function(){this.$router.push({name:"worldcupShare"})},jumpToAddChance:function(){Object(l["j"])(this.$store.state.IS_APP)},jumpToDownload:function(){this.$store.state.IS_APP?this.isShow=!0:Object(l["d"])()}}},y=I,k=(e("MepK"),Object(d["a"])(y,A,R,!1,null,"57eb96b9",null)),S=k.exports,P=e("RGCu"),N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"nochance-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:function(s){t.close()}}}),e("div",{staticClass:"pop-header"},[e("div",{staticClass:"winner"},[e("div",{staticClass:"win-text"},[t._v("已经没有机会了哟~")])])]),e("div",{staticClass:"pop-body box box-tb box-center-center"},[e("div",{staticClass:"loser-img"}),e("div",{staticClass:"pop-text"},[t._v("“在贴近app的文章里、酒吧里、"),e("br"),t._v(" 广告牌里寻找"),e("span",[t._v("机会")]),t._v("吧")])]),e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn",on:{click:function(s){t.download()}}},[t._v(t._s(t.isApp?"确认":"去app使用"))]),e("div",{staticClass:"tips",on:{click:t.goTips}},[t._v("增加机会 查看攻略")])])])},O=[];b["default"].component(c["Popup"].name,c["Popup"]);var j={name:"pop",components:{},props:{newUser:{type:Boolean,default:!1},isApp:{type:Boolean,default:!1},count:Number,className:String,closeOnClickModal:{type:Boolean,default:!0}},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},download:function(){this.isApp?this.visible=!1:Object(l["d"])()},goTips:function(){Object(l["j"])()}}},L=j,E=(e("lB6r"),Object(d["a"])(L,N,O,!1,null,"7d5cb8dc",null)),B=E.exports,M=e("Qaqr"),D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"appuse-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:t.close}}),e("div",{staticClass:"pop-header"},[e("div",{staticClass:"text"},[t._v("还想参与竞猜？")])]),e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn",on:{click:t.goApp}},[t._v("进入APP使用")]),e("div",{staticClass:"tips"},[t._v("非app内只能投注一次哦")])])])},V=[];b["default"].component(c["Popup"].name,c["Popup"]);var $={name:"pop",components:{},props:{className:String,closeOnClickModal:{type:Boolean,default:!1}},data:function(){return{visible:!1}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},goApp:function(){Object(l["d"])()}}},q=$,U=(e("UtVs"),Object(d["a"])(q,D,V,!1,null,"ef720cd8",null)),F=U.exports,K={name:"index",components:{Swipe:c["Swipe"],SwipeItem:c["SwipeItem"],Rule:u["a"],Record:f,Votepop:T,Newuserpop:G["a"],Winpop:S,Getapp:P["a"],Nochancepop:B,Sharepop:M["a"],Appusepop:F},data:function(){return{showRule:!0,showRecord:!1,isApp:!1,isDev:!1}},computed:Object(n["a"])({},Object(o["d"])("activity",{grayBtn:function(t){return t.grayBtn},matchList:function(t){return t.matchList},userGuessStatistic:function(t){return t.userGuessStatistic},voteInfo:function(t){return t.voteInfo},recieveChanceInfo:function(t){return t.recieveChanceInfo},userGuessList:function(t){return t.userGuessList},userGuessResult:function(t){return t.userGuessResult}})),created:function(){this.getMatchList(),this.checkUser(),this.checkEnv(),this.getUserGuessStatistic(),this.checkGuessResult(),this.checkRecieveChance()},mounted:function(){0==this.userGuessStatistic.totalChance&&this.$refs.nochancepop.open()},methods:Object(n["a"])({},Object(o["b"])("activity",["getMatchList","setVoteInfo","getUserGuessList","guessMatch","getUserGuessStatistic","checkGuessResult","checkRecieveChance","getUserGuessList"]),{arrowRight:function(){this.$refs.swipe.next()},arrowLeft:function(){this.$refs.swipe.prev()},openVotepop:function(t,s,e,a,i,n,o,l){if(0!=this.userGuessStatistic.totalChance)if(this.userGuessStatistic.canGuess){if(!this.userGuessStatistic||0!=this.userGuessStatistic.totalChance)if(n&&"win"==n.matchResult&&("win"!=i||n.winTeamId!=a)||n&&"equal"==n.matchResult&&"equal"!=i)Object(c["Toast"])("只能竞猜已选队伍");else{var u={logo:s,matchId:e,winTeamId:a,matchResult:i};t&&(u["teamName"]=t),o&&(u["gustTeamLogo"]=o),this.setVoteInfo(u),this.$refs.votepop.open()}}else this.$refs.appusepop.open();else this.$refs.nochancepop.open()},getMonth:function(t){if(t)return t.getMonth()+1},getDate:function(t){if(t)return t.getDate()},getHours:function(t){if(t){var s=t.getHours(),e=t.getMinutes();return(s<10?"0"+s:s)+":"+(e<10?"0"+e:e)}},showRules:function(){this.showRule=!0,this.showRecord=!1},showRecords:function(){this.showRule=!1,this.getUserGuessList(),this.showRecord=!0},checkUser:function(){this.isApp=this.$store.state.IS_APP},checkEnv:function(){this.isDev=this.$store.state.IS_DEV},addChance:function(){Object(l["j"])(this.$store.state.IS_APP)},openShare:function(){this.$refs.sharepop.open()},change:function(t){return Object(l["k"])(t)}})},J=K,W=(e("CRDw"),Object(d["a"])(J,a,i,!1,null,"332be6f4",null));s["default"]=W.exports},BX7j:function(t,s,e){},CRDw:function(t,s,e){"use strict";var a=e("DVEl"),i=e.n(a);i.a},DVEl:function(t,s,e){},DVgA:function(t,s,e){var a=e("zhAb"),i=e("4R4u");t.exports=Object.keys||function(t){return a(t,i)}},FJW5:function(t,s,e){var a=e("hswa"),i=e("y3w9"),n=e("DVgA");t.exports=e("nh4g")?Object.defineProperties:function(t,s){i(t);var e,c=n(s),o=c.length,l=0;while(o>l)a.f(t,e=c[l++],s[e]);return t}},ILJ7:function(t,s,e){},Kuth:function(t,s,e){var a=e("y3w9"),i=e("FJW5"),n=e("4R4u"),c=e("YTvA")("IE_PROTO"),o=function(){},l="prototype",u=function(){var t,s=e("Iw71")("iframe"),a=n.length,i="<",c=">";s.style.display="none",e("+rLv").appendChild(s),s.src="javascript:",t=s.contentWindow.document,t.open(),t.write(i+"script"+c+"document.F=Object"+i+"/script"+c),t.close(),u=t.F;while(a--)delete u[l][n[a]];return u()};t.exports=Object.create||function(t,s){var e;return null!==t?(o[l]=a(t),e=new o,o[l]=null,e[c]=t):e=u(),void 0===s?e:i(e,s)}},KwBT:function(t,s,e){},MepK:function(t,s,e){"use strict";var a=e("BX7j"),i=e.n(a);i.a},TTmn:function(t,s,e){},UtVs:function(t,s,e){"use strict";var a=e("TTmn"),i=e.n(a);i.a},Z9j8:function(t,s,e){},Zdll:function(t,s,e){"use strict";var a=e("Z9j8"),i=e.n(a);i.a},dsXV:function(t,s,e){"use strict";var a=e("qG0q"),i=e.n(a);i.a},lB6r:function(t,s,e){"use strict";var a=e("ILJ7"),i=e.n(a);i.a},nEyH:function(t,s,e){"use strict";var a=e("0Ltp"),i=e.n(a);i.a},qG0q:function(t,s,e){},qncB:function(t,s,e){var a=e("XKFU"),i=e("vhPU"),n=e("eeVq"),c=e("/e88"),o="["+c+"]",l="​",u=RegExp("^"+o+o+"*"),r=RegExp(o+o+"*$"),p=function(t,s,e){var i={},o=n(function(){return!!c[t]()||l[t]()!=l}),u=i[t]=o?s(h):c[t];e&&(i[e]=u),a(a.P+a.F*o,"String",i)},h=p.trim=function(t,s){return t=String(i(t)),1&s&&(t=t.replace(u,"")),2&s&&(t=t.replace(r,"")),t};t.exports=p},tPC7:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("mt-popup",{staticClass:"newuser-pop",attrs:{closeOnClickModal:t.closeOnClickModal},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[e("div",{staticClass:"close-icon",on:{click:function(s){t.close()}}}),e("div",{staticClass:"pop-header"},[t.status?e("div",{staticClass:"winner"},[e("div",{staticClass:"win-text"},[t._v("恭喜您！")]),e("div",{staticClass:"win-btn"},[t._v("获得"+t._s(t.count)+"次竞猜机会")])]):t._e(),t.status?t._e():e("div",{staticClass:"loser"},[e("div",{staticClass:"loser-text"},[t._v("很遗憾"),e("br"),t._v(" 已经领取过了哟～")])])]),e("div",{staticClass:"pop-body box box-tb box-center-center"},[t.status?e("div",{staticClass:"win-img"}):e("div",{staticClass:"loser-img"}),t.presentAvailable?e("div",{staticClass:"decs"},[t._v("“是时候展示真正的技术了！”")]):e("div",{staticClass:"decs"},[t._v("“去APP找一找会有更多机会”")]),t.presentAvailable?e("div",{staticClass:"app-text"},[t._v("还有"),e("span",[t._v("10")]),t._v("元新人大礼哟~")]):t._e(),t.presentAvailable?e("div",{staticClass:"app-desc"},[t._v("进入【我的钱包】-【奖励金】中领取")]):t._e()]),t.isApp?t._e():e("div",{staticClass:"pop-footer"},[e("div",{staticClass:"confirm-btn",on:{click:function(s){t.download()}}},[t._v("下载APP 机会翻倍")])])])},i=[],n=(e("xfY5"),e("f3/d"),e("Kw5r")),c=e("dqDD"),o=e("+n12");n["default"].component(c["Popup"].name,c["Popup"]);var l={name:"pop",components:{},props:{status:{type:Boolean},isApp:{type:Boolean},count:Number,className:String,closeOnClickModal:{type:Boolean,default:!0},presentAvailable:Boolean},data:function(){return{visible:!0}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},download:function(){Object(o["d"])()}}},u=l,r=(e("xEQu"),e("KHd+")),p=Object(r["a"])(u,a,i,!1,null,"7b344f88",null);s["a"]=p.exports},xEQu:function(t,s,e){"use strict";var a=e("KwBT"),i=e.n(a);i.a},xfY5:function(t,s,e){"use strict";var a=e("dyZX"),i=e("aagx"),n=e("LZWt"),c=e("Xbzi"),o=e("apmT"),l=e("eeVq"),u=e("kJMx").f,r=e("EemH").f,p=e("hswa").f,h=e("qncB").trim,v="Number",d=a[v],m=d,f=d.prototype,C=n(e("Kuth")(f))==v,_="trim"in String.prototype,b=function(t){var s=o(t,!1);if("string"==typeof s&&s.length>2){s=_?s.trim():h(s,3);var e,a,i,n=s.charCodeAt(0);if(43===n||45===n){if(e=s.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(s.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+s}for(var c,l=s.slice(2),u=0,r=l.length;u<r;u++)if(c=l.charCodeAt(u),c<48||c>i)return NaN;return parseInt(l,a)}}return+s};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var s=arguments.length<1?0:t,e=this;return e instanceof d&&(C?l(function(){f.valueOf.call(e)}):n(e)!=v)?c(new m(b(s)),e,d):b(s)};for(var g,w=e("nh4g")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)i(m,g=w[x])&&!i(d,g)&&p(d,g,r(m,g));d.prototype=f,f.constructor=d,e("KroJ")(a,v,d)}}}]);
//# sourceMappingURL=14.d60b1ed2.js.map