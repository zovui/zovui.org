<template>
    <article class="document">
        <div class="document-content">
            <h1 class="document-header">{{ header }}</h1>
            <slot />
        </div>
        <div class="document-anchor-list">
            <Affix>
                <Anchor show-ink>
                    <AnchorLink
                        v-for="anchor in anchorList"
                        :key="anchor.href"
                        :href="anchor.href"
                        :title="anchor.title"
                    >
                        <AnchorLink
                            v-if="anchor.children"
                            v-for="child in anchor.children"
                            :key="child.href"
                            :href="child.href"
                            :title="child.title"
                        />
                    </AnchorLink>
                </Anchor>
            </Affix>
        </div>
    </article>
</template>

<style lang="scss">
.document {
    display: flex;
    .document-content {
        flex: 1 1 auto;
        padding: 0 30px;
        min-width: 1px;
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
export default {
    name: 'Document',
    props: {
        header: {
            required: true,
            type: String
        }
    },
    data() {
        return {
            anchorList: []
        }
    }
}
</script>
