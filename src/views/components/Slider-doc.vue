<template>
    <ComponentExampleContainer
        component-name="Slider 布局"
        desc="滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。"
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

const SliderApi = [
    {
        title: 'Slider props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '侧边栏是否收起，可使用 v-model 双向绑定数据'
            }
        ]
    },
    {
        title: 'Slider events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: 'Slider最后的值',
                explain: '当Slider值发生改变时触发的事件'
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
            examples: [],
            apiList: [...SliderApi]
        }
    }
}
</script>
