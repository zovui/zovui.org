<template>
    <p class="home-section home-desc">
        一套基于 Vue.js 的高质量<br />UI 组件库
    </p>
</template>

<style lang="scss" scoped>
.home-desc {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    visibility: hidden;
    animation-name: home-desc-in;
    animation-delay: 2s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
}
@keyframes home-desc-in {
    0% {
        visibility: visible;
        opacity: 0;
        transform: translate3d(0, 30px, 0);
    }
    100% {
        visibility: visible;
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}
</style>

<script>
export default {
    name: 'Description'
}
</script>
