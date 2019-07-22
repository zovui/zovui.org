<template>
    <article>
        <section class="first-screen">
            <div class="first-screen-mid">
                <Logo />
                <div>首页</div>
                <router-link to="/install">开始使用</router-link>
            </div>
        </section>
    </article>
</template>

<style lang="scss" scoped>
.first-screen {
    width: 100%;
    height: 100vh;
    position: relative;
    &-mid {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -80%);
    }
}
</style>

<script>
import Logo from '@/components/Logo'
export default {
    name: 'Home',
    components: {
        Logo
    }
}
</script>
