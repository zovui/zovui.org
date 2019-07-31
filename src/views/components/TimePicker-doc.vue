<template>
    <ComponentExampleContainer
        component-name="TimePicker 时间选择器"
        desc="选择或输入标准时间，支持选择范围。"
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
import Base from '@/examples/time-picker/Base.vue?demo'
import Disabled from '@/examples/time-picker/Disabled.vue?demo'

const api = [
    {
        title: 'TimePicker props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '组件的值，可用v-model'
            },
            {
                prop: 'multiple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否多选，仅在 date、week、month、year 下可用'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: 'drop容器的尖角'
            },
            {
                prop: 'placeholder',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '输入框占位文案'
            },
            {
                prop: 'autofocus',
                type: 'string',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '自动获取焦点'
            },
            {
                prop: 'format',
                type: 'string',
                required: 'false',
                default: '12小时下为hh:mm:ss a；24小时下为HH:mm:ss',
                values: '-',
                explain: '时间格式'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用选择器'
            },
            {
                prop: 'disabled-times',
                type: 'object',
                required: 'false',
                default: '{h: [], m: [], s: []}',
                values: '-',
                explain:
                    '限制禁止选中的时间，数据格式为： { h: [1, 2], m: [...], s: [...] }'
            },
            {
                prop: 'hide-disabled-options',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否隐藏禁止选中的时间点'
            },
            {
                prop: 'use12HourSystem',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否采用12小时制'
            },
            {
                prop: 'size',
                type: 'string',
                required: 'false',
                default: 'default',
                values: ['small', 'default', 'large'].join(' | '),
                explain: '选择器组件的大小'
            },
            {
                prop: 'steps',
                type: 'Array',
                required: 'false',
                default: '[1,1,1]',
                values: '-',
                explain: '时分秒的步长'
            }
        ]
    },
    {
        title: 'TimePicker events',
        type: 'events',
        data: [
            {
                event: 'on-open-change',
                callbackParam: '展开状态boolean值',
                explain: '组件drop呼出、收起的回调'
            },
            {
                event: 'on-change',
                callbackParam:
                    '单选【当前所选项的item】，多选【已选所有项的items】',
                explain: '组件值发生变化后的回调'
            }
        ]
    }
]

export default {
    name: 'TimePicker-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Disabled],
            api
        }
    }
}
</script>
