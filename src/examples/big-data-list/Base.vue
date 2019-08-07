<title>基础使用</title>

<template>
    <BigDataList :data="data" v-model="value" />
</template>

<script>
export default {
    data() {
        return {
            data: [{ value: 1 }, { value: 2 }],
            value: ''
        }
    }
}
</script>
