<title>设置最大最小值</title>

<desc>
    可以设置min、max属性，来限定slider的数值在指定范围内选择
</desc>

<template>
    <Slider v-model="value" :min="-10" :max="30" />
</template>

<script>
export default {
    data() {
        return {
            value: 0
        }
    }
}
</script>
