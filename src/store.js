import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state() {
        return {
            isDark: false
        }
    },
    mutations: {
        setDarkMode(state, isDark) {
            state.isDark = isDark
        }
    }
})
