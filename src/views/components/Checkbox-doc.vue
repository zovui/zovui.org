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
import Base from '@/examples/checkbox/Base.vue?demo'
import WithCheckboxGroup from '@/examples/checkbox/WithCheckboxGroup.vue?demo'
import Disabled from '@/examples/checkbox/Disabled.vue?demo'
import Chain from '@/examples/checkbox/Chain.vue?demo'

const CheckboxApi = [
    {
        title: 'Checkbox props',
        type: 'props',
        data: [
            {
                prop: 'label',
                type: 'string',
                required: 'true',
                default: '-',
                values: '-',
                explain: '当前项的值'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用当前checkbox'
            },
            {
                prop: 'indeterminate',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否展示为半选中状态'
            }
        ]
    },
    {
        title: 'Checkbox events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: '当前选中项的值',
                explain: 'Checkbox组件单独使用并且选中值发生改变时触发'
            }
        ]
    }
]
const CheckboxGroupApi = [
    {
        title: 'CheckboxGroup props',
        type: 'props',
        data: [
            {
                prop: 'name',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '原生checkbox的name值，不设置时会自动生成'
            },
            {
                prop: 'value',
                type: 'Array',
                required: 'false',
                default: '[]',
                values: '-',
                explain: '当前选中值，可使用v-modal双向绑定'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用所有当前CheckboxGroup下的checkbox'
            },
            {
                prop: 'vertical',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否纵向布局'
            }
        ]
    },
    {
        title: 'CheckboxGroup events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: '当前选中项的值',
                explain: '选中值发生改变时触发'
            }
        ]
    }
]

export default {
    name: 'Checkbox-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, WithCheckboxGroup, Disabled, Chain],
            apiList: [...CheckboxApi, ...CheckboxGroupApi]
        }
    }
}
</script>
