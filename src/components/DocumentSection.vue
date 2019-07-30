<template>
    <section class="document-section">
        <DocumentAnchor :id="anchor.id">
            <h2 class="document-section-header">{{ title }}</h2>
        </DocumentAnchor>
        <slot />
    </section>
</template>

<style lang="scss">
.document-section {
    margin: 20px 0;
    .document-anchor {
        margin: 15px 0;
    }
    &-header {
        margin: 0;
    }
}
</style>

<script>
import DocumentAnchorCollector from './DocumentAnchorCollector'
import DocumentAnchor from './DocumentAnchor'
import shortId from 'shortid'

export default {
    name: 'DocumentSection',
    mixins: [DocumentAnchorCollector],
    props: {
        title: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            anchor: {
                id: shortId.generate(),
                title: this.title
            }
        }
    },
    components: {
        DocumentAnchor
    }
}
</script>
