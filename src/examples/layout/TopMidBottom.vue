<title>上中下布局</title>

<template>
    <div class="layout-demo">
        <Layout class="container">
            <Header></Header>
            <Layout>
                <Sider></Sider>
                <Content></Content>
            </Layout>
            <Footer></Footer>
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
