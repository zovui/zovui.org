<template>
    <ComponentExampleContainer
        component-name="Button 按钮"
        desc="基础组件，触发业务逻辑时使用。"
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
import Size from '@/examples/button/Size.vue?demo'
import Shape from '@/examples/button/Shape.vue?demo'
import Type from '@/examples/button/Type.vue?demo'
import Disable from '@/examples/button/Disable.vue?demo'
import CustomIcon from '@/examples/button/CustomIcon.vue?demo'
import Loading from '@/examples/button/Loading.vue?demo'
import NoText from '@/examples/button/NoText.vue?demo'
import Combination from '@/examples/button/Combination.vue?demo'

let ButtonApi = [
    {
        title: 'Button props',
        type: 'props',
        data: [
            {
                prop: 'looks',
                type: 'string',
                required: 'false',
                default: 'default',
                values:
                    'default, primary, dashed, text, info, success, warning, error',
                explain: '设置按钮类型'
            },
            {
                prop: 'shape',
                type: 'string',
                required: 'false',
                default: 'default',
                values: 'default, circle',
                explain: '设置按钮形状'
            },
            {
                prop: 'loading',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '设置按钮加载中状态'
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
                explain: '禁用按钮'
            },
            {
                prop: 'tag',
                type: 'string',
                required: 'false',
                default: 'button',
                values: '-',
                explain: '按钮元素类型'
            }
        ]
    }
]

let ButtonGroupApi = [
    {
        title: 'ButtonGroup props',
        type: 'props',
        data: [
            {
                prop: 'shape',
                type: 'string',
                required: 'false',
                default: 'default',
                values: 'default, circle',
                explain: '按钮组合形状'
            },
            {
                prop: 'vertical',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '按钮组是否纵向排列'
            }
        ]
    }
]

export default {
    name: 'Button-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [
                Size,
                Shape,
                Type,
                Disable,
                CustomIcon,
                Loading,
                NoText,
                Combination
            ],
            apiList: [...ButtonApi, ...ButtonGroupApi]
        }
    }
}
</script>
