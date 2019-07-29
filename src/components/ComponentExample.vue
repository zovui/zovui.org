<script>
import DemoBox from './DemoBox'
import ComponentAnchor from './ComponentAnchor'
import shortId from 'shortid'
export default {
    name: 'ComponentExample',
    props: {
        example: {
            type: Object,
            required: true
        }
    },
    inject: {
        ComponentExample: {
            default: null
        }
    },
    data() {
        return {
            anchorId: shortId.generate(),
            anchorTitle: this.example.__title
        }
    },
    created() {
        this.ComponentExample.addExampleAnchor({
            title: this.anchorTitle,
            href: `#${this.anchorId}`
        })
    },
    render(h) {
        const example = this.example
        return (
            <ComponentAnchor id={this.anchorId} hidden-ref>
                <DemoBox
                    title={example.__title}
                    desc={example.__desc}
                    highlightedSourceCode={example.__highlightedSourceCode}>
                    {h(example)}
                </DemoBox>
            </ComponentAnchor>
        )
    }
}
</script>
