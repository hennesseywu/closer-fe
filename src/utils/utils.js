export function redirectAddChance(isApp) {
    console.log("addchance", isApp);
    if (isApp) {
        location.href = "closer://community/9j9m4gy8sM"
    } else {
        location.href = ' https://h5.tiejin.cn/community/9j9m4gy8sM';
    }
}

export function downloadApp() {
    console.log("downloadApp");
    let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1) {
        location.href = "https://itunes.apple.com/us/app/%E8%B4%B4%E8%BF%91/id1363128511?l=zh&ls=1&mt=8";
    } else if (ua.indexOf('android')) {
        location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.ums.closer";
    }
}