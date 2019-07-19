<title>打标记</title>

<desc>
    例如，如果你想要做一个温度计，那么marks肯定能帮到你，它能在slider上明确的标明某些值，让他们看起来不太一样
</desc>

<template>
    <article>
        <section>
            <p class="props">当前值: {{ marksTestValue1 }}</p>
            <Slider v-model="marksTestValue1" :marks="marks" />
        </section>
        <section>
            <p class="props">当前值: {{ marksTestValue2 }}</p>
            <Slider v-model="marksTestValue2" range :marks="marks" />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            marks: {
                0: '0°C',
                26: '26°C',
                37: '37°C',
                100: {
                    style: {
                        color: '#ff5500'
                    },
                    label: '<strong>100°C</strong>'
                }
            },
            marksTestValue1: 0,
            marksTestValue2: [40, 50]
        }
    }
}
</script>
