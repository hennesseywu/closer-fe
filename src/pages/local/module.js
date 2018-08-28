import service from './service'
import {
  Toast
} from 'mint-ui'
import Router from '../../router'
import { addParamsForUrl } from '../../utils/utils'
import { stat } from 'fs';

export default {
  namespaced: true,
  state: {
    activityId: 2,
    inviter: '',
    user: {},
    statistic: {
      // 最高总奖金
      maxAwardAmt: 10000,
      // 当前已获得奖金
      totalAwardAmt: 0,
      // 剩余答题次数
      chance: 0,
      // 排名
      rank: 0,
      // salt
      signSalt: ''
    },
    rank: {
      selfRank: {},
      rankList: []
    },
    startResult: {},
    startData: [],
    questions: {
      currentQuesitionNum: 0
    },

    endData: {},
    shareData: ''
  },
  mutations: {
    // 设置微信授权后用户信息
    SET_USER(state, para) {
      state.user = para
    },
    // 获取用户个人分数信息
    SET_STATISTIC(state, para) {
      state.statistic = para
    },
    // 好友排行榜
    SET_RANKLIST(state, para) {
      state.rank = para
    },
    // 开始测试数据
    startData(state, payload) {
      let data = payload.data.result
      state.startResult = data
      state.startData = data.questions
    },
    // 结束测试数据
    endData(state, payload) {
      let data = payload.data
      state.endData = data.result
    },
    shareData(state, payload) {
      let data = payload.data.result
      state.shareData = data.shareUrl || data.defaultShareUrl
    },
    SET_PARAMS(state, payload) {
      let {inviter, activityId} = payload
      activityId && (state.activityId = activityId);
      inviter && (state.inviter = inviter);
    },
    updateChance(state) {
      let chance = state.statistic.chance
      state.statistic.chance = --chance
    },
    updateCurrentQuestionNum(state) {
      let currentQuesitionNum = state.questions.currentQuesitionNum
      state.questions.currentQuesitionNum = 0
      console.log(123, state.questions.currentQuesitionNum)
    }
  },

  actions: {
    updateChance({ commit }) {
      commit('updateChance')
    },
    updateCurrentQuestionNum({ commit }) {
      commit('updateCurrentQuestionNum')
    },
    async userShare({
      state,
      commit
    }, payload) {
      if(sessionStorage.userAnswerId) {
        let params = {
          userAnswerId: sessionStorage.userAnswerId
        }
        let {
          data
        } = await service.userShare(params).catch(err => {
          Toast('网络开小差啦，请稍后再试')
          return;
        })
        if (typeof (data.code) != undefined && data.code == 0) {
          commit({
            type: 'shareData',
            data
          })
        } else {
          data.result && Toast(data.result)
        }
      } else {
        let params = {
          activityId: state.activityId
        }
        console.log('default share--', params)
        let {
          data
        } = await service.userDefaultShare(params).catch(err => {
          Toast('网络开小差啦，请稍后再试')
          return;
        })
        if (typeof (data.code) != undefined && data.code == 0) {
          commit({
            type: 'shareData',
            data
          })
        } else {
          data.result && Toast(data.result)
        }
      }
    },
    // 判断params，有该参数则为微信授权后跳转
    checkParams({
      commit
    },{params}) {
      if (params) {
        try {
          params = JSON.parse(decodeURIComponent(params))
        } catch(e) {
          params = {};
        }
        // 保存url中的activityId
        commit('SET_PARAMS', params);
      }
    },
    // 端内检查登录
    checkLoginInApp({
      state,
      commit,
      rootState
    }, cb) {
      console.log("checkLogin", rootState.IS_APP);
      let ua = rootState.UA;
      if (ua.indexOf("closer-ios") > -1) {
        console.log("module closer-ios");
        setTimeout(() => {
          setupWebViewJavascriptBridge(function(bridge) {
            console.log("ios bridge", bridge)
            if (bridge) {
              //ios获取用户token 判断登录
              bridge.callHandler("getUserToken", null, function(token, responseCallback) {
                console.log("ios token", token)
                if (token) {
                  Cookies.set("GroukAuth", token, {
                    expires: 30
                  });
                  // setTimeout(() => {
                  service.getUserInfoInApp().then(({
                    data
                  }) => {
                    console.log("ios", data.result);
                    if (data.result) {
                      let userInfo = data.result;
                      Cookies.set("user", userInfo, {
                        expires: 30
                      });
                      commit('SET_USER', userInfo);
                      cb(true)
                    } else {
                      cb();
                    }
                  }).catch(err => {
                    Toast('网络开小差啦，请稍后再试')
                    return;
                  })
                } else {
                  console.log("ios jumpLogin")
                  setupWebViewJavascriptBridge(function(bridge) {
                    bridge.callHandler("jumpLogin", null);
                  });
                  cb();
                }
              });
            }
          })
        }, 500)
      } else if (ua.indexOf("closer-android") > -1) {
        console.log("closer-android")
        console.log("module android", typeof window.bridge != "undefined")
        //安卓检查登录状态
        if (typeof window.bridge != "undefined") {
          let token = window.bridge.getUserToken(null);
          console.log("android", token)
          if (token) {
            Cookies.set("GroukAuth", token, {
              expires: 30
            });
            // setTimeout(() => {
            service.getUserInfoInApp().then(({
              data
            }) => {
              console.log("android", data.result);
              if (data.result) {
                let userInfo = data.result;
                Cookies.set("user", userInfo, {
                  expires: 30
                });
                commit('SET_USER', userInfo);
                cb(true)
              } else {
                cb();
              }
            }).catch(err => {
              Toast('网络开小差啦，请稍后再试')
              return;
            })

            // }, 1000)
          } else {
            console.log("android jumpLogin")
            window.bridge.jumpLogin(null);
            cb()
          }
        }
      } else {
        cb()
      }
    },
    // 通过微信授权code获取用户信息并登录
    async getUserInfoAndLoginWithWx({
      state,
      commit
    }, {
      code,
      inviter
    }) {
      inviter = state.inviter || inviter;
      let _params = {
        plateform: 2,
        // 微信授权code
        code,
        // 分享人id
        inviter,
        protocol: "WEB_SOCKET"
      };
      // 判断cookie，过期则从接口重新取
      let user = Cookies.get('user');
      let token = Cookies.get('GroukAuth');
      if (user && token) {
        console.log('user-from-cookie:',JSON.parse(user));
        commit('SET_USER', JSON.parse(user));
        return true;
      } else {
        let { data } = await service.loginWithWx(_params);
        if (data.code == 0) {
          user = data.result.user;
          token = data.result.token;
          console.log('user-from-server:',user);
          commit('SET_USER', user)
          Cookies.set('GroukAuth', token, {
            expires: 7
          })
          Cookies.set('user', user, {
            expires: 7
          })
          return true;
        } else {
          return false;
        }
      }
      
    },
    // 获取用户分数以及剩余答题次数
    async getStatistic({
      commit,
      state
    }) {
      let {
        data
      } = await service.getStatistic({
        activityId: state.activityId
      });
      console.log(data.code, data.result)
      if (data.code == 0) {
        commit('SET_STATISTIC', data.result)
      } else {
        Toast('网络开小差啦，请稍后再试')
      }
    },
    // 获取好友排行榜
    async getRankList({
      commit,
      state
    }) {
      let {
        data
      } = await service.getRankList({
        activityId: state.activityId,
        inviter: state.inviter
      });
      if (data.code == 0) {
        commit('SET_RANKLIST', data.result)
      } else {
        Toast('网络开小差啦，请稍后再试')
      }
    },
    // 开始测试
    async startTest({
      commit,
      state
    }, payload) {
      let params = {
        activityId: state.activityId
      }
      let {
        data
      } = await service.startTest(params).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      })
      if (typeof(data.code) != undefined && data.code == 0) {
        commit({
          type: 'startData',
          data
        })
      } else {
        Toast('网络开小差啦，请稍后再试')
        return;
      }
    },
    nextQuestion({
      state,
      commit
    }, payload) {
      let data = state.questions.currentQuesitionNum++
        if (data > state.startData.length) return
    },
    // 结束测试
    async commitTest({
      state,
      commit
    }, payload) {
      let {
        data
      } = await service.endTest(payload).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      })
      console.log(3, data)
      if (typeof(data.code != undefined) && data.code == 0) {
        commit({
          type: 'endData',
          data
        })
        Router.push({
          name: "localResult"
        })
        // window.sessionStorage.score = state.endData.score
        // window.sessionStorage.level = state.endData.level
        // window.sessionStorage.awardAmt = state.endData.awardAmt
        window.sessionStorage.userAnswerId = state.endData.userAnswerId
      } else {
        data.result && Toast(data.result)
      }
    },
    initWxConfig({state, rootState}) {
      let params = {
        url: location.href
      };
      service.wechatConfig(params).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      }).then(({data}) => {
        let wxConfig = {};
        let link = addParamsForUrl(location.origin + location.pathname, {
          inviter: state.user.objectID,
          activityId: state.activityId
        });
        if (typeof(data.code) != "undefined" && data.code == 0) {
          wxConfig = data.result;
        } else {
          return;
        }
        console.log('wxConfig::', link);
        if (wxConfig && wxConfig.signature && wxConfig.appId && wxConfig.nonceStr && wxConfig.timestamp) {
          wx.config({
            "debug": rootState.IS_DEV, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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
              link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://file.tiejin.cn/public/9XnByg35Ju/logo300.png', // 分享图标
              type: '', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success: function() {
                // 用户点击了分享后执行的回调函数
                Toast('分享成功~')
              }
            })

            // 分享朋友圈
            wx.onMenuShareTimeline({
              title: '是成都人就来瓜分百万大奖', // 分享标题
              link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'http://file.tiejin.cn/public/9XnByg35Ju/logo300.png', // 分享图标
              success: function() {
                // 用户点击了分享后执行的回调函数
                Toast('分享成功~')
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
  }
}