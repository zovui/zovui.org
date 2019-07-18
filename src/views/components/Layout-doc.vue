<template>
    <ComponentExampleContainer
        component-name="Layout 布局"
        desc="布局组件，可对页面进行整体布局"
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
import TopBottom from '@/examples/layout/TopBottom.vue?demo'
import LeftRight from '@/examples/layout/LeftRight.vue?demo'
import TopMidBottom from '@/examples/layout/TopMidBottom.vue?demo'
import WithMenu from '@/examples/layout/WithMenu.vue?demo'

export default {
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [TopBottom, LeftRight, TopMidBottom, WithMenu]
        }
    }
}
</script>
