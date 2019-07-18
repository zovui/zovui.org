<template>
    <ComponentExampleContainer
        component-name="Breadcrumb"
        desc="面包屑"
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
import { Base, Separator, ReactItem } from '@/examples/breadcrumb'

const api = [
    {
        title: 'Breadcrumb props',
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
        title: 'Breadcrumb 事件',
        type: 'events',
        data: [
            {
                event: 'click',
                callbackParam: 'event对象',
                explain: '点击事件'
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
            examples: [Base, Separator, ReactItem],
            api
        }
    }
}
</script>
