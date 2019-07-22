<title>单选组</title>

<desc>
    配合RadioGroup组件，可以组合出常见的多选交互
</desc>

<template>
    <article>
        <section>当前值: {{ value }}</section>
        <section>
            <RadioGroup v-model="value">
                <Radio label="1" />
                <Radio label="2" />
                <Radio label="3" />
            </RadioGroup>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            value: '2'
        }
    }
}
</script>
