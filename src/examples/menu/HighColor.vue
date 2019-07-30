<title>高亮模式</title>

<desc>
    可以控制导航菜单是否启用高亮，高亮模式下，导航项里的信息将会更加突出。
</desc>

<template>
    <article>
        <section class="section">
            <Menu active-name="2" :mode="mode" :high-color="isHighColor">
                <MenuOption v-for="i in 6" :name="'' + i" :key="i"
                    >菜单 {{ i }}</MenuOption
                >
            </Menu>
        </section>
        <section class="section">
            <p>切换模式</p>
            <RadioGroup v-model="mode">
                <Radio label="vertical" />
                <Radio label="horizontal" />
            </RadioGroup>
        </section>
        <section class="section">
            <p>是否开启高亮</p>
            <Switcher v-model="isHighColor" />
        </section>
    </article>
</template>

<style lang="scss" scoped>
.section {
    margin: 20px 0;
    overflow: hidden;
}
</style>

<script>
export default {
    data() {
        return {
            mode: 'vertical',
            isHighColor: true
        }
    }
}
</script>
