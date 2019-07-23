<template>
    <ComponentExampleContainer
        component-name="Checkbox"
        desc="多选框；主要用于一组可选项多项选择，或者单独用于标记切换某种状态。"
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
import Base from '@/examples/select/Base.vue?demo'
import Filterable from '@/examples/select/Filterable.vue?demo'
import Disabled from '@/examples/select/Disabled.vue?demo'
import Multiple from '@/examples/select/Multiple.vue?demo'

const SelectApi = [
    {
        title: 'Select props',
        type: 'props',
        data: [
            {
                prop: 'data',
                type: 'Array',
                required: 'true',
                default: '-',
                values: '-',
                explain: '组件所需要的数据'
            },
            {
                prop: 'value',
                type: 'Array|string|number',
                required: 'true',
                default: '-',
                values: '-',
                explain: '组件对应的值，可用v-model'
            },
            {
                prop: 'value-name',
                type: 'string',
                required: 'false',
                default: 'value',
                values: '-',
                explain: '项的值，指定对应data中的数据取的键值'
            },
            {
                prop: 'label-name',
                type: 'string',
                required: 'false',
                default: 'label',
                values: '-',
                explain: '项的标签名，指定对应data中的数据取的键值'
            },
            {
                prop: 'query-name',
                type: 'string',
                required: 'false',
                default: 'value|label',
                values: '-',
                explain: '可搜索时，查找对应的键值'
            },
            {
                prop: 'multiple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否开启多选'
            },
            {
                prop: 'filterable',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否可搜索'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '下拉选项是否展示箭头'
            },
            {
                prop: 'placeholder',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '无选项被选时的文案占位符'
            },
            {
                prop: 'auto-focus',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否自动获得焦点'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用Select'
            },
            {
                prop: 'no-data-text',
                type: 'string',
                required: 'false',
                default: '无数据...',
                values: '-',
                explain: '当无数据情况下展示的内容'
            },
            {
                prop: 'child-name',
                type: 'string',
                required: 'false',
                default: 'children',
                values: '-',
                explain: '当对选项进行分组时，每个组数据下对应的选项列表的键值'
            }
        ]
    },
    {
        title: 'Select events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: '当前选中项的值',
                explain: 'Select组件单独使用并且选中值发生改变时触发'
            },
            {
                event: 'on-open-change',
                callbackParam: '是否展开下拉框的boolean值',
                explain: '展开或收起选项列表时触发的事件'
            }
        ]
    }
]

export default {
    name: 'Select-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Filterable, Disabled, Multiple],
            apiList: [...SelectApi]
        }
    }
}
</script>
