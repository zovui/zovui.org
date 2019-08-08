<title>自定义内容</title>

<desc>
    设置 text 属性，可以自定义展示内容。
</desc>

<template>
    <div class="badge-demo">
        <span>
            <Badge text="new">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge text="hot">
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
