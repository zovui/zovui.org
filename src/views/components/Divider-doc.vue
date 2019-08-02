<template>
    <ComponentExampleContainer
        component-name="Divider 分割线"
        :apiList="apiList"
    >
        <template #desc>
            <p>区域内容的分割线。</p>
            <p>对不同章节的文本段落进行分割。</p>
            <p>对行内文字/链接进行分割，例如表格的操作列。</p>
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
import Horizontal from '@/examples/divider/Horizontal.vue?demo'
import Vertical from '@/examples/divider/Vertical.vue?demo'
import TitlePosition from '@/examples/divider/TitlePosition.vue?demo'

let DividerApi = [
    {
        title: 'Affix props',
        type: 'props',
        data: [
            {
                prop: 'dashed',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否为虚线'
            },
            {
                prop: 'dotted',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否为点状线'
            },
            {
                prop: 'orientation',
                type: 'string',
                required: 'false',
                default: 'center',
                values: 'left、right、center',
                explain: '分割线标题的位置'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: 'horizontal',
                values: 'horizontal、vertical',
                explain: '水平还是垂直类型'
            }
        ]
    }
]

export default {
    name: 'Divider-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Horizontal, Vertical, TitlePosition],
            apiList: [...DividerApi]
        }
    }
}
</script>
