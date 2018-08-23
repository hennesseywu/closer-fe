import service from './service'
import {
  Toast
} from 'mint-ui'
import Router from '../../router'

export default {
  namespaced: true,
  state: {
    activityId: 12,
    user: {
      // 当前分数（金额）
      score: 40,
      // 剩余答题次数
      remainTimes: 1
    },
    token: '',
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
    // 设置token
    SET_TOKEN(state, para) {
      state.token = para
    },
    // 开始测试数据
    startData(state, payload) {
      let data = payload.data
      state.startData = data.list
    },
    // 结束测试数据
    endData(state, payload) {
      let data = payload.data.result
      state.endData = data.data
    },
    shareData(state, payload) {
      state.shareData = payload
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
    checkLogin({
      state,
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
                      Cookies.set("user", JSON.stringify(data.result), {
                        expires: 30
                      });
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
                  Cookies.set("user", JSON.stringify(data.result), {
                    expires: 30
                  });
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
    async loginWithWechat({
      rootState,
      dispatch
    }, code) {
      let params = {
        'plateform': 2,
        'protocol': 'WEB_SOCKET'
      }
      params['code'] = code;
      let {
        data
      } = await loginWithWechat(params).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      })
      if (typeof (data.code) != "undefined" && data.code == 0) {
        console.log("loginWithWechat", data.result)
        return data.result;
      } else {
        // Toast('微信认证异常');
        await dispatch("getAuthPath");
        return;
      }
    },
    // 跳微信授权页
    wxAuthorization(path) {
      return service.wxAuthorization(path).catch(err => {
        Toast('网络开小差啦，请稍后再试')
        return;
      });
    },
    // 通过code进行登录，如果get_wx_auth被调用，get_code_by_login才会被调用
    async get_code_by_login({
      commit
    }, {
      code,
      inv_id,
      type
    }) {
      let self = this,
        para;
      // 注意： code 只能用一次，所以这里校验了 就不能再登录了，需要将校验放在登录里面
      // $router 是否存在 验证是否是奖励金登录
      if (type && type === 'bonus') {
        let unionId,
          nickName,
          avatar,
          paras = {
            code: code
          }
        // 校验账号是否存在
        let check = await self.$axios.$post(`${api.admin.check_wechat}`, paras)
        if (check.code != 0) {
          return false
        } else {
          if (check.result.hasRegist) {
            return false
          } else {
            unionId = check.result.unionId;
            nickName = check.result.nickName;
            avatar = check.result.avatar;
          }
        }
        if (inv_id) {
          para = {
            unionid: unionId,
            inviter: inv_id,
            nickName: nickName,
            avatar: avatar,
            protocol: "WEB_SOCKET",
            udid: Cookie.get('h5Cookies'),
            adid: Cookie.get('h5Adid') || 'closer-invitenew',
          }
        } else {
          return false
        }
      } else {
        para = {
          plateform: 2,
          code: code,
          protocol: "WEB_SOCKET",
          udid: Cookie.get('h5Cookies'),
          adid: Cookie.get('h5Adid') || 'closer-share'
        }
      }
      let data = await self.$axios.$post(`${api.admin.login_with_wechat}`, para);
      if (data.code === 0) {
        // 返回的数据
        let userInfo = {
          gender: data.result.user.gender,
          phones: data.result.user.phones,
          updateTime: data.result.user.updateTime,
          avatar: data.result.user.avatar,
          createTime: data.result.user.createTime,
          teamID: data.result.user.teamID,
          // 姓名
          fullname: data.result.user.fullname,
          security_signal: data.result.user.security_signal,
          objectID: data.result.user.objectID,
          email: data.result.user.email,
          username: data.result.user.username,
          status: data.result.user.status
        };
        let userToken = data.result.token;
        // // 存cookies
        Cookie.set('token', userToken, {
          expires: 7
        })
        Cookie.set('user', userInfo, {
          expires: 7
        })
        commit('SET_USER', userInfo)
        commit('SET_TOKEN', userToken)
        return true
      } else {
        return false
      }
    },
    getUserInfoAndLoginByWx({
      commit
    }, {
      code,
      inviter
    }) {
      let params = {
        plateform: 2,
        code,
        inviter,
        protocol: "WEB_SOCKET",
        udid: Cookie.get('h5Cookies'),
        adid: Cookie.get('h5Adid') || 'closer-local',
      };
      // let check = checkWxCode({
      //   code: query.code
      // });
      // let { unionId, nickName, avatar } = check.result;
      // Object.assign(params, { unionId, nickName, avatar });
      // query.inviter && (params.inviter = query.inviter);
      let loginData = service.loginByWx(params);
      if (loginData.code == 0) {
        let userInfo = loginData.result.user,
          userToken = loginData.result.token;
        Cookie.set('token', userToken, {
          expires: 7
        })
        Cookie.set('user', userInfo, {
          expires: 7
        })
        commit('SET_USER', userInfo)
        commit('SET_TOKEN', userToken)
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
      } else {
        data.result && Toast(data.result)
      }
    }
  }
}