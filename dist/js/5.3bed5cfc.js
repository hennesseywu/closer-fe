(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"/8Yi":function(e,t,a){},"4tBU":function(e,t,a){"use strict";var s=a("/8Yi"),i=a.n(s);i.a},LOby:function(e,t,a){"use strict";var s=a("jg29"),i=a.n(s);i.a},OHX4:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.V_1_2_3?a("header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"common back",style:{display:e.back?"block":"none"},on:{click:function(t){e.handleBack()}}}),a("div",{staticClass:"common close",style:{display:e.close?"block":"none"},on:{click:function(t){e.handleClose()}}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"common share",style:{display:e.share?"block":"none"},on:{click:function(t){e.handleShare()}}})])]):e._e()},i=[],n=a("yT7P"),o=a("L2JU"),r={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(n["a"])({},Object(o["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){e&&e.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(e){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},c=r,l=(a("LOby"),a("KHd+")),d=Object(l["a"])(c,s,i,!1,null,null,null);t["a"]=d.exports},jg29:function(e,t,a){},y8bz:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main local-share",class:{"in-app":e.IS_APP}},[e.IS_APP?a("local-header",{attrs:{back:"",home:""}}):e._e(),a("div",{staticClass:"share-wrapper"},[a("div",{staticClass:"share-container"},[a("div",{ref:"canvasContainer",staticClass:"share-box"},[e.answerId?a("div",{staticClass:"share-score"},[a("div",{class:"share-user-img "+e.levelData.logo},[a("img",{staticClass:"share-user-avatar",attrs:{src:e.makeFileUrl(e.user.avatar),crossOrigin:"Anonymous"}})]),a("div",{staticClass:"share-user-name"},[e._v(e._s(e.user.fullname))]),a("div",{staticClass:"share-desc"},[e._v("\n            在【谁是成都最土著】中获得\n            "),a("span",{staticClass:"share-desc-score"},[e._v(e._s(e.score))]),e._v("\n            分，"),a("br"),a("span",{staticClass:"share-desc-tip"},[e._v(e._s(e.levelData.tip))])]),e._m(0),a("div",{class:"share-tag "+e.levelData.tag}),a("div",{staticClass:"share-qrcode"},[a("qrcode-vue",{attrs:{value:e.qrcode.val,size:e.qrcode.size}})],1),a("div",{staticClass:"share-tip"},[e._v("扫描二维码参与游戏，和他PK吧！")])]):a("div",{staticClass:"share-default"},[a("div",{staticClass:"share-qrcode"},[a("qrcode-vue",{attrs:{value:e.qrcode.val,size:e.qrcode.size}})],1)])])]),e.IS_APP?a("div",{staticClass:"share-items box box-lr box-center-center"},[a("div",{staticClass:"item item1 box box-tb box-center-center",on:{click:function(t){e.toShare("inviteNewGuyActionWeChat",e.shareData)}}},[a("span",{staticClass:"weixin"}),a("span",[e._v("好友")])]),a("div",{staticClass:"item item2 box box-tb box-center-center",on:{click:function(t){e.toShare("inviteNewGuyActionWxTimeLine",e.shareData)}}},[a("span",{staticClass:"pyq"}),a("span",[e._v("朋友圈")])]),a("div",{staticClass:"item item3 box box-tb box-center-center",on:{click:function(t){e.toShare("inviteNewGuyActionSavePicture",e.shareData)}}},[a("span",{staticClass:"download"}),a("span",[e._v("保存至相册")])])]):e._e()])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"share-title box box-lr box-center-center"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"name"},[e._v("获得称号")]),a("div",{staticClass:"line right"})])}],n=a("yT7P"),o=a("dqDD"),r=a("L2JU"),c=a("OHX4"),l=a("+n12"),d=a("17CV"),u=(a("lR8Q"),{data:function(){return{isApp:this.$store.state.IS_APP,isLogin:!1,qrcode:{val:"http://local.tiejin.cn:8889/local/share",size:80},showData:[{logo:"user-img-1",tip:"赢得5元红包！",tag:"share-tag-1"},{logo:"user-img-2",tip:"赢得2元现金红包，全答对可得5元哦！",tag:"share-tag-2"},{logo:"user-img-3",tip:"和5元现金红包失之交臂，你要来试试吗？",tag:"share-tag-3"}],imgUrl:""}},components:{localHeader:c["a"],QrcodeVue:d["a"]},created:function(){console.log("isAPP",this.isApp),this.IS_WX&&(console.log("share wxshare--"),this.initWxConfig()),this.IS_DEV?this.qrcode.val="https://a-sandbox.tiejin.cn/local?activityId="+this.activityId+"&inviter="+this.user.objectID:this.qrcode.val="https://a.tiejin.cn/local?activityId="+this.activityId+"&inviter="+this.user.objectID},computed:Object(n["a"])({},Object(r["d"])(["IS_DEV","IS_APP","IS_WX"]),Object(r["d"])("local",{user:function(e){return e.user},answerId:function(e){return e.endData.userAnswerId},shareData:function(e){return e.shareData},level:function(e){return e.endData.level},score:function(e){return e.endData.score}}),{levelData:function(){return this.showData[parseInt(this.level)-1]}}),mounted:function(){console.log("answerId:",this.answerId),setTimeout(this.drawHtmlToCanvas,0)},methods:Object(n["a"])({},Object(r["b"])("local",["wechatConfig","userShare","checkLoginInApp","initWxConfig"]),{toShare:function(e){var t=this.$store.state.UA,a=this.imgUrl;if(console.log("share--",e,a,t),t.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){console.log("toShare ios bridge",t),t&&t.callHandler("inviteNewerAction",{type:e,img:a},function(e,t){})});else if(t.indexOf("closer-android")>-1&&(console.log("toShare android bridge",bridge),"undefined"!=typeof window.bridge))try{window.bridge.inviteNewerAction(JSON.stringify({type:e,img:a}))}catch(e){Object(o["Toast"])("请升级最新版本客户端")}},makeFileUrl:function(e){var t=Object(l["i"])(e);return console.log("result:avatar:",t),t},drawHtmlToCanvas:function(){var e=this,t=e.$refs.canvasContainer;console.log("drawHtmlToCanvas"),console.log(e.$refs),Object(l["f"])(t).then(function(a){a.setAttribute("class","qr-img"),a.setAttribute("crossOrigin","Anonymous"),t.appendChild(a),e.IS_APP&&Object(l["l"])(a).then(function(t){e.imgUrl=t.result.url})})}})}),h=u,v=(a("4tBU"),a("KHd+")),f=Object(v["a"])(h,s,i,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=5.3bed5cfc.js.map