<title>pending状态</title>

<desc>
    当有异步任务的时候，pending状态能提升用户体验。
</desc>

<template>
    <Timeline pending>
        <TimelineItem>Create a services site 2015-09-01</TimelineItem>
        <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
        <TimelineItem>Technical testing 2015-09-01</TimelineItem>
        <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
        <template #ghost-content>
            Recoding...
        </template>
    </Timeline>
</template>
