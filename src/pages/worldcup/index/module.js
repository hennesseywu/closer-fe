import { login, getCode } from './service'
import { Toast } from 'mint-ui';

export default {
    namespaced: true,

    // 定义状态
    state: {
        user: {

        }
    },
    actions: {
        async getCode({ commit, state }, phone) {
            console.log('module', phone);
            if (!(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone))) {
                Toast('请输入正确的手机号');
                return;
            };
            let codeRes = await getCode(phone);
            if (codeRes.status && codeRes.status == 200) {
                Toast("验证码发送成功")
            }
        },
        // 封装一个 ajax 方法
        async login({ commit, state }, payLoad) {
            if (payLoad.code.length == 0) {
                Toast("请输入验证码")
                return;
            }
            let loginRes = await login(payLoad);
            console.log("login", loginRes)
            if (loginRes.data) {
                let data = loginRes.data;
                if (data.code && data.code != 0) {
                    Toast(data.result);
                    return;
                }
                if (data.result && data.result.token) {
                    Cookies.set("GroukAuth", data.result.token, { expires: 7 })
                }
            }
        }
    }
}