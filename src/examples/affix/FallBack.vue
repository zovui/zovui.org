<title>状态改变时的回调</title>

<template>
    <Affix :offset-top="50" @on-change="handleChange">
        <div>固定在距离顶部50px触发</div>
    </Affix>
</template>

<script>
export default {
    methods: {
        handleChange(state) {
            this.$Message.info(`Status: ${state}`)
        }
    }
}
</script>
