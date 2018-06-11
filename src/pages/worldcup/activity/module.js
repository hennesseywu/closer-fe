import { getMatchList, getUserGuessList, guessMatch, getUserGuessStatistic, getGuessResult, checkRecieveChance, checkGuessResult } from './service'
import { Toast } from 'mint-ui'

export default {
    namespaced: true,
    state: {
        matchList: {},
        userGuessList: [],
        userGuessStatistic: {},
        recieveChanceInfo: {},
        userGuessResult: {},
        voteInfo: {
            logo: '',
            teamName: '',
            matchId: '',
            winTeamId: '',
            mathResult: '',
            gustTeamLogo: false
        }
    },
    mutations: {
        updateMatchlist(state, payload) {
            // console.log(1, payload)
            state.matchList = payload.data.result.data
            for (let i = 0, len = state.matchList.length; i < len; i++) {
                if (state.matchList[i].matchType != 'group') {
                    state.grayBtn = true
                } else {
                    state.grayBtn = false
                }
                console.log("gggg", state.grayBtn)
            }
        },
        updateUserGuesslist(state, payload) {
            console.log(1, payload)
            state.userGuessList = payload.data.result.data
            console.log('userGuessList', state.userGuessList)
        },
        updateUserGuessStatistic(state, payload) {
            console.log(2, payload)
            state.userGuessStatistic = payload.data.result
        },
        updateRecieveChance(state, data) {
            state.recieveChanceInfo = data.result;
        },
        updateUserGuessResult(state, data) {
            state.userGuessResult = data.result;
        }
    },
    actions: {
        async checkRecieveChance({ commit }, payload) {
            console.log("checkRecieveChance", payload)
            if (payload.channelCode == "0") {
                payload = {}
                console.log(payload)
            } else {
                payload["type"] = "other";
            }
            let { data } = await checkRecieveChance(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (data.result) {
                let result = data.result;
                // let result = {
                //     "presentAvailable": true, //-----是否显示新人大礼包字段
                //     "count": 11, //-----这次获取的次数
                //     "status": true //-----是否领取成功
                // }
                commit({ type: 'updateRecieveChance', result })
            } else {
                Toast('网络开小差啦，请稍后再试')
            }
        },
        async getMatchList({ commit, state }, payload) {
            let { data } = await getMatchList(payload).catch(err => {
                    Toast('网络开小差啦，请稍后再试')
                    return;
                })
                // let data = { "result": { "data": [{ "matchDate": "2018-06-09 19:00:00", "settleStatus": "pending", "gustTeamId": "2", "matchType": "group", "updateTime": 1528508917000, "activityId": "2", "matchLongDate": 0, "createTime": 1528275730000, "gustTeam": { "teamName": "沙特", "createTime": 1528371810000, "teamId": 2, "logo": "https://file.tiejin.cn/public/9m1OnF19t6/saudi+arabia%402x.png", "teamDesc": "A", "updateTime": 1528371810000, "teamStatus": "pending", "status": false }, "winTeamId": "0", "homeTeam": { "teamName": "俄罗斯", "createTime": 1528371810000, "teamId": 1, "logo": "https://file.tiejin.cn/public/9m1O0f2Het/russia%402x.png", "teamDesc": "A", "updateTime": 1528371810000, "teamStatus": "pending", "status": false }, "startTime": 1528542000000, "endTime": 1528542000000, "homeTeamId": "1", "matchId": "57953137259970562", "status": false }, { "matchDate": "2018-06-09 22:00:00", "settleStatus": "pending", "gustTeamId": "2", "matchType": "group", "userGuess": { "matchType": "group", "matchResult": "win", "updateTime": 1528511396000, "guessTimes": 5, "userName": "12", "uid": "8VFGt86d6t", "createTime": 1528280191000, "phone": "123123", "winTeamId": 1, "awardAmt": 0, "guessId": 1, "matchId": 57952937007120385, "status": false }, "updateTime": 1528511396000, "activityId": "1", "matchLongDate": 0, "createTime": 1528275357000, "gustTeam": { "teamName": "沙特", "createTime": 1528371810000, "teamId": 2, "logo": "https://file.tiejin.cn/public/9m1OnF19t6/saudi+arabia%402x.png", "teamDesc": "A", "updateTime": 1528371810000, "teamStatus": "pending", "status": false }, "winTeamId": "0", "homeTeam": { "teamName": "俄罗斯", "createTime": 1528371810000, "teamId": 1, "logo": "https://file.tiejin.cn/public/9m1O0f2Het/russia%402x.png", "teamDesc": "A", "updateTime": 1528371810000, "teamStatus": "pending", "status": false }, "startTime": 1528552800000, "endTime": 1528970400000, "homeTeamId": "1", "matchId": 57952937007120385, "status": false }], "count": 2 }, "code": 0 };
            if (data.code && data.code != 0) {
                Toast(data.result)
                return
            }
            if (data.result.data && data.result.data.length == 0) {
                Toast("没有比赛数据")
                return;
            }
            commit({
                type: 'updateMatchlist',
                data
            })
        },
        async getUserGuessList({ commit, state }, payload) {
            const { data } = await getUserGuessList(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            commit({
                type: 'updateUserGuesslist',
                data
            })
        },
        async guessMatch({ dispatch, commit, state }, payload) {
            console.log("guessMatch", payload)
            const { data } = await guessMatch(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            console.log(data)
            if (data && data.code == 0) {
                Toast("投注成功");
                await dispatch('getUserGuessStatistic');
                await dispatch('getMatchList');
                await dispatch('getUserGuessList');
            } else {
                Toast(data.result)
            }
        },
        setVoteInfo({ state }, payload) {
            console.log("setVoteInfo", payload)
            state.voteInfo = payload
        },
        async checkGuessResult({ commit }, payload) {
            let { data } = await getGuessResult(payload).catch(err => {
                    Toast('网络开小差啦，请稍后再试')
                    return;
                })
                // let data = { "result": { "totalGuessPerson": 1000, "totalBingoPerson": 10, "totalAwardAmt": 6, "guessMatchList": [{ "matchDate": "2018-06-07 18:00:00", "settleStatus": "pending", "gustTeamId": "4", "matchType": "knockout", "userGuess": { "matchType": "group", "matchResult": "equal", "updateTime": 1528401223000, "guessTimes": 1, "userName": "test", "guessResult": "bingo", "uid": "9cuTjllpID", "createTime": 1528401223000, "phone": "12000000001", "winTeamId": 3, "awardAmt": 101, "guessId": 2, "matchId": 57955751284441333, "status": false }, "matchDesc": "5:4", "matchResult": "win", "updateTime": 1528411754000, "activityId": "1", "matchLongDate": 0, "createTime": 1528251799000, "gustTeam": { "teamName": "乌拉圭", "createTime": 1528343048000, "teamId": 4, "logo": "https://file.tiejin.cn/public/9m1UH3oRS1/uruguay%402x.png", "teamDesc": "A", "updateTime": 1528343048000, "teamStatus": "pending", "status": false }, "winTeamId": "3", "homeTeam": { "teamName": "埃及", "createTime": 1528343048000, "teamId": 3, "logo": "https://file.tiejin.cn/public/9m1DYy63Z2/egypt%402x.png", "teamDesc": "A", "updateTime": 1528343048000, "teamStatus": "pending", "status": false }, "startTime": 1528365600000, "endTime": 1528365600000, "homeTeamId": "3", "matchId": 57955751284441333, "status": false }, { "matchDate": "2018-06-20 15:15:00", "settleStatus": "pending", "gustTeamId": "6", "matchType": "group", "userGuess": { "matchType": "group", "matchResult": "equal", "updateTime": 1528401223000, "guessTimes": 1, "userName": "test", "guessResult": "fail", "uid": "9cuTjllpID", "createTime": 1528401223000, "phone": "12000000001", "winTeamId": 3, "awardAmt": 0, "guessId": 3, "matchId": 58034725532467440, "status": false }, "updateTime": 1528398900000, "activityId": "4", "matchLongDate": 0, "createTime": 1528398900000, "gustTeam": { "teamName": "西班牙", "createTime": 1528343048000, "teamId": 6, "logo": "https://file.tiejin.cn/public/9m1Qukt3TM/spain%402x.png", "teamDesc": "B", "updateTime": 1528343048000, "teamStatus": "pending", "status": false }, "winTeamId": "0", "homeTeam": { "teamName": "秘鲁", "createTime": 1528343048000, "teamId": 11, "logo": "https://file.tiejin.cn/public/9m1L3B9E81/peru%402x.png", "teamDesc": "C", "updateTime": 1528343048000, "teamStatus": "pending", "status": false }, "startTime": 1529478900000, "endTime": 1529478900000, "homeTeamId": "11", "matchId": 58034725532467440, "status": false }], "guessResult": true }, "code": 0 };
            commit("updateUserGuessResult", data)

        },
        async getUserGuessStatistic({ commit, state }, payload) {
            let { data } = await getUserGuessStatistic(payload).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })
            if (data.result.totalAwardAmt) {
                Cookies.set("totalAwardAmt", data.result.totalAwardAmt)
            }
            // let data = { "result": { "totalChance": 10, "totalGuessPerson": 98393, "totalAwardAmt": 1111 }, "code": 0 }
            commit({
                type: 'updateUserGuessStatistic',
                data
            })
        }

    }
}