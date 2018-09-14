import Vue from 'vue';
import Router from 'vue-router';
import api from './utils/api';
import {
    Toast
} from 'mint-ui';
import {
    isApp,
    isWechat
} from './utils/utils';
import Store from './store'

// landing 页
const Landing = () =>
    import ('@/pages/landing/index')

const ActivityOver = () =>
    import ('@/pages/over/index')

const PullNewIndex = () =>
    import ('@/pages/pullnew/index')


const PullNewRule = () =>
    import ('@/pages/pullnew/rule')

// 成都土著活动
const LocalIndex = () =>
    import ('@/pages/local/index')

const LocalAnswer = () =>
    import ('@/pages/local/answer')

const LocalResult = () =>
    import ('@/pages/local/result')

const LocalShare = () =>
    import ('@/pages/local/share')
// 土著活动规则
const LocalRule = () =>
    import ('@/pages/local/rule')
// 土著活动排行榜
const LocalRank = () =>
    import ('@/pages/local/rank')
// 中秋节活动
const FestivalIndex = () =>
    import ('@/pages/moonfestival/home')

const FestivalShare = () =>
    import ('@/pages/moonfestival/share')

const FestivalRule = () =>
    import ('@/pages/moonfestival/rule')

const FestivalRank = () =>
    import ('@/pages/moonfestival/rank')
    
Vue.use(Router)

const router = new Router({

    mode: 'history',
    routes: [{
        path: '/landing',
        name: 'landing',
        component: Landing,
        meta: {
            title: '贴近Closer'
        }
    }, {
        path: '/over',
        name: 'activityOver',
        component: ActivityOver,
        meta: {
            title: '贴近Closer'
        }
    }, {
        path: '/pullnew',
        name: 'pullNew',
        component: PullNewIndex,
        meta: {
            title: '邀好友，赚现金'
        }
    }, {
        path: '/pullNew/rule',
        name: 'pullNewRule',
        component: PullNewRule,
        meta: {
            title: '邀好友，赚现金'
        }
    }, {
        path: '/local',
        name: 'localIndex',
        component: LocalIndex,
        meta: {
            title: '谁是成都最土著'
        }
    }, {
        path: '/local/answer',
        name: 'localAnswer',
        component: LocalAnswer,
        meta: {
            title: '谁是成都最土著'
        }
    }, {
        path: '/local/result',
        name: 'localResult',
        component: LocalResult,
        meta: {
            title: '谁是成都最土著'
        }
    }, {
        path: '/local/share',
        name: 'localShare',
        component: LocalShare,
        meta: {
            title: '分享'
        }
    }, {
        path: '/local/rule',
        name: 'localRule',
        component: LocalRule,
        meta: {
            title: '活动规则'
        }
    }, {
        path: '/local/rank',
        name: 'localRank',
        component: LocalRank,
        meta: {
            title: '排行榜'
        }
    }, {
        path: '/moonfestival',
        name: 'festivalIndex',
        component: FestivalIndex,
        meta: {
            title: '首页'
        }
    }, {
        path: '/moonfestival/rule',
        name: 'festivalRule',
        component: FestivalRule,
        meta: {
            title: '活动规则'
        }
    }, {
        path: '/moonfestival/rank',
        name: 'festivalRank',
        component: FestivalRank,
        meta: {
            title: '活动规则'
        }
    }, {
        path: '/moonfestival/share',
        name: 'festivalShare',
        component: FestivalShare,
        meta: {
            title: '分享'
        }
    }]

})
router.beforeEach(({
    meta,
    path,
    fullPath,
    query,
    name,
    params
}, from, next) => {
    document.title = meta.title ? meta.title : '贴近'
    if (name == 'localIndex') {
        if (isApp()) {
            console.log("closer device")
            Cookies.remove('user'); //app端user完全依赖APP
            next();
        } else if (isWechat()) {
            if (query.code) {
                next();
                return;
            }
            console.log('fullpath:', fullPath, query)

            // test hashRouter
            // let _path = '',
            //     reUrl = api.wxRedirectUrl,
            //     url = api.wxLoginUrl;
            // console.log('fullpath:',fullPath,query)
            // if (location.origin.indexOf('local.tiejin.cn') > -1 || Cookies.get("IS_DEV")) {
            //     reUrl = api.wxRedirectDevUrl
            //     url = Cookies.get("IS_DEV") ? api.wxLoginDevUrl : api.wxLoginLocalUrl
            // }
            // url = encodeURIComponent(url+path + '?params=' + encodeURIComponent(JSON.stringify(query)))
            // console.log('redirectUrl:', reUrl, url)
            // _path = reUrl + url

            let _path = (location.origin.indexOf('local.tiejin.cn') > -1 ? api.wxLoginLocalUrl : Cookies.get("IS_DEV") ? api.wxLoginDevUrl : api.wxLoginUrl) + path + '?params=' + encodeURIComponent(JSON.stringify(query))
            let params = {
                path: _path
            };
            console.log('from:', _path)
            axios.post(api.admin.get_auth_path, params).then(({
                data
            }) => {
                if (typeof (data.code) != "undefined" && data.code == 0) {
                    location.href = data.result;
                } else {
                    next()
                }
            }).catch(err => {
                Toast('网络开小差啦，请稍后再试')
                return;
            })

        } else {
            next();
        }
    } else {
        next();
    }


})

export default router