<template>
    <Layout>
        <slot name="sider" />
        <Content>
            <slot />
        </Content>
    </Layout>
</template>

<style lang="scss" scoped>
.zov-layout {
    padding: 30px 0;
    flex-direction: row;
}
.zov-layout-content {
    min-width: 1px;
}
</style>
