<title>联动</title>

<desc>结合CheckboxGroup和Checkbox，可以组合出常见的联动交互，例如表格中的全选和单选等</desc>

<template>
    <div>
        <Checkbox
            v-model="isChecked"
            :indeterminate="isCheckedAll"
            @on-change="handleAllChecked"
        >
            全选
        </Checkbox>
        <CheckboxGroup v-model="checkedList" @on-change="handleChange">
            <Checkbox
                v-for="(item, index) in options"
                :label="item"
                :key="index"
            />
        </CheckboxGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: ['A', 'B', 'C'],
            checkedList: [],
            isChecked: false,
            isCheckedAll: false
        }
    },
    methods: {
        handleChange(val) {
            if (val.length === this.options.length) {
                this.isChecked = true
                this.isCheckedAll = false
            } else if (val.length) {
                this.isChecked = false
                this.isCheckedAll = true
            } else {
                this.isChecked = false
                this.isCheckedAll = false
            }
        },
        handleAllChecked(val) {
            this.isCheckedAll = false
            if (val) {
                this.checkedList = this.options
            } else {
                this.checkedList = []
            }
        }
    }
}
</script>
