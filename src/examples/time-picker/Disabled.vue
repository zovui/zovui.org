<title>禁用选择器</title>

<template>
    <TimePicker
        v-model="value"
        placeholder="HH时mm分ss秒"
        format="HH时mm分ss秒"
        disabled
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
