<script>
export default {
    name: 'DocumentAnchorRoot',
    provide() {
        return {
            AnchorRoot: {
                addAnchor: anchor => {
                    this.anchorList.push(anchor)
                },
                removeAnchor: id => {
                    const index = this.anchorList.findIndex(
                        anchor => anchor.id === id
                    )
                    if (index === -1) {
                        return
                    }
                    this.anchorList.splice(index, 1)
                }
            }
        }
    },
    data() {
        return {
            anchorList: []
        }
    }
}
</script>
