<title>不同尺寸</title>

<desc>
    可以通过配置不同的尺寸，来满足不同场景下的样式需求
</desc>

<template>
    <article>
        <section>
            <h3>较大的选项</h3>
            <RadioGroup connected size="large" v-model="value">
                <Radio label="A"></Radio>
                <Radio label="B"></Radio>
                <Radio label="C"></Radio>
                <Radio label="D"></Radio>
            </RadioGroup>
            <RadioGroup border size="large" v-model="value">
                <Radio label="A"></Radio>
                <Radio label="B"></Radio>
                <Radio label="C"></Radio>
                <Radio label="D"></Radio>
            </RadioGroup>
        </section>
        <section>
            <h3>较小的选项</h3>
            <RadioGroup
                connected
                size="small"
                buttonStyle="solid"
                v-model="value"
            >
                <Radio label="A"></Radio>
                <Radio label="B"></Radio>
                <Radio label="C"></Radio>
                <Radio label="D"></Radio>
            </RadioGroup>
            <RadioGroup border size="small" buttonStyle="solid" v-model="value">
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
