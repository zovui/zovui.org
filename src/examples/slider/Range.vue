<title>范围选择</title>

<desc>
    当range = true时，Slider将开启范围选择模式
</desc>

<template>
    <article>
        <p class="props">当前值{{ rangeValue }}</p>
        <Slider v-model="rangeValue" tooltipVisible="always" range />
    </article>
</template>

<script>
export default {
    data() {
        return {
            rangeValue: [20, 80]
        }
    }
}
</script>
