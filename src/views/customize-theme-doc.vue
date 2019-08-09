<template>
    <Document header="定制主题">
        <DocumentSection title="概述">
            <DocumentParagraph>
                ZOV 默认提供了一套 UI
                主题，并且可以在一定程度上定制新主题，以满足业务和品牌上的多样化视觉需求。
            </DocumentParagraph>
            <DocumentParagraph>
                ZOV组件库的样式是基于scss进行开发。默认以前缀<DocumentProp>.zov-</DocumentProp>作为命名空间。
            </DocumentParagraph>
            <DocumentParagraph>
                ZOV组件库定义了一些有用的变量，方便开发者在自定义主题的配置。
            </DocumentParagraph>
        </DocumentSection>
        <DocumentSection title="主题色">
            <DocumentParagraph>
                zov支持配置主题色，通过scss颜色函数进行了一些颜色校准。
            </DocumentParagraph>
            <DocumentParagraph>
                凡是带有 !default 都是可以自定义的。
            </DocumentParagraph>
            <DocumentParagraph>
                以下为颜色相关配置及说明：
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.ColorScss" />
        </DocumentSection>
        <DocumentSection title="中性色">
            <DocumentParagraph>
                其他变量中主要包含UI组件库里一些常见的样式配置。
            </DocumentParagraph>
            <DocumentParagraph>
                主要涉及以下几个方面：
            </DocumentParagraph>
            <DocumentList>
                <DocumentListItem>字体</DocumentListItem>
                <DocumentListItem>圆角</DocumentListItem>
                <DocumentListItem>超链接</DocumentListItem>
                <DocumentListItem>响应式屏幕断点</DocumentListItem>
                <DocumentListItem>部分组件可配置变量</DocumentListItem>
            </DocumentList>
            <DocumentCode :highlighted-code="codeMap.CustomScss" />
        </DocumentSection>
        <DocumentSection title="辅助色"> </DocumentSection>
        <DocumentSection title="Dark模式"></DocumentSection>
        <DocumentSection title="建议配色方案"></DocumentSection>
        <DocumentSection title="覆盖样式">
            <DocumentParagraph>
                因为sass的!default变量能力，使得变量可被修改变成可能。
            </DocumentParagraph>
            <DocumentParagraph>
                具体的覆盖流程如下：
            </DocumentParagraph>
            <DocumentList>
                <DocumentListItem
                    >新建一个<DocumentProp>custom-theme.scss</DocumentProp>文件</DocumentListItem
                >
                <DocumentListItem>
                    <DocumentParagraph>写入：</DocumentParagraph>
                    <DocumentCode :highlighted-code="codeMap.CustomThemeScss" />
                </DocumentListItem>
                <DocumentListItem>
                    保存后导入到入口的js中
                </DocumentListItem>
            </DocumentList>
        </DocumentSection>
    </Document>
</template>

<script>
import {
    Document,
    DocumentSection,
    DocumentParagraph,
    DocumentCode,
    DocumentProp,
    DocumentList,
    DocumentListItem
} from '@/components'
import ColorScss from 'zov/core/styles/colors.scss?get-source-code'
import CustomScss from 'zov/core/styles/custom.scss?get-source-code'
import CustomThemeScss from './customize-theme/Custom.scss?get-source-code'

export default {
    components: {
        DocumentSection,
        Document,
        DocumentParagraph,
        DocumentCode,
        DocumentProp,
        DocumentList,
        DocumentListItem
    },
    routerOptions: {
        order: 3,
        disc: '定制主题',
        iconname: 'color-palette'
    },
    data() {
        return {
            codeMap: {
                ColorScss,
                CustomScss,
                CustomThemeScss
            }
        }
    }
}
</script>
