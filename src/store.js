import Vue from 'vue'
import Vuex from 'vuex'

import index from './pages/worldcup/index/module'
import activity from './pages/worldcup/activity/module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index,
        activity
    }
})