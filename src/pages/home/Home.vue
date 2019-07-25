<template>
    <div id="home">
        <Background />
        <div class="home-mid">
            <Logo class="home-section" />
            <Description class="home-section" />
            <Actions class="home-section" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
#home {
    min-width: 1200px;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .home-section {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
    }
    .home-mid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>

<script>
import Logo from './Logo'
import Actions from './Actions'
import Description from './Description'
import Background from './Background'

export default {
    name: 'Home',
    components: {
        Logo,
        Actions,
        Description,
        Background
    }
}
</script>
