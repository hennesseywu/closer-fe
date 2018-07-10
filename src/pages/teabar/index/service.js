import api from '../../../utils/api';


export async function getAuthPath(payload) {
    return await axios.post(api.admin.get_auth_path, payload);
}

export async function loginWithWechat(payload) {
    return await axios.post(api.admin.login_with_wechat, payload);
}
export async function bindPhone(payload) {
    return await axios.post(api.admin.bind_phone, payload);
}

export async function waterChance(payload) {
    return await axios.post(api.activity.activity_water_chance, payload);
}
export async function waterUpdate(payload) {
    return await axios.post(api.activity.activity_water_update, payload);
}

export async function waterJoin(payload) {
    return await axios.post(api.activity.activity_water_join, payload);
}

export async function wechatConfig(payload) {
    return await axios.post(api.admin.wechat_config, payload);
}