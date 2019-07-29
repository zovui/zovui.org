<template>
    <section class="document-section">
        <DocumentAnchor :id="anchorId">
            <h2 class="document-section-header">{{ title }}</h2>
        </DocumentAnchor>
        <slot />
    </section>
</template>

<style lang="scss">
.document-section {
    margin: 20px 0;
    &-header {
        margin: 10px 0;
    }
}
</style>

<script>
import DocumentAnchor from './DocumentAnchor'
import shortId from 'shortid'

export default {
    name: 'DocumentSection',
    props: {
        title: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            anchorId: shortId.generate()
        }
    },
    components: {
        DocumentAnchor
    }
}
</script>
