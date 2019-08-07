<title>可搜索</title>

<desc>
    <p>
        添加 filterable 属性为 true，可搜索。
    </p>
</desc>

<template>
    <div>
        <p>单选，可搜索</p>
        <br />
        <Cascader
            placeholder="单选，可搜索"
            :data="list"
            v-model="value1"
            label-name="text"
            value-name="id"
            child-name="children1"
            filterable
        />
        <br />
        <br />
        <p>多选，可搜索</p>
        <br />
        <Cascader
            placeholder="多选，可搜索"
            :data="list"
            v-model="value2"
            label-name="text"
            value-name="id"
            query-name="id"
            child-name="children1"
            filterable
            multiple
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: [],
            value2: [],
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
