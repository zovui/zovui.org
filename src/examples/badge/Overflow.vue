<title>最大值</title>

<desc>
    通过设置overflow-count最大值，当超过最大值时，显示${ overflow-count }。
</desc>

<template>
    <div class="badge-demo">
        <span>
            <Badge :count="100">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge :count="1000" overflow-count="999">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
    </div>
</template>

<style>
.badge-demo span {
    margin: 0 5px 0;
}

.badge-demo .demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}
</style>
