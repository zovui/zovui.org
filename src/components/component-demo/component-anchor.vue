<template>
    <div class="component-demo-anchor-ref">
        <slot/>
        <a class="component-demo-anchor" :href="'#' + id">#</a>
    </div>
</template>

<style lang="scss">
    .component-demo-anchor {
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
