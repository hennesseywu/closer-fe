(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"9rgr":function(e,t,a){"use strict";var n=a("FQ4Q"),s=a.n(n);s.a},FQ4Q:function(e,t,a){},LOby:function(e,t,a){"use strict";var n=a("jg29"),s=a.n(n);s.a},OHX4:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.V_1_2_3?a("header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"common back",style:{display:e.back?"block":"none"},on:{click:function(t){e.handleBack()}}}),a("div",{staticClass:"common close",style:{display:e.close?"block":"none"},on:{click:function(t){e.handleClose()}}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"common share",style:{display:e.share?"block":"none"},on:{click:function(t){e.handleShare()}}})])]):e._e()},s=[],i=a("yT7P"),r=a("L2JU"),c={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(i["a"])({},Object(r["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){e&&e.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(e){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},l=c,o=(a("LOby"),a("KHd+")),u=Object(o["a"])(l,n,s,!1,null,null,null);t["a"]=u.exports},ZO67:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main rank"},[e.IS_APP?a("local-header",{attrs:{back:""}}):e._e(),a("section",{staticClass:"bd"},[a("div",{staticClass:"bd-name"},[e._v("排行榜")]),a("div",{staticClass:"bd-mine"},[a("div",{staticClass:"bd-item bd-item-mine"},[a("div",{staticClass:"user-rank"},[e._v(e._s(e.selfRank.rank))]),a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-img",attrs:{src:e.makeFileUrl(e.selfRank.user.avatar)}}),a("div",{staticClass:"user-name",domProps:{innerHTML:e._s(e.selfRank.user.fullname)}})]),a("div",{staticClass:"user-score"},[e._v(e._s(e.selfRank.maxScore)+"分")])])]),a("div",{staticClass:"bd-friends"},e._l(e.rankList,function(t,n){return a("div",{key:t.rank,staticClass:"bd-item animated fadeInUp faster",class:t.rank<4?"bd-item-"+t.rank:"",style:{"animation-delay":n%10*5+"0ms"}},[a("div",{staticClass:"user-rank"},[e._v(e._s(t.rank))]),a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-img",attrs:{src:e.makeFileUrl(t.user.avatar)}}),a("div",{staticClass:"user-name",domProps:{innerHTML:e._s(t.user.fullname)}})]),a("div",{staticClass:"user-score"},[e._v(e._s(t.maxScore)+"分")])])}))])],1)},s=[],i=(a("pIFo"),a("f3/d"),a("yT7P")),r=(a("Kw5r"),a("QctN")),c=a("L2JU"),l=a("+n12"),o=a("OHX4"),u={name:"rule",data:function(){return{}},components:{localHeader:o["a"]},computed:Object(i["a"])({},Object(c["d"])(["IS_APP"]),Object(c["d"])("local",{selfRank:function(e){return e.rank.selfRank},rankList:function(e){return e.rank.rankList}})),beforeRouteEnter:function(e,t,a){"localIndex"!=t.name?r["a"].replace({name:"localIndex"}):a()},methods:Object(i["a"])({},Object(c["b"])("local",["getRankList"]),{makeFileUrl:function(e){return Object(l["i"])(e)}}),mounted:function(){this.getRankList()}},d=u,f=(a("9rgr"),a("KHd+")),m=Object(f["a"])(d,n,s,!1,null,null,null);t["default"]=m.exports},jg29:function(e,t,a){},yT7P:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a("oyJW");function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){Object(n["a"])(e,t,a[t])})}return e}}}]);
//# sourceMappingURL=4.fdbb85f9.js.map