<title>状态改变时的回调</title>

<template>
    <Affix :offset-top="50" @on-change="handleChange">
        <div class="affix-demo">
            固定在距离顶部50px触发
        </div>
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

<style>
.affix-demo {
    width: 130px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    background-color: #2d8cf0;
}
</style>
