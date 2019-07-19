<template>
    <ComponentExampleContainer
        component-name="Page 布局"
        desc="分页器，多用于信息列表，多页表格数据的展示控制。"
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
import Base from '@/examples/page/Base.vue?demo'

const PageApi = [
    {
        title: 'Page props',
        type: 'props',
        data: [
            {
                props: 'current',
                type: 'number',
                required: 'false',
                default: '1',
                values: '-',
                explain: '当前页码，支持 .sync 修饰符'
            },
            {
                props: 'total',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: '数据总数'
            },
            {
                props: 'page-size',
                type: 'number',
                required: 'false',
                default: '10',
                values: '-',
                explain: '每页条数'
            },
            {
                props: 'page-size-opts',
                type: 'Array',
                required: 'false',
                default: '[{value:10},{value:20},{value:30},{value:40}]',
                values: '-',
                explain: '每页条数切换的配置'
            },
            {
                props: 'size',
                type: 'string',
                required: 'false',
                default: '-',
                values: 'small | undefined',
                explain: '可选值为small（迷你版）或不填（默认）'
            },
            {
                props: 'simple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '简洁版'
            },
            {
                props: 'show-total',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '显示总数'
            },
            {
                props: 'show-elevator',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '显示电梯，可以快速切换到某一页'
            },
            {
                props: 'show-sizer',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '显示分页，用来改变page-size'
            },
            {
                props: 'class-name',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '类名'
            },
            {
                props: 'styles',
                type: 'object',
                required: 'false',
                default: '-',
                values: '-',
                explain: '自定义 style 样式'
            },
            {
                props: 'prev-text',
                type: 'string',
                required: 'false',
                default: '上一页',
                values: '-',
                explain: '替代图标显示的上一页文字'
            },
            {
                props: 'next-text',
                type: 'string',
                required: 'false',
                default: '下一页',
                values: '-',
                explain: '自定义 style 样式'
            }
        ]
    },
    {
        title: 'Page events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: '页码',
                explain: '页码改变的回调，返回改变后的页码'
            },
            {
                event: 'on-page-size-change',
                callbackParam: 'page-size',
                explain: '切换每页条数时的回调，返回切换后的每页条数'
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
            apiList: [...PageApi]
        }
    }
}
</script>
