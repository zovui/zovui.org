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
</style>
