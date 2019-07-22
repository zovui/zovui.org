<template>
    <ComponentExampleContainer
        component-name="Radio"
        desc="单选框；主要用于一组可选项单项选择，或者单独用于切换到选中状态。"
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
import Base from '@/examples/radio/Base.vue?demo'
import Name from '@/examples/radio/Name.vue?demo'
import WithRadioGroup from '@/examples/radio/WithRadioGroup.vue?demo'
import Border from '@/examples/radio/Border.vue?demo'
import Connected from '@/examples/radio/Connected.vue?demo'
import Disabled from '@/examples/radio/Disabled.vue?demo'
import Size from '@/examples/radio/Size.vue?demo'
import Vertical from '@/examples/radio/Vertical.vue?demo'

const RadioApi = [
    {
        title: 'Radio props',
        type: 'props',
        data: [
            {
                prop: 'label',
                type: 'string|number|boolean|object',
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
                explain: '是否禁用当前项'
            }
        ]
    },
    {
        title: 'Radio events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: '当前选中项的值',
                explain: 'Radio组件单独使用并且选中值发生改变时触发'
            }
        ]
    }
]
const RadioGroupApi = [
    {
        title: 'RadioGroup props',
        type: 'props',
        data: [
            {
                prop: 'name',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: '原生radio的name值，不设置时会自动生成'
            },
            {
                prop: 'value',
                type: 'string|number|boolean|object',
                required: 'false',
                default: '-',
                values: '-',
                explain: '当前选中值，可使用v-modal双向绑定'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用所有当前RadioGroup下的Radio'
            },
            {
                prop: 'border',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示边框'
            },
            {
                prop: 'connected',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '在显示边框的情况下是否组合'
            },
            {
                prop: 'buttonStyle',
                type: 'string',
                required: 'false',
                default: 'outline',
                values: ['outline', 'solid'].join(' | '),
                explain: '按钮样式，在border为true或group为true时生效'
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
        title: 'RadioGroup events',
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
    name: 'Radio-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [
                Base,
                Name,
                WithRadioGroup,
                Border,
                Connected,
                Disabled,
                Size,
                Vertical
            ],
            apiList: [...RadioApi, ...RadioGroupApi]
        }
    }
}
</script>
