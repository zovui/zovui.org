<template>
    <ComponentExampleContainer component-name="Modal 对话框" :apiList="api">
        <template #desc>
            模态对话框，在浮层中显示，引导用户进行相关操作。<br />
            Modal提供了两种用法，普通组件使用和封装好的简洁实例调用。
        </template>
        <ComponentExample
            v-for="example of examples"
            :example="example"
            :key="example.__title"
        />
        <template #after-api>
            <ComponentApi
                :title="instanceApi.title"
                :columns="instanceApi.columns"
                :data="instanceApi.data"
            />
            <ComponentApi
                :title="instanceConfigApi.title"
                :type="instanceConfigApi.type"
                :data="instanceConfigApi.data"
            />
        </template>
    </ComponentExampleContainer>
</template>

<script>
import {
    ComponentExampleContainer,
    ComponentExample,
    ComponentApi
} from '@/components'
import Base from '@/examples/modal/Base.vue?demo'
import DisabledLayerClose from '@/examples/modal/DisabledLayerClose.vue?demo'

const api = [
    {
        title: 'Model props',
        type: 'props',
        data: [
            {
                prop: 'value',
                type: 'boolean',
                required: 'true',
                default: 'false',
                values: '-',
                explain: '弹窗是否显示，可使用v-model双向绑定数据'
            },
            {
                prop: 'closable',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否显示关闭按钮'
            },
            {
                prop: 'title',
                type: 'string',
                required: 'false',
                default: '提示',
                values: '-',
                explain: '标题'
            },
            {
                prop: 'width',
                type: 'string | number',
                required: 'false',
                default: '520',
                values: '-',
                explain: '弹窗的宽度，支持百分比'
            },
            {
                prop: 'centered',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '弹窗是否垂直居中'
            },
            {
                prop: 'mask',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否显示遮罩层'
            },
            {
                prop: 'maskClosable',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否允许点击遮罩层关闭'
            },
            {
                prop: 'confirmText',
                type: 'string',
                required: 'false',
                default: '确定',
                values: '-',
                explain: '确定按钮文案'
            },
            {
                prop: 'cancelText',
                type: 'string',
                required: 'false',
                default: '取消',
                values: '-',
                explain: '取消按钮文案'
            },
            {
                prop: 'headerHide',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否隐藏弹窗头部'
            },
            {
                prop: 'footerHide',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否隐藏对话框底部'
            },
            {
                prop: 'fullscreen',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否全屏展示'
            },
            {
                prop: 'bottomAlign',
                type: 'string',
                required: 'false',
                default: 'center',
                values: ['left', 'center', 'right'].join(' | '),
                explain: '底部对其方式'
            },
            {
                prop: 'confirmLoading',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '点击确定按钮的时候是否显示loading状态'
            },
            {
                prop: 'contentLoading',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: 'loading整个内容区域'
            },
            {
                prop: 'modalStyle',
                type: 'object',
                required: 'false',
                default: '{}',
                values: '-',
                explain: '弹窗样式'
            },
            {
                prop: 'zIndex',
                type: 'number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '手动设置弹窗层级'
            },
            {
                prop: 'baseIndex',
                type: 'number',
                required: 'false',
                default: '1000',
                values: '-',
                explain:
                    '当前弹窗基础层级，每次打开弹窗都会在当前基础层级上加一'
            },
            {
                prop: 'transfer',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '将弹窗dom结构转移到body元素中'
            }
        ]
    },
    {
        title: 'Model events',
        type: 'events',
        data: [
            {
                event: 'on-open',
                callbackParam: '-',
                explain: '当弹窗打开时触发'
            },
            {
                event: 'on-close',
                callbackParam: '-',
                explain: '当弹窗关闭时触发'
            },
            {
                event: 'on-visible-change',
                callbackParam: '-',
                explain: '当弹窗可见行改变时触发'
            },
            {
                event: 'on-cancel',
                callbackParam: '-',
                explain: '点击关闭按钮，取消按钮，或遮罩层时触发'
            },
            {
                event: 'on-confirm',
                callbackParam: '-',
                explain:
                    '点击确定按钮时触发，confirmLoading为true时需要在on-confirm的事件处理函数中关闭弹窗'
            }
        ]
    }
]

const instanceApi = {
    title: 'Modal instance',
    columns: [
        {
            title: '方法',
            key: 'method'
        },
        {
            title: '说明',
            key: 'explain'
        }
    ],
    data: [
        {
            method: 'this.$modal.alert(config)',
            explain: '通知类单按钮弹窗'
        },
        {
            method: 'this.$modal.info(config)',
            explain: 'type为info的alert型弹窗'
        },
        {
            method: 'this.$modal.success(config)',
            explain: 'type为success的alert型弹窗'
        },
        {
            method: 'this.$modal.error(config)',
            explain: 'type为error的alert型弹窗'
        },
        {
            method: 'this.$modal.warning(config)',
            explain: 'type为warning的alert型弹窗'
        },
        {
            method: 'this.$modal.confirm(config)',
            explain: 'type为confirm，确认类双按钮弹窗'
        },
        {
            method: 'this.$modal.remove()',
            explain: '关闭对话框'
        }
    ]
}

const instanceConfigApi = {
    title: 'Modal instance config',
    type: 'props',
    data: [
        {
            prop: 'type',
            type: 'string',
            required: 'false',
            default: '-',
            values: '-',
            explain: '控制alert弹窗中的icon类型'
        },
        {
            prop: 'title',
            type: 'string',
            required: 'false',
            default: '-',
            values: '-',
            explain: '弹窗标题'
        },
        {
            prop: 'content',
            type: 'string',
            required: 'false',
            default: '-',
            values: '-',
            explain: '中间内容区块文案'
        },
        {
            prop: 'render',
            type: 'Function',
            required: 'false',
            default: '-',
            values: '-',
            explain: '弹窗中部内容区域的dom结构使用render函数渲染'
        },
        {
            prop: 'width',
            type: 'string | number',
            required: 'false',
            default: '400',
            values: '-',
            explain: '弹窗宽度'
        },
        {
            prop: 'confirmText',
            type: 'string',
            required: 'false',
            default: '-',
            values: '-',
            explain: '确认按钮文案'
        },
        {
            prop: 'cancelText',
            type: 'string',
            required: 'false',
            default: '-',
            values: '-',
            explain: '取消按钮文案'
        },
        {
            prop: 'closable',
            type: 'boolean',
            required: 'false',
            default: 'false',
            values: '-',
            explain: '是否展示关闭按钮'
        },
        {
            prop: 'maskClosable',
            type: 'boolean',
            required: 'false',
            default: 'false',
            values: '-',
            explain: '是否支持点击遮罩层关闭'
        },
        {
            prop: 'confirmLoading',
            type: 'boolean',
            required: 'false',
            default: 'false',
            values: '-',
            explain: '确认按钮点击时候是否展示为loading状态，配合onConfirm使用'
        },
        {
            prop: 'bottomAlign',
            type: 'string',
            required: 'false',
            default: 'center',
            values: ['left', 'center', 'right'].join(' | '),
            explain: '底部对其方式'
        },
        {
            prop: 'onConfirm',
            type: 'Function',
            required: 'false',
            default: '() => {}',
            values: '-',
            explain: '点击确定按钮时的回调'
        },
        {
            prop: 'onCancel',
            type: 'Function',
            required: 'false',
            default: '() => {}',
            values: '-',
            explain: '点击取消按钮时的回调'
        },
        {
            prop: 'headerHide',
            type: 'boolean',
            required: 'false',
            default: 'true',
            values: '-',
            explain: '隐藏头部'
        }
    ]
}

export default {
    name: 'Modal-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample,
        ComponentApi
    },
    data() {
        return {
            examples: [Base, DisabledLayerClose],
            api,
            instanceApi,
            instanceConfigApi
        }
    }
}
</script>
