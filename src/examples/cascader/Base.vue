<title>基础使用</title>

<desc>
    <p>
        请参照示例的格式使用data，每项数据至少包含 value、label 两项，子集为 children。
    </p>
    <p>
        value 为当前选择的数据的 value 值的数组，比如 [1, 2] ，按照级联顺序依次排序，使用 v-model 进行双向绑定。
    </p>
</desc>

<template>
    <Cascader :data="data" v-model="value" />
</template>

<script>
export default {
    data() {
        return {
            value: [],
            data: [
                {
                    value: 1,
                    label: '一',
                    children: [
                        {
                            value: 1,
                            label: '一'
                        },
                        {
                            value: 2,
                            label: '二'
                        }
                    ]
                },
                {
                    value: 2,
                    label: '二',
                    children: [
                        {
                            value: 3,
                            label: '三'
                        },
                        {
                            value: 2,
                            label: '四'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
