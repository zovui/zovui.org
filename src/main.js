import Vue from 'vue'
import router from './router'
import Zov from 'zov'
import 'highlight.js/styles/atom-one-dark.css'
import 'zov/lib/zov.min.css'

Vue.use(Zov)
Vue.config.productionTip = false // 去除production环境下vue警告
new Vue({
    router,
    render: h => <router-view />
}).$mount('#app')
