import api from '../../../utils/api';


export async function getInviteStatistic(payload) {
    return await axios.post(api.activity.get_invite_statistic, payload);
}

export async function getYesterdayAwardAmt(payload) {
    return await axios.post(api.activity.get_yesterday_award_amt, payload);
}

export async function getInviteUserLoginPageList(payload) {
    return await axios.post(api.activity.get_invitee_page_list, payload);
}

export async function remindLogin(payload) {
    return await axios.post(api.activity.remind_login, payload);
}