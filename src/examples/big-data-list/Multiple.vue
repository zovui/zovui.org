<title>多选</title>

<desc>
    在之前多选的例子上支持多选的功能。
</desc>

<template>
    <BigDataList
        :data="data"
        v-model="value"
        value-name="id"
        label-name="text"
        multiple
    />
</template>

<script>
export default {
    data() {
        return {
            data: (() => {
                let d = []
                for (let i = 0; i < 10000; i++) {
                    d.push({
                        id: i,
                        text: 'item#' + (i + 1),
                        img:
                            'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=dc7e87bdfb03738dc14a0a22831ab073/08f790529822720e698c1ae776cb0a46f21fab69.jpg'
                    })
                }
                return d
            })(),
            value: (() => {
                let d = []
                for (let i = 0; i < 5; i++) {
                    d.push(i)
                }
                return d
            })() || [1, 3]
        }
    }
}
</script>
