<title>左右布局</title>
<template>
    <div class="demo">
        <Layout class="container">
            <Sider></Sider>
            <Layout>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    </div>
</template>

<style lang="scss">
.demo {
    $color-primary: #2d8cf0;
    $layout-header-background: lighten($color-primary, 10%);
    $layout-content-background: lighten($color-primary, 25%);
    $layout-footer-background: $layout-header-background;
    $layout-sider-background: $color-primary;
    .zov-layout-header {
        background: $layout-header-background;
    }
    .zov-layout-content {
        background: $layout-content-background;
    }
    .zov-layout-sider {
        background: $layout-sider-background;
    }
    .zov-layout-footer {
        background: $layout-footer-background;
    }
}
.container {
    height: 400px;
    margin-top: 15px;
}
</style>
