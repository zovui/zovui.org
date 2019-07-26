<title>自定义颜色</title>

<desc>通过strokeColor属性，可以自定义进度条颜色</desc>

<template>
    <div>
        <Progress :percent="80"></Progress>
        <Progress :percent="80" :strokeColor="'#0eb31b'"></Progress>
    </div>
</template>
