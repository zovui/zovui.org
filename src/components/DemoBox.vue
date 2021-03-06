<template>
    <div class="example" :id="titleId" ref="example" style="height:auto;">
        <div class="example-info" ref="demo">
            <h3 class="example-title">{{ title }}</h3>
            <div class="example-desc">
                <slot name="desc">{{ desc }}</slot>
            </div>
            <div class="example-case">
                <slot />
            </div>
            <div class="example-tools">
                <a
                    class="example-online-run"
                    :href="onlineHref"
                    target="_blank"
                >
                    <ToolTip
                        class="example-online-run-tooltip"
                        title="在线演示"
                        placement="top"
                        high-color
                    >
                        <Icon iconname="code-working" />
                    </ToolTip>
                </a>
            </div>
        </div>
        <div class="example-code" ref="code">
            <pre><code class="xml hljs" v-html="highlightedSourceCode"></code></pre>
        </div>
        <div class="show-all-code" v-if="showIconTip" @click="showAllCode">
            <Icon iconname="arrow-down" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DemoBox',
    props: {
        title: String,
        titleId: String,
        desc: String,
        onlineHref: String,
        highlightedSourceCode: String
    },
    data() {
        return {
            showIconTip: true,
            demoHeight: 'auto',
            codeHeight: 'auto'
        }
    },
    mounted() {
        this.demoHeight = this.$refs.demo.offsetHeight
        this.codeHeight = this.$refs.code.offsetHeight
        this.$refs.example.style.height = `${parseInt(this.demoHeight)}px`
        this.showIconTip =
            parseInt(this.demoHeight) - parseInt(this.codeHeight) < 5
    },
    methods: {
        showAllCode() {
            this.$refs.example.style.height = `${parseInt(this.codeHeight)}px`
            this.showIconTip = false
        }
    }
}
</script>

<style lang="scss" scoped>
.example {
    position: relative;
    margin-bottom: 40px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-bottom: 14px;
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
        .example-tools {
            position: absolute;
            right: 15px;
            top: 10px;
            .example-online-run {
                font-size: 20px;
                .example-online-run-tooltip {
                    .zov-tooltip-body {
                        width: auto;
                        .zov-tooltip-title {
                            margin: 0;
                        }
                    }
                }
            }
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
        pre {
            margin: 0;
        }
        .hljs {
            padding: 15px;
        }
    }
    .show-all-code {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        background: linear-gradient(
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 1)
        );
    }
}
</style>
