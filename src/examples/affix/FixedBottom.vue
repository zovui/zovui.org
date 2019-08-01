<title>固定在底部</title>

<desc>
    在屏幕下方固定。
</desc>

<template>
    <div>
        <Affix :offset-bottom="50">
            <div class="demo">
                固定在距离底部50px触发
            </div>
        </Affix>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    background-color: #2d8cf0;
}
</style>
