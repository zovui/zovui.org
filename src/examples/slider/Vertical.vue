<title>垂直模式</title>

<desc>
    vertical为true时，Slider将垂直展示
</desc>

<template>
    <article>
        <section>
            <p class="props">当前值: {{ vertical.value1 }}</p>
            <div class="vertical-demo">
                <Slider v-model="vertical.value1" vertical />
            </div>
        </section>
        <section>
            <p class="props">当前值{{ vertical.value2 }}</p>
            <div class="vertical-demo">
                <Slider
                    v-model="vertical.value2"
                    tooltipVisible="always"
                    range
                    vertical
                />
            </div>
        </section>
        <section>
            <p class="props">当前值: {{ vertical.value3 }}</p>
            <div class="vertical-demo">
                <Slider
                    v-model="vertical.value3"
                    vertical
                    :marks="marks"
                    only-marks
                />
            </div>
        </section>
        <section>
            <p class="props">当前值: {{ vertical.value4 }}</p>
            <div class="vertical-demo">
                <Slider
                    v-model="vertical.value4"
                    vertical
                    range
                    :marks="marks"
                    only-marks
                />
            </div>
        </section>
    </article>
</template>

<style lang="scss" scoped>
.vertical-demo {
    height: 300px;
}
</style>

<script>
export default {
    data() {
        return {
            vertical: {
                value1: 0,
                value2: [18, 54],
                value3: 15,
                value4: [10, 80]
            },
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
            }
        }
    }
}
</script>
