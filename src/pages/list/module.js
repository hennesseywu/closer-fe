import { getList } from './service'
import { Toast } from 'mint-ui'

export default {
  namespaced: true,
  state: {
    loading: false,
    data: {}
  },
  mutations: {
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    },
    updateData(state, payload) {
      state.data = payload.data.list
    }
  },
  actions: {
    async getList ({ commit, state }, payload) {
      commit({
        type: 'showLoading'
      })
      const { data } = await getList(payload)
      console.log(data)
      commit({
        type: 'updateData',
        data
      })
      Toast('getdata')
    }
  }
}