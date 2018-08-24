import service from './service'
import {
  Toast
} from 'mint-ui'
import Router from '../../router'

export default {
  namespaced: true,
  state: {
    activityId: 2,
    user: {},
    statistic: {
      // 当前分数（金额）
      totalAwardAmt: 0,
      // 剩余答题次数
      chance: 0,
      // 排名
      rank: 0
    },
    rankList: [],
    startResult: {},
    startData: [],
    currentQuesitionNum: 0,
    endData: {},
    shareData: {}
  },
  mutations: {
    // 设置微信授权后用户信息
    SET_USER(state, para) {
      state.user = para
    },
    // 获取用户个人分数信息
    SET_STATISTIC(state, para) {
      state.statistic = para
      console.log(state.statistic)
    },
    // 好友排行榜
    SET_RANKLIST(state, para) {
      let data = payload.data
      state.rankList = para.rankList
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
      // state.statistic.rank = para.selfRank
    },
    shareData(state, payload) {
      let data = payload.data.result
      state.shareData = data.shareUrl
    }
  },

  actions: {
    async wechatConfig({
      rootState
    }, payload) {
      let params = {
        url: location.href
      };
      // if (rootState.IS_DEV) {
      //     params.url = api.wxLoginDevUrl
      // }
      let {
        data
      } = await service.wechatConfig(params).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      })
      if (typeof (data.code) != "undefined" && data.code == 0) {
        return data.result;
      } else {
        return;
      }
    },
    async userShare({ state, commit }, payload) {
      let params = {
        userAnswerId: sessionStorage.userAnswerId
      }
      console.log('share--',params)
      let {
        data
      } = await service.userShare(params).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      })
      if(typeof(data.code) != undefined && data.code == 0) {
        commit({
          type: 'shareData',
          data
        })
      } else {
        data.result && Toast(data.result)
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
          setupWebViewJavascriptBridge(function (bridge) {
            console.log("ios bridge", bridge)
            if (bridge) {
              //ios获取用户token 判断登录
              bridge.callHandler("getUserToken", null, function (token, responseCallback) {
                console.log("ios token", token)
                if (token) {
                  Cookies.set("GroukAuth", token, {
                    expires: 30
                  });
                  // setTimeout(() => {
                  axios.post(api.admin.user_show).then(({
                    data
                  }) => {
                    console.log("ios", data.result);
                    if (data.result) {
                      let userInfo = JSON.stringify(data.result);
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
                  setupWebViewJavascriptBridge(function (bridge) {
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
            setTimeout(() => {
              axios.post(api.admin.user_show).then(({
                data
              }) => {
                console.log("android", data.result);
                if (data.result) {
                  let userInfo = JSON.stringify(data.result);
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

            }, 1000)
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
      let params = {
        plateform: 2,
        // 微信授权code
        code,
        // 分享人id
        inviter,
        protocol: "WEB_SOCKET"
      };
      // let check = checkWxCode({
      //   code: query.code
      // });
      // let { unionId, nickName, avatar } = check.result;
      // Object.assign(params, { unionId, nickName, avatar });
      // query.inviter && (params.inviter = query.inviter);
      let { data: loginData } = await service.loginWithWx(params);
      console.log('loginData:',loginData)
      if (loginData.code == 0) {
        let { user, token } = loginData.result;
        console.log('userInfo', user);
        console.log('userToken', token);
        commit('SET_USER', user)
        Cookies.set('token', token, {
          expires: 7
        })
        Cookies.set('user', user, {
          expires: 7
        })
        console.log('SET_USER', state);
      }
    },
    // 获取用户分数以及剩余答题次数
    async getStatistic({state}) {
      let {code,result} = await service.getStatistic({
        activityId: state.activityId
      });
      if (code == 0) {
        commit('SET_STATISTIC', result)
      } else {
        Toast('网络开小差啦，请稍后再试')
      }
    },
    // 获取好友排行榜
    async getRankList({state}) {
      let {code,result} = await service.getRankList({
        activityId: state.activityId
      });
      if (code == 0) {
        commit('SET_RANKLIST', result)
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
      // if(typeof(data.code) != undefined && data.code == 0) {
      commit({
        type: 'startData',
        data
      })

      // } else {
      //   Toast('网络开小差啦，请稍后再试')
      //   return;
      // }
    },
    nextQuestion({
      state,
      commit
    }, payload) {
      let data = state.currentQuesitionNum++
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
      if (typeof (data.code != undefined) && data.code == 0) {
        commit({
          type: 'endData',
          data
        })
        Router.push({
          name: "localResult"
        })
        window.sessionStorage.score = state.endData.score
        window.sessionStorage.level = state.endData.level
        window.sessionStorage.awardAmt = state.endData.awardAmt
        window.sessionStorage.userAnswerId = state.endData.userAnswerId
      } else {
        data.result && Toast(data.result)
      }
    }
  }
}