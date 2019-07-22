<title>边框样式</title>

<desc>
    配置border，可以让单选项呈现出按钮的样式，还可以通过额外的配置选择按钮边框的样式
</desc>

<template>
    <article>
        <section>
            <RadioGroup border v-model="value">
                <Radio label="A"></Radio>
                <Radio label="B"></Radio>
                <Radio label="C"></Radio>
                <Radio label="D"></Radio>
            </RadioGroup>
        </section>
        <section>
            <RadioGroup border buttonStyle="solid" v-model="value">
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
