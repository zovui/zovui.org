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

const TimelineApi = [
    {
        title: 'Timeline props',
        type: 'props',
        data: [
            {
                prop: 'separator',
                type: 'string',
                required: 'false',
                default: '/',
                values: '-',
                explain: '导航分隔符'
            },
            {
                prop: 'target',
                type: 'string',
                required: 'false',
                default: '_self',
                values: '-',
                explain: 'a链接的target属性值'
            }
        ]
    },
    {
        title: 'Timeline slots',
        type: 'slots',
        data: []
    },
    {
        title: 'TimelineItem props',
        type: 'props',
        data: [
            {
                prop: 'separator',
                type: 'string',
                required: 'false',
                default: '/',
                values: '-',
                explain: '导航分隔符'
            },
            {
                prop: 'target',
                type: 'string',
                required: 'false',
                default: '_self',
                values: '-',
                explain: 'a链接的target属性值'
            }
        ]
    },
    {
        title: 'TimelineItem slots',
        type: 'slots',
        data: []
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
            examples: [],
            apiList: []
        }
    }
}
</script>
