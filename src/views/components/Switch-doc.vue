<template>
    <ComponentExampleContainer
        component-name="Switch 开关"
        desc="在两种状态间切换时用到的开关选择器。"
        :api-list="apiList"
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
import Base from '@/examples/switch/Base.vue?demo'
import Disabled from '@/examples/switch/Disabled.vue?demo'

const SwitchApi = [
    {
        title: 'Switch props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '用于指定switch开关状态，v-model对应的prop'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用switch'
            },
            {
                prop: 'size',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: ['small', 'default', 'large'].join(' | '),
                explain: '控制switch的大小'
            }
        ]
    },
    {
        title: 'Switch events',
        type: 'events',
        data: [
            {
                name: 'on-change',
                callbackParam: 'switch当前的开关状态',
                explain: '当switch状态发生变化时的触发的事件'
            }
        ]
    },
    {
        title: 'Switch slots',
        type: 'slots',
        data: [
            {
                name: 'open',
                explain: '内嵌至switch打开状态时的内容插槽'
            },
            {
                name: 'close',
                explain: '内嵌至switch关闭状态时的内容插槽'
            }
        ]
    }
]

export default {
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Disabled],
            apiList: [...SwitchApi]
        }
    }
}
</script>
