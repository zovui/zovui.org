<title>基础使用</title>

<template>
    <Select v-model="value" :data="options" placeholder="选择一个选项" />
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
