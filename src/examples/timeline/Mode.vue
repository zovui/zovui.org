<title>不同的展示模式</title>

<desc>
    切换mode来切换不同的展现模式
</desc>

<template>
    <article class="timeline-demo">
        <section class="section">
            <RadioGroup v-model="mode" connected>
                <Radio
                    v-for="mode of [
                        'left',
                        'right',
                        'alternate-left',
                        'alternate-right'
                    ]"
                    :label="mode"
                    :key="mode"
                />
            </RadioGroup>
        </section>
        <section class="section">
            <Timeline pending :mode="mode">
                <TimelineItem>Create a services site 2015-09-01</TimelineItem>
                <TimelineItem
                    >Solve initial network problems 2015-09-01</TimelineItem
                >
                <TimelineItem>Technical testing 2015-09-01</TimelineItem>
                <TimelineItem
                    >Network problems being solved 2015-09-01</TimelineItem
                >
                <template #ghost-content>
                    Recoding...
                </template>
            </Timeline>
        </section>
    </article>
</template>

<style>
.timeline-demo .section {
    margin-bottom: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            mode: 'left'
        }
    }
}
</script>
