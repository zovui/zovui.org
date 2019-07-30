<style lang="scss" scoped>
.example {
    box-sizing: content-box;
    position: relative;
    margin-bottom: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    transition: 0.3s height ease, 0.3s box-shadow ease;
    &:hover {
        box-shadow: 0 0 15px 0 var(--color-shadow);
    }
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
        &--stretch {
            align-self: stretch;
        }
    }
    .example-expand-handle {
        display: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: var(--color-mask);
        cursor: pointer;
        font-size: 16px;
        color: var(--color-primary);
    }
    &--expandable {
        padding-bottom: 24px;
        .example-expand-handle {
            display: block;
        }
    }
}
</style>

<script>
import DocumentAnchorCollector from './DocumentAnchorCollector'
import DocumentAnchor from './DocumentAnchor'
import shortId from 'shortid'
import ComponentExampleCode from './DocumentCode'
import ComponentExampleTools from './ComponentExampleTools'

export default {
    name: 'ComponentExample',
    mixins: [DocumentAnchorCollector],
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
            anchor: {
                id: shortId.generate(),
                title: this.example.__title
            },
            minHeight: 0,
            maxHeight: 0,
            containerStyles: null,
            // 是否可展开
            isExpandable: false,
            // 是否展开
            isExpand: true,
            // 是否让代码部分拉伸至容器高度
            isStretchCode: false,
            expandButtonIcon: 'arrow-up'
        }
    },
    computed: {
        classes() {
            const classes = ['example']
            if (this.isExpandable) {
                classes.push('example--expandable')
            }
            return classes
        },
        codeClasses() {
            const classes = ['example-code']
            if (this.isStretchCode) {
                classes.push('example-code--stretch')
            }
            return classes
        }
    },
    watch: {
        isExpand(isExpand) {
            if (isExpand) {
                this.containerStyles = {
                    height: `${this.maxHeight}px`
                }
                this.expandButtonIcon = 'arrow-up'
            } else {
                this.containerStyles = {
                    height: `${this.minHeight}px`
                }
                this.expandButtonIcon = 'arrow-down'
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const infoHeight = this.$refs.info.scrollHeight
            const codeHeight = this.$refs.code.$el.scrollHeight
            this.minHeight = Math.min(infoHeight, codeHeight)
            this.maxHeight = Math.max(infoHeight, codeHeight)
            // 如果例子高度大于代码高度，则不需要展开功能
            if (infoHeight >= codeHeight) {
                // 不可展开
                this.isExpandable = false
                // 默认展开
                this.isExpand = true
                // 让代码高度与例子高度相同
                this.isStretchCode = true
            } else {
                // 可展开
                this.isExpandable = true
                // 默认收起
                this.isExpand = false
                this.isStretchCode = false
            }
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
            <DocumentAnchor id={this.anchor.id} hidden-ref>
                <div
                    class="example"
                    style={this.containerStyles}
                    class={this.classes}
                    ref="example">
                    <div class="example-info" ref="info">
                        <h3 class="example-title">{example.__title}</h3>
                        <div class="example-desc">{example.__desc}</div>
                        <div class="example-case">{h(example)}</div>
                        <ComponentExampleTools
                            sourceCode={example.__sourceCode}
                        />
                    </div>
                    <ComponentExampleCode
                        class={this.codeClasses}
                        ref="code"
                        highlightedCode={example.__highlightedSourceCode}
                    />
                    <div
                        class="example-expand-handle"
                        onClick={this.toggleExpand}>
                        <Icon iconname={this.expandButtonIcon} />
                    </div>
                </div>
            </DocumentAnchor>
        )
    }
}
</script>
