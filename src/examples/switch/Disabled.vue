<title>disabled状态</title>

<desc>
    设置disabled，将会禁用switch的切换
</desc>

<template>
    <div class="switch-demo">
        <Switcher :value="true" disabled />
        <Switcher :value="false" disabled />
    </div>
</template>

<style lang="scss">
.switch-demo .zov-switch {
    margin-right: 20px;
}
</style>
