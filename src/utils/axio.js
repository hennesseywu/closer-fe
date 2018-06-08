import axios from 'axios'
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import feConfig from '../utils/api';
import Store from '../store'

// http request 拦截器 
axios.interceptors.request.use(
    config => {
        // let reqUrl = feConfig.devserverUrl + config.url
        let reqUrl = feConfig.serverUrl + config.url
        if (/sandbox.tiejin/.test(config.url)) {
            reqUrl = feConfig.serverDevUrlv;
        } else if (/tiejin/.test(config.url)) {
            reqUrl = feConfig.serverUrl;
        }
        config.headers['Closer-Agent'] = 'Closer-H5';
        if (Cookies.get("GroukAuth") && config.url.indexOf("auth") == -1 && config.url.indexOf("account") == -1) {
            config.headers.Authorization = Cookies.get("GroukAuth");
        }
        console.log("header", config)
        if (Store.state.UA.indexOf("closer-andriod") > 0) {
            //安卓检查登录状态
        } else if (Store.state.UA.indexOf("closer-ios") > 0) {
            JsBridge.setupWebViewJavascriptBridge(function(bridge) {
                //ios获取用户token 判断登录
                bridge.callHandler("getUserToken", null, function(data, responseCallback) {
                    if (data.token) {
                        config.headers.Authorization = data.token;
                        config.url = reqUrl;
                        Indicator.open()
                        return config;
                    } else {
                        JsBridge.setupWebViewJavascriptBridge(function(bridge) {
                            bridge.callHandler("jumpLogin", null);
                            config.headers.Authorization = data.token;
                            config.url = reqUrl;
                            Indicator.open()
                            return config;
                        });
                    }
                });
            })
        } else {
            config.url = reqUrl;
            Indicator.open()
            return config;
        }

    },
    err => {
        Indicator.close()
        return Promise.reject(err);
    });
// http response 拦截器 
axios.interceptors.response.use(
    response => {
        Indicator.close()
        return response;
    },
    (err) => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求错误'
                    break

                case 401:
                    err.message = '未授权，请登录'
                    router.push({ path: '/login' })
                    break

                case 403:
                    err.message = '拒绝访问'
                    router.push({ path: '/login' })
                    break

                case 404:
                    err.message = `请求地址出错: ${err.response.config.url}`
                    break

                case 408:
                    err.message = '请求超时'
                    break

                case 500:
                    err.message = '服务器内部错误'
                    break

                case 501:
                    err.message = '服务未实现'
                    break

                case 502:
                    err.message = '网关错误'
                    break

                case 503:
                    err.message = '服务不可用'
                    break

                case 504:
                    err.message = '网关超时'
                    break

                case 505:
                    err.message = 'HTTP版本不受支持'
                    break

                default:
            }
        } else {
            err.message = '网络错误，请稍后再试！'
        }
        if (err && err.response && err.response.data && err.response.data.message) {
            console.warn(err.response.data.message)
        } else {
            console.warn(err.message)
        }
        Indicator.close()
        return Promise.reject(err)
    });
export default axios