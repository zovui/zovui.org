<title>设置name值</title>

<desc>设置name值，可以不需要单选项组组件的情况下使用多个单选</desc>

<template>
    <article>
        <section>当前值: {{ value }}</section>
        <section>
            <Radio name="aaa" v-model="value" label="1"></Radio>
            <Radio name="aaa" v-model="value" label="2"></Radio>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
