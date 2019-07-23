<title>可清除</title>

<desc>
    有时输入的文字过多，当想要清除输入框的值的时候，不需要一直按住退格，只需要一个辅助配置就可以完成这项工作
</desc>

<template>
    <Input v-model="value" clearable />
</template>

<script>
export default {
    data() {
        return {
            value:
                '我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；我是一段很长的文字；'
        }
    }
}
</script>
