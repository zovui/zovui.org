<title>禁用状态</title>

<desc>
    禁用状态在许多表单场景都会经常使用到，例如查看已填写的表单
</desc>

<template>
    <Select
        v-model="value"
        :data="options"
        placeholder="选择一个选项"
        disabled
    />
</template>

<script>
export default {
    data() {
        return {
            options: [{ value: 1 }, { value: 2 }],
            value: ''
        }
    }
}
</script>
