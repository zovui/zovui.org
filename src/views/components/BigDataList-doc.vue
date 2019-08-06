<template>
    <ComponentExampleContainer
        component-name="BigDataList 大数据列表"
        :apiList="api"
    >
        <template #desc>
            用来处理和优化大量选项数据的选择搜索功能的组件。<br /><br />
            注意：由于BigDataList组件目的为承载较大数据，所以与Select组件有一下区别：<br /><br />
            1、少了`filterable`、`child-name`属性，也就是说默认支持搜索。<br />
            2、BigDataList组件中应用了WebWorker，因此兼容性需据WebWorker决定。<br />
            3、不支持分组数据，内部应用LongList组件优化dom渲染数量，因此暂不支持不规则列表项。<br />
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
import Base from '@/examples/big-data-list/Base.vue?demo'
import BigData from '@/examples/big-data-list/BigData.vue?demo'

const api = [
    {
        title: 'BigDataList props',
        type: 'props',
        data: [
            {
                prop: 'data',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '组件所需要的数据'
            },
            {
                prop: 'value',
                type: 'Array | string | number',
                required: 'true',
                default: '-',
                values: '-',
                explain: '组件输出的值，支持v-model'
            },
            {
                prop: 'value-name',
                type: 'string',
                required: 'false',
                default: 'value',
                values: '-',
                explain: 'value的映射key'
            },
            {
                prop: 'label-name',
                type: 'string',
                required: 'false',
                default: 'label',
                values: '-',
                explain: 'label的映射key'
            },
            {
                prop: 'query-name',
                type: 'string',
                required: 'false',
                default: 'label-name',
                values: '-',
                explain: '按哪个字段搜索'
            },
            {
                prop: 'multiple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否支持多选'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: 'drop容器的箭头'
            },
            {
                prop: 'placeholder',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '占位文案'
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
                explain: '是否禁用'
            },
            {
                prop: 'no-data-text',
                type: 'string',
                required: 'false',
                default: '无数据...',
                values: '-',
                explain: '无数据文案'
            }
        ]
    },
    {
        title: 'BigDataList events',
        type: 'events',
        data: [
            {
                event: 'on-open-change',
                callbackParam: '是否收起drop的boolean值',
                explain: '组件drop呼出、收起的回调'
            },
            {
                event: 'on-change',
                callbackParam:
                    '单选【当前所选项的item】，多选【已选所有项的items】',
                explain: '组件值发生变化后的回调'
            }
        ]
    }
]

export default {
    name: 'BigDataList-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, BigData],
            api
        }
    }
}
</script>
