import Vue from 'vue'
import Vuex from 'vuex'

import index from './pages/worldcup/index/module'
import activity from './pages/worldcup/activity/module'
import tbLogin from './pages/teabar/login/module'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        UA: "",
        IS_APP: false,
        IS_NEW_USER: false,
        IS_DEV: false
    },
    modules: {
        index,
        activity,
        tbLogin
    }
})