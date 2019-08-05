<title>自定义标题和底部</title>

<template>
    <article>
        <Button @click="show = true">展示弹窗</Button>
        <Modal v-model="show">
            <div slot="header">
                <span style="color: red;">温馨提示</span>
            </div>
            自定义标题和底部
            <div slot="footer">
                <a href="#">这是一个链接</a>
            </div>
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
