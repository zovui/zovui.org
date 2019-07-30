<title>基础使用</title>

<template>
    <Menu active-name="2">
        <MenuOption v-for="i in 6" :name="'' + i" :key="i"
            >菜单 {{ i }}</MenuOption
        >
    </Menu>
</template>
