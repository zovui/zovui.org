<title>遮罩方式的loading</title>

<desc>
    设置cover属性，配合父级定位元素，可实现局部loading的效果
</desc>

<template>
    <div>
        <Switcher v-model="show" />
        <div class="container">
            <div class="box">
                我是组件
                <Spin cover v-if="show"></Spin>
                <ul class="ul">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div class="box">
                我是组件
                <Spin v-if="show" cover spinname="dbcircle"></Spin>
                <ul class="ul">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
}
.box {
    flex: 1;
    border: none;
    margin: 15px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
}
.ul {
    border: 1px solid #ccc;
    li {
        padding: 15px 0;
        &:not(:nth-of-type(1)) {
            border-top: 1px solid #ccc;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>
