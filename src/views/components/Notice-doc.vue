<template>
    <ComponentExampleContainer
        component-name="Notice 通知消息"
        :apiList="apiList"
    >
        <template #desc>
            在界面右上角显示可关闭的全局通知，常用于以下场景：
            <ul>
                <li>通知内容带有描述信息</li>
                <li>系统主动推送</li>
            </ul>
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
import Base from '@/examples/notice/Base.vue?demo'
import Render from '@/examples/notice/Render.vue?demo'
import Closable from '@/examples/notice/Closable.vue?demo'
import AlwaysShow from '@/examples/notice/AlwaysShow.vue?demo'

const apiList = [
    {
        title: 'Notice 参数',
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
    name: 'Notice-doc',
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
