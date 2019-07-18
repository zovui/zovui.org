<template>
    <ComponentExampleContainer
        component-name="Drop 下拉菜单"
        :api-list="apiList"
    >
        <template #desc>
            常用于下拉面板，开发者用于开发一些下拉选择组件，如级联、select。<br />
            Drop应用了Tooltip组件，除了本页列出的props，其他props可查阅Tooltip组件
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
import Base from '@/examples/drop/Base.vue?demo'
import Hover from '@/examples/drop/Hover.vue?demo'
import NoArrow from '@/examples/drop/NoArrow.vue?demo'
import ChangeDirection from '@/examples/drop/ChangeDirection.vue?demo'

const DropApi = [
    {
        title: 'Drop props',
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
                prop: 'value',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '控制是否展现Drop，可v-model控制'
            }
        ]
    },
    {
        title: 'Drop methods',
        columns: [
            {
                title: '方法名',
                key: 'name'
            },
            {
                title: '说明',
                key: 'explain'
            }
        ],
        data: [
            {
                event: 'dropUpdate',
                explain: '供组件更新popper的位置'
            }
        ]
    },
    {
        title: 'Drop slots',
        columns: [
            {
                title: 'slot名',
                key: 'name'
            },
            {
                title: '说明',
                key: 'explain'
            }
        ],
        data: [
            {
                name: 'default',
                explain: 'Drop菜单里的内容'
            },
            {
                name: 'drop-head',
                explain: 'Drop所指向的内容'
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
            examples: [Base, Hover, NoArrow, ChangeDirection],
            apiList: [...DropApi]
        }
    }
}
</script>
