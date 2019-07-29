<template>
    <div class="example-tools">
        <a class="example-tool" :href="onlineURL" target="_blank">
            <ToolTip
                class="example-online-run-tooltip"
                title="在线演示"
                placement="top"
                high-color
            >
                <Icon iconname="code-working" />
            </ToolTip>
        </a>
        <a class="example-tool" @click="copyCode">
            <ToolTip
                class="example-online-run-tooltip"
                title="复制源代码"
                placement="top"
                high-color
            >
                <Icon iconname="copy" />
            </ToolTip>
        </a>
    </div>
</template>

<style lang="scss">
.example-tools {
    position: absolute;
    right: 15px;
    top: 10px;
    display: flex;
    .example-tool {
        font-size: 20px;
        margin-right: 10px;
        flex: 0 0 auto;
        .zov-tooltip-body {
            width: auto;
            .zov-tooltip-title {
                margin: 0;
                font-size: 14px;
            }
        }
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>

<script>
export default {
    name: 'ComponentExampleTools',
    props: {
        onlineURL: String,
        sourceCode: String
    },
    methods: {
        async copyCode() {
            try {
                await navigator.clipboard.writeText(this.sourceCode)
                this.$Message.success({
                    title: '复制成功！'
                })
            } catch (e) {
                this.$Message.error({
                    title: '复制失败，请先授权剪切板访问权限!'
                })
            }
        }
    }
}
</script>
