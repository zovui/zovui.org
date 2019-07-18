<template>
    <ComponentExampleContainer
        component-name="LoadingBar 加载进度条"
        :api-list="apiList"
    >
        <template #desc>
            顶部加载进度条，用于展示页面或者其他异步动作的载入进度<br /><br />
            通过Vue原型上的$LoadingBar进行调用
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
import Base from '@/examples/loading-bar/Base.vue?demo'

const LoadingApi = [
    {
        title: 'LoadingBar methods',
        type: 'methods',
        data: [
            {
                event: 'start',
                returnValue: '-',
                explain: '进度为0%，开始变化进度条进度'
            },
            {
                event: 'finish',
                returnValue: '-',
                explain: '进度变为100%'
            },
            {
                event: 'warning',
                returnValue: '-',
                explain: '进度变为100%，状态变为警告状态'
            },
            {
                event: 'error',
                returnValue: '-',
                explain: '进度变为100%，状态变为错误状态'
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
            examples: [Base],
            apiList: [...LoadingApi]
        }
    }
}
</script>
