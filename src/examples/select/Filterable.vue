<title>可搜索</title>

<desc>
    当选项变多时，可搜索功能能够提升用户体验
</desc>

<template>
    <Select
        :data="options"
        placeholder="可搜索"
        v-model="value"
        value-name="id"
        label-name="text"
        filterable
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
