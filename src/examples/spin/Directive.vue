<title>指令用法</title>

<desc>
    通过v-zov-spin指令同样可以使用spin
</desc>

<template>
    <div>
        <Switcher v-model="show" />
        <div class="container">
            <div class="box" v-zov-spin="show">
                我是组件
                <ul class="ul">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
            </div>
            <div
                class="box"
                v-zov-spin="{
                    show: show,
                    spinname: 'dbcircle'
                }"
            >
                我是组件
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
