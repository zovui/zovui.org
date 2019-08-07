<title>自定义按钮文案及按钮位置</title>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal
            v-model="show"
            confirm-text="ok"
            cancel-text="cancel"
            bottom-align="right"
        >
            自定义按钮文案及按钮位置
        </Modal>
    </article>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>
