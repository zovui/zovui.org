<template>
    <ComponentExampleContainer
        component-name="Tabs 标签页"
        desc="选项卡切换组件，常用于平级区域大块内容的的收纳和展现。"
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
import Base from '@/examples/tabs/Base.vue?demo'
import Roll from '@/examples/tabs/Roll.vue?demo'
import LabelPosition from '@/examples/tabs/LabelPosition.vue?demo'
import Sort from '@/examples/tabs/Sort.vue?demo'
import Disabled from '@/examples/tabs/Disabled.vue?demo'
import LazyLoad from '@/examples/tabs/LazyLoad.vue?demo'
import Cardification from '@/examples/tabs/Cardification.vue?demo'
import Closable from '@/examples/tabs/Closable.vue?demo'
import BeforeClose from '@/examples/tabs/BeforeClose.vue?demo'
import BeforeChange from '@/examples/tabs/BeforeChange.vue?demo'
import AddBtnBySlot from '@/examples/tabs/AddBtnBySlot.vue?demo'
import CustomLabel from '@/examples/tabs/CustomLabel.vue?demo'

let TabsApi = [
    {
        title: 'Tabs Props',
        type: 'props',
        data: [
            {
                prop: 'activeId',
                type: 'string',
                required: 'false',
                default: '第一个tabs的id',
                values: '-',
                explain: 'v-model对应的prop，激活的tab对应的id'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: 'border-card',
                values: 'border-card | card',
                explain: 'tabs类型'
            },
            {
                prop: 'tabPosition',
                type: 'string',
                required: 'false',
                default: 'top',
                values: 'top, bottom, left, right',
                explain: 'tab展示的位置'
            },
            {
                prop: 'beforeClose',
                type: 'Function',
                required: 'false',
                default: 'undefined',
                values: '-',
                explain: 'tab关闭时的钩子，可阻止关闭行为'
            },
            {
                prop: 'beforeChange',
                type: 'Function',
                required: 'false',
                default: 'undefined',
                values: '-',
                explain: 'tab切换时的钩子，可阻止切换tab的行为'
            },
            {
                prop: 'preventDefaultRemove',
                type: 'Boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '可阻止默认的删除行为'
            }
        ]
    },
    {
        title: 'Tabs Events',
        type: 'events',
        data: [
            {
                event: 'on-change',
                callbackParam: 'id值，当前tabs的id值',
                explain: '当tabs切换时触发, v-model对应的事件'
            },
            {
                event: 'on-add',
                callbackParam: '添加pane的id值',
                explain: '当添加tab时触发'
            },
            {
                event: 'on-remove',
                callbackParam: '删除pane的id值',
                explain: '当删除tab时触发'
            },
            {
                event: 'on-prev',
                callbackParam: '-',
                explain: '当tabs的nav可滚动时，点击上一页时触发'
            },
            {
                event: 'on-next',
                callbackParam: '-',
                explain: '当tabs的nav可滚动时，点击下一页时触发。'
            }
        ]
    },
    {
        title: 'Tabs Slots',
        type: 'slots',
        data: [
            {
                name: 'default',
                explain: 'TabPane的占位'
            },
            {
                name: 'extra',
                explain: '额外的内容'
            }
        ]
    }
]
let TabPaneApi = [
    {
        title: 'TabPane Props',
        type: 'props',
        data: [
            {
                prop: 'id',
                type: 'string',
                required: 'false',
                default: '-',
                values: '-',
                explain: 'tab的id'
            },
            {
                prop: 'label',
                type: 'string',
                required: 'true',
                default: "''",
                values: '-',
                explain: 'tab的label'
            },
            {
                prop: 'order',
                type: 'number',
                required: 'false',
                default: '0',
                values: '-',
                explain: 'tab展示顺序'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否禁用某tab'
            },
            {
                prop: 'lazy',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否懒加载'
            },
            {
                prop: 'closable',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否可关闭'
            }
        ]
    },
    {
        title: 'TabPane Slots',
        type: 'slots',
        data: [
            {
                name: 'label',
                explain: '自定义label内容'
            },
            {
                name: 'default',
                explain: 'tab对应的内容'
            }
        ]
    }
]
export default {
    name: 'Tabs-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [
                Base,
                Roll,
                LabelPosition,
                Sort,
                Disabled,
                LazyLoad,
                Cardification,
                Closable,
                BeforeClose,
                BeforeChange,
                AddBtnBySlot,
                CustomLabel
            ],
            apiList: [...TabsApi, ...TabPaneApi]
        }
    }
}
</script>
