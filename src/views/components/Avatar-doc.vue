<template>
    <ComponentExampleContainer
        component-name="Avatar 头像"
        desc="用来代表用户或事物，支持图片、图标或字符展示。"
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

const api = [
    {
        title: 'Avatar props',
        type: 'props',
        data: [
            {
                prop: 'shape',
                type: 'string',
                required: 'false',
                default: 'circle',
                values: ['circle', 'square'].join(' | '),
                explain: '指定头像的形状'
            },
            {
                prop: 'size',
                type: 'string',
                required: 'false',
                default: 'default',
                values: ['large', 'small', 'default'].join(' | '),
                explain: '设置头像的大小'
            },
            {
                prop: 'src',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '图片类头像的资源地址'
            },
            {
                prop: 'iconname',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '设置头像的图标类型'
            },
            {
                prop: 'custom',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '自定义图标'
            },
            {
                prop: 'title',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '当存在src属性时，鼠标hover时的提示信息'
            }
        ]
    },
    {
        title: 'Avatar events',
        type: 'events',
        data: [
            {
                event: 'on-error',
                callbackParam: 'event',
                explain: '加载图片不成功时触发'
            }
        ]
    }
]

export default {
    name: 'Avatar-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [],
            api
        }
    }
}
</script>
