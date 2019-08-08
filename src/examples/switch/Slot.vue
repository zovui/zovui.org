<title>自定义样式</title>

<desc>
    可以通过open和close插槽，自定义打开关闭的样式
</desc>

<template>
    <div class="switch-demo">
        <Switcher v-model="value">
            <template #open
                >这是开的状态</template
            >
            <template #close
                >这是关的状态</template
            >
        </Switcher>
        <Switcher v-model="value">
            <Icon #open iconname="unlock" />
            <Icon #close iconname="lock" />
        </Switcher>
    </div>
</template>

<style>
.switch-demo .zov-switch {
    margin-right: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            value: false
        }
    }
}
</script>
