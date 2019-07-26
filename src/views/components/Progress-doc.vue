<template>
    <ComponentExampleContainer
        component-name="Progress 进度条"
        desc="展示操作或任务的当前进度，比如上传文件。"
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
import Base from '@/examples/progress/Base.vue?demo'
import StrokeWidth from '@/examples/progress/StrokeWidth.vue?demo'
import StrokeColor from '@/examples/progress/StrokeColor.vue?demo'

const ProgressApi = [
    {
        title: 'Progress props',
        type: 'props',
        data: [
            {
                prop: 'percent',
                type: 'number',
                required: 'true',
                default: '0',
                values: '-',
                explain: '进度条的百分比值'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: 'line',
                values: ['line'].join(' | '),
                explain: '样式类型'
            },
            {
                prop: 'format',
                type: 'Function',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '自定义进度信息样式，支持render函数'
            },
            {
                prop: 'textInside',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '进度信息是否展示在进度条里'
            },
            {
                prop: 'showInfo',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '进度信息是否展示'
            },
            {
                prop: 'strokeColor',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '进度条填充色'
            },
            {
                prop: 'strokeWidth',
                type: 'number',
                required: 'false',
                default: '8',
                values: '-',
                explain: '进度条宽度，单位px'
            },
            {
                prop: 'status',
                type: 'string',
                required: 'false',
                default: '8',
                values: ['normal', 'active', 'success', 'exception'].join(
                    ' | '
                ),
                explain: '进度条状态'
            }
        ]
    }
]

export default {
    name: 'Progress-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, StrokeWidth, StrokeColor],
            apiList: [...ProgressApi]
        }
    }
}
</script>
