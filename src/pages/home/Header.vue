<template>
    <div class="home-header">
        <div class="home-header-left">
            <slot name="left" />
        </div>
        <div class="home-header-right">
            <slot name="right" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home-header {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    z-index: 1;
}
.home-header-left {
    flex: 0 0 auto;
}
.home-header-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
</style>

<script>
export default {
    name: 'Header'
}
</script>
