<template>
    <div class="component-demo-anchor-ref">
        <div class="component-demo-anchor-content">
            <slot/>
        </div>
        <a class="component-demo-anchor" :href="'#' + id">#</a>
    </div>
</template>

<style lang="scss">
    .component-demo-anchor-ref {
        display: flex;
        align-items: center;
    }
    .component-demo-anchor-content {
        flex: 0 1 auto;
    }
    .component-demo-anchor {
        flex: 0 0 auto;
        font-size: 24px;
        margin-left: 5px;
        opacity: 0;
        transition: opacity .2s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }
</style>

<script>
    export default {
        name: "component-anchor",
        props: {
            id: {
                required: true,
                type: String
            }
        }
    }
</script>
