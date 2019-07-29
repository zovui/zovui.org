<style lang="scss" scoped>
.example {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 24px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    .example-info {
        position: relative;
        box-sizing: border-box;
        flex: 0 0 50%;
        padding: 15px 15px 10px 15px;
        .example-title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .example-desc {
            margin: 10px 0;
        }
        .example-case {
            border-top: 1px solid #ddd;
            padding: 17px 0;
        }
    }
    .example-code {
        box-sizing: border-box;
        border-left: 1px solid #ddd;
        flex: 0 0 50%;
        overflow: auto;
    }
    .example-show-all {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 1)
        );
        cursor: pointer;
        font-size: 16px;
        color: var(--color-primary);
    }
}
</style>

<script>
import ComponentAnchor from './ComponentAnchor'
import shortId from 'shortid'
import ComponentExampleCode from './Code'
import ComponentExampleTools from './ComponentExampleTools'

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
            anchorTitle: this.example.__title,
            minHeight: 0,
            containerStyles: null,
            // 是否展开
            isExpand: true,
            expandButtonIcon: 'arrow-up'
        }
    },
    watch: {
        isExpand(isExpand) {
            if (isExpand) {
                this.containerStyles = null
                this.expandButtonIcon = 'arrow-up'
            } else {
                this.containerStyles = {
                    height: `${this.minHeight}px`
                }
                this.expandButtonIcon = 'arrow-down'
            }
        }
    },
    created() {
        this.ComponentExample.addExampleAnchor({
            title: this.anchorTitle,
            href: `#${this.anchorId}`
        })
    },
    mounted() {
        this.$nextTick(() => {
            this.minHeight = Math.min(
                this.$refs.info.scrollHeight,
                this.$refs.code.$el.scrollHeight
            )
            this.isExpand = false
        })
    },
    methods: {
        toggleExpand() {
            this.isExpand = !this.isExpand
        }
    },
    render(h) {
        const example = this.example
        return (
            <ComponentAnchor id={this.anchorId} hidden-ref>
                <div class="example" style={this.containerStyles} ref="example">
                    <div class="example-info" ref="info">
                        <h3 class="example-title">{example.__title}</h3>
                        <div class="example-desc">{example.__desc}</div>
                        <div class="example-case">{h(example)}</div>
                        <ComponentExampleTools />
                    </div>
                    <ComponentExampleCode
                        class="example-code"
                        ref="code"
                        highlightedCode={example.__highlightedSourceCode}
                    />
                    <div class="example-show-all" onClick={this.toggleExpand}>
                        <Icon iconname={this.expandButtonIcon} />
                    </div>
                </div>
            </ComponentAnchor>
        )
    }
}
</script>
