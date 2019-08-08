<title>改变Drop展现位置</title>

<desc>
    设置placement，可以控制Drop菜单在插槽组件的展现位置
</desc>

<template>
    <Drop placement="right" trigger="hover">
        <Input placeholder="鼠标移入我~" slot="drop-head" />
        <div class="drop-content">
            内容
        </div>
    </Drop>
</template>

<style>
.drop-content {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
