<template>
    <ComponentExampleContainer
        component-name="Tag 标签"
        desc="进行标记和分类的小标签。"
        :apiList="api"
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
import Type from '@/examples/tag/Type.vue?demo'

const api = []

export default {
    name: 'Tag-doc',
    components: {
        ComponentExampleContainer,
        ComponentExample
    },
    data() {
        return {
            examples: [Type],
            api
        }
    }
}
</script>
