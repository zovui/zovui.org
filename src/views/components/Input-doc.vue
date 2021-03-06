<template>
    <ComponentExampleContainer component-name="Input" :apiList="apiList">
        <template #desc>
            输入框；基本表单组件，在原生控件基础上进行了功能扩展。
            一切vue对原生input支持的功能都将支持在ZovInput组件上。
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
import Base from '@/examples/input/Base.vue?demo'
import Disabled from '@/examples/input/Disabled.vue?demo'
import Readonly from '@/examples/input/Readonly.vue?demo'
import Decoration from '@/examples/input/Decoration.vue?demo'
import Clearable from '@/examples/input/Clearable.vue?demo'
import EnhancedPassword from '@/examples/input/EnhancedPassword.vue?demo'
import Size from '@/examples/input/Size.vue?demo'
const InputApi = [
    {
        title: 'Input props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'string|number',
                required: 'true',
                default: "''",
                values: '-',
                explain: '当前输入框的值，v-model时对应的值'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: 'text',
                values: 'html5支持的input类型',
                explain: '指定输入框的类型'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用输入框'
            },
            {
                prop: 'readonly',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '输入框是否只读'
            },
            {
                prop: 'placeholder',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '占位文字'
            },
            {
                prop: 'clearable',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示输入框清除按钮'
            },
            {
                prop: 'eye',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '当输入框类型为password时，是否启用可见密码的交互'
            },
            {
                prop: 'size',
                type: 'string',
                required: 'false',
                default: 'default',
                values: ['small', 'default', 'large'].join(' | '),
                explain: '选择不同大小的输入框'
            },
            {
                prop: 'prefix',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '输入框的前缀修饰iconname'
            },
            {
                prop: 'suffix',
                type: 'string',
                required: 'false',
                default: "''",
                values: '-',
                explain: '输入框的后缀修饰iconname'
            }
        ]
    },
    {
        title: 'Input slots',
        type: 'slots',
        data: [
            {
                name: 'prefix',
                explain: '输入框的前缀修饰'
            },
            {
                name: 'suffix',
                explain: '输入框的后缀修饰'
            }
        ]
    },
    {
        title: 'Input events',
        type: 'events',
        data: [
            {
                event: 'input',
                callbackParam: '当前输入框的值',
                explain: '输入框值变化时触发'
            }
        ]
    }
]

export default {
    name: 'Input-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [
                Base,
                Disabled,
                Readonly,
                Decoration,
                Clearable,
                EnhancedPassword,
                Size
            ],
            apiList: [...InputApi]
        }
    }
}
</script>
