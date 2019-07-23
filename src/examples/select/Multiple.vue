<title>多选</title>

<desc>
    开启多选模式，已选择的选项将会已小标签的形式放入到输入框中，常见的应用常见有：多标签搜索
</desc>

<template>
    <Select
        :data="options"
        placeholder="可搜索"
        v-model="value"
        value-name="id"
        label-name="text"
        filterable
        multiple
    />
</template>

<script>
export default {
    data() {
        return {
            options: (() => {
                let d = []
                for (let i = 0; i < 200; i++) {
                    d.push({
                        id: i,
                        text: 'item#' + (i + 1),
                        img:
                            'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc7e87bdfb03738dc14a0a22831ab073/08f790529822720e698c1ae776cb0a46f21fab69.jpg'
                    })
                }
                return d
            })(),
            value: ''
        }
    }
}
</script>
