import api from '../../../utils/api';
import { Toast } from 'mint-ui'

/**
 * 获取用户竞猜比赛记录
 */
export async function getUserGuessList(payload) {
    console.log('service', payload)
    return await axios.post(api.activity.get_user_guess_list, payload);
}

/**
 *  获取比赛竞猜列表
 */
export async function getMatchList(payload) {
    console.log('service', payload)
    return await axios.post(api.activity.get_match_list, payload);
}

/**
 *  获取用户竞猜统计信息, 机会次数，累计金额, 总参与人数
 */
export async function getUserGuessStatistic(payload) {
    console.log('service', payload)
    return await axios.post(api.activity.get_user_guess_statistic, payload);
}

/**
 *  竞猜比赛
 */
export async function getGuessMatch(payload) {
    console.log('service', payload)
    return await axios.post(api.activity.guess_match, payload);
}
// export async function add_channel(payload) {
//   console.log('service', payload)
//   return await axios.post(api.activity.add_channel, payload);
// }
/**
 * 登录/注册 验证码
 */
// export async function login({ phone, code }) {
//     let params = {
//         phone: phone,
//         token: code,
//         protocol: 'WEB_SOCKET'
//     }
//     return await axios.post(api.admin.closeruser_regist, params)

// }