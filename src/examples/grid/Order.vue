<title>设置列的顺序</title>

<desc>
    可以指定Col组件的order属性，设置其展示顺序
</desc>

<template>
    <Row type="flex">
        <Col span="6" order="4">1 | order-4</Col>
        <Col span="6" order="3">2 | order-3</Col>
        <Col span="6" order="2">3 | order-2</Col>
        <Col span="6" order="1">4 | order-1</Col>
    </Row>
</template>

<style lang="scss" scoped>
    .zov-col {
        padding: 30px 0;
        background: #2aa198;
        &:nth-of-type(2n) {
            background: #1cd779;
        }
    }
</style>
