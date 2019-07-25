<title>禁用状态</title>

<desc>
    禁用状态在许多表单交互中非常常见，禁用状态下将无法展开择色板
</desc>

<template>
    <article>
        <section>
            <p>当前颜色的值：{{ value }}</p>
        </section>
        <section>
            <ColorPicker v-model="value" disabled />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            value: '#000'
        }
    }
}
</script>
