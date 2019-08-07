<title>弹出位置</title>

<template>
    <article>
        <ToolTip
            v-for="item in placements"
            :key="item"
            title="提示"
            text="这是测试方向的tooltip，----这是延长测试文字文字文字文字---"
            :placement="item"
        >
            <Button>在{{ item }}</Button>
        </ToolTip>
    </article>
</template>

<script>
export default {
    data() {
        return {
            placements: [
                'top',
                'top-start',
                'top-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'left',
                'left-start',
                'left-end',
                'right',
                'right-start',
                'right-end'
            ]
        }
    }
}
</script>
