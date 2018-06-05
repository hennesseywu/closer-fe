import api from '../../utils/api';
import { Toast } from 'mint-ui'

/**
 * get code 手机登录获取验证码
 */
export async function getCode(phone) {
    console.log('service', phone)
    return await axios.post(api.admin.get_code_by_phone, { phone: phone });
}


/**
 * check 手机号
 */
export async function checkPhoneStatus(phone) {
    return await self.$axios.$get(api.admin.check + '?type=phone&code=' + phone);
}


/**
 * 登录/注册
 */
export async function phoneLogin(phone) {
    return await self.$axios.$post(api.admin.closeruser_regist, { phone })

}