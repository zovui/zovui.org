<title>禁用遮罩层关闭</title>

<desc>禁用点击遮罩层关闭弹窗</desc>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal v-model="show" :mask-closable="false">点击遮罩层</Modal>
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
