import api from '../../utils/api';

export default {
  async wechatConfig(payload) {
    console.log('service--', payload)
    return await axios.post(api.admin.wechat_config, payload);
  },
  async getUserInfoInApp() {
    return await axios.post(api.admin.user_show)
  },
  async checkWxCode(payload) {
    return await axios.post(api.admin.check_wechat, payload)
  },
  async loginWithWx(payload) {
    return await axios.post(api.admin.login_with_wechat, payload)
  },
  async getStatistic(payload) {
    return await axios.post(api.activity.tuzhu.get_question_statistic, payload)
  },
  async getRankList(payload) {
    return await axios.post(api.activity.tuzhu.get_rank_list, payload)
  }
}