<template>
    <ComponentExampleContainer
        component-name="Steps 步骤条"
        desc="拆分某项流程的步骤，引导用户按流程完成任务。"
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
import Base from '@/examples/steps/Base.vue?demo'
import AlignCenter from '@/examples/steps/AlignCenter.vue?demo'
import Status from '@/examples/steps/Status.vue?demo'

const api = [
    {
        title: 'Steps props',
        type: 'props',
        data: [
            {
                prop: 'current',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '当前步骤'
            },
            {
                prop: 'status',
                type: 'string',
                required: 'false',
                default: 'process',
                values: ['wait', 'process', 'finish', 'error'].join(' | '),
                explain: '当前状态'
            },
            {
                prop: 'size',
                type: 'string',
                required: 'false',
                default: '-',
                values: ['small'].join(' | '),
                explain: '步骤条的尺寸'
            },
            {
                prop: 'direction',
                type: 'string',
                required: 'false',
                default: 'horizontal',
                values: ['horizontal', 'vertical'].join(' | '),
                explain: '步骤条的方向'
            },
            {
                prop: 'space',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '每个step的间距，不填写将以百分比自适应间距'
            },
            {
                prop: 'align-center',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '居中展示(在direction为vertical时无效)'
            }
        ]
    },
    {
        title: 'Step props',
        type: 'props',
        data: [
            {
                prop: 'status',
                type: 'string',
                required: 'false',
                default: 'process',
                values: ['wait', 'process', 'finish', 'error'].join(' | '),
                explain: '当前状态'
            },
            {
                prop: 'title',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '标题'
            },
            {
                prop: 'content',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '步骤的详细描述'
            },
            {
                prop: 'icon',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '步骤的图标'
            }
        ]
    }
]

export default {
    name: 'Steps-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, AlignCenter, Status],
            api
        }
    }
}
</script>
