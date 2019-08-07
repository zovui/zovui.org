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
import { Anchor, AnchorLink } from 'zov'

function genAnchorTree(h, node) {
    if (!node) {
        return ''
    }
    let children = ''
    if (Array.isArray(node.children) && node.children.length) {
        children = node.children.map(childrenNode =>
            genAnchorTree(h, childrenNode)
        )
    }
    if (node.isRoot) {
        return <Anchor show-ink>{children}</Anchor>
    } else {
        return (
            <AnchorLink href={'#' + node.id} title={node.title}>
                {children}
            </AnchorLink>
        )
    }
}

export default {
    name: 'Document',
    mixins: [DocumentAnchorRoot],
    props: {
        header: {
            required: true,
            type: String
        },
        disabledAnchor: {
            type: Boolean,
            default: false
        }
    },
    render(h) {
        const root = {
            isRoot: true,
            children: this.anchorList
        }
        return (
            <article class="document">
                <div class="document-content">
                    <h1 class="document-header">{this.header}</h1>
                    {this.$slots.default}
                </div>
                <div class="document-anchor-list">
                    {this.disabledAnchor ? '' : genAnchorTree(h, root)}
                </div>
            </article>
        )
    }
}
</script>
