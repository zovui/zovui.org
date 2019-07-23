<title>装饰</title>

<desc>
    可以通过suffix、prefix props，或者通过suffix、prefix 插槽来装饰输入框
</desc>

<template>
    <article>
        <section>
            <h3>搜索框</h3>
            <Input v-model="value" suffix="search" placeholder="输入搜索内容" />
        </section>
        <section>
            <h3>用户名输入</h3>
            <Input v-model="value" prefix="contact" placeholder="输入用户名" />
        </section>
        <section>
            <h3>文字装饰</h3>
            <Input v-model="value" placeholder="输入个数">
                <template #prefix
                    ><span>有</span></template
                >
                <template #suffix
                    ><span>个</span></template
                >
            </Input>
            苹果
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
