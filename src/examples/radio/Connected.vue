<title>紧凑的按钮样式</title>

<desc>
    除了border配置项，还可以配置connected，让单选项呈现出紧凑的按钮样式
</desc>

<template>
    <article>
        <section>
            <RadioGroup connected v-model="value">
                <Radio label="A"></Radio>
                <Radio label="B"></Radio>
                <Radio label="C"></Radio>
                <Radio label="D"></Radio>
            </RadioGroup>
        </section>
        <section>
            <RadioGroup connected buttonStyle="solid" v-model="value">
                <Radio label="A"></Radio>
                <Radio label="B"></Radio>
                <Radio label="C"></Radio>
                <Radio label="D"></Radio>
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
