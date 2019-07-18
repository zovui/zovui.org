<template>
    <div class="component-anchor-container" :id="formatId">
        <div class="component-anchor-content">
            <slot/>
        </div>
        <a v-if="!hiddenRef" class="component-anchor-ref" :href="formatId">#</a>
    </div>
</template>

<style lang="scss">
    .component-anchor-container {
        display: flex;
        align-items: center;
    }
    .component-anchor-content {
        flex: 0 1 auto;
    }
    .component-anchor-ref {
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
        name: "ComponentAnchor",
        props: {
            id: {
                required: true,
                type: String
            },
            hiddenRef: {
                type: Boolean
            }
        },
        computed: {
            formatId() {
                return `#${this.id}`;
            }
        }
    }
</script>
