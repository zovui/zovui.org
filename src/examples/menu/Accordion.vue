<title>手风琴</title>

<desc>
    手风琴仅仅在垂直模式下可用。<br/>
    当使用手风琴模式时，展开其中其中一个菜单项，其他菜单项将会被关闭。
</desc>

<template>
    <article>
        <section class="section">
            <Menu :mode="mode" :high-color="isHighColor" :accordion="accordion">
                <MenuOption name="1">
                    <Icon iconname="home" thumbnail-icon />
                    首页
                </MenuOption>
                <MenuSub
                    v-for="(item, index) in menu"
                    :key="index + ''"
                    :name="index + 2"
                >
                    <template #title>
                        <Icon iconname="folder" thumbnail-icon />
                        {{ item.title }}
                    </template>
                    <MenuGroup
                        v-for="(innerItem, innerIndex) in item.group"
                        :key="innerIndex + ''"
                    >
                        <template #title>{{ innerItem.title }}</template>
                        <MenuOption
                            v-for="(menuItem, menuIndex) in innerItem.list"
                            :key="menuIndex + ''"
                            :name="
                                index +
                                    2 +
                                    '-' +
                                    (innerIndex + 1) +
                                    '-' +
                                    (menuIndex + 1)
                            "
                        >
                            {{ menuItem }}
                        </MenuOption>
                    </MenuGroup>
                </MenuSub>
                <MenuSub name="4">
                    <MenuOption name="4-1" />
                    <MenuOption name="4-2" />
                    <MenuSub name="4-3">
                        <MenuOption name="4-3-1" disabled />
                        <MenuOption name="4-3-2" />
                        <MenuSub name="4-3-3">
                            <MenuOption name="4-3-3-1" />
                            <MenuOption name="4-3-3-2" />
                        </MenuSub>
                    </MenuSub>
                    <MenuSub name="4-4" disabled>
                        <MenuOption name="4-4-1" />
                        <MenuOption name="4-4-2" />
                    </MenuSub>
                </MenuSub>
                <MenuGroup>
                    <MenuOption name="5" />
                    <MenuOption name="6" />
                </MenuGroup>
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
        <section class="section">
            <p>手风琴</p>
            <Switcher v-model="accordion" />
        </section>
    </article>
</template>

<style lang="scss" scoped>
.section {
    margin: 20px 0;
    zoom: 1;
}
</style>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: '首页',
                    group: [
                        {
                            title: '第一组',
                            list: ['home第一项', 'home第二项']
                        },
                        {
                            title: '第二组',
                            list: ['home第一项', 'home第二项']
                        }
                    ]
                },
                {
                    title: '关于',
                    group: [
                        {
                            title: '第一组',
                            list: ['about第一项', 'about第二项']
                        },
                        {
                            title: '第二组',
                            list: ['about第一项', 'about第二项']
                        }
                    ]
                }
            ],
            mode: 'vertical',
            isHighColor: false,
            accordion: true
        }
    }
}
</script>
