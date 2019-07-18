<title>居中对齐</title>

<template>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
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
