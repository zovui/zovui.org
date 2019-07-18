<template>
    <ComponentExampleContainer
        component-name="Drop 下拉菜单"
        desc="常用于下拉面板，开发者用于开发一些下拉选择组件，如级联、select"
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
import Base from '@/examples/drop/Base.vue?demo'
import Hover from '@/examples/drop/Hover.vue?demo'
import NoArrow from '@/examples/drop/NoArrow.vue?demo'
import ChangeDirection from '@/examples/drop/ChangeDirection.vue?demo'

export default {
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Base, Hover, NoArrow, ChangeDirection],
            apiList: []
        }
    }
}
</script>
