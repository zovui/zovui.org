<!-- prettier-ignore -->
<template>
    <Document header="安装说明">
        <DocumentSection title="npm安装">
            <p>推荐使用npm安装方式，它能更好地与<a href="https://webpack.js.org/" target="_blank">webpack</a>打包工具配合使用</p>
            <p>如果您使用了 NPM 安装，并使用 webpack作为构建工具，请继续阅读<router-link to="/getting-started">入门</router-link>章节。</p>
            <DocumentCode lang="bash">
                npm i zov -S
            </DocumentCode>
        </DocumentSection>
        <DocumentSection title="CDN引入">
            <p>通过<a href="https://unpkg.com/zov@0.7.0/lib/zov.min.js">unpkg.com/zov</a>可以看到 Zov 最新版本的资源,在页面上引入 js 和 css文件即可开始使用：</p>
            <DocumentCode lang="html">
                &lt;!-- import Vue.js --&gt;
                &lt;script src="//vuejs.org/js/vue.min.js"&gt;&lt;/script&gt;
                &lt;!-- import stylesheet --&gt;
                &lt;link rel="stylesheet" href="//unpkg.com/zov@0.6.0/lib/zov.min.css"&gt;
                &lt;!-- import iView --&gt;
                &lt;script src="//unpkg.com/zov@0.6.0/lib/zov.min.js"&gt;&lt;/script&gt;
            </DocumentCode>
        </DocumentSection>
        <DocumentSection title="示例">
            <p>通过 CDN 的方式可以快速写出一个示例，您可以复制下面代码或<a href="http://jsrun.net/ieyKp/edit" target="_blank">在线预览</a></p>
            <DocumentCode lang="html">
                &lt;!DOCTYPE html&gt;
                    &lt;html&gt;
                        &lt;head&gt;
                            &lt;meta charset="utf-8"&gt;
                            &lt;title&gt;iview example&lt;/title&gt;
                            &lt;link rel="stylesheet" type="text/css" href="http://unpkg.com/iview/dist/styles/iview.css"&gt;
                            &lt;script type="text/javascript" src="http://vuejs.org/js/vue.min.js"&gt;&lt;/script&gt;
                            &lt;script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"&gt;&lt;/script&gt;
                            &lt;/head&gt;
                        &lt;body&gt;
                            &lt;div id="app"&gt;
                                &lt;i-button @click="show"&gt;Click me!&lt;/i-button&gt;
                                &lt;Modal v-model="visible" title="Welcome"&gt;Welcome to iView&lt;/Modal&gt;
                            &lt;/div&gt;
                            &lt;script&gt;
                                new Vue({
                                    el: '#app',
                                    data: {
                                        visible: false
                                    },
                                    methods: {
                                        show: function () {
                                            this.visible = true;
                                        }
                                    }
                                })
                            &lt;/script&gt;
                        &lt;/body&gt;
                    &lt;/html&gt;
            </DocumentCode>
        </DocumentSection>
    </Document>
</template>

<script>
import { Document, DocumentSection, DocumentCode } from '@/components'
export default {
    name: 'Install-doc',
    components: {
        Document,
        DocumentSection,
        DocumentCode
    },
    routerOptions: {
        order: 1,
        disc: '安装',
        iconname: 'cube'
    }
}
</script>
