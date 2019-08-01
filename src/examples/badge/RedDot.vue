<title>小红点</title>

<desc>
    这里有个小红点。
</desc>

<template>
    <div>
        <span>
            <Badge dot>
                <Icon iconname="albums" />
            </Badge>
        </span>
        <span>
            <Badge dot>
                <a href="#" class="demo-badge"></a>
            </Badge>
        </span>
        <span>
            <Badge dot>
                <a href="#">可以是一个链接</a>
            </Badge>
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
