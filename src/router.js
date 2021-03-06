import Vue from 'vue'
import Router from 'vue-router'
import Zov from 'zov'
import Home from './pages/home'
import Document from './pages/document'
Vue.use(Router)
let routerObject = {
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/menu',
            component: Document,
            children: []
        },
        {
            path: '/component',
            component: Document,
            children: []
        }
    ]
}

const requireViews = require.context('./views', false, /\.vue/)

let viewsRoutes = []
requireViews.keys().forEach(fileName => {
    let options = requireViews(fileName).default.routerOptions
    let componentName = fileName.substr(2, fileName.length - 10)
    let o = {
        path: '/' + componentName,
        component: requireViews(fileName).default,
        routerOptions: options
    }
    viewsRoutes.push(o)
})
viewsRoutes = viewsRoutes.sort((a, b) => {
    return a.routerOptions.order - b.routerOptions.order
})
routerObject.routes[1].children = routerObject.routes[1].children.concat(
    viewsRoutes
)

const requireComponents = require.context('./views/components', false, /\.vue/)
requireComponents.keys().forEach(fileName => {
    let componentName = fileName.substr(2, fileName.length - 10)
    let options = requireComponents(fileName).default.routerOptions || {}
    options.discEn = componentName
    routerObject.routes[2].children.push({
        path: '/' + componentName.toLowerCase() + '-doc',
        routerOptions: options,
        component: requireComponents(fileName).default
    })
})
let router = new Router(routerObject)
router.beforeEach((to, from, next) => {
    Zov.LoadingBar.start()
    document.title = to.name || to.path.substr(1)
    next()
})
router.afterEach((to, from, next) => {
    Zov.LoadingBar.finish()
    // window.scrollTo(0, 0)
})
export default router
