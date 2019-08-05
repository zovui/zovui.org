<template>
    <ComponentExampleContainer
        component-name="Tooltip 气泡提示"
        desc="提示气泡框，在鼠标悬停时显示，代替了系统的title提示。"
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
import Base from '@/examples/tooltip/Base.vue?demo'
import Placement from '@/examples/tooltip/Placement.vue?demo'
import Trigger from '@/examples/tooltip/Trigger.vue?demo'

const api = [
    {
        title: 'Tooltip props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示气泡框，可v-model'
            },
            {
                prop: 'title',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '标题'
            },
            {
                prop: 'text',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '文字说明'
            },
            {
                prop: 'placement',
                type: 'string',
                required: 'false',
                default: 'bottom',
                values: [
                    'top',
                    'top-start',
                    'top-end',
                    'bottom',
                    'bottom-start',
                    'bottom-end',
                    'left',
                    'left-start',
                    'left-end',
                    'right',
                    'right-start',
                    'right-end'
                ].join(' |  '),
                explain: '弹出所在的位置'
            },
            {
                prop: 'trigger',
                type: 'string |  Array',
                required: 'false',
                default: 'hover',
                values: ['hover', 'click'].join(' | '),
                explain: '触发事件'
            },
            {
                prop: 'enter-delay',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '呼出延时'
            },
            {
                prop: 'leave-delay',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '收起延时'
            },
            {
                prop: 'closable',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示气泡框的关闭按钮'
            },
            {
                prop: 'never',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '持久存在'
            },
            {
                prop: 'high-color',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '增强色，如果设置，则组件颜色与主题色取反'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否为无箭头'
            },
            {
                prop: 'animation-name',
                type: 'string',
                required: 'false',
                default: 'zov-fade',
                values: '-',
                explain: '显示隐藏动画名'
            },
            {
                prop: 'auto-popup',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '自动展开'
            }
        ]
    }
]

export default {
    name: 'Tooltip-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Placement, Trigger],
            api
        }
    }
}
</script>
