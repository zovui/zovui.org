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
    </ComponentExampleContainer>
</template>

<script>
import { ComponentExampleContainer, ComponentExample } from '@/components'

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

export default {
    name: 'Modal-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [],
            api
        }
    }
}
</script>
