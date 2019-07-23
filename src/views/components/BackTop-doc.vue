<template>
    <ComponentExampleContainer
        component-name="BackTop 返回顶部"
        desc="当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。"
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

const apiList = [
    {
        title: 'Breadcrumb props',
        type: 'props',
        data: [
            {
                prop: 'height',
                type: 'number',
                required: 'false',
                default: '400',
                values: '-',
                explain: '页面滚动高度达到该值时才显示BackTop组件'
            },
            {
                prop: 'bottom',
                type: 'number',
                required: 'false',
                default: '30',
                values: '-',
                explain: '组件距离底部的距离'
            },
            {
                prop: 'right',
                type: 'number',
                required: 'false',
                default: '30',
                values: '-',
                explain: '组件距离右部的距离'
            },
            {
                prop: 'duration',
                type: 'number',
                required: 'false',
                default: '1000ms',
                values: '-',
                explain: '滚动动画持续时间'
            }
        ]
    },
    {
        title: 'BackTop events',
        type: 'events',
        data: [
            {
                event: 'on-click',
                callbackParam: '-',
                explain: '点击时触发'
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
            examples: [],
            apiList
        }
    }
}
</script>
