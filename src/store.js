import Vue from 'vue'
import Vuex from 'vuex'

import index from './pages/worldcup/index/module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index
    }
})