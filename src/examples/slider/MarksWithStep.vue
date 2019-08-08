<title>标记结合步长</title>

<desc>
    当marks和步长配合使用的时候，Slider会呈现出吸附值的交互
</desc>

<template>
    <article>
        <section>
            <p class="props">step = 10; 当前值: {{ marksAndStep }}</p>
            <Slider v-model="marksAndStep" :marks="marks" :step="10" />
        </section>
        <section>
            <p class="props">step = 10; 当前值: {{ marksAndStep1 }}</p>
            <Slider
                v-model="marksAndStep1"
                :min="-100"
                :max="200"
                :marks="marks"
                :step="10"
            />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            marks: {
                '-78': '-78°C',
                '-15': '-15°C',
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
            marksAndStep: 0,
            marksAndStep1: -30
        }
    }
}
</script>
