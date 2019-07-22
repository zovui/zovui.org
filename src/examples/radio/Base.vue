<title>基础使用</title>

<template>
    <article>
        <section>当前值: {{ value }}</section>
        <section>
            <Radio name="aaa" v-model="value" size="large" label="1" />
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
