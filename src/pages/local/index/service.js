import api from "../../../utils/api";



export default {
  async wechatAuthorization(payload) {
    let params = {
      path: (Cookies.get("IS_DEV") ? api.wxLoginDevUrl : api.wxLoginUrl) + payload
    };
    return await Axios.post(api.admin.get_auth_path, params)
  },
  async checkWxCode(payload) {
    return await Axios.post(api.admin.check_wechat, payload)
  },
  async loginByWx(payload) {
    return await Axios.post(api.admin.login_with_wechat, payload)
  }
}