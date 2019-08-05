<template>
    <ComponentExampleContainer
        component-name="Anchor 图钉"
        desc="使用锚点，可以跳转到页面指定的任意位置。"
        :apiList="apiList"
    >
        <ComponentExample
            v-for="example of examples"
            :example="example"
            :key="example.__title"
        />
    </ComponentExampleContainer>
</template>

<script>
import { ComponentExampleContainer, ComponentExample } from '@/components'
import Base from '@/examples/anchor/Base.vue?demo'
import Static from '@/examples/anchor/Static.vue?demo'

let AnchorApi = [
    {
        title: 'Anchor props',
        type: 'props',
        data: [
            {
                prop: 'affix',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '固定模式'
            },
            {
                prop: 'offset-top',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '距离窗口顶部达到指定偏移量后触发'
            },
            {
                prop: 'offset-bottom',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '距离窗口底部达到指定偏移量后触发'
            },
            {
                prop: 'bounds',
                type: 'number',
                required: 'false',
                default: '5',
                values: '-',
                explain: '锚点区域边界，单位：px'
            },
            {
                prop: 'scroll-offset',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '点击滚动的额外距离'
            },
            {
                prop: 'show-ink',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示小圆点'
            },
            {
                prop: 'container',
                type: 'string | HTMLElement',
                required: 'false',
                default: '-',
                values: '-',
                explain: '指定滚动的容器'
            }
        ]
    },
    {
        title: 'Anchor events',
        type: 'events',
        data: [
            {
                event: 'on-select',
                callbackParam: 'href',
                explain: '点击锚点时触发，返回链接'
            },
            {
                event: 'on-change',
                callbackParam: 'newHref, oldHref',
                explain: '链接改变时触发，返回新链接和旧链接'
            }
        ]
    }
]

let AnchorLinkApi = [
    {
        title: 'AnchorLink props',
        type: 'props',
        data: [
            {
                prop: 'href',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '锚点链接'
            },
            {
                prop: 'title',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '文字内容'
            },
            {
                prop: 'scroll-offset',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '点击滚动的额外距离'
            }
        ]
    }
]

export default {
    name: 'Anchor-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Static],
            apiList: [...AnchorApi, ...AnchorLinkApi]
        }
    }
}
</script>
