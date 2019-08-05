<title>隐藏关闭按钮</title>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal v-model="show" :closable="false">右上角关闭按钮已被隐藏</Modal>
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
