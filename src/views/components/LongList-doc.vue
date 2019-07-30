<template>
    <ComponentExampleContainer component-name="LongList 长列表" :apiList="api">
        <template #desc>
            LongList组件的作用是优化超长一维列表渲染性能问题，渲染窗口内的item，超出的不渲染<br />
            利用了 slot-scope
            将子组件数据回传到上层组件，所以子项上可以取到`props`字段。{item[当前项数据],index[当前项下标]}
        </template>
        <ComponentExample
            v-for="example of examples"
            :example="example"
            :key="example.__title"
        />
    </ComponentExampleContainer>
</template>

<script>
import { ComponentExampleContainer, ComponentExample } from '@/components'
import Base from '@/examples/long-list/Base.vue?demo'

const api = [
    {
        title: 'LongList props',
        type: 'props',
        data: [
            {
                prop: 'data',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '列表数据'
            },
            {
                prop: 'threshold',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain:
                    '阈值，指多渲染超出窗口的子项数，当具有滚动加速度时此项可以适当设置大一些'
            }
        ]
    }
]

export default {
    name: 'LongList-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base],
            api
        }
    }
}
</script>
