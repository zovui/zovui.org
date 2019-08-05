<title>滚动</title>

<desc>
    当Tabs超出屏幕时，可滚动nav。
</desc>

<template>
    <Tabs>
        <TabPane v-for="i in 20" :label="'Tab' + i" :id="'' + i" :key="i"
            >Content of tab {{ i }}</TabPane
        >
    </Tabs>
</template>
