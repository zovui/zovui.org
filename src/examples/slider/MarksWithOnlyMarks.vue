<title>限制只能为marks的值</title>

<desc>
    当配置marks时，且配置了onlyMarks，则Slider的值只能为marks值中的一个
</desc>

<template>
    <article>
        <section>
            <p class="props">当前值: {{ marksAndOnlyMarksValue1 }}</p>
            <Slider
                v-model="marksAndOnlyMarksValue1"
                :marks="marks"
                only-marks
            />
        </section>
        <section>
            <p class="props">当前值: {{ marksAndOnlyMarksValue2 }}</p>
            <Slider
                v-model="marksAndOnlyMarksValue2"
                range
                :marks="marks"
                only-marks
            />
        </section>
    </article>
</template>

<style lang="scss"></style>

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
            marksAndOnlyMarksValue1: 0,
            marksAndOnlyMarksValue2: [0, 20]
        }
    }
}
</script>
