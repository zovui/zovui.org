import Vue from 'vue'
import App from './App.vue'
import Zov from 'zov'
import 'zov/dist/styles/zov.css'

Vue.use(Zov)

new Vue({
    el: '#app',
    render: h => h(App)
})
