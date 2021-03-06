import api from '../config/api';
import baseURL from '../config/index';
import html2canvas from 'html2canvas';
import md5 from "js-md5"

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
    let { data } = await axios.post(api.statitics.get_adcookie, {
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
    // let fileUrl = Cookies.get("IS_DEV") ? api.fileDevURL : api.fileUrl
    let fileUrl = baseURL.file[window.ENV.env]
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
  return ~~(count / 1e2);
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

export function html2Image(dom) {
  return new Promise(function(resolve, reject) {
    var shareContent = dom; //需要截图的包裹的（原生的）DOM 对象
    var width = shareContent.offsetWidth; //获取dom 宽度
    var height = shareContent.offsetHeight; //获取dom 高度
    var canvas = document.createElement("canvas"); //创建一个canvas节点
    var context = canvas.getContext('2d');
    let scale = getPixelRatio(context);

    canvas.width = width * scale;
    canvas.height = height * scale;
    context.scale(scale, scale);

    // 【重要】关闭抗锯齿
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;


    var opts = {
      scale: scale, // 添加的scale 参数
      canvas: canvas, //自定义 canvas
      logging: false, //日志开关，便于查看html2canvas的内部执行流程
      width: width, //dom 原始宽度
      height: height,
      backgroundColor: null, // 设置null，透明背景
      useCORS: true // 【重要】开启跨域配置
    };
    html2canvas(shareContent, opts).then((canvas) => { //html2canvas
      console.log('html2canvas:finish:', canvas)
      var img = convertToImage(canvas, canvas.width, canvas.height, 'image/jpeg');
      console.log('convertToImage:finish:')
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
  try {
    type = fixType(type);
    var strData = getDataURL(canvas, type, width, height);

    console.log(5);
    let _genImage = genImage(strData);
    console.log(6);
    return _genImage
  } catch (e) {
    console.log(7, e);
    throw new Error(e)
  }

  function fixType(type) {
    type = type.toLowerCase().replace(/jpg/i, 'jpeg');
    var r = type.match(/png|jpeg|bmp|gif/)[0];
    return 'image/' + r;
  }

  function getDataURL(canvas, type, width, height) {
    canvas = scaleCanvas(canvas, width, height);
    console.log(3, canvas);
    let dataUrl = canvas.toDataURL(type);
    console.log(4);
    return dataUrl
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
    retCanvas.style.width = width;
    retCanvas.style.height = height;
    console.log(1, w, h, width, height);
    retCtx.mozImageSmoothingEnabled = false;
    retCtx.webkitImageSmoothingEnabled = false;
    retCtx.msImageSmoothingEnabled = false;
    retCtx.imageSmoothingEnabled = false;
    retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
    console.log(2);
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
  let filename = md5(Date.now() + "file")
  let file = dataURLtoFile(img.src, filename);
  console.log("upload")
    // Create a FormData and append the file
  var fd = new FormData(form);
  fd.append("file", file);
  // Submit Form and upload file
  // let fileUrl = Cookies.get("IS_DEV") ? 'https://file-sandbox.tiejin.cn' : 'https://file.tiejin.cn'
  let fileUrl = baseURL.file[window.ENV.env]
  return axios.post(fileUrl + "/file/upload/public", fd, {
    headers: {
      Accept: "application/json; charset=utf-8",
      Authorization: Cookies.get('GroukAuth')
    }
  });

  function dataURLtoFile(dataurl, filename = 'file') {
    // let arr = dataurl.split(',')
    // let mime = arr[0].match(/:(.*?);/)[1]
    // let suffix = mime.split('/')[1]
    // let bstr = atob(arr[1])
    // let n = bstr.length
    // let u8arr = new Uint8Array(n)
    // while (n--) {
    //   u8arr[n] = bstr.charCodeAt(n)
    // }
    // return new File([u8arr], `${filename}.${suffix}`, {
    //   type: mime
    // })
    var blobBin = atob(dataurl.split(',')[1]);
    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    var file = new Blob([new Uint8Array(array)], { type: 'image/png' });
    return file;
  }
}