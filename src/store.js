import Vue from 'vue'
import Vuex from 'vuex'

import home from './pages/worldcup/home/module'
import list from './pages/worldcup/list/module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        list
    }
})