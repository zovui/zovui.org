<template>
    <div class="component-anchor-container" :id="id">
        <div :class="contentClasses">
            <slot/>
        </div>
        <a v-if="!hiddenRef" class="component-anchor-ref" :href="href">#</a>
    </div>
</template>

<style lang="scss">
    .component-anchor-container {
        display: flex;
        align-items: center;
    }
    .component-anchor-content {
        flex: 0 1 auto;
        min-width: 1px;
    }
    .component-anchor-content--full-width {
        flex: 1 1 auto;
        min-width: 1px;
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
            href() {
                return `#${this.id}`;
            },
            contentClasses() {
                const classes = [];
                classes.push(this.hiddenRef ? 'component-anchor-content--full-width' : 'component-anchor-content');
                return classes;
            }
        }
    }
</script>
