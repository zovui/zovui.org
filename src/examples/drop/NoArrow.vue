<title>隐藏箭头</title>

<desc>
    设置no-arrow，展开Drop菜单时，没有指向插槽中组件的箭头
</desc>

<template>
    <Drop no-arrow>
        <Input placeholder="点我出现下拉菜单" slot="drop-head" />
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
