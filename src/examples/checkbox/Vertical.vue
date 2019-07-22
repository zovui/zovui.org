<title>垂直模式</title>

<desc>
    配置vertical，可以让按钮以垂直方式排列
</desc>

<template>
    <CheckboxGroup v-model="checkedList" vertical>
        <Checkbox label="A"></Checkbox>
        <Checkbox label="B"></Checkbox>
        <Checkbox label="C"></Checkbox>
    </CheckboxGroup>
</template>

<script>
export default {
    data() {
        return {
            checkedList: []
        }
    }
}
</script>
