<template>
    <article>
        <div id="home">
            <div class="home-mid">
                <Logo class="home-section" />
                <Description class="home-section" />
                <Actions class="home-section" />
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
#home {
    width: 100%;
    height: 100vh;
    position: relative;
    .home-section {
        margin-bottom: 30px;
    }
    .home-mid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
    }
}
</style>

<script>
import Logo from './Logo'
import Actions from './Actions'
import Description from './Description'

export default {
    name: 'Home',
    components: {
        Logo,
        Actions,
        Description
    }
}
</script>
