<template>
    <Document header="入门">
        <DocumentSection title="使用之前">
            <DocumentParagraph>
                在开始之前，我们认为假设你已了解关于 HTML、CSS 和 JavaScript
                的中级知识，熟悉 Vue 的开发方式，并且已经掌握了 Vue组件 和
                单文件组件。
            </DocumentParagraph>
            <DocumentParagraph>
                如果你刚开始学习前端或者 Vue，将 UI
                框架作为你的第一步可能不是最好的主意。
            </DocumentParagraph>
        </DocumentSection>
        <DocumentSection title="使用Vue Cli 3">
            <DocumentParagraph>
                我们为最新的 Vue CLI 3 提供了相应的 zov 插件，如果你正在用 Vue
                CLI 3，可以直接在插件中搜索 zov，安装插件来使用。
            </DocumentParagraph>
        </DocumentSection>
        <DocumentSection title="引用zov">
            <DocumentParagraph>
                一般在 webpack 入口页面 main.js 中如下配置：
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.Entry" />
        </DocumentSection>
        <DocumentSection title="按需引用">
            <DocumentCode :highlighted-code="codeMap.ImportSH" />
            <DocumentParagraph>
                babel配置：
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.ImportBabelConfig" />
            <DocumentParagraph>
                然后这样按需引入组件，就可以减小体积了(按需引入仍需要导入样式)：
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.ImportJS" />
        </DocumentSection>
        <DocumentSection title="使用规范">
            <DocumentParagraph>
                使用 prop 传递数据格式为
                数字、布尔值或函数时，必须带:(兼容String除外，具体看组件文档)，比如：
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.Specification" />
            <DocumentParagraph>
                在非 template/render 模式下（例如使用 CDN
                引用时），组件名要分隔，例如 DatePicker 必须要写成 date-picker。
            </DocumentParagraph>
            <DocumentParagraph>
                以下组件，在非 template/render 模式下，需要加前缀 z-：
            </DocumentParagraph>
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
import {
    Document,
    DocumentSection,
    DocumentCode,
    DocumentParagraph
} from '@/components'
import Entry from './getting-started/entry.js?get-source-code'
import ImportSH from './getting-started/import.sh?get-source-code'
import ImportBabelConfig from './getting-started/babelConfig?get-source-code'
import ImportJS from './getting-started/import?get-source-code'
import Specification from './getting-started/Specification.html?get-source-code'

export default {
    name: 'GettingStart-doc',
    components: {
        Document,
        DocumentSection,
        DocumentCode,
        DocumentParagraph
    },
    data() {
        return {
            codeMap: {
                Entry,
                ImportSH,
                ImportBabelConfig,
                ImportJS,
                Specification
            }
        }
    },
    routerOptions: {
        order: 2,
        disc: '入门',
        iconname: 'flag'
    }
}
</script>
