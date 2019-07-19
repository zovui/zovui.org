<title>设置步长</title>

<desc>
    设置步长后，无论是鼠标拖拽，还是键盘交互，Slider组件都将以step为基准进行计算下一个位置的值
</desc>

<template>
    <article>
        <section>
            <p class="props">step = 5, 当前值: {{ stepTestValue }}</p>
            <Slider v-model="stepTestValue" :step="5" />
        </section>
        <section>
            <p class="props">step = 0.001, 当前值: {{ stepTestValue2 }}</p>
            <Slider v-model="stepTestValue2" :step="0.001" />
        </section>
        <section>
            <p class="props">step = 0.00001, 当前值: {{ stepTestValue3 }}</p>
            <Slider v-model="stepTestValue3" :step="0.00001" />
        </section>
        <section>
            <p class="props">step = 50, 当前值: {{ stepTestValue4 }}</p>
            <Slider v-model="stepTestValue4" :step="50" />
        </section>
        <section>
            <p class="props">step = 80, 当前值: {{ stepTestValue5 }}</p>
            <Slider v-model="stepTestValue5" :step="80" />
        </section>
        <section>
            <p class="props">step = 0.1, 当前值: {{ stepTestValue6 }}</p>
            <Slider v-model="stepTestValue6" :step="0.1" range />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            stepTestValue: 0,
            stepTestValue2: 0,
            stepTestValue3: 0,
            stepTestValue4: 30,
            stepTestValue5: 10,
            stepTestValue6: [60, 100]
        }
    }
}
</script>
