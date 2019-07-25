<title>基础使用</title>

<template>
    <article>
        <section>
            <p>当前颜色的值：{{ value }}</p>
        </section>
        <section>
            <ColorPicker v-model="value" />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            value: '#fff'
        }
    }
}
</script>
