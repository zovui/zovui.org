<title>禁用选项</title>

<desc>
    设置disabled，来禁用全部或者部分选项，禁用状态在许多表单交互里非常常见
</desc>

<template>
    <article>
        <section>
            <h3>禁用单个选项</h3>
            <Radio disabled>A</Radio>
        </section>
        <section>
            <h3>禁用部分选项</h3>
            <RadioGroup connected buttonStyle="solid" v-model="value">
                <Radio label="A" disabled />
                <Radio label="B" disabled />
                <Radio label="C" />
            </RadioGroup>
        </section>
        <section>
            <h3>禁用全部选项</h3>
            <RadioGroup v-model="value" disabled>
                <Radio label="A" />
                <Radio label="B" />
                <Radio label="C" />
            </RadioGroup>
        </section>
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
