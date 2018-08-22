import api from '../../utils/api';

export async function wechatConfig(payload) {
  console.log('service--', payload)
  return await axios.post(api.admin.wechat_config, payload);
}