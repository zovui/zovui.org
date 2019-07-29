<script>
export default {
    name: 'DocumentAnchorCollector',
    inject: {
        AnchorRoot: {
            default: null
        },
        Anchor: {
            default: null
        }
    },
    provide() {
        return {
            Anchor: {
                addAnchor: anchor => {
                    this.anchor.children.push(anchor)
                },
                removeAnchor: id => {
                    const index = this.anchor.children.findIndex(
                        anchor => anchor.id === id
                    )
                    if (index === -1) {
                        return
                    }
                    this.anchor.children.splice(index, 1)
                }
            }
        }
    },
    data() {
        return {
            anchor: {
                id: '',
                title: '',
                children: []
            }
        }
    },
    created() {
        const parentAnchor = this.Anchor || this.AnchorRoot
        if (parentAnchor === null) {
            return
        }
        parentAnchor.addAnchor(this.anchor)
    }
}
</script>
