<title>不同列可选，优先级</title>

<desc>
    <p>
        1.优先级 whichColumnOptional > everyoneOptional > last（default：最后一项）。
    </p>
    <p>
        2.搜索结果遵循可选列配置项的规则，默认最后一项。
    </p>
    <p style="color: red;">
        注意：从需求角度看三种互斥
    </p>
</desc>

<template>
    <div>
        <p>默认：最后一项</p>
        <br />
        <Cascader
            placeholder="【默认】最后一项"
            :data="list"
            v-model="value1"
            label-name="text"
            value-name="id"
            child-name="children1"
        />
        <br />
        <br />
        <p>可搜索(0, 1)</p>
        <br />
        <Cascader
            placeholder="可搜索【0, 1】"
            :data="list"
            v-model="value2"
            label-name="text"
            value-name="id"
            child-name="children1"
            :which-column-optional="[0, 1]"
            multiple
            filterable
        />
        <br />
        <br />
        <p>单选：每列可选</p>
        <br />
        <Cascader
            placeholder="单选，每列可选"
            :data="list"
            v-model="value3"
            label-name="text"
            value-name="id"
            child-name="children1"
            everyone-optional
        />
        <br />
        <br />
        <p>多选，每列可选</p>
        <br />
        <Cascader
            placeholder="多选，每列可选"
            :data="list"
            v-model="value4"
            label-name="text"
            value-name="id"
            child-name="children1"
            multiple
            everyone-optional
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: [],
            value2: [],
            value3: [],
            value4: [],
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
