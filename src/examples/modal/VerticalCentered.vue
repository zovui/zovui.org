<title>垂直居中</title>

<desc>配置centered让弹窗基于视口垂直居中</desc>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal v-model="show" centered>
            垂直居中
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
