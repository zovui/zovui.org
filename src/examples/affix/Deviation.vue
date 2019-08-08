<title>偏移</title>

<desc>
    当滚动到一定距离时再固定。
</desc>

<template>
    <div>
        <Affix :offset-top="100">
            <div class="affix-demo">
                固定在距离顶部100px触发
            </div>
        </Affix>
    </div>
</template>

<style>
.affix-demo {
    width: 130px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    background-color: #2d8cf0;
}
</style>
