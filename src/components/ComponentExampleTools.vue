<template>
    <div class="example-tools">
        <a class="example-online-run" :href="onlineURL" target="_blank">
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
</template>

<style lang="scss" scoped>
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
</style>

<script>
export default {
    name: 'ComponentExampleTools',
    props: {
        onlineURL: String
    }
}
</script>
