<template>
    <ComponentExampleContainer
        component-name="ColorPicker 颜色选择器"
        desc="用于颜色选择，支持多种颜色格式，支持颜色预设。"
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
import Base from '@/examples/color-picker/Base.vue?demo'
import Disabled from '@/examples/color-picker/Disabled.vue?demo'

const ColorPickerApi = [
    {
        title: 'ColorPicker props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'string',
                required: 'true',
                default: "''",
                values: '-',
                explain: '当前颜色的值，可用v-model'
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
                prop: 'format',
                type: 'string',
                required: 'false',
                default: 'rgb',
                values: ['hsl', 'hsv', 'hex', 'rgb'].join(' | '),
                explain: '组件输出值的格式'
            },
            {
                prop: 'recommend',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示推荐色'
            },
            {
                prop: 'colors',
                type: 'Array',
                required: 'false',
                default: [
                    '#2d8cf0',
                    '#19be6b',
                    '#ff9900',
                    '#ed3f14',
                    '#00b5ff',
                    '#19c919',
                    '#f9e31c',
                    '#ea1a1a',
                    '#9b1dea',
                    '#00c2b1',
                    '#ac7a33',
                    '#1d35ea',
                    '#8bc34a',
                    '#f16b62',
                    '#ea4ca3',
                    '#0d94aa',
                    '#febd79',
                    '#5d4037',
                    '#00bcd4',
                    '#f06292',
                    '#cddc39',
                    '#607d8b',
                    '#000000',
                    '#ffffff'
                ],
                values: '-',
                explain: '推荐的颜色'
            },
            {
                prop: 'size',
                type: 'string',
                required: 'false',
                default: 'default',
                values: ['small', 'default', 'large'].join(' | '),
                explain: '组件尺寸'
            },
            {
                prop: 'autofocus',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否自动获取焦点'
            },
            {
                prop: 'no-arrow',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否显示drop容器的尖角'
            }
        ]
    },
    {
        title: 'ColorPicker events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: 'tinycolor对象',
                explain: '组件值发生变化后的回调，形参为tinycolor对象'
            },
            {
                event: 'on-open-change',
                callbackParam: '是否收起',
                explain: '组件drop呼出、收起的回调'
            },
            {
                event: 'on-active-change',
                callbackParam: 'tinycolor对象',
                explain: '面板中当前显示的颜色发生改变时触发的回调'
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
            examples: [Base, Disabled],
            apiList: [...ColorPickerApi]
        }
    }
}
</script>
