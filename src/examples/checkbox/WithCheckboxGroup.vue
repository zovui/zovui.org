<title>多项选择</title>

<desc>
    配合CheckboxGroup组件，可以组合出常见的多选交互
</desc>

<template>
    <article>
        <section>当前值：{{ list }}</section>
        <section>
            <CheckboxGroup v-model="list">
                <Checkbox label="A"></Checkbox>
                <Checkbox label="B"></Checkbox>
                <Checkbox label="C"></Checkbox>
            </CheckboxGroup>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            list: ['B']
        }
    }
}
</script>
