<title>排序</title>

<desc>
    给TabPane指定order，可让渲染出来的tabs进行排序。TabPane的order配合v-if使用时非常有用。
</desc>

<template>
    <Tabs>
        <TabPane
            v-for="i in 3"
            :label="'Tab' + i"
            :id="'' + i"
            :key="i"
            :order="3 - i"
            >Content of tab {{ i }}</TabPane
        >
    </Tabs>
</template>
