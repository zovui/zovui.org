<title>步长</title>

<desc>
    通过steps控制可选时间点的间隔
</desc>

<template>
    <TimePicker
        v-model="value"
        placeholder="HH时mm分ss秒"
        format="HH时mm分ss秒"
        :steps="[2, 10, 15]"
    />
</template>

<script>
export default {
    data() {
        return {
            value: '10:12:30'
        }
    }
}
</script>
