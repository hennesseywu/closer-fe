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