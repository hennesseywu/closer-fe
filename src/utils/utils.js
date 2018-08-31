import api from './api';
import html2canvas from 'html2canvas';
import $ from 'jquery';
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

export function html2Image(dom) {
  return new Promise(function(resolve, reject) {
    var shareContent = dom; //需要截图的包裹的（原生的）DOM 对象
    var width = shareContent.offsetWidth; //获取dom 宽度
    var height = shareContent.offsetHeight; //获取dom 高度
    var canvas = document.createElement("canvas"); //创建一个canvas节点
    var context = canvas.getContext('2d');
    context.scale(scale, scale); //获取context,设置scale 
    // 【重要】关闭抗锯齿
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    var ratio = getPixelRatio(context);
    var scale = 2; //定义任意放大倍数 支持小数
    canvas.width = width * scale * ratio; //定义canvas 宽度 * 缩放
    canvas.height = height * scale * ratio; //定义canvas高度 *缩放

    var opts = {
      scale: scale, // 添加的scale 参数
      canvas: canvas, //自定义 canvas
      // logging: true, //日志开关，便于查看html2canvas的内部执行流程
      width: width, //dom 原始宽度
      height: height,
      useCORS: true // 【重要】开启跨域配置
    };

    html2canvas(shareContent, opts).then((canvas) => { //html2canvas
      var img = convertToImage(canvas, canvas.width, canvas.height, 'jpeg');
      resolve(img);
    })

  })
}


//canvas2image
function convertToImage(canvas, width, height, type) {
  function createFile(urlData, fileType) {
    var bytes = window.atob(urlData),
      n = bytes.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bytes.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: fileType
    });
  }
  type = fixType(type);
  var strData = getDataURL(canvas, type, width, height);
  return genImage(strData);

  function fixType(type) {
    type = type.toLowerCase().replace(/jpg/i, 'jpeg');
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return 'image/' + r;
  }

  function getDataURL(canvas, type, width, height) {
    canvas = scaleCanvas(canvas, width, height);
    return canvas.toDataURL(type);
  }

  function genImage(strData) {
    var img = document.createElement('img');
    img.src = strData;
    return img;
  }

  function scaleCanvas(canvas, width, height) {
    var w = canvas.width,
      h = canvas.height;
    if (width == undefined) {
      width = w;
    }
    if (height == undefined) {
      height = h;
    }

    var retCanvas = document.createElement('canvas');
    var retCtx = retCanvas.getContext('2d');
    retCanvas.width = width;
    retCanvas.height = height;
    retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
    return retCanvas;
  }


}

export function getPixelRatio(context) {
  var backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
}


export function tjUploadFile(img) {
  // 【重要】默认转化的格式为png,也可设置为其他格式
  // Get the form
  var form = document.forms[0];
  let file = dataURLtoFile(img.src);

  // Create a FormData and append the file
  var fd = new FormData(form);
  fd.append("file", file);
  // Submit Form and upload file
  return $.ajax({
    url: "https://file-sandbox.tiejin.cn/file/upload/public",
    data: fd, // the formData function is available in almost all new browsers.
    type: "POST",
    headers: {
      Accept: "application/json; charset=utf-8",
      // Authorization: "1.438e5b73ce608983bd9f1cbcb65f54a8f699b879a70de023327b0d4213276a042f8ed7339fb2e548c187281bab7fcf9c5d30216a7fcccc9efb66552b9116ffdd"
    },
    contentType: false,
    processData: false,
    cache: false,
    dataType: "json", // Change this according to your response from the server.
    error: function(err) {
      console.error(err);
    },
    success: function(data) {
      console.log(data);
    },
    complete: function() {
      console.log("Request finished.");
    }
  });

  function dataURLtoFile(dataurl, filename = 'file') {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let suffix = mime.split('/')[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], `${filename}.${suffix}`, {
      type: mime
    })
  }
}