<template>
    <Layout class="org-layout">
        <DocumentHeader />
        <DocumentContent>
            <template #sider>
                <DocumentSider :menu-active-name="menuActiveName" />
            </template>
            <router-view />
        </DocumentContent>
        <DocumentFooter />
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
import DocumentSider from './DocumentSider'
import DocumentFooter from './DocumentFooter'

export default {
    components: {
        DocumentHeader,
        DocumentContent,
        DocumentSider,
        DocumentFooter
    },
    beforeRouteUpdate(to, from, next) {
        this.menuActiveName = to.path.slice(1)
        next()
    },
    data() {
        return {
            menuActiveName: this.$route.path.slice(1)
        }
    }
}
</script>
