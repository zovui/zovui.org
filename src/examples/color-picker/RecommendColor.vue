<title>推荐颜色</title>

<desc>
    择色板颜色特别多，当你想手动选某种颜色的时候，你肯定不愿意自己去完成颜色；重复或者预设某些颜色值的场景，推荐颜色的功能也许能帮到你
</desc>

<template>
    <article>
        <section>
            <p>当前颜色的值：{{ value }}</p>
        </section>
        <section>
            <ColorPicker v-model="value" :colors="recommendColors" recommend />
        </section>
    </article>
</template>

<script>
export default {
    data() {
        return {
            value: '#fff',
            recommendColors: ['#2d8cf0', '#19be6b', '#ff9900']
        }
    }
}
</script>
