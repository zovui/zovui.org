<template>
    <ComponentExampleContainer
        component-name="Grid 栅格"
        desc="布局组件，将布局分为12份来进行布局"
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
import Base from '@/examples/grid/Base.vue?demo'
import Gutter from '@/examples/grid/Gutter.vue?demo'
import Order from '@/examples/grid/Order.vue?demo'
import Offset from '@/examples/grid/Offset.vue?demo'
import Sort from '@/examples/grid/Sort.vue?demo'
import Responsive from '@/examples/grid/Responsive.vue?demo'
import TopAlign from '@/examples/grid/TopAlign.vue?demo'
import BottomAlign from '@/examples/grid/BottomAlign.vue?demo'
import CenterAlign from '@/examples/grid/CenterAlign.vue?demo'

const RowApi = [
    {
        title: 'Row props',
        type: 'props',
        data: [
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: '-',
                values: 'flex',
                explain: '布局类型'
            },
            {
                prop: 'align',
                type: 'string',
                required: 'false',
                default: '-',
                values: ['top', 'middle', 'bottom'].join(' | '),
                explain: '垂直对齐方式'
            },
            {
                prop: 'justify',
                type: 'string',
                required: 'false',
                default: '-',
                values: [
                    'start',
                    'end',
                    'center',
                    'space-around',
                    'space-between'
                ].join(' | '),
                explain: '水平对齐方式'
            },
            {
                prop: 'gutter',
                type: 'number',
                required: 'false',
                default: '0',
                values: '无',
                explain: '列之间的间隔大小'
            },
            {
                prop: 'className',
                type: 'string',
                required: 'false',
                default: '-',
                values: '无',
                explain: '给Row组件根DOM元素添加的类名'
            }
        ]
    },
    {
        title: 'Row slots',
        type: 'slots',
        data: [
            {
                name: 'default',
                explain: '内容'
            }
        ]
    }
]

const ColApi = [
    {
        title: 'Col props',
        type: 'props',
        data: [
            {
                prop: 'span',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '列占位大小'
            },
            {
                prop: 'order',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '对应flex的order属性'
            },
            {
                prop: 'offset',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '偏移量'
            },
            {
                prop: 'push',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '-'
            },
            {
                prop: 'pull',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '-'
            },
            {
                prop: 'xs',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '超小尺寸屏幕（<=480px）'
            },
            {
                prop: 'sm',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '小尺寸屏幕（<=768px）'
            },
            {
                prop: 'md',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '中等大小屏幕（<=992px）'
            },
            {
                prop: 'lg',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '大屏幕（<=1200px）'
            },
            {
                prop: 'xl',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '超大屏幕（>=1600px）'
            },
            {
                prop: 'className',
                type: 'string|number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '给ow组件根DOM元素添加的类名'
            }
        ]
    },
    {
        title: 'Col slots',
        type: 'slots',
        data: [
            {
                name: 'default',
                explain: '内容'
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
                Gutter,
                Order,
                Offset,
                Sort,
                Responsive,
                TopAlign,
                BottomAlign,
                CenterAlign
            ],
            apiList: [...RowApi, ...ColApi]
        }
    }
}
</script>
