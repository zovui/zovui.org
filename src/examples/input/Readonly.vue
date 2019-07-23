<title>只读状态</title>

<desc>
    只读状态可以让输入框的值不能输入，只读交互常见在某些表单项为固定值的情景
</desc>

<template>
    <Input v-model="value" readonly />
</template>

<script>
export default {
    data() {
        return {
            value: '只读'
        }
    }
}
</script>
