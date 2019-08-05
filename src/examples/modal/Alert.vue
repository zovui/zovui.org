<title>警告框</title>

<desc>
    alert方法参数type可设置为info，success，warning，error和confirm，用于确认弹窗的图标类型。<br/>
    当type不存在时，可通过设置iconName和iconColor来控制图标展示样式。<br/>
    当使用render方法时，则优先使用render渲染body部分的内容。 <br/>
    通过info，success，warning，error方法打开的弹窗图标不可更改。它们同样具有render方法。
</desc>

<template>
    <article>
        <Button @click="alert">alert</Button>
        <Button @click="alertInfo">alert</Button>
        <Button @click="info">info</Button>
        <Button @click="success">success</Button>
        <Button @click="warning">warning</Button>
        <Button @click="error">error</Button>
    </article>
</template>

<script>
export default {
    methods: {
        alert() {
            this.$Modal.alert({
                title: '温馨提示',
                iconName: 'help-circle-outline',
                content: `这是一个Modal！！！！！！
                    这是一个Modal！！！！！！`,
                bottomAlign: 'center',
                render: h => {
                    return h(
                        'div',
                        {
                            style: {
                                textAlign: 'center',
                                paddingTop: '30px'
                            }
                        },
                        [
                            h('Icon', {
                                props: {
                                    iconname: 'lock'
                                },
                                style: {
                                    fontSize: '30px',
                                    color: '#F55'
                                }
                            }),
                            h(
                                'p',
                                {
                                    style: {
                                        lineHeight: '30px',
                                        marginTop: '15px',
                                        marginBottom: '20px'
                                    }
                                },
                                '使用render生成主体部分内容'
                            )
                        ]
                    )
                }
            })
        },
        alertInfo() {
            this.$Modal.alert({
                type: 'info',
                title: '温馨提示',
                iconName: 'help-circle-outline',
                content: `这是一个Modal！！！！！！
                    这是一个Modal！！！！！！`,
                bottomAlign: 'center',
                confirmText: 'ok'
            })
        },
        info() {
            this.$Modal.info({
                title: '温馨提示',
                iconName: 'help-circle-outline',
                content: '这是一个Modal！！！！！！这是一个Modal！！！！！！',
                confirmLoading: true,
                onConfirm: () => {
                    this.$Modal.remove()
                    this.success()
                }
            })
        },
        success() {
            this.$Modal.success({
                title: '温馨提示',
                iconName: 'help-circle-outline',
                content: '这是一个Modal！！！！！！这是一个Modal！！！！！！',
                confirmLoading: true,
                onConfirm: () => {
                    setTimeout(() => {
                        this.$Modal.remove()
                    }, 1000)
                }
            })
        },
        warning() {
            this.$Modal.warning({
                title: '温馨提示',
                iconName: 'help-circle-outline',
                content: '这是一个Modal！！！！！！这是一个Modal！！！！！！'
            })
        },
        error() {
            this.$Modal.error({
                title: '温馨提示',
                iconName: 'help-circle-outline',
                content: '这是一个Modal！！！！！！这是一个Modal！！！！！！'
            })
        },
        confirm() {
            this.$Modal.confirm({
                title: '确认删除',
                iconName: 'help-circle-outline',
                content: '确认删除XXXXXXXXXXXXXXXXX吗？',
                confirmLoading: true,
                onConfirm: () => {
                    setTimeout(() => {
                        this.$Modal.remove()
                    }, 1000)
                }
            })
        }
    }
}
</script>
