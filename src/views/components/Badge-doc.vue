<template>
    <ComponentExampleContainer
        component-name="Badge 徽标"
        desc="主要用于通知未读数的角标，提醒用户点击。"
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
import Base from '@/examples/badge/Base.vue?demo'
import RedDot from '@/examples/badge/RedDot.vue?demo'
import Overflow from '@/examples/badge/Overflow.vue?demo'
import CustomStyle from '@/examples/badge/CustomStyle.vue?demo'
import CustomCont from '@/examples/badge/CustomCont.vue?demo'
import StatePoint from '@/examples/badge/StatePoint.vue?demo'
import SetColor from '@/examples/badge/SetColor.vue?demo'

let BadgeApi = [
    {
        title: 'Badge props',
        type: 'props',
        data: [
            {
                prop: 'count',
                type: 'number',
                required: 'false',
                default: '-',
                values: '-',
                explain:
                    '显示的数字，大于 overflowCount 时，显示${overflowCount}+，为0 时隐藏'
            },
            {
                prop: 'overflow-count',
                type: 'number | string',
                required: 'false',
                default: '99',
                values: '-',
                explain: '展示封顶的数字值'
            },
            {
                prop: 'dot',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain:
                    '不展示数字，只有一个小红点，如需隐藏 dot，需要设置 count 为 0'
            },
            {
                prop: 'class-name',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '自定义的class名称，dot 模式下无效'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: '-',
                values: 'success、primary、normal、error、warning、info',
                explain: '使用预设的颜色'
            },
            {
                prop: 'show-zero',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '当数值为 0 时，是否展示 Badge'
            },
            {
                prop: 'status',
                type: 'string',
                required: 'false',
                default: '-',
                values: 'success、processing、default、error、warning',
                explain: '设置 Badge 为状态点'
            },
            {
                prop: 'text',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '自定义内容，如果设置了 status，则为状态点的文本'
            },
            {
                prop: 'offset',
                type: 'array',
                required: 'false',
                default: '-',
                values: '-',
                explain: '设置状态点的位置偏移，格式为 [x, y]'
            }
        ]
    }
]

export default {
    name: 'Badge-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [
                Base,
                RedDot,
                Overflow,
                CustomStyle,
                CustomCont,
                StatePoint,
                SetColor
            ],
            apiList: [...BadgeApi]
        }
    }
}
</script>
