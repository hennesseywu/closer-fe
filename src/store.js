import Vue from 'vue'
import Vuex from 'vuex'

import pullNew from './pages/pullnew/index/module'
import local from './pages/local/module'
import moon from './pages/moonfestival/module'


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
        pullNew,
        local,
        moon
    }
})