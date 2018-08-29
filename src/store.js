import Vue from 'vue'
import Vuex from 'vuex'

import index from './pages/worldcup/index/module'
import activity from './pages/worldcup/activity/module'
import tbLogin from './pages/teabar/index/module'
import pullNew from './pages/pullnew/index/module'
import local from './pages/local/module'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        UA: "",
        IS_APP: false,
        IS_WX: false,
        IS_NEW_USER: false,
        IS_DEV: false,
        V_1_2_3: false
    },
    modules: {
        index,
        activity,
        tbLogin,
        pullNew,
        local
    }
})