<template>
    <Layout class="org-layout">
        <DocumentHeader />
        <DocumentContent />
        <Footer></Footer>
        <BackTop :bottom="90"></BackTop>
    </Layout>
</template>

<style lang="scss" scoped>
.org-layout {
    min-height: 100vh;
}
</style>

<script>
import DocumentHeader from './DocumentHeader'
import DocumentContent from './DocumentContent'

export default {
    components: {
        DocumentHeader,
        DocumentContent
    }
}
</script>
