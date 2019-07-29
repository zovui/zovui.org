<template>
    <Document header="入门">
        <DocumentSection title="使用之前">
            <p>
                在开始之前，我们认为假设你已了解关于 HTML、CSS 和 JavaScript
                的中级知识，熟悉 Vue 的开发方式，并且已经掌握了 Vue组件 和
                单文件组件。如果你刚开始学习前端或者 Vue，将 UI
                框架作为你的第一步可能不是最好的主意。
            </p>
        </DocumentSection>
        <DocumentSection title="使用Vue Cli 3">
            <p>
                我们为最新的 Vue CLI 3 提供了相应的 zov 插件，如果你正在用 Vue
                CLI 3，可以直接在插件中搜索 zov，安装插件来使用。
            </p>
        </DocumentSection>
        <DocumentSection title="引用zov">
            <p>一般在 webpack 入口页面 main.js 中如下配置：</p>
            <DocumentCode lang="javascript">
                import Vue from 'vue' import vueRouter from 'vue-router' import
                App from './App.vue' import Routers from './router.js'; import
                Zov from 'zov' import 'zov/dist/styles/zov.css';
                Vue.use(vueRouter) Vue.use(Zov) const RouterConfig = { routes:
                Routers }; const router = new VueRouter(RouterConfig); new Vue({
                el: '#app', router: router, render: h => h(App) });
            </DocumentCode>
        </DocumentSection>
        <DocumentSection title="按需引用">
            <DocumentCode lang="bash">
                npm install babel-plugin-import --save-dev
            </DocumentCode>
            <DocumentCode lang="json">
                // .babelrc { "plugins": [["import", { "libraryName": "zov",
                "libraryDirectory": "src/components" }]] }
            </DocumentCode>
            <p>
                然后这样按需引入组件，就可以减小体积了(按需引入仍需要导入样式)：
            </p>
            <DocumentCode lang="javascript">
                import { Button, Table } from 'zov'; Vue.component('Button',
                Button); Vue.component('Table', Table);
            </DocumentCode>
        </DocumentSection>
        <DocumentSection title="使用规范">
            <p>
                使用 prop 传递数据格式为
                数字、布尔值或函数时，必须带:(兼容String除外，具体看组件文档)，比如：
            </p>
            <DocumentCode lang="html">
                &lt;!-- Correct: --&gt; &lt;Page :current="1"
                :total="100"&gt;&lt;/Page&gt; &lt;!-- Incorrect: --&gt; &lt;Page
                current="1" total="100"&gt;&lt;/Page&gt;
            </DocumentCode>
            <p>
                在非 template/render 模式下（例如使用 CDN
                引用时），组件名要分隔，例如 DatePicker 必须要写成 date-picker。
            </p>
            <p>
                以下组件，在非 template/render 模式下，需要加前缀 i-：
            </p>
            <ul class="list">
                <li>Button: z-button</li>
                <li>Input: z-input</li>
                <li>Form: z-form</li>
            </ul>
        </DocumentSection>
    </Document>
</template>

<style lang="scss" scoped>
.list li {
    list-style: disc;
    margin-left: 20px;
}
</style>

<script>
import { Document, DocumentSection, DocumentCode } from '@/components'
export default {
    name: 'GettingStart-doc',
    components: {
        Document,
        DocumentSection,
        DocumentCode
    },
    routerOptions: {
        order: 2,
        disc: '入门',
        iconname: 'flag'
    }
}
</script>
