<template>
    <div class="example-tools">
        <a class="example-tool" href="javascript:void(0)" @click="run">
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
        sourceCode: String
    },
    methods: {
        async copyCode() {
            try {
                if (navigator.clipboard) {
                    await navigator.clipboard.writeText(this.sourceCode)
                } else {
                    const input = document.createElement('textarea')
                    const scrollTop = window.pageYOffset
                    input.value = this.sourceCode
                    input.readOnly = true
                    document.body.appendChild(input)
                    input.focus()
                    input.setSelectionRange(0, this.sourceCode.length)
                    const result = document.execCommand('copy')
                    if (result === false) {
                        throw new Error('Failed to copy text.')
                    }
                    input.blur()
                    window.scrollTo(window.pageXOffset, scrollTop)
                    document.body.removeChild(input)
                }
                this.$Message.success({
                    title: '复制成功！'
                })
            } catch (e) {
                this.$Message.error({
                    title: '复制失败！',
                    text: e.message
                })
            }
        },
        run() {
            window.name = this.sourceCode
            window.open('http://zovrun.thephenix.cn', '_self')
        }
    }
}
</script>
