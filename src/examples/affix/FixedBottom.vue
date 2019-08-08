<title>固定在底部</title>

<desc>
    在屏幕下方固定。
</desc>

<template>
    <div>
        <Affix :offset-bottom="50">
            <div class="affix-demo">
                固定在距离底部50px触发
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
