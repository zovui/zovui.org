<template>
    <ComponentExampleContainer
        component-name="Timeline"
        desc="时间轴，对一系列信息进行时间排序时，垂直地展示。"
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
import Base from '@/examples/timeline/Base.vue?demo'
import Pending from '@/examples/timeline/Pending.vue?demo'
import Mode from '@/examples/timeline/Mode.vue?demo'

const TimelineApi = [
    {
        title: 'Timeline props',
        type: 'props',
        data: [
            {
                prop: 'mode',
                type: 'string',
                required: 'false',
                default: 'left',
                values: [
                    'left',
                    'right',
                    'alternate-left',
                    'alternate-right'
                ].join(' | '),
                explain: '展现模式'
            },
            {
                prop: 'pending',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否处于pending状态'
            }
        ]
    },
    {
        title: 'Timeline slots',
        type: 'slots',
        data: [
            {
                name: 'default',
                explain: 'TimelineItem存放处'
            },
            {
                name: 'ghost-dot',
                explain: '自定义pending状态时幽灵节点的图标'
            },
            {
                name: 'ghost-content',
                explain: '自定义pending状态时幽灵节点的内容'
            }
        ]
    },
    {
        title: 'TimelineItem props',
        type: 'props',
        data: [
            {
                prop: 'color',
                type: 'string',
                required: 'false',
                default: 'primary',
                values: [
                    'primary',
                    'info',
                    'success',
                    'warning',
                    'error',
                    '其他合法的css色值字符串'
                ].join(' | '),
                explain: 'dot的边框颜色'
            }
        ]
    },
    {
        title: 'TimelineItem slots',
        type: 'slots',
        data: [
            {
                name: 'default',
                explain: 'TimelineItem内容'
            },
            {
                name: 'ghost-dot',
                explain: '自定义节点的图标'
            }
        ]
    }
]

export default {
    name: 'Breadcrumb-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Pending, Mode],
            apiList: [...TimelineApi]
        }
    }
}
</script>
