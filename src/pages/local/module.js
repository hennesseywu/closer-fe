import { wechatConfig } from './service'
import { Toast } from 'mint-ui'

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },

  actions: {
    async wechatConfig({ rootState }, payload) {
      console.log('modules--', payload)
      let params = {
          url: location.href
      };
      // if (rootState.IS_DEV) {
      //     params.url = api.wxLoginDevUrl
      // }
      let { data } = await wechatConfig(params).catch(err => {
          Toast('网络开小差啦，请稍后再试')
          return;
      })
      if (typeof(data.code) != "undefined" && data.code == 0) {
          return data.result;
      } else {
          return;
      }
  }
  }
}
