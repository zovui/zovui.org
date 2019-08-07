<title>多选</title>

<desc>
    <p>
        添加 multiple 属性为 true，可多选。
    </p>
</desc>

<template>
    <Cascader
        placeholder="多选"
        :data="list"
        v-model="value"
        label-name="text"
        value-name="id"
        child-name="children1"
        multiple
    />
</template>

<script>
export default {
    data() {
        return {
            value: [],
            list: (() => {
                let d = []
                for (let i = 0; i < 3; i++) {
                    let x = {
                        text: '第' + i + '连',
                        id: i,
                        children1: []
                    }
                    for (let j = 0; j < 5; j++) {
                        let z = {
                            id: j,
                            text: '第' + j + '排',
                            children1: []
                        }
                        for (let k = 0; k < 4; k++) {
                            let l = {
                                id: k,
                                text: '第' + k + '班',
                                children1: []
                            }
                            z.children1.push(l)
                        }
                        x.children1.push(z)
                    }
                    d.push(x)
                }
                return d
            })()
        }
    }
}
</script>
