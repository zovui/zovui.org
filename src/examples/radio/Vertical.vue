<title>垂直模式</title>

<desc>
    可以让选项组以垂直的方式展现
</desc>

<template>
    <article>
        <RadioGroup vertical v-model="value">
            <Radio label="A"></Radio>
            <Radio label="B"></Radio>
            <Radio label="C"></Radio>
            <Radio label="D"></Radio>
        </RadioGroup>
        <RadioGroup vertical connected v-model="value">
            <Radio label="A"></Radio>
            <Radio label="B"></Radio>
            <Radio label="C"></Radio>
            <Radio label="D"></Radio>
        </RadioGroup>
        <RadioGroup vertical border size="small" v-model="value">
            <Radio label="A"></Radio>
            <Radio label="B"></Radio>
            <Radio label="C"></Radio>
            <Radio label="D"></Radio>
        </RadioGroup>
    </article>
</template>

<script>
export default {
    data() {
        return {
            value: 'A'
        }
    }
}
</script>
