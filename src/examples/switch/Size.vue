<title>设置大小</title>

<desc>
    通过size属性，可以选择一个switch的大小
</desc>

<template>
    <div class="switch-demo">
        <Switcher v-model="value" size="large"></Switcher>
        <Switcher v-model="value"></Switcher>
        <Switcher v-model="value" size="small"></Switcher>
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
