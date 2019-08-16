<title>指令</title>

<desc>
    还可以通过v-zov-tooltip指令来使用，参数和Tooltip组件的Props相同
</desc>

<template>
    <article>
        <Button v-zov-tooltip="'这是一个自定义指令的 tooltip'">
            自定义指令
        </Button>
        <Button
            v-zov-tooltip="{
                title: '自定义提示',
                text: '自定义指令，tooltip',
                closable: true,
                highColor: true
            }"
        >
            自定义指令
        </Button>
    </article>
</template>
