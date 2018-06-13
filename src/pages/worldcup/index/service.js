import api from '../../../utils/api';
import { Toast } from 'mint-ui'

/**
 * get code 手机登录获取验证码
 */
export async function getCode(phone) {
    return await axios.post(api.admin.get_code_by_phone, { phone: phone });
}

/**
 * 登录/注册 验证码
 */
export async function login({ phone, code }) {
    let params = {
        phone: phone,
        token: code,
        protocol: 'WEB_SOCKET'
    }
    return await axios.post(api.admin.closeruser_regist, params)

}
/**获取用户信息
 * 
 */
export async function getUserById(uid) {
    return await axios.post(api.admin.user_show, { uid: uid })
}

/**进入活动页则调用接口
 * 
 */
export async function viewCount(payload) {
    return await axios.post(api.statitics.view_count, payload)
}

/**点击页面内的下载按钮
 * 
 */
export async function getAdCookies(payload) {
    console.log(payload)
    return await axios.get(api.statitics.get_adcookie + "?webUdid=" + payload.webUdid + "&adid=" + payload.adid)
}