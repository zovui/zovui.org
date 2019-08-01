<template>
    <div class="home-background"></div>
</template>

<style lang="scss">
.home-background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('./bg.svg');
    background-repeat: repeat;
    background-size: 100% 100%;
    filter: blur(10px);
}
</style>

<script>
export default {
    name: 'Background'
}
</script>
