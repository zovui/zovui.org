<title>异步关闭</title>

<desc>
    confirmLoading配合on-confirm自定义事件使用
</desc>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal
            v-model="show"
            bottom-align="right"
            :confirmLoading="true"
            @on-confirm="handleConfirmAsync"
            >这是一个Modal</Modal
        >
    </article>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        handleConfirmAsync() {
            setTimeout(() => {
                this.show = false
            }, 3000)
        }
    }
}
</script>
