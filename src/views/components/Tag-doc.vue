<template>
    <ComponentExampleContainer
        component-name="Tag 标签"
        desc="进行标记和分类的小标签。"
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
import Type from '@/examples/tag/Type.vue?demo'
import Shape from '@/examples/tag/Shape.vue?demo'
import Disabled from '@/examples/tag/Disabled.vue?demo'
import Icon from '@/examples/tag/Icon.vue?demo'
import Async from '@/examples/tag/Async.vue?demo'
import NotText from '@/examples/tag/NotText.vue?demo'
import Delete from '@/examples/tag/Delete.vue?demo'
import Size from '@/examples/tag/Size.vue?demo'

const api = [
    {
        title: 'Tag props',
        type: 'props',
        data: [
            {
                prop: 'looks',
                type: 'string',
                required: 'false',
                default: 'default',
                values:
                    'default, primary, dashed, text, info, success, warning, error',
                explain: '设置标签类型'
            },
            {
                prop: 'shape',
                type: 'string',
                required: 'false',
                default: 'default',
                values: 'default, circle',
                explain: '设置标签形状'
            },
            {
                prop: 'loading',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '设置标签加载中状态'
            },
            {
                prop: 'spinname',
                type: 'string',
                required: 'false',
                default: 'loading',
                values: 'loading, dbcircle',
                explain: '加载中图标样式'
            },
            {
                prop: 'iconname',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '自定义图标名'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '禁用标签'
            },
            {
                prop: 'tag',
                type: 'string',
                required: 'false',
                default: 'button',
                values: '-',
                explain: '标签元素类型'
            }
        ]
    }
]

export default {
    name: 'Tag-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [
                Type,
                Shape,
                Disabled,
                Icon,
                Async,
                NotText,
                Delete,
                Size
            ],
            api
        }
    }
}
</script>
