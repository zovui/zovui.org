<title>大数据</title>

<desc>
    本例子中将尝试10000条数据的搜索和渲染。
</desc>

<template>
    <BigDataList
        :data="data"
        v-model="value"
        value-name="id"
        label-name="text"
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
            value: 3
        }
    }
}
</script>
