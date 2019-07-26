<title>文案位置</title>

<desc>
    文案的位置有两种选择，一种是在进度条之外，一种是包含在进度条之内
</desc>

<template>
    <div>
        <Progress :percent="80" :strokeWidth="20"></Progress>
        <Progress :percent="80" textInside :strokeWidth="20"></Progress>
    </div>
</template>
