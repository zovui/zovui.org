<title>确认框</title>

<desc>
    confirm用于打开一个confirm弹窗，有固定的图标，有取消按钮。<br/>
    当使用render方法时，则优先使用render渲染body部分的内容。
</desc>

<template>
    <Button @click="confirm">confirm</Button>
</template>

<script>
export default {
    methods: {
        confirm() {
            this.$Modal.confirm({
                title: '确认删除',
                iconName: 'help-circle-outline',
                content: '确认删除XXXXXXXXXXXXXXXXX吗？',
                confirmLoading: true,
                onConfirm: () => {
                    setTimeout(() => {
                        this.$Modal.remove()
                    }, 1000)
                }
            })
        }
    }
}
</script>
