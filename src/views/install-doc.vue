<!-- prettier-ignore -->
<template>
    <Document header="安装说明">
        <DocumentSection title="npm安装">
            <p>推荐使用npm安装方式，它能更好地与<a href="https://webpack.js.org/" target="_blank">webpack</a>打包工具配合使用</p>
            <p>如果您使用了 NPM 安装，并使用 webpack作为构建工具，请继续阅读<router-link to="/getting-started">入门</router-link>章节。</p>
            <DocumentCode :highlighted-code="codeMap.InstallSh" />
        </DocumentSection>
        <DocumentSection title="CDN引入">
            <p>通过<a href="https://unpkg.com/zov@0.7.0/lib/zov.min.js">unpkg.com/zov</a>可以看到 Zov 最新版本的资源,在页面上引入 js 和 css文件即可开始使用：</p>
            <DocumentCode :highlighted-code="codeMap.CDN" />
        </DocumentSection>
        <DocumentSection title="示例">
            <p>通过 CDN 的方式可以快速写出一个示例，您可以复制下面代码或<a href="http://jsrun.net/ieyKp/edit" target="_blank">在线预览</a></p>
            <DocumentCode :highlighted-code="codeMap.HTMLFastExample" />
        </DocumentSection>
    </Document>
</template>

<script>
import { Document, DocumentSection, DocumentCode } from '@/components'
import InstallSh from './install/install.sh?get-source-code'
import CDN from './install/CDN.html?get-source-code'
import HTMLFastExample from './install/HTMLFastExample.html?get-source-code'

export default {
    name: 'Install-doc',
    components: {
        Document,
        DocumentSection,
        DocumentCode
    },
    data() {
        return {
            codeMap: {
                InstallSh,
                CDN,
                HTMLFastExample
            }
        }
    },
    routerOptions: {
        order: 1,
        disc: '安装',
        iconname: 'cube'
    }
}
</script>
