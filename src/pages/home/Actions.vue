<template>
    <div class="home-actions">
        <Button looks="primary" @click="start">开始使用</Button>
        <Button @click="toGithub">Github</Button>
    </div>
</template>

<style lang="scss" scoped>
.home-actions {
    visibility: hidden;
    animation-name: home-actions-in;
    animation-delay: 2.2s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
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
        },
        toGithub() {
            window.open('https://github.com/zovui/zov', '__blank')
        }
    }
}
</script>
