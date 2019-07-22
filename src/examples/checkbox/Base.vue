<title>基础使用</title>

<template>
    <article>
        <section>当前值: {{ isChecked }}</section>
        <section>
            <Checkbox v-model="isChecked">A</Checkbox>
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            isChecked: true
        }
    }
}
</script>
