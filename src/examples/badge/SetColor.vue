<title>预设颜色</title>

<desc>
    使用 type 属性，可以设置不同的颜色。
</desc>

<template>
    <div class="badge-demo">
        <span>
            <Badge :count="5" type="primary">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge :count="5" type="success">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge :count="5" type="normal">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge :count="5" type="info">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge :count="5" type="error">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge :count="5" type="warning">
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
