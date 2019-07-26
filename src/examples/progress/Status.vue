<title>不同状态</title>

<desc>
    不同状态下进度条展示不同的颜色以及动画，在文件上传的场景下，通过控制不同情况下进度条的状态，能够从颜色上提醒用户当前的操作状态，提升了交互体验
</desc>

<template>
    <div>
        <Progress :percent="80"></Progress>
        <Progress :percent="80" status="active"></Progress>
        <Progress :percent="80" status="success"></Progress>
        <Progress :percent="80" status="exception"></Progress>
    </div>
</template>
