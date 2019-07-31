<template>
    <ComponentExampleContainer
        component-name="Upload 上传文件"
        desc="文件选择上传和拖拽上传控件。"
        :apiList="api"
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
import Base from '@/examples/upload/Base.vue?demo'

const api = [
    {
        title: 'Upload props',
        type: 'props',
        data: [
            {
                prop: 'action',
                type: 'string|Function',
                required: 'true',
                default: '-',
                values: '-',
                explain: '上传地址'
            },
            {
                prop: 'headers',
                type: 'object',
                required: 'false',
                default: '{}',
                values: '-',
                explain: '上传的请求头'
            },
            {
                prop: 'multiple',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '是否多文件上传'
            },
            {
                prop: 'disabled',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '禁用上传'
            },
            {
                prop: 'data',
                type: 'object',
                required: 'false',
                default: '{}',
                values: '-',
                explain: '上传附带数据'
            },
            {
                prop: 'name',
                type: 'string',
                required: 'false',
                default: 'file',
                values: '-',
                explain: '上传文件键值'
            },
            {
                prop: 'withCredentials',
                type: 'boolean',
                required: 'false',
                default: 'false',
                values: '-',
                explain: '上传请求是否携带cookie'
            },
            {
                prop: 'showUploadList',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否展示上传列表'
            },
            {
                prop: 'type',
                type: 'string',
                required: 'false',
                default: 'select',
                values: '-',
                explain: '上传控件类型'
            },
            {
                prop: 'accept',
                type: 'string',
                required: 'false',
                default: 'select',
                values: '-',
                explain: '支持上传文件的MIME类型'
            },
            {
                prop: 'format',
                type: 'Array',
                required: 'false',
                default: '[]',
                values: '-',
                explain: '支持上传文件后缀名列表'
            },
            {
                prop: 'maxSize',
                type: 'number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '上传的单文件大小限制,kb'
            },
            {
                prop: 'limit',
                type: 'number',
                required: 'false',
                default: '-',
                values: '-',
                explain: '上传文件的总个数限制，只支持整数'
            },
            {
                prop: 'defaultFileList',
                type: 'Array',
                required: 'false',
                default: '-',
                values: '-',
                explain: '默认已上传文件列表'
            },
            {
                prop: 'customRequest',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '自定义上传实现'
            },
            {
                prop: 'listType',
                type: 'string',
                required: 'false',
                default: 'text',
                values: ['text', 'picture', 'picture-card'].join(' | '),
                explain: '上传列表样式'
            },
            {
                prop: 'autoUpload',
                type: 'boolean',
                required: 'false',
                default: 'true',
                values: '-',
                explain: '是否在选取文件后立即自动上传'
            },
            {
                prop: 'beforeUpload',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '上传文件之前的钩子'
            },
            {
                prop: 'beforeMultipleUpload',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '批量上传文件之前的钩子'
            },
            {
                prop: 'onProgress',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件上传中的钩子'
            },
            {
                prop: 'onSuccess',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件上传成功的钩子'
            },
            {
                prop: 'onError',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件上传失败时的钩子'
            },
            {
                prop: 'onPreview',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '点击已上传文件时的钩子'
            },
            {
                prop: 'onRemove',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件列表移除文件时的钩子'
            },
            {
                prop: 'onFormatError',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件格式验证失败时的钩子'
            },
            {
                prop: 'onExceededSize',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件大小验证失败时的钩子'
            },
            {
                prop: 'onExceededLimit',
                type: 'Function',
                required: 'false',
                default: '-',
                values: '-',
                explain: '文件数量超出预期的个数'
            }
        ]
    }
]

export default {
    name: 'Upload-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base],
            api
        }
    }
}
</script>
