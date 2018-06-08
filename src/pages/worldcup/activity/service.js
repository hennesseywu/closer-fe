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
    // console.log('service', payload)
    return await axios.post(api.activity.get_match_list, payload);
}

/**
 *  获取用户竞猜统计信息, 机会次数，累计金额, 总参与人数
 */
export async function getUserGuessStatistic(payload) {
    return await axios.post(api.activity.get_user_guess_statistic, payload);
}

/**
 *  竞猜比赛
 */
export async function guessMatch(payload) {
    console.log('service', payload)
    return await axios.post(api.activity.guess_match, payload);
}

/**  比赛结果
 */
export async function checkGuessResult(payload) {
    console.log('service', payload)
    return await axios.post(api.activity.check_guess_result, payload);
}
/**
 * 通过渠道号获取是否获得抽奖次数
 * 
 */
export async function checkRecieveChance(channelCode) {
    return await axios.post(api.activity.receive_chance, { channelCode: channelCode })
}