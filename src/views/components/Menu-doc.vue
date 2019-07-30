<template>
    <ComponentExampleContainer
        component-name="Menu 导航菜单"
        desc="为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。"
        :apiList="api"
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
import Base from '@/examples/menu/Base.vue?demo'
import Mode from '@/examples/menu/Mode.vue?demo'
import HighColor from '@/examples/menu/HighColor.vue?demo'
import Accordion from '@/examples/menu/Accordion.vue?demo'
import Thumbnail from '@/examples/menu/Thumbnail.vue?demo'
import Trigger from '@/examples/menu/Trigger.vue?demo'

const api = [
    {
        title: 'Menu props',
        type: 'props',
        data: [
            {
                prop: 'mode',
                type: 'string',
                required: 'false',
                default: 'vertical',
                values: ['horizontal', 'vertical'].join(' | '),
                explain: '模式，控制Menu的展现方向'
            },
            {
                prop: 'high-color',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '高亮模式'
            },
            {
                prop: 'open-names',
                type: 'boolean',
                required: 'false',
                default: '[]',
                values: 'Array',
                explain: '初始化MenuSub展开项的name集合，触发展开'
            },
            {
                prop: 'active-name',
                type: 'number|string',
                required: 'false',
                default: 'undefined',
                values: 'Array',
                explain: '当前激活的MenuOption'
            },
            {
                prop: 'accordion',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: "在'vertical'手风琴展开模式"
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: "在'horizontal'模式下，drop是否有尖角"
            },
            {
                prop: 'trigger',
                type: 'string',
                required: 'false',
                default: 'hover',
                values: ['click', 'hover'].join(' | '),
                explain: "在'horizontal'模式下，drop的呼出事件"
            },
            {
                prop: 'width',
                type: 'string|number',
                required: 'false',
                default: '240',
                values: '-',
                explain: "在'vertical'宽度"
            },
            {
                prop: 'indent',
                type: 'string|number',
                required: 'false',
                default: '15',
                values: '-',
                explain: '缩进'
            },
            {
                prop: 'thumbnail',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: "在'vertical'模式下，缩略图模式"
            }
        ]
    },
    {
        title: 'Menu events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: 'name',
                explain: '选择菜单（MenuOption）时触发'
            },
            {
                event: 'on-open-change',
                callbackParam: '当前展开的 Submenu 的 name 值数组',
                explain: '当 展开/收起 子菜单时触发'
            },
            {
                event: 'on-collapse',
                callbackParam: 'Boolean',
                explain: 'thumbnail模式下，展开-收起时的回调'
            }
        ]
    },
    {
        title: 'MenuSub props',
        type: 'props',
        data: [
            {
                prop: 'name',
                type: 'string|number',
                required: 'true',
                default: '-',
                values: '-',
                explain: '当前组件的唯一标识'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用'
            },
            {
                prop: 'thumbnail-icon',
                type: 'string',
                required: 'false',
                default: 'options',
                values: '-',
                explain: '默认缩略图icon'
            }
        ]
    },
    {
        title: 'MenuOption props',
        type: 'props',
        data: [
            {
                prop: 'name',
                type: 'string|number',
                required: 'true',
                default: '-',
                values: '-',
                explain: '当前组件的唯一标识'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用'
            },
            {
                prop: 'thumbnail-icon',
                type: 'string',
                required: 'false',
                default: 'options',
                values: '-',
                explain: '默认缩略图icon'
            }
        ]
    }
]

export default {
    name: 'Menu-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Mode, HighColor, Accordion, Thumbnail, Trigger],
            api
        }
    }
}
</script>
