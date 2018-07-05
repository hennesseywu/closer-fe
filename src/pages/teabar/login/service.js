import api from '../../../utils/api';


export async function getAuthPath(payload) {
    return await axios.post(api.admin.get_auth_path, payload);
}

export async function loginWithWechat(payload) {
    return await axios.post(api.admin.login_with_wechat, payload);
}