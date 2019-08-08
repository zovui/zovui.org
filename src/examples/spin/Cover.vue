<title>遮罩方式的loading</title>

<desc>
    设置cover属性，配合父级定位元素，可实现局部loading的效果
</desc>

<template>
    <div class="spin-demo">
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

<style>
.spin-demo .container {
    display: flex;
}
.spin-demo .box {
    flex: 1;
    border: none;
    margin: 15px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
}
.spin-demo .ul {
    border: 1px solid #ccc;
}

.spin-demo .ul li {
    padding: 15px 0;
    text-align: center;
}

.spin-demo .ul li:not(:nth-of-type(1)) {
    border-top: 1px solid #ccc;
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
