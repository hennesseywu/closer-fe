(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{LOby:function(e,t,n){"use strict";var a=n("jg29"),i=n.n(a);i.a},OHX4:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"left"},[n("div",{staticClass:"common back",style:{display:e.back?"block":"none"},on:{click:function(t){e.handleBack()}}}),n("div",{staticClass:"common close",style:{display:e.close?"block":"none"},on:{click:function(t){e.handleClose()}}})]),n("div",{staticClass:"right"},[n("div",{staticClass:"common share",style:{display:e.share?"block":"none"},on:{click:function(t){e.handleShare()}}})])])},i=[],s=n("yT7P"),c=n("L2JU"),o={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(s["a"])({},Object(c["d"])(["UA"])),methods:{handleBack:function(){this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){e&&e.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(e){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},r=o,l=(n("LOby"),n("KHd+")),d=Object(l["a"])(r,a,i,!1,null,null,null);t["a"]=d.exports},Wt9q:function(e,t,n){"use strict";var a=n("h1sq"),i=n.n(a);i.a},h1sq:function(e,t,n){},jg29:function(e,t,n){},y8bz:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main local-share",class:{"in-app":e.IS_APP}},[e.IS_APP?n("local-header",{attrs:{back:""}}):e._e(),n("div",{staticClass:"share-wrapper"},[e.isApp?n("div",{staticClass:"is-app"},[n("div",{staticClass:"share-img"},[n("img",{attrs:{src:e.shareData}})]),n("div",{staticClass:"share-items box box-lr box-center-center"},[n("div",{staticClass:"item item1 box box-tb box-center-center",on:{click:function(t){e.toShare("inviteNewGuyActionWeChat",e.shareData)}}},[n("span",{staticClass:"weixin"}),n("span",[e._v("好友")])]),n("div",{staticClass:"item item2 box box-tb box-center-center",on:{click:function(t){e.toShare("inviteNewGuyActionWxTimeLine",e.shareData)}}},[n("span",{staticClass:"pyq"}),n("span",[e._v("朋友圈")])]),n("div",{staticClass:"item item3 box box-tb box-center-center",on:{click:function(t){e.toShare("inviteNewGuyActionSavePicture",e.shareData)}}},[n("span",{staticClass:"download"}),n("span",[e._v("保存至相册")])])])]):n("div",{staticClass:"is-weixin"},[n("img",{attrs:{src:e.shareData}})])])],1)},i=[],s=(n("ls82"),n("MECJ")),c=n("yT7P"),o=(n("VRzm"),n("dqDD")),r=n("L2JU"),l=n("OHX4"),d={data:function(){return{isApp:this.$store.state.IS_APP,isLogin:!1}},components:{localHeader:l["a"]},created:function(){console.log("isAPP",this.isApp),this.userShare()},computed:Object(c["a"])({},Object(r["d"])(["IS_APP"]),Object(r["d"])("local",{shareData:function(e){return e.shareData}})),mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:Object(c["a"])({},Object(r["b"])("local",["wechatConfig","userShare","checkLoginInApp"]),{toShare:function(e,t){var n=this.$store.state.UA;if(console.log("share--",e,t,n),n.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(n){console.log("toShare ios bridge",n),n&&n.callHandler("inviteNewerAction",{type:e,img:t},function(e,t){})});else if(n.indexOf("closer-android")>-1&&(console.log("toShare android bridge",bridge),"undefined"!=typeof window.bridge))try{window.bridge.inviteNewerAction(JSON.stringify({type:e,img:t}))}catch(e){Object(o["Toast"])("请升级最新版本客户端")}}})},u=d,h=(n("Wt9q"),n("KHd+")),f=Object(h["a"])(u,a,i,!1,null,"c0f84d70",null);t["default"]=f.exports},yT7P:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("oyJW");function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){Object(a["a"])(e,t,n[t])})}return e}}}]);
//# sourceMappingURL=4.4a643fcc.js.map