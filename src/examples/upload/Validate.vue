<title>上传校验</title>

<desc>
    不同场景下，对上传的文件个数、大小都会有一定的限制<br />
    Upload组件提供了一些属性，方便你去限定上传条件，并且开放钩子让你能处理和让用户感知这些限制的存在。
</desc>

<template>
    <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        accept="image/jpeg, image/png"
        :format="format"
        :max-size="15"
        :limit="3"
        :on-error="handleError"
        :on-remove="handleRemove"
        :on-format-error="handleFormatError"
        :on-exceeded-limit="handleExceededLimit"
        :on-exceeded-size="handleExceededSize"
        multiple
    >
        <Button><Icon iconname="cloud-upload"></Icon>上传</Button>
    </Upload>
</template>

<style lang="scss"></style>

<script>
export default {
    data() {
        return {
            format: ['jpg', 'jpeg', 'png']
        }
    },
    methods: {
        handleSuccess(res, file, files) {
            file.url =
                'https://camo.githubusercontent.com/a4ee422ec1accc811276f220561976f14005b13b/687474703a2f2f7a6f762e7468657068656e69782e636e2f696d672f6c6f676f2e35313134623463362e706e67'
        },
        handleError(err, response, file) {
            this.$Message.error({
                title: '提示',
                text: file.name + '上传失败！',
                duration: 500,
                closable: false
            })
        },
        handleRemove(file, fileList) {
            this.$Message.info({
                title: '提示',
                text: file.name + '已删除',
                duration: 500,
                closable: false
            })
        },
        handleFormatError(file) {
            this.$Message.error({
                title: '提示',
                text: file.name + '格式错误！',
                duration: 500,
                closable: false
            })
        },
        handleExceededLimit(uploadFiles, fileList) {
            this.$Message.error({
                title: '提示',
                text: '已上传文件个数不能超过3个',
                duration: 500,
                closable: false
            })
        },
        handleExceededSize(file) {
            this.$Message.error({
                title: '提示',
                text: '单个文件大小不能超过15kb',
                duration: 500,
                closable: false
            })
        }
    }
}
</script>
