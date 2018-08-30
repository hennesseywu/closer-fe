import api from './api';
export function redirectAddChance(isApp) {
    //console.log("addchance", isApp);
    if (isApp) {
        location.href = "closer://community/9j9m4gy8sM"
    } else {
        location.href = 'https://h5.tiejin.cn/community/9j9m4gy8sM';
    }
}

export async function downloadApp() {
  if (Cookies.get("aid") != "0") {
    let md = new MobileDetect(navigator.userAgent);
    let deviceType = md.os();
    let deviceVersion = "";
    if (deviceType == "iOS") {
      deviceType = "ios";
      deviceVersion = md.versionStr('iPhone');
    } else if (deviceType == "AndroidOS") {
      deviceType = "android";
      deviceVersion = md.versionStr('Android');
      deviceVersion = deviceVersion.replace(/\./g, "_");
    }
    let {data} = await axios.post(api.statitics.get_adcookie, {
      adid: Cookies.get("aid"),
      webUdid: false,
      deviceType: deviceType,
      deviceVersion: deviceVersion
    });
    if (data.result) {
      let result = data.result;
      if (result.udid) {
        Cookies.set("uid", result.udid, { expires: 30 })
      }
    }
  }
  location.href = "http://tiejin.cn/down?downurl=closer://jump";
}
export function toYuan(money) {
    let yuan = money / 100.0;
    return yuan.toFixed(2);
}

export function getQueryString() {
    let str = window.location.href.split('-')
    if (!str) return null
    let strLen = str.length
    return str[strLen - 1]
}

export function getPlatform() {
    var u = navigator.userAgent;
    return {
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        windows: !!u.match(/windows mobile/i) //windows终端
    }
}

export function isApp() {
  const ua = navigator.userAgent.toLowerCase();
  return /closer-(android|ios)/.test(ua);
}

export function isWechat() {
  const ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua);
}

// 禁用微信分享功能
export function noShare() {
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
                // 通过下面这个API隐藏右上角按钮
                WeixinJSBridge.call('hideOptionMenu');
            });
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', function onBridgeReady() {
                // 通过下面这个API隐藏右上角按钮
                WeixinJSBridge.call('hideOptionMenu');
            });
            document.attachEvent('onWeixinJSBridgeReady', function onBridgeReady() {
                // 通过下面这个API隐藏右上角按钮
                WeixinJSBridge.call('hideOptionMenu');
            });
        }
    } else {
        WeixinJSBridge.call('hideOptionMenu');
    }
}

// 辅助函数
export function rem2px(v) {
    var val = parseFloat(v) * this.dpr * this.baseFontSize;
    if (typeof v === "string" && v.match(/rem$/)) {
        val += "px";
    }
    return val;
}

export function px2rem(v) {
  var val = parseFloat(v) * this.dpr / this.baseFontSize;
  if (typeof v === "string" && v.match(/px$/)) {
      val += "rem";
  }
  return val;
}

export function px2px(v) {
    var val = parseFloat(v) * this.dpr;
    if (typeof v === "string" && v.match(/px$/)) {
        val += "px";
    }
    return val;
}

/**
 * yyyy-dd-mm
 * 
 */
export function dateFormat(time) {
    let d = new Date(time);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let second = d.getSeconds();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}
// 图片地址处理
export function makeFileUrl(url, type, size) {
  if (url) {
    let sizes = size ? size : 500
    let fileUrl = Cookies.get("IS_DEV") ? api.fileDevURL : api.fileUrl
    if (type === 'src') {
      return (url.indexOf('://') !== -1) ? url + '?s=' + sizes : fileUrl + url + '?s=' + sizes;
    } else {
      return (url.indexOf('://') !== -1) ? url : fileUrl + url;
    }
  } else {
    return
  }
}

// 将单位‘分’转换为‘元’
export function transAmount(count) {
  return ~~(count/1e2);
}
// 为url添加参数
export function addParamsForUrl(url, params) {
  let str = [];
  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      str.push(`${key}=${params[key]}`)
    }
  }
  return url + (url.indexOf('?') > -1 ? '&' : '?') + str.join('&')
}
// url中参数转query
export function parseQuery() {
  var query = location.search.substr(1);
  var reg = /([^=&\s]+)[=\s]*([^&\s]*)/g;
  var obj = {};
  while (reg.exec(query)) {
      obj[RegExp.$1] = RegExp.$2;
  }
  return obj;
}
// 版本号比较，ver1为安卓，ver2为ios
export function compareVersion(ua, ver1, ver2) {
  let ver = ua.indexOf('android') > -1 ? ver1 : ver2;
  try {
    let a = parseInt(ver.replace(/\./g, ''));
    let b = parseInt((ua.split('closerapp/version/')[1] || '').replace(/\./g, ''));
    return b >= a;
  } catch (e) {
    return false
  }
}