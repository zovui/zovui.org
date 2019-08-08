<title>配合menu组件布局</title>

<template>
    <div class="layout-demo">
        <Layout class="container-demo">
            <Header>
                <Menu high-color mode="horizontal">
                    <MenuOption name="1" />
                    <MenuOption name="2" />
                    <MenuSub name="3">
                        <MenuGroup>
                            <MenuOption name="3-1-1" />
                            <MenuOption name="3-1-2" />
                        </MenuGroup>
                        <MenuGroup>
                            <MenuOption name="3-2-1" />
                            <MenuOption name="3-2-2" />
                        </MenuGroup>
                    </MenuSub>
                </Menu>
            </Header>
            <Layout>
                <Sider
                    v-model="collapsed"
                    breakpoint="sm"
                    @on-collapse="collapse"
                >
                    <Menu :thumbnail="collapsed">
                        <MenuOption name="1" />
                        <MenuOption name="2" />
                        <MenuSub name="3">
                            <MenuGroup>
                                <MenuOption name="3-1-1" />
                                <MenuOption name="3-1-2" />
                            </MenuGroup>
                            <MenuGroup>
                                <MenuOption name="3-2-1" />
                                <MenuOption name="3-2-2" />
                            </MenuGroup>
                        </MenuSub>
                    </Menu>
                </Sider>
                <Content>
                    <div class="sider-bar" @click="collapsed = !collapsed">
                        <Icon
                            :iconname="
                                collapsed ? 'arrow-forward' : 'arrow-back'
                            "
                        />
                    </div>
                    Content
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </div>
</template>

<style>
.layout-demo .zov-layout-header {
    background: #5da6f3;
}
.layout-demo .zov-layout-content {
    background: #a4cdf8;
}
.layout-demo .zov-layout-sider {
    background: #2d8cf0;
}
.layout-demo .zov-layout-footer {
    background: #5da6f3;
}
.layout-demo .container {
    height: 400px;
    margin-top: 15px;
}
</style>

<script>
export default {
    data() {
        return {
            collapsed: false
        }
    },
    methods: {
        collapse(f) {
            console.log(f)
        }
    }
}
</script>
