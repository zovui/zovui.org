<template>
    <ComponentExampleContainer
        component-name="Spin 加载中"
        desc="当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。"
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
import Base from '@/examples/spin/Base.vue?demo'
import Cover from '@/examples/spin/Cover.vue?demo'
import Directive from '@/examples/spin/Directive.vue?demo'

const SpinApi = [
    {
        title: 'Spin props',
        type: 'props',
        data: [
            {
                prop: 'spinname',
                type: 'string',
                required: 'false',
                default: 'loading',
                values: ['loading', 'dbcircle'].join(' | '),
                explain: '控制spin展示的样式'
            },
            {
                prop: 'cover',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '控制spin是否覆盖到slot default内容的上层显示'
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
            examples: [Base, Cover, Directive],
            apiList: [...SpinApi]
        }
    }
}
</script>
