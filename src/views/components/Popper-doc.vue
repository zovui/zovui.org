<template>
    <ComponentExampleContainer
        component-name="Popper 气泡提示"
        desc="Popper 与 Tooltip 类似，具有很多相同配置，不同点是 Popper 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。"
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
        title: 'Popper props',
        type: 'props',
        data: [
            {
                prop: 'placement',
                type: 'string',
                required: 'false',
                default: 'bottom',
                values: [
                    'left',
                    'right',
                    'top',
                    'bottom',
                    'left-top',
                    'right-top',
                    'left-bottom',
                    'right-bottom'
                ].join(' |  '),
                explain: '弹出所在的位置'
            },
            {
                prop: 'fix',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: 'popper是否使用fixed布局来定位'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否无箭头'
            }
        ]
    }
]

export default {
    name: 'Popper-doc',
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
