<template>
    <div class="home-actions">
        <Button
            class="home-actions-button"
            looks="primary"
            size="large"
            shape="circle"
            @click="start"
            >开始使用</Button
        >
    </div>
</template>

<style lang="scss" scoped>
.home-actions {
    text-align: center;
    visibility: hidden;
    animation-name: home-actions-in;
    animation-delay: 2.2s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    &-button {
        width: 160px;
        height: 60px;
        font-size: 16px;
        font-weight: 700;
    }
}

@keyframes home-actions-in {
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
    name: 'Actions',
    methods: {
        start() {
            this.$router.push('/install')
        }
    }
}
</script>
