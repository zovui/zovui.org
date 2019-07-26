<template>
    <div class="example" :id="titleId" ref="example" style="height:auto;">
        <div class="example-info" ref="demo">
            <h3 class="example-title">{{ title }}</h3>
            <div class="example-desc">
                <slot name="desc">{{ desc }}</slot>
            </div>
            <div class="example-case">
                <slot name="demo"></slot>
            </div>
            <div class="example-tools">
                <a :href="onlineHref" target="_blank">
                    <ToolTip
                        class="example-link-tip"
                        title="在线演示"
                        placement="bottom"
                    >
                        <Icon iconname="code-working" />
                    </ToolTip>
                </a>
            </div>
        </div>
        <div class="example-code">
            <div v-highlight ref="code">
                <pre
                    class="bg"
                ><code class="xml" v-text="demoCode"></code></pre>
            </div>
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
        demoCode: String
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
            .example-link-tip {
                font-size: 20px;
                .zov-tooltip-body {
                    width: auto;
                    .zov-tooltip-title {
                        margin: 0;
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
