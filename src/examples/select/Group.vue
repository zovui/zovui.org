<title>选项分组</title>

<desc>
    当选项各自都属于一种独立分类的时候，分组展示能够提升交互体验
</desc>

<template>
    <Select
        :data="listGroup"
        placeholder="分组"
        multiple
        filterable
        v-model="value"
        value-name="id"
        label-name="text"
        child-name="children"
    >
        <div slot-scope="{ props }">
            {{ props.item.text }}
        </div>
    </Select>
</template>

<script>
export default {
    data() {
        return {
            listGroup: (() => {
                let d = []
                for (let i = 0; i < 4; i++) {
                    let x = {
                        text: '这是第' + i + '组',
                        children: []
                    }
                    for (let j = 0; j < 5; j++) {
                        x.children.push({
                            id: i + '/' + j,
                            text: 'item#' + (i + '/' + (j + 1))
                        })
                    }
                    d.push(x)
                }
                return d
            })(),
            value: ''
        }
    }
}
</script>
