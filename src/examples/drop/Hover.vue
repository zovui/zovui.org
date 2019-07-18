<title>hover时展开Drop</title>

<desc>
    设置trigger="hover"，当鼠标移入插槽中的组件时，将会自动展开Drop
</desc>

<template>
    <Drop trigger="hover">
        <Input placeholder="鼠标移入我~" slot="drop-head" />
        <div class="drop-content">
            内容
        </div>
    </Drop>
</template>

<style lang="scss" scoped>
.drop-content {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
