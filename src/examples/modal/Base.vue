<title>基础用法</title>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal v-model="show">这是一个Modal</Modal>
    </article>
</template>

<style lang="scss"></style>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>
