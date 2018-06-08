import { login, getCode, getUserById } from './service'
import { Toast } from 'mint-ui';
import Router from '../../../router'

export default {
    namespaced: true,
    // 定义状态 
    state: {
        loginSuccess: false,
        chanceBoxShow: false,
        loginBoxShow: true,
        isApp: false
    },
    actions: {
        async getUserById({ state }, uid) {
            return await getUserById(uid).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });;
        },
        async getCode({ commit, state, rootState }, phone) {
            if (!(/^(0|86|17951)?(13[0-9]|15[012356789]|16[012356789|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone))) {
                Toast('请输入正确的手机号');
                return;
            };
            let codeRes = await getCode(phone).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            if (codeRes.status && codeRes.status == 200) {
                Toast("验证码发送成功")
            }
        },
        // 登录
        async login({ commit, state, rootState }, payLoad) {
            if (payLoad.code.length == 0) {
                Toast("请输入验证码")
                return;
            }
            let loginRes = await login(payLoad).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            });
            console.log("loginRes", loginRes)
            if (loginRes.data) {
                let data = loginRes.data;
                if (data.code && data.code != 0) {
                    Toast(data.result);
                    return;
                }
                // let userInfo = {
                //     "result": {
                //         "hasSetPassword": false,
                //         "team": {
                //             "settings": { "is_hr": false },
                //             "createTime": 1526637510732,
                //             "domain": "closerteam",
                //             "members": 2,
                //             "name": "closerteam",
                //             "updateTime": 1526639124122,
                //             "attributes": {},
                //             "customMenus": [],
                //             "type": 1,
                //             "objectID": "9cuTjllPi9"
                //         },
                //         "securityURL": "wss:\/\/dev.tiejin.cn:14088",
                //         "isNewUser": true,
                //         "user": {
                //             "isBot": false,
                //             "role": 0,
                //             "gender": 0,
                //             "phones": "18380464277",
                //             "updateTime": 1528353090477,
                //             "avatar": "\/avatar\/u\/9e2VCPBTC8?v=1527142992085",
                //             "createTime": 1526885907097,
                //             "teamID": "9cuTjllPi9",
                //             "attributes": {
                //                 "closerUserAttr": {
                //                     "lastLoginTime": 1527931644606,
                //                     "userShareCard": "http:\/\/file-sandbox.tiejin.cn\/public\/9j7shSxx2f\/9e2VCPBTC8.png?version=v2",
                //                     "permission": "1,2,4,5,3",
                //                     "userRole": 3,
                //                     "community": "9d1L3XgccD",
                //                     "account": { "wechatx": {}, "phone": "+8618380464277", "email": "" },
                //                     "dayFirsttLoginTime": 1528353090477
                //                 }
                //             },
                //             "fullname": "修改个人头像和用户名和😉寄来了",
                //             "security_signal": "02810000171",
                //             "objectID": "9e2VCPBTC8",
                //             "email": "18380464277@closerteam.sandbox.grouk.com",
                //             "username": "18380464277",
                //             "status": 1
                //         },
                //         "url": "ws:\/\/dev.tiejin.cn:18088",
                //         "token": "1.f9419369335dd30ff266ef66fc2646da87eb361872ce5fd72e7974b06948aad8",
                //         "isNewTeam": false
                //     },
                //     "code": 0
                // }

                if (data.result && data.result.token) {
                    if (data.result.user) {
                        Cookies.set("user", JSON.stringify(data.result.user), { expires: 7 });
                    }
                    if (data.result.isNewUser) {
                        rootState.isNewUser = data.result.isNewUser;
                    }
                    Cookies.set("GroukAuth", data.result.token, { expires: 7 });
                    Router.push('/activity');
                }
            }
        }
    }
}