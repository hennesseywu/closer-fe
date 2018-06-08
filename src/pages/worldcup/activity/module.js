import { getMatchList, getGuessMatch, getUserGuessStatistic, getUserGuessList } from './service'
import { Toast } from 'mint-ui'

export default {
  namespaced: true,

  state: {
    grayBtn: false,
    matchList: {},
    userGuessList: [],
    userGuessStatistic: {},
    voteInfo: {
      logo: ''
    },
  },
  mutations: {
    updateMatchlist(state, payload) {
      console.log(1, payload)
      state.matchList = payload.data.result.data
      for(let i = 0, len = state.matchList.length; i < len; i++) {
        if(state.matchList[i].matchType == 'group') {
          state.grayBtn = true
        } else {
          state.grayBtn = false
        }
      } 
    },
    updateUserGuesslist(state, payload) {
      console.log(2, payload)
      state.userGuessList = payload.data.result.data
    },
    updateUserGuessStatistic(state, payload) {
      console.log(3, payload)
      state.userGuessStatistic = payload.data.result
    },
    guessMatch(state, payload) {
      state.guessMatchPrm = { ...state.guessMatchPrm, payload }
    },
  },
  actions: {
    async getMatchList({ commit, state }, payload) {
      // console.log(payload)
      // let { data } = await getMatchList(payload)
      let data ={"result":{"data":[{"matchDate":"2018-06-07 19:00:00","settleStatus":"pending","gustTeamId":"2","matchType":"group","updateTime":1528366046000,"activityId":"2","matchLongDate":0,"createTime":1528275730000,"gustTeam":{"teamName":"沙特","createTime":1528275153000,"teamId":2,"logo":"https://file.tiejin.cn/public/9l3olAbe17/worldcup.png","teamDesc":"A","updateTime":1528340152000,"teamStatus":"pending","status":false},"winTeamId":"0","homeTeam":{"teamName":"俄罗斯","createTime":1528275153000,"teamId":1,"logo":"https://file.tiejin.cn/public/9l3olAbe17/worldcup.png","teamDesc":"A","updateTime":1528340152000,"teamStatus":"pending","status":false},"startTime":1528369200000,"endTime":1529060400000,"homeTeamId":"1","matchId":"57953137259970562","status":false},{"matchDate":"2018-06-07 22:00:00","settleStatus":"pending","gustTeamId":"2","matchType":"group","updateTime":1528366024000,"activityId":"1","matchLongDate":0,"createTime":1528275357000,"gustTeam":{"teamName":"沙特","createTime":1528275153000,"teamId":2,"logo":"https://file.tiejin.cn/public/9l3olAbe17/worldcup.png","teamDesc":"A","updateTime":1528340152000,"teamStatus":"pending","status":false},"winTeamId":"0","homeTeam":{"teamName":"俄罗斯","createTime":1528275153000,"teamId":1,"logo":"https://file.tiejin.cn/public/9l3olAbe17/worldcup.png","teamDesc":"A","updateTime":1528340152000,"teamStatus":"pending","status":false},"startTime":1528380000000,"endTime":1528970400000,"homeTeamId":"1","matchId":"57952937007120385","status":false}],"count":2},"code":0} 
      // console.log(data)
      if(data.code && data.code != 0) {
        Toast(data.result)
        return
      }

      commit({
        type: 'updateMatchlist',
        data
      })

    },
    async getUserGuessList({ commit, state }, payload) {
      console.log(payload)
      const { data } = await getUserGuessList(payload)
      if(data.code && data.code != 0) {
        Toast(data.result)
        return
      }
      commit({
        type: 'updateUserGuesslist',
        data
      })
    },
    async guessMatch({ commit, state }, payload) {
      console.log(payload)
      const { data } = await guessMatch(payload)
      commit({
        type: 'guessMatch',
        data
      })
    },
    setVoteInfo({ state }, payload){
      console.log(111, payload)
      state.voteInfo.logo = payload
    },
    async getUserGuessStatistic({ commit, state }, payload) {
      console.log(payload)
      const { data } = await getUserGuessStatistic(payload)
      commit({
        type: 'updateUserGuessStatistic',
        data
      })
    }
  }
}