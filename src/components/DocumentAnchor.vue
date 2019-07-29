<template>
    <div class="document-anchor" :id="id">
        <div :class="contentClasses">
            <slot />
        </div>
        <a v-if="!hiddenRef" class="document-anchor-ref" :href="href">#</a>
    </div>
</template>

<style lang="scss">
.document-anchor {
    display: flex;
    align-items: center;
}
.document-anchor-content {
    flex: 0 1 auto;
    min-width: 1px;
}
.document-anchor-content--full-width {
    flex: 1 1 auto;
    min-width: 1px;
}
.document-anchor-ref {
    flex: 0 0 auto;
    font-size: 24px;
    margin-left: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }
}
</style>

<script>
export default {
    name: 'DocumentAnchor',
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
            return `#${this.id}`
        },
        contentClasses() {
            const classes = []
            classes.push(
                this.hiddenRef
                    ? 'document-anchor-content--full-width'
                    : 'document-anchor-content'
            )
            return classes
        }
    }
}
</script>
