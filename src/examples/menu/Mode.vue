<title>切换方向</title>

<desc>
    可以切换导航菜单的模式，让它以垂直或者水平的方式展示
</desc>

<template>
    <article class="menu-demo">
        <section class="section">
            <Menu active-name="2" :mode="mode">
                <MenuOption v-for="i in 6" :name="'' + i" :key="i"
                    >菜单 {{ i }}</MenuOption
                >
            </Menu>
        </section>
        <section class="section">
            <RadioGroup v-model="mode">
                <Radio label="vertical" />
                <Radio label="horizontal" />
            </RadioGroup>
        </section>
    </article>
</template>

<style>
.menu-demo .section {
    margin: 20px 0;
    overflow: hidden;
}
</style>

<script>
export default {
    data() {
        return {
            mode: 'vertical'
        }
    }
}
</script>
