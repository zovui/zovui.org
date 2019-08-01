<template>
    <ComponentExampleContainer
        component-name="Affix 图钉"
        desc="使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。"
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
import Base from '@/examples/affix/Base.vue?demo'
import Deviation from '@/examples/affix/Deviation.vue?demo'
import FixedBottom from '@/examples/affix/FixedBottom.vue?demo'
import FallBack from '@/examples/affix/FallBack.vue?demo'

let AffixApi = [
    {
        title: 'Affix props',
        type: 'props',
        data: [
            {
                prop: 'offset-top',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '距离窗口顶部达到指定偏移量后触发'
            },
            {
                prop: 'offset-bottom',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '距离窗口底部达到指定偏移量后触发'
            },
            {
                prop: 'placeholder',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '浮动后原位置的占位块'
            }
        ]
    },
    {
        title: 'Affix events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: 'true | false',
                explain: '在固定状态发生改变时触发'
            }
        ]
    }
]

export default {
    name: 'Affix-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Deviation, FixedBottom, FallBack],
            apiList: [...AffixApi]
        }
    }
}
</script>
