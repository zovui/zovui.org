<template>
    <Layout>
        <DocumentSider />
        <Content>
            <router-view />
        </Content>
    </Layout>
</template>

<style lang="scss" scoped>
.zov-layout {
    padding: 20px 0;
    flex-direction: row;
}
</style>

<script>
import DocumentSider from './DocumentSider'
export default {
    components: {
        DocumentSider
    }
}
</script>
