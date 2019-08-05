<title>用slot添加按钮</title>

<desc>
    使用slot: extra，添加按钮。
</desc>

<template>
    <Tabs>
        <TabPane v-for="i in 10" :label="'Tab' + i" :id="'' + i" :key="i"
            >Content of tab {{ i }}</TabPane
        >
        <template v-slot:extra>
            <Button>Extra Button</Button>
        </template>
    </Tabs>
</template>
