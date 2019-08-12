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
            <DocumentParagraph
                >以下是<DocumentProp>默认值</DocumentProp></DocumentParagraph
            >
            <DocumentCode :highlighted-code="codeMap.DefaultNeutralColors" />
            <DocumentParagraph>
                实际使用的中性色是经过<DocumentProp>色相</DocumentProp>计算的
            </DocumentParagraph>
            <DocumentParagraph
                >以下是<DocumentProp
                    >实际使用的值</DocumentProp
                ></DocumentParagraph
            >
            <DocumentCode :highlighted-code="codeMap.UsageNeutralColors" />
            <DocumentParagraph>
                这里涉及两个个变量，它们分别是：
            </DocumentParagraph>
            <DocumentList>
                <DocumentListItem>
                    <DocumentProp>$color-neutral</DocumentProp
                    >中性色基准色，默认为主题色，即<DocumentProp
                        >$color-primary</DocumentProp
                    >
                </DocumentListItem>
                <DocumentListItem>
                    <DocumentProp>$color-primary-hue</DocumentProp
                    >用来获取主题色相。依赖<DocumentProp>$color-neutral</DocumentProp>。
                </DocumentListItem>
                <DocumentListItem>
                    <DocumentProp>$color-neutral-saturate</DocumentProp
                    >中性色饱和度，当值为0%时则饱和度为0，色阶为黑白灰。当值向大调时中性色将混入一定饱和度的主题色。
                </DocumentListItem>
            </DocumentList>
            <DocumentParagraph>
                中性色在ZOV里分为两处来定义，一个是<DocumentProp>默认值</DocumentProp>，一个是<DocumentProp>实际使用值</DocumentProp>。
            </DocumentParagraph>
            <DocumentParagraph>
                它们的区别是一个是固定色系，一个是经过色相计算的。
            </DocumentParagraph>
            <DocumentParagraph>
                一般对于没有高级需求的颜色定义，推荐直接去修改<DocumentProp>实际使用值</DocumentProp>变量的值，而不要去修改<DocumentProp>默认值</DocumentProp>。
            </DocumentParagraph>
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
        <DocumentSection title="Dark模式">
            <DocumentParagraph>
                Dark模式也叫暗色模式。Dark模式下色调会取逆值。
            </DocumentParagraph>
            <DocumentParagraph>
                可以点击本站点<DocumentProp>右上角</DocumentProp>进行明暗主题切换，然后查看本章<DocumentProp>中性色颜色示例</DocumentProp>部分，可观察到颜色色值的变化。
            </DocumentParagraph>
            <DocumentParagraph>
                Dark模式相对于普通的亮色主题来说，主要区别在于<DocumentProp>中性色</DocumentProp>和<DocumentProp>主题色</DocumentProp>上。
            </DocumentParagraph>
            <DocumentSection title="Dark的主题色">
                <DocumentParagraph>
                    对于<DocumentProp>主题色</DocumentProp>而言，ZOV的做法是把原来的亮色系定义逆反过来。
                </DocumentParagraph>
                <DocumentParagraph>
                    <DocumentProp>Primary</DocumentProp>色值不变。<DocumentProp
                        >Light Primary</DocumentProp
                    >和<DocumentProp>Dark Primary</DocumentProp>色值互换。
                </DocumentParagraph>
            </DocumentSection>
            <DocumentSection title="Dark的中性色">
                <DocumentParagraph>
                    对于<DocumentProp>中性色</DocumentProp>而言，ZOV的做法是把原来的亮色系定义逆反过来。
                </DocumentParagraph>
                <DocumentParagraph>例子: </DocumentParagraph>
                <DocumentList>
                    <DocumentListItem
                        ><DocumentProp>标题</DocumentProp
                        >的颜色和<DocumentProp>背景</DocumentProp>的颜色互换</DocumentListItem
                    >
                    <DocumentListItem
                        ><DocumentProp>正文</DocumentProp
                        >的颜色和<DocumentProp>分隔线</DocumentProp>的颜色互换</DocumentListItem
                    >
                    <DocumentListItem>以此类推...</DocumentListItem>
                </DocumentList>
            </DocumentSection>
            <DocumentSection title="Dark的配色建议">
                <DocumentParagraph>
                    如果业务需求里有暗色主题的需求时，在自定义颜色的时候，请务必调试好颜色，以免出现在亮色系下颜色正常，暗色系配色糟糕的问题。
                </DocumentParagraph>
            </DocumentSection>
        </DocumentSection>
        <DocumentSection title="CSS变量">
            <DocumentParagraph
                >ZOV是优先基于CSS变量来定制颜色的组件库。</DocumentParagraph
            >
            <DocumentParagraph
                >对于支持CSS变量的浏览器，你可以在<DocumentProp>body</DocumentProp>元素上看到如下定义：</DocumentParagraph
            >
            <DocumentCode :highlighted-code="codeMap.CSSVariable" />
            <DocumentParagraph>CSS变量分为三部分：</DocumentParagraph>
            <DocumentList>
                <DocumentListItem>使用值</DocumentListItem>
                <DocumentListItem
                    >Light模式定义，仅作为颜色定义，用于明暗模式切换。</DocumentListItem
                >
                <DocumentListItem
                    >Dark模式定义，仅作为颜色定义，用于明暗模式切换。</DocumentListItem
                >
            </DocumentList>
            <DocumentParagraph
                >对于可以使用CSS变量的需求，推荐直接使用<DocumentProp
                    >使用值</DocumentProp
                ></DocumentParagraph
            >
            <DocumentParagraph
                >不要直接去修改<DocumentProp>Light模式定义</DocumentProp>和<DocumentProp>Dark模式定义</DocumentProp>，如果有个性化颜色需求，请结合<DocumentProp>之前小节</DocumentProp>去定制主题。</DocumentParagraph
            >
        </DocumentSection>
        <DocumentSection title="其他配置">
            <DocumentParagraph>
                其他可配置部分主要涉及以下几个方面：
            </DocumentParagraph>
            <DocumentList>
                <DocumentListItem>字体</DocumentListItem>
                <DocumentListItem>圆角</DocumentListItem>
                <DocumentListItem>超链接</DocumentListItem>
                <DocumentListItem>间隙</DocumentListItem>
                <DocumentListItem>部分组件可配置变量</DocumentListItem>
            </DocumentList>
            <DocumentParagraph>
                它们被定义在zov组件库的<DocumentProp>custom.scss</DocumentProp>中
            </DocumentParagraph>
            <DocumentParagraph>
                可根据需求，自行替换其变量的值。
            </DocumentParagraph>
        </DocumentSection>
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
import UsageNeutralColors from './customize-theme/UsageNeutralColors.scss?get-source-code'
import CustomThemeScss from './customize-theme/Custom.scss?get-source-code'
import CSSVariable from './customize-theme/CSSVariable.scss?get-source-code'

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
                DefaultNeutralColors,
                UsageNeutralColors,
                CSSVariable
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
