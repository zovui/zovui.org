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
import Base from '@/examples/slider/Base.vue?demo'
import MinMax from '@/examples/slider/MinMax.vue?demo'
import TooltipVisible from '@/examples/slider/TooltipVisible.vue?demo'
import TipFormatter from '@/examples/slider/TipFormatter.vue?demo'
import Range from '@/examples/slider/Range.vue?demo'
import Step from '@/examples/slider/Step.vue?demo'
import Marks from '@/examples/slider/Marks.vue?demo'
import MarksWithStep from '@/examples/slider/MarksWithStep.vue?demo'
import MarksWithOnlyMarks from '@/examples/slider/MarksWithOnlyMarks.vue?demo'
import Vertical from '@/examples/slider/Vertical.vue?demo'

const SliderApi = [
    {
        title: 'Slider props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: 'Slider组件的值，可用v-model 双向绑定数据'
            },
            {
                prop: 'min',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: 'Slider最小值'
            },
            {
                prop: 'max',
                type: 'number',
                required: 'false',
                default: '100',
                values: '-',
                explain: 'Slider最大值'
            },
            {
                prop: 'tooltipVisible',
                type: 'string',
                required: 'false',
                default: 'default',
                values: ['default', 'hidden', 'always'].join(' | '),
                explain:
                    '控制点tooltip展示规则，default只有在拖拽时展示；hidden总是隐藏；always为总是展示'
            },
            {
                prop: 'tipFormatter',
                type: 'function',
                required: 'false',
                default: 'value => value.toString()',
                values: '-',
                explain: 'tooltip内容格式化'
            },
            {
                prop: 'range',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否启用范围选择模式'
            },
            {
                prop: 'step',
                type: 'number',
                required: 'false',
                default: '1',
                values: '-',
                explain: '步长'
            },
            {
                prop: 'marks',
                type: 'object',
                required: 'false',
                default: '-',
                values: '-',
                explain: '打标记'
            },
            {
                prop: 'only-marks',
                type: 'boolean',
                required: 'false',
                default: '-',
                values: '-',
                explain: '仅在设置marks时生效，是否只能拖拽到marks上'
            },
            {
                prop: 'vertical',
                type: 'boolean',
                required: 'false',
                default: '-',
                values: '-',
                explain: '是否使用垂直模式'
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
            examples: [
                Base,
                MinMax,
                TooltipVisible,
                TipFormatter,
                Range,
                Step,
                Marks,
                MarksWithStep,
                MarksWithOnlyMarks,
                Vertical
            ],
            apiList: [...SliderApi]
        }
    }
}
</script>
