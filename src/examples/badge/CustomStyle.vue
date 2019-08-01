<title>独立使用和自定义的样式</title>

<desc>
    可以没有 slot 独立展示。
</desc>

<template>
    <div>
        <span>
            <Badge :count="10"></Badge>
        </span>
        <span>
            <Badge :count="20" class-name="demo-badge-alone"></Badge>
        </span>
    </div>
</template>

<style lang="scss" scoped>
span {
    margin: 0 5px 0;
    .demo-badge {
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
}
</style>
