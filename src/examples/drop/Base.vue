<title>基础使用</title>

<template>
    <Drop>
        <Input placeholder="点我出现下拉菜单" slot="drop-head" />
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
