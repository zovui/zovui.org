<title>独立使用和自定义的样式</title>

<desc>
    可以没有 slot 独立展示。
</desc>

<template>
    <div class="badge-demo">
        <span>
            <Badge :count="10"></Badge>
        </span>
        <span>
            <Badge :count="20"></Badge>
        </span>
    </div>
</template>

<style>
.badge-demo span {
    margin: 0 5px 0;
}
</style>
