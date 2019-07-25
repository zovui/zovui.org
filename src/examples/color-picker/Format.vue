<title>输出格式</title>

<desc>
    可以选择一种符合需求的颜色数据格式
</desc>

<template>
    <article>
        <section>
            <h3>rgb</h3>
            <p>当前值：{{ rgbVal }}</p>
            <ColorPicker v-model="rgbVal" />
        </section>
        <section>
            <h3>hex</h3>
            <p>当前值：{{ hexVal }}</p>
            <ColorPicker v-model="hexVal" format="hex" />
        </section>
        <section>
            <h3>hsv</h3>
            <p>当前值：{{ hsvVal }}</p>
            <ColorPicker v-model="hsvVal" format="hsv" />
        </section>
        <section>
            <h3>hsl</h3>
            <p>当前值：{{ hslVal }}</p>
            <ColorPicker v-model="hslVal" format="hsl" />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            rgbVal: '#000',
            hexVal: '#000',
            hsvVal: '#000',
            hslVal: '#000'
        }
    }
}
</script>
