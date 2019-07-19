<title>格式化tooltip</title>

<desc>
    tip-formatter属性为一个函数，它接受一个参数，为slider的值，它的返回值将会作为tooltip里展示的内容
</desc>

<template>
    <article>
        <p class="props">tipFormatter = (value) => '当前值为: ' + value</p>
        <Slider tooltipVisible="always" :tipFormatter="format" />
    </article>
</template>

<script>
export default {
    name: 'TipFormatter',
    methods: {
        format(value) {
            return '当前值为: ' + value
        }
    }
}
</script>
