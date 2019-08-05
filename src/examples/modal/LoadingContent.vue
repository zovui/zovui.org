<title>异步内容区域</title>

<desc>contentLoading可以让弹窗内容显示loading效果，场景多见于弹窗内容异步加载的情况。</desc>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal
            v-model="show"
            bottom-align="right"
            :contentLoading="contentLoading"
            @on-open="handleOpen"
            >这是一个Modal</Modal
        >
    </article>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            contentLoading: false
        }
    },
    methods: {
        handleOpen() {
            this.contentLoading = true
            setTimeout(() => {
                this.contentLoading = false
            }, 3000)
        }
    }
}
</script>
