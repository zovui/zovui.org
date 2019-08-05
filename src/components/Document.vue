<template>
    <article class="document">
        <div class="document-content">
            <h1 class="document-header">{{ header }}</h1>
            <slot />
        </div>
        <div class="document-anchor-list">
            <Anchor show-ink>
                <AnchorLink
                    v-for="anchor in anchorList"
                    :key="anchor.id"
                    :href="'#' + anchor.id"
                    :title="anchor.title"
                >
                    <AnchorLink
                        v-if="anchor.children"
                        v-for="child in anchor.children"
                        :key="child.id"
                        :href="'#' + child.id"
                        :title="child.title"
                    />
                </AnchorLink>
            </Anchor>
        </div>
    </article>
</template>

<style lang="scss">
.document {
    display: flex;
    padding: 0 30px;
    .document-content {
        flex: 1 1 auto;
        min-width: 1px;
        margin-right: 30px;
        .document-header {
            font-weight: 400;
            margin-bottom: 30px;
        }
    }
    .document-anchor-list {
        flex: 0 0 auto;
    }
}
</style>

<script>
import DocumentAnchorRoot from './DocumentAnchorRoot'
export default {
    name: 'Document',
    mixins: [DocumentAnchorRoot],
    props: {
        header: {
            required: true,
            type: String
        }
    }
}
</script>
