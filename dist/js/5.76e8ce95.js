(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"/8Yi":function(t,e,a){},"4tBU":function(t,e,a){"use strict";var s=a("/8Yi"),i=a.n(s);i.a},LOby:function(t,e,a){"use strict";var s=a("jg29"),i=a.n(s);i.a},OHX4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.V_1_2_3?a("header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(e){t.handleBack()}}}),a("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(e){t.handleClose()}}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(e){t.handleShare()}}})])]):t._e()},i=[],n=a("yT7P"),c=a("L2JU"),r={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(n["a"])({},Object(c["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},o=r,l=(a("LOby"),a("KHd+")),d=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=d.exports},jg29:function(t,e,a){},y8bz:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main local-share",class:{"in-app":t.IS_APP}},[t.IS_APP?a("local-header",{attrs:{back:"",home:""}}):t._e(),a("div",{staticClass:"share-wrapper"},[a("div",{staticClass:"share-container"},[a("div",{ref:"canvasContainer",staticClass:"share-box"},[t.answerId?a("div",{staticClass:"share-score"},[a("div",{staticClass:"share-user-img"},[a("img",{staticClass:"share-user-avatar",attrs:{src:t.makeFileUrl(t.user.avatar),crossOrigin:"Anonymous"}}),a("div",{class:"share-user-filter "+t.levelData.logo})]),a("div",{staticClass:"share-user-name"},[t._v(t._s(t.user.fullname))]),a("div",{staticClass:"share-desc"},[t._v("\n            在【谁是成都最土著】中获得\n            "),a("span",{staticClass:"share-desc-score"},[t._v(" "+t._s(t.score))]),t._v(" 分，\n            "),a("br"),a("span",{staticClass:"share-desc-tip"},[t._v(t._s(t.levelData.tip))])]),t._m(0),a("div",{class:"share-tag "+t.levelData.tag}),a("div",{staticClass:"share-qrcode"},[a("qrcode-vue",{attrs:{value:t.qrcode.val,size:t.qrcode.size}})],1),a("div",{staticClass:"share-tip"},[t._v("长按识别二维码参与游戏，和他Pk吧")])]):a("div",{staticClass:"share-default"},[a("div",{staticClass:"share-qrcode"},[a("qrcode-vue",{attrs:{value:t.qrcode.val,size:t.qrcode.size}})],1)]),a("img",{staticClass:"share-img",attrs:{id:"share-img",src:""}})])]),t.IS_APP?a("div",{staticClass:"share-items box box-lr box-center-center"},[a("div",{staticClass:"item item1 box box-tb box-center-center",on:{click:function(e){t.toShare("inviteNewGuyActionWeChat",t.shareData)}}},[a("span",{staticClass:"weixin"}),a("span",[t._v("好友")])]),a("div",{staticClass:"item item2 box box-tb box-center-center",on:{click:function(e){t.toShare("inviteNewGuyActionWxTimeLine",t.shareData)}}},[a("span",{staticClass:"pyq"}),a("span",[t._v("朋友圈")])]),a("div",{staticClass:"item item3 box box-tb box-center-center",on:{click:function(e){t.toShare("inviteNewGuyActionSavePicture",t.shareData)}}},[a("span",{staticClass:"download"}),a("span",[t._v("保存至相册")])])]):t._e()])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share-title box box-lr box-center-center"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"name"},[t._v("获得称号")]),a("div",{staticClass:"line right"})])}],n=a("yT7P"),c=(a("VRzm"),a("dqDD")),r=a("L2JU"),o=a("OHX4"),l=a("+n12"),d=a("17CV"),u={data:function(){return{isApp:this.$store.state.IS_APP,isLogin:!1,qrcode:{val:"https://a.tiejin.cn/local",size:80},showData:[{logo:"user-img-1",tip:"赢得5元红包！",tag:"share-tag-1"},{logo:"user-img-2",tip:"赢得2元现金红包，全答对可得5元哦！",tag:"share-tag-2"},{logo:"user-img-3",tip:"和5元现金红包失之交臂，你要来试试吗？",tag:"share-tag-3"}],imgUrl:""}},components:{localHeader:o["a"],QrcodeVue:d["a"]},created:function(){console.log("isAPP",this.isApp),this.IS_WX&&(console.log("share wxshare--"),this.initWxConfig()),this.IS_DEV?this.qrcode.val="https://a-sandbox.tiejin.cn/local?activityId="+this.activityId+"&inviter="+this.objectID+"&salt="+this.salt:this.qrcode.val="https://a.tiejin.cn/local?activityId="+this.activityId+"&inviter="+this.objectID+"&salt="+this.salt},computed:Object(n["a"])({},Object(r["d"])(["IS_DEV","IS_APP","IS_WX"]),Object(r["d"])("local",{objectID:function(t){return t.user.objectID||""},salt:function(t){return t.statistic.signSalt},activityId:function(t){return t.activityId},user:function(t){return t.user},answerId:function(t){return t.endData.userAnswerId},shareData:function(t){return t.shareData},level:function(t){return t.endData.level},score:function(t){return t.endData.score}}),{levelData:function(){return this.showData[parseInt(this.level)-1]}}),mounted:function(){console.log("answerId:",this.answerId),setTimeout(this.drawHtmlToCanvas,100)},methods:Object(n["a"])({},Object(r["b"])("local",["wechatConfig","userShare","checkLoginInApp","initWxConfig"]),{toShare:function(t){var e=this.$store.state.UA,a=this.imgUrl;if(console.log("share--",t,a,e),e.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){console.log("toShare ios bridge",e),e&&e.callHandler("inviteNewerAction",{type:t,img:a},function(t,e){})});else if(e.indexOf("closer-android")>-1&&(console.log("toShare android bridge",bridge),"undefined"!=typeof window.bridge))try{window.bridge.inviteNewerAction(JSON.stringify({type:t,img:a}))}catch(t){Object(c["Toast"])("请升级最新版本客户端")}},makeFileUrl:function(t){var e=Object(l["i"])(t);return e},drawHtmlToCanvas:function(){var t=this,e=t.$refs.canvasContainer;Object(l["f"])(e).then(function(e){document.getElementById("share-img").src=e.src,console.log("html2Image-finish"),t.IS_APP&&Object(l["l"])(e).then(function(e){var a=e.data;t.imgUrl=t.makeFileUrl(a.result.url)})})}})},h=u,v=(a("4tBU"),a("KHd+")),f=Object(v["a"])(h,s,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=5.76e8ce95.js.map