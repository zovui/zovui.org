<title>vnode消息内容</title>

<desc>
    可以指定选项中的render函数，返回vnode来渲染message的内容
</desc>

<template>
    <Button @click="test">open</Button>
</template>

<script>
export default {
    methods: {
        test() {
            this.$Notice.open({
                // 标题
                title: 'test info标题',
                // 说明
                text: 'test info文案info文案info文案info文案info文案',
                // 停留时间，为 0 时则长久停留
                duration: Math.random() * 10000,
                // 关闭的回调
                onClose: function() {
                    console.log('close')
                },
                // 自定义描述
                render: h => {
                    return h('div', [
                        '这是render出来的',
                        h('div', ['1', h('br'), '2'])
                    ])
                },
                // 是否提供关闭按钮 默认true
                closable: true
            })
        }
    }
}
</script>
