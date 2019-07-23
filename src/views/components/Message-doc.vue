<template>
    <ComponentExampleContainer
        component-name="Message 全局消息"
        desc="轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。"
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
import Base from '@/examples/message/Base.vue?demo'
import Render from '@/examples/message/Render.vue?demo'
import Closable from '@/examples/message/Closable.vue?demo'
import AlwaysShow from '@/examples/message/AlwaysShow.vue?demo'

const apiList = [
    {
        title: 'Message 参数',
        type: 'props',
        data: [
            {
                prop: 'title',
                type: 'string',
                required: 'false',
                default: '消息',
                values: '-',
                explain: '标题'
            },
            {
                prop: 'text',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '内容'
            },
            {
                prop: 'duration',
                type: 'number',
                required: 'false',
                default: '3000ms',
                values: '-',
                explain: '消息停留时间，设为0则一直停留'
            },
            {
                prop: 'onClose',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '消息消失时的回调函数'
            },
            {
                prop: 'render',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '返回vnode来渲染消息内容'
            },
            {
                prop: 'closable',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否显示关闭按钮'
            }
        ]
    }
]

export default {
    name: 'Message-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Render, Closable, AlwaysShow],
            apiList
        }
    }
}
</script>
