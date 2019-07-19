<title>自定义dot颜色</title>

<desc>
    dot预设的颜色值有：primary, info, success, warning, error，可以传入合法的css颜色值来自定义颜色
</desc>

<template>
    <article>
        <section class="section">
            <RadioGroup v-model="mode" connected>
                <ColorPicker v-model="color" />
            </RadioGroup>
        </section>
        <section class="section">
            <Timeline>
                <TimelineItem>不指定color, 默认为primary</TimelineItem>
                <TimelineItem color="info">Info</TimelineItem>
                <TimelineItem color="warning">Warning</TimelineItem>
                <TimelineItem color="success">Success</TimelineItem>
                <TimelineItem color="error">Error</TimelineItem>
                <TimelineItem :color="color"
                    >可接受css的其他颜色值，例如purple</TimelineItem
                >
            </Timeline>
        </section>
    </article>
</template>

<style lang="scss" scoped>
.section {
    margin-bottom: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            color: 'purple'
        }
    }
}
</script>
