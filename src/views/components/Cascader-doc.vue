<template>
    <ComponentExampleContainer
        component-name="Cascader 级联选择"
        :apiList="apiList"
    >
        <template #desc>
            <p>
                从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。
            </p>
            <p>可以一次性完成层级选择，体验更好。</p>
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
import Base from '@/examples/cascader/Base.vue?demo'
import Multiple from '@/examples/cascader/Multiple.vue?demo'
import Searchable from '@/examples/cascader/Searchable.vue?demo'
import Priority from '@/examples/cascader/Priority.vue?demo'

let CascaderApi = [
    {
        title: 'Cascader Props',
        type: 'props',
        data: [
            {
                prop: 'data',
                type: 'array',
                required: 'true',
                default: '[]',
                values: '-',
                explain: '组件可选的数据'
            },
            {
                prop: 'value',
                type: 'Array || String || Number',
                required: 'true',
                default: '[]',
                values: '-',
                explain: '当前已选项的数据，格式参照示例说明'
            },
            {
                prop: 'value-name',
                type: 'string',
                required: 'false',
                default: 'value',
                values: '-',
                explain: 'value的映射key，说明：选择后，暴露的value'
            },
            {
                prop: 'label-name',
                type: 'string',
                required: 'false',
                default: 'label',
                values: '-',
                explain: 'label的映射key，说明：选择后select-head上显示的文案'
            },
            {
                prop: 'query-name',
                type: 'string',
                required: 'false',
                default: 'this.labelName',
                values: '-',
                explain:
                    '按哪个字段搜索，说明：查询依赖字段，`value` || `label`'
            },
            {
                prop: 'child-name',
                type: 'string',
                required: 'false',
                default: 'children',
                values: '-',
                explain: '分组数据中children字段的映射key'
            },
            {
                prop: 'multiple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否为多选'
            },
            {
                prop: 'filterable',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否为可搜索'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: 'drop容器的尖角'
            },
            {
                prop: 'placeholder',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '输入框占位符'
            },
            {
                prop: 'autofocus',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '自动获取焦点'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否为不可用'
            },
            {
                prop: 'no-data-text',
                type: 'string',
                required: 'false',
                default: '无数据...',
                values: '-',
                explain: '无数据文案'
            },
            {
                prop: 'everyoneOptional',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '规定每列的项可选'
            },
            {
                prop: 'whichColumnOptional ',
                type: 'array',
                required: 'false',
                default: '[]',
                values: '-',
                explain: '规定哪一列的项可选'
            }
        ]
    },
    {
        title: 'Cascader Events',
        type: 'events',
        data: [
            {
                event: 'on-open-change',
                callbackParam: 'true | false',
                explain: '组件drop呼出、收起的回调'
            },
            {
                event: 'on-change',
                callbackParam: '单选:当前所选项的item，多选:已选所有项的items',
                explain: '组件值发生变化后的回调'
            }
        ]
    }
]

export default {
    name: 'Cascader-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Multiple, Searchable, Priority],
            apiList: [...CascaderApi]
        }
    }
}
</script>
