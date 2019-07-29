<template>
    <Document :header="componentName">
        <DocumentSection title="概述">
            <p>
                <slot name="desc">{{ desc }}</slot>
            </p>
        </DocumentSection>
        <DocumentSection title="代码示例">
            <slot />
        </DocumentSection>
        <DocumentSection title="API">
            <ComponentApi
                v-for="api of apiList"
                :key="api.title"
                :title="api.title"
                :type="api.type"
                :columns="api.columns"
                :data="api.data"
            />
        </DocumentSection>
    </Document>
</template>

<script>
import ComponentApi from './ComponentApi'
import Document from './Document'
import DocumentSection from './DocumentSection'

export default {
    name: 'ComponentExampleContainer',
    props: {
        // 组件名
        componentName: {
            required: true,
            type: String
        },
        // 组件概述
        desc: String,
        // 组件API接口
        apiList: Array
    },
    components: {
        ComponentApi,
        Document,
        DocumentSection
    }
}
</script>
