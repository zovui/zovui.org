<title>自定义宽度</title>

<desc>可根据需求调整进度条宽度</desc>

<template>
    <div>
        <Progress :percent="80"></Progress>
        <Progress :percent="80" :strokeWidth="15"></Progress>
        <Progress :percent="80" :strokeWidth="20"></Progress>
    </div>
</template>
