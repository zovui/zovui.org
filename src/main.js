import Vue from 'vue'
import router from './router'
import Zov from 'zov'
import 'highlight.js/styles/atom-one-dark.css'
import 'zov/lib/zov.min.css'
import store from './store'

Vue.use(Zov)
Vue.config.productionTip = false // 去除production环境下vue警告
new Vue({
    store,
    router,
    render: h => <router-view />
}).$mount('#app')
