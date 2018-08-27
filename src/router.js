import Vue from 'vue';
import Router from 'vue-router';
import api from './utils/api';
import { Toast } from 'mint-ui';
import { isApp, isWechat } from './utils/utils';
import Store from './store'


const Index = () =>
    import ('@/pages/worldcup/index')
const Activity = () =>
    import ('@/pages/worldcup/activity')

const Share = () =>
    import ('@/pages/worldcup/share')

// landing 页
const Landing = () =>
    import ('@/pages/landing/index')

// teabar activity页 
const Tblogin = () =>
    import ('@/pages/teabar/index')

const ActivityOver = () =>
    import ('@/pages/over/index')

const PullNewIndex = () =>
    import ('@/pages/pullnew/index')


const PullNewRule = () =>
    import ('@/pages/pullnew/rule')

    // 成都土著活动
const LocalIndex = () =>
    import ('@/pages/local/index')

const LocalAnswer = () =>
    import ('@/pages/local/answer')

const LocalResult = () =>
    import ('@/pages/local/result')

const LocalShare = () =>
    import ('@/pages/local/share')
// 土著活动规则
const LocalRule = () =>
    import ('@/pages/local/rule')
// 土著活动排行榜
const LocalRank = () =>
    import ('@/pages/local/rank')

Vue.use(Router)

const router = new Router({

    mode: 'history',
    routes: [{
            path: '/worldcup/activity',
            name: 'worldcupActivity',
            component: Activity,
            meta: {
                title: '贴近世界杯 瓜分600万'
            }
        }, {
            path: '/worldcup/:channelCode',
            name: 'worldcupIndex',
            component: Index,
            meta: {
                title: '领取机会'
            }
        },
        {
            path: '/worldcup/share/',
            name: 'worldcupShare',
            component: Share,
            meta: {
                title: '贴近世界杯 瓜分600万'
            }
        },
        {
            path: '/landing',
            name: 'landing',
            component: Landing,
            meta: {
                title: '贴近Closer'
            }
        },
        {
            path: '/teabar/:channelCode',
            name: 'tblogin',
            component: Tblogin,
            meta: {
                title: '贴近Closer'
            }
        }, {
            path: '/over',
            name: 'activityOver',
            component: ActivityOver,
            meta: {
                title: '贴近Closer'
            }
        }, {
            path: '/pullnew',
            name: 'pullNew',
            component: PullNewIndex,
            meta: {
                title: '邀好友，赚现金'
            }
        }, {
            path: '/pullNew/rule',
            name: 'pullNewRule',
            component: PullNewRule,
            meta: {
                title: '邀好友，赚现金'
            }
        }, {
            path: '/local',
            name: 'localIndex',
            component: LocalIndex,
            meta: {
                title: '谁是成都最土著'
            }
        }, {
            path: '/local/answer',
            name: 'localAnswer',
            component: LocalAnswer,
            meta: {
                title: '谁是成都最土著'
            }
        }, {
            path: '/local/result',
            name: 'localResult',
            component: LocalResult,
            meta: {
                title: '谁是成都最土著'
            }
        }, {
            path: '/local/share',
            name: 'localShare',
            component: LocalShare,
            meta: {
                title: '分享'
            }
        }, {
            path: '/local/rule',
            name: 'localRule',
            component: LocalRule,
            meta: {
                title: '活动规则'
            }
        }, {
            path: '/local/rank',
            name: 'localRank',
            component: LocalRank,
            meta: {
                title: '排行榜'
            }
        }
    ]

})
router.beforeEach(({
    meta,
    path,
    query,
    name,
    params
}, from, next) => {
    document.title = meta.title ? meta.title : '贴近'

    if (isWechat()) {
        let params = {
            url: location.href
          };
          let {
            data
          } = axios.post(api.admin.wechat_config, params).catch(err => {
            Toast('网络开小差啦，请稍后再试')
            return;
          }).then((data) => {
            if (typeof (data.code) != "undefined" && data.code == 0) {
                wxConfig = data.result;
              } else {
                return;
              }
            console.log('wxConfig', wxConfig)
            if (wxConfig && wxConfig.signature && wxConfig.appId && wxConfig.nonceStr && wxConfig.timestamp) {
              wx.config({
                "debug": Store.state.IS_DEV, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                "signature": wxConfig.signature,
                "appId": wxConfig.appId,
                "nonceStr": wxConfig.nonceStr,
                "timestamp": wxConfig.timestamp,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
              });
              wx.ready(function() {
                console.log("ready")
                // 分享朋友
                wx.onMenuShareAppMessage({
                  title: '是成都人就来瓜分百万大奖', // 分享标题
                  desc: '参与成都人纯度测试，纯度越高，奖金越多！', // 分享描述
                  link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: '', // 分享图标
                  type: '', // 分享类型,music、video或link，不填默认为link
                  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                  success: function() {
                    // 用户点击了分享后执行的回调函数
                  }
                })
      
                // 分享朋友圈
                wx.onMenuShareTimeline({
                  title: '是成都人就来瓜分百万大奖', // 分享标题
                  link: 'location.href', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: '', // 分享图标
                  success: function() {
                    // 用户点击了分享后执行的回调函数
                  }
                })
                // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
              })
              wx.error(function(res) {
                console.log("error", res)
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
              });
            }
          }) 
      }

    if (name == "worldcupIndex") {
        axios.post(api.activity.get_activity).then(({ data }) => {
            if (typeof(data.code) != "undefined" && data.code == 0) {
                if (data.result.enabled) {
                    router.push({
                        name: "activityOver"
                    });
                }
            } else {
                doIndexAction();
            }
        }).catch(err => {
            doIndexAction();
        })

        function doIndexAction() {
            Cookies.set("aid", "0", {
                expires: 30
            })
            if (params.channelCode && params.channelCode != "0") {
                Cookies.set("aid", params.channelCode, {
                    expires: 30
                });
            }
            if (ua.indexOf("closer-android") > -1) {
                //安卓检查登录状态
                if (typeof window.bridge != "undefined") {
                    let token = window.bridge.getUserToken(null);
                    //console.log("android", token)
                    if (token) {
                        Cookies.set("GroukAuth", token, {
                            expires: 30
                        });
                        router.push({
                            name: "worldcupActivity"
                        });
                    } else {
                        window.bridge.jumpLogin(null);
                    }
                }
                next();
            } else if (ua.indexOf("closer-ios") > -1) {
                setupWebViewJavascriptBridge(function(bridge) {
                    if (bridge) {
                        //ios获取用户token 判断登录
                        bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                            console.log("ios token", token)
                            if (token) {
                                Cookies.set("GroukAuth", token, {
                                    expires: 30
                                });
                                router.push({
                                    name: "worldcupActivity"
                                });
                            } else {
                                //console.log("ios jumpLogin")
                                setupWebViewJavascriptBridge(function(bridge) {
                                    bridge.callHandler("jumpLogin", null);
                                });
                            }
                        });
                    }
                })
                next();
            } else {
                if (Cookies.get("GroukAuth")) {
                    //console.log("已登录，直接进活动首页") //1.d64db76d966f377795a7940e06c6283889b3e3fa3b58f3796260a32c7f4377bc
                    if (params && params.channelCode) {
                        Cookies.set("aid", params.channelCode, {
                            expires: 30
                        });
                    }
                    router.push({
                        name: "worldcupActivity"
                    });
                    next();
                } else {
                    next();
                }
            }
        }

    } else if (name == "tblogin" || name == 'localIndex') {
        if (isApp()) {
            console.log("closer device")
            Cookies.remove('user'); //app端user完全依赖APP
            next();
        } else if (isWechat()) {
            if (query.code) {
                next();
                return;
            }
            let params = {
                path: api.wxLoginUrl
            };
            if (Cookies.get("IS_DEV")) {
                params.path = api.wxLoginDevUrl+path
            }
            axios.post(api.admin.get_auth_path, params).then(({ data }) => {
                if (typeof(data.code) != "undefined" && data.code == 0) {
                    location.href = data.result;
                } else {
                    next()
                }
            }).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })

        } else {
            next();
        }
    } else if (name == "worldcupActivity" && !Cookies.get("GroukAuth")) {
        router.push({
            name: "worldcupIndex",
            params: {
                channelCode: 0
            }
        })
    } else {
        next();
    }


})

export default router