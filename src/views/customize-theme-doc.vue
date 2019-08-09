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
                ZOV使用较为安全的蓝色作为主色调，其中 Light Primary 常用于
                hover，Dark Primary 常用于 active。
            </DocumentParagraph>
            <DocumentColorList>
                <DocumentColor name="Primary" color="#2d8cf0" />
                <DocumentColor name="Light Primary" color="#479af2" />
                <DocumentColor name="Dark Primary" color="#137eee" />
            </DocumentColorList>
            <DocumentParagraph>
                它们被定义在zov组件库的<DocumentProp>color.scss</DocumentProp>中
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.PrimaryColor" />
            <DocumentParagraph>
                <DocumentProp>$toning-ratio</DocumentProp
                >变量决定了<DocumentProp>Light Primary</DocumentProp
                >和<DocumentProp>Dark Primary</DocumentProp>颜色最终色值。
            </DocumentParagraph>
            <DocumentParagraph>
                对于<DocumentProp>lighten</DocumentProp>函数来说，亮度变量的值越高，对于的颜色的亮度越亮。
            </DocumentParagraph>
            <DocumentParagraph>
                对于<DocumentProp>darken</DocumentProp>函数来说，亮度变量的值越高，对于的颜色的亮度越暗。
            </DocumentParagraph>
            <DocumentParagraph>
                <DocumentProp>$toning-ratio</DocumentProp
                >在一般情况下<DocumentProp>不建议</DocumentProp>直接去修改。
            </DocumentParagraph>
        </DocumentSection>
        <DocumentSection title="中性色">
            <DocumentParagraph>
                中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。
            </DocumentParagraph>
            <DocumentParagraph>
                ZOV默认内置了以下的中性色
            </DocumentParagraph>
            <DocumentColorList>
                <DocumentColor name="标题 Title" :color="neutralColors.title" />
                <DocumentColor
                    name="正文 Content"
                    :color="neutralColors.content"
                />
                <DocumentColor
                    name="辅助/图标 Sub Color"
                    :color="neutralColors.sub"
                />
                <DocumentColor
                    name="占位文字 Placeholder"
                    :color="neutralColors.placeholder"
                />
            </DocumentColorList>
            <DocumentColorList>
                <DocumentColor
                    name="失效 Disabled"
                    :color="neutralColors.disabled"
                    dark
                />
                <DocumentColor
                    name="边框 Border"
                    :color="neutralColors.border"
                    dark
                />
                <DocumentColor
                    name="分割线 Divider"
                    :color="neutralColors.divider"
                    dark
                />
                <DocumentColor
                    name="背景 Background"
                    :color="neutralColors.background"
                    dark
                />
            </DocumentColorList>
            <DocumentParagraph>
                它们被定义在zov组件库的<DocumentProp>color.scss</DocumentProp>中
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.DefaultNeutralColors" />
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
        </DocumentSection>
        <DocumentSection title="辅助色">
            <DocumentParagraph>
                辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。
            </DocumentParagraph>
            <DocumentColorList>
                <DocumentColor name="Info" color="#2db7f5" />
                <DocumentColor name="Success" color="#19be6b" />
                <DocumentColor name="Warning" color="#ff9900" />
                <DocumentColor name="Error" color="#ed4014" />
            </DocumentColorList>
            <DocumentParagraph>
                它们被定义在zov组件库的<DocumentProp>color.scss</DocumentProp>中
            </DocumentParagraph>
            <DocumentCode :highlighted-code="codeMap.HelperColor" />
        </DocumentSection>
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
    DocumentListItem,
    DocumentColorList,
    DocumentColor
} from '@/components'
import PrimaryColor from './customize-theme/PrimaryColor.scss?get-source-code'
import HelperColor from './customize-theme/HelperColor.scss?get-source-code'
import DefaultNeutralColors from './customize-theme/DefaultNeutralColors.scss?get-source-code'
import CustomThemeScss from './customize-theme/Custom.scss?get-source-code'

export default {
    components: {
        DocumentColor,
        DocumentColorList,
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
                CustomThemeScss,
                PrimaryColor,
                HelperColor,
                DefaultNeutralColors
            }
        }
    },
    computed: {
        neutralColors() {
            if (this.$store.state.isDark) {
                return {
                    background: '#262626',
                    divider: '#404040',
                    border: '#777777',
                    disabled: '#7f7f7f',
                    placeholder: '#cbcbcb',
                    sub: '#e4e4e4',
                    content: '#eaeaea',
                    title: '#fcfcfc'
                }
            }
            return {
                title: '#262626',
                content: '#404040',
                sub: '#777777',
                placeholder: '#7f7f7f',
                disabled: '#cbcbcb',
                border: '#e4e4e4',
                divider: '#eaeaea',
                background: '#fcfcfc'
            }
        }
    }
}
</script>
