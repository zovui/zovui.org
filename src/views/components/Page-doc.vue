<template>
    <ComponentExampleContainer
        component-name="Page 布局"
        desc="分页器，多用于信息列表，多页表格数据的展示控制。"
        :api-list="apiList"
    >
        <ComponentExample
            v-for="example of examples"
            :example="example"
            :key="example.__title"
        />
    </ComponentExampleContainer>
</template>
<script>
import { ComponentExampleContainer, ComponentExample } from '@/components'

export default {
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [],
            apiList: []
        }
    }
}
</script>
