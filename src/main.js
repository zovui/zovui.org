import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './app.scss'
import Zov from 'zov'
import vueHljs from 'vue-hljs'
import 'vue-hljs/dist/vue-hljs.min.css'
import 'highlight.js/styles/atelier-forest-light.css'
import 'zov/lib/zov.min.css'
// import { LongList } from '../core'
// Vue.component('LongList', LongList)
Vue.use(Zov)
Vue.use(vueHljs)
Vue.config.productionTip = false // 去除production环境下vue警告
console.log(Vue.version)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
