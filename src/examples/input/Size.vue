<title>调整大小</title>

<desc>
   可以配置size，来选择合适的输入框大小
</desc>

<template>
    <article>
        <section>
            <h3>较大的输入框</h3>
            <Input v-model="value" placeholder="输入内容" size="large" />
        </section>
        <section>
            <h3>默认大小的输入框</h3>
            <Input v-model="value" placeholder="输入内容" size="default" />
        </section>
        <section>
            <h3>较小的输入框</h3>
            <Input v-model="value" placeholder="输入内容" size="small" />
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
