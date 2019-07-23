<title>禁用状态</title>

<desc>
    禁用状态在不可用的表单交互里非常常见
</desc>

<template>
    <Input v-model="value" disabled />
</template>

<script>
export default {
    data() {
        return {
            value: '不可用'
        }
    }
}
</script>
