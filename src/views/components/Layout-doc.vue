<template>
    <ComponentExampleContainer
        component-name="Layout 布局"
        desc="布局组件，可对页面进行整体布局"
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
import TopBottom from '@/examples/layout/TopBottom.vue?demo'
import LeftRight from '@/examples/layout/LeftRight.vue?demo'
import TopMidBottom from '@/examples/layout/TopMidBottom.vue?demo'
import WithMenu from '@/examples/layout/WithMenu.vue?demo'

const SiderApi = [
    {
        title: 'Sider props',
        columns: [
            {
                title: '属性',
                key: 'prop'
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '是否必传',
                key: 'required'
            },
            {
                title: '默认值',
                key: 'default'
            },
            {
                title: '可选值',
                key: 'values'
            },
            {
                title: '说明',
                key: 'explain'
            }
        ],
        data: [
            {
                prop: 'breakpoint',
                type: 'string',
                required: 'false',
                default: '-',
                values: ['xs', 'sm', 'md', 'lg', 'xl'].join(' | '),
                explain:
                    '触发响应式布局的断点\n' +
                    "xs: '480px',\n" +
                    "sm: '768px',\n" +
                    "md: '992px',\n" +
                    "lg: '1200px',\n" +
                    "xl: '1600px'"
            },
            {
                prop: 'value',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '侧边栏是否收起，可使用 v-model 双向绑定数据'
            },
            {
                prop: 'width',
                type: 'string | number',
                required: '240',
                default: '-',
                values: '-',
                explain: '宽度'
            },
            {
                prop: 'collapsed-width',
                type: 'number | string',
                required: 'false',
                default: '64',
                values: '-',
                explain: '收起状态下的宽度'
            },
            {
                prop: 'collapsed-trigger',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '显示默认触发器'
            }
        ]
    },
    {
        title: 'Sider events',
        columns: [
            {
                title: '事件名',
                key: 'event'
            },
            {
                title: '回调参数',
                key: 'callbackParam'
            },
            {
                title: '说明',
                key: 'explain'
            }
        ],
        data: [
            {
                event: 'on-collapse',
                callbackParam: 'isCollapsed 展开状态, boolean类型',
                explain: '展开-收起时的回调'
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
            examples: [TopBottom, LeftRight, TopMidBottom, WithMenu],
            apiList: [...SiderApi]
        }
    }
}
</script>
