(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"/8Yi":function(t,e,i){},"4tBU":function(t,e,i){"use strict";var a=i("/8Yi"),s=i.n(a);s.a},LOby:function(t,e,i){"use strict";var a=i("jg29"),s=i.n(a);s.a},OHX4:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.V_1_2_3?i("header",{staticClass:"header"},[i("div",{staticClass:"left"},[i("div",{staticClass:"common back",style:{display:t.back?"block":"none"},on:{click:function(e){t.handleBack()}}}),i("div",{staticClass:"common close",style:{display:t.close?"block":"none"},on:{click:function(e){t.handleClose()}}})]),i("div",{staticClass:"right"},[i("div",{staticClass:"common share",style:{display:t.share?"block":"none"},on:{click:function(e){t.handleShare()}}})])]):t._e()},s=[],n=i("yT7P"),o=i("L2JU"),c={name:"tjHeader",data:function(){return{}},props:{back:Boolean,close:Boolean,share:Boolean},computed:Object(n["a"])({},Object(o["d"])(["UA","V_1_2_3"])),methods:{handleBack:function(){this.home?this.$router.push({name:"localIndex"}):this.$router.back()},handleClose:function(){if(this.UA.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(t){t&&t.callHandler("exitPage")});else if(this.UA.indexOf("closer-android")>-1&&"undefined"!=typeof window.bridge)try{window.bridge.exitPage()}catch(t){Toast("请升级最新版本客户端")}},handleShare:function(){this.$router.push({name:"localShare"})}}},r=c,l=(i("LOby"),i("KHd+")),d=Object(l["a"])(r,a,s,!1,null,null,null);e["a"]=d.exports},jg29:function(t,e,i){},y8bz:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main local-share",class:{"in-app":t.IS_APP}},[t.IS_APP?i("local-header",{attrs:{back:"",home:""}}):t._e(),i("div",{staticClass:"share-wrapper"},[i("div",{staticClass:"share-container"},[i("div",{ref:"canvasContainer",staticClass:"share-box"},[t.answerId?i("div",{staticClass:"share-score"},[i("div",{staticClass:"share-tip"},[t._v("扫描二维码参与游戏，和他PK吧！")])]):i("div",{staticClass:"share-default"},[i("div",{staticClass:"share-qrcode"},[i("qrcode-vue",{attrs:{value:t.qrcode.val,size:t.qrcode.size}})],1)])])]),t.IS_APP?i("div",{staticClass:"share-items box box-lr box-center-center"},[i("div",{staticClass:"item item1 box box-tb box-center-center",on:{click:function(e){t.toShare("inviteNewGuyActionWeChat",t.shareData)}}},[i("span",{staticClass:"weixin"}),i("span",[t._v("好友")])]),i("div",{staticClass:"item item2 box box-tb box-center-center",on:{click:function(e){t.toShare("inviteNewGuyActionWxTimeLine",t.shareData)}}},[i("span",{staticClass:"pyq"}),i("span",[t._v("朋友圈")])]),i("div",{staticClass:"item item3 box box-tb box-center-center",on:{click:function(e){t.toShare("inviteNewGuyActionSavePicture",t.shareData)}}},[i("span",{staticClass:"download"}),i("span",[t._v("保存至相册")])])]):t._e()])],1)},s=[],n=i("yT7P"),o=(i("VRzm"),i("dqDD")),c=i("L2JU"),r=i("OHX4"),l=i("+n12"),d=i("17CV"),u={data:function(){return{isApp:this.$store.state.IS_APP,isLogin:!1,qrcode:{val:"https://a.tiejin.cn/local",size:80},showData:[{logo:"user-img-1",tip:"赢得5元红包！",tag:"share-tag-1"},{logo:"user-img-2",tip:"赢得2元现金红包，全答对可得5元哦！",tag:"share-tag-2"},{logo:"user-img-3",tip:"和5元现金红包失之交臂，你要来试试吗？",tag:"share-tag-3"}],imgUrl:""}},components:{localHeader:r["a"],QrcodeVue:d["a"]},created:function(){console.log("isAPP",this.isApp),this.IS_WX&&(console.log("share wxshare--"),this.initWxConfig()),this.IS_DEV?this.qrcode.val="https://a-sandbox.tiejin.cn/local?activityId="+this.activityId+"&inviter="+this.objectID+"&salt="+this.salt:this.qrcode.val="https://a.tiejin.cn/local?activityId="+this.activityId+"&inviter="+this.objectID+"&salt="+this.salt},computed:Object(n["a"])({},Object(c["d"])(["IS_DEV","IS_APP","IS_WX"]),Object(c["d"])("local",{objectID:function(t){return t.user.objectID||""},salt:function(t){return t.statistic.signSalt},activityId:function(t){return t.activityId},user:function(t){return t.user},answerId:function(t){return t.endData.userAnswerId},shareData:function(t){return t.shareData},level:function(t){return t.endData.level},score:function(t){return t.endData.score}}),{levelData:function(){return this.showData[parseInt(this.level)-1]}}),mounted:function(){console.log("answerId:",this.answerId),setTimeout(this.drawHtmlToCanvas,500)},methods:Object(n["a"])({},Object(c["b"])("local",["wechatConfig","userShare","checkLoginInApp","initWxConfig"]),{toShare:function(t){var e=this.$store.state.UA,i=this.imgUrl;if(console.log("share--",t,i,e),e.indexOf("closer-ios")>-1)setupWebViewJavascriptBridge(function(e){console.log("toShare ios bridge",e),e&&e.callHandler("inviteNewerAction",{type:t,img:i},function(t,e){})});else if(e.indexOf("closer-android")>-1&&(console.log("toShare android bridge",bridge),"undefined"!=typeof window.bridge))try{window.bridge.inviteNewerAction(JSON.stringify({type:t,img:i}))}catch(t){Object(o["Toast"])("请升级最新版本客户端")}},makeFileUrl:function(t){var e=Object(l["i"])(t);return e},drawHtmlToCanvas:function(){var t=this,e=t.$refs.canvasContainer;Object(l["f"])(e).then(function(i){i.setAttribute("class","qr-img"),i.setAttribute("crossOrigin","Anonymous"),console.log("html2Image-finish:",i),e.appendChild(i),t.IS_APP&&Object(l["l"])(i).then(function(e){var i=e.data;t.imgUrl=t.makeFileUrl(i.result.url)})})}})},h=u,f=(i("4tBU"),i("KHd+")),v=Object(f["a"])(h,a,s,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=5.d3dbe803.js.map